import { useMemo } from "react";
import { getUpcomingDays, getTimeSlots, isSameDay, formatTime } from "../data/scheduling";
import Icon from "./Icon";

const DAYS_AHEAD = 21;

// Date/time picker driven entirely by the real business.hours — it can
// only ever offer slots inside actual office hours, and never a time
// that's already past. There's no appointments backend yet, so this can't
// know what's already booked; front desk still confirms by phone (see the
// note in ContactForm).
export default function BookingScheduler({ selectedDate, selectedTime, onSelectDate, onSelectTime }) {
  const days = useMemo(() => getUpcomingDays(DAYS_AHEAD), []);
  const timeSlots = useMemo(() => (selectedDate ? getTimeSlots(selectedDate) : []), [selectedDate]);

  function handleSelectDate(date) {
    onSelectDate(date);
    onSelectTime(null);
  }

  return (
    <div>
      <p className="mb-2.5 text-sm font-semibold text-ink">Preferred Date</p>
      <div className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-2">
        {days.map(({ date, dayName, isClosed }) => {
          const isSelected = selectedDate && isSameDay(date, selectedDate);
          return (
            <button
              key={date.toISOString()}
              type="button"
              disabled={isClosed}
              onClick={() => handleSelectDate(date)}
              aria-pressed={isSelected}
              className={`flex shrink-0 flex-col items-center gap-0.5 rounded-xl border px-3.5 py-2.5 text-center transition-colors ${
                isClosed
                  ? "cursor-not-allowed border-border/60 text-ink-faint/60"
                  : isSelected
                    ? "border-forest bg-forest text-cream"
                    : "border-border text-ink hover:border-forest/40"
              }`}
            >
              <span className="text-[11px] uppercase tracking-wide opacity-70">
                {dayName.slice(0, 3)}
              </span>
              <span className="text-sm font-semibold">{date.getDate()}</span>
            </button>
          );
        })}
      </div>

      {selectedDate && (
        <div className="mt-5">
          <p className="mb-2.5 text-sm font-semibold text-ink">Preferred Time</p>
          {timeSlots.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {timeSlots.map((slot) => {
                const isSelected = selectedTime && slot.getTime() === selectedTime.getTime();
                return (
                  <button
                    key={slot.toISOString()}
                    type="button"
                    onClick={() => onSelectTime(slot)}
                    aria-pressed={isSelected}
                    className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                      isSelected
                        ? "border-forest bg-forest text-cream"
                        : "border-border text-ink hover:border-forest/40"
                    }`}
                  >
                    {formatTime(slot)}
                  </button>
                );
              })}
            </div>
          ) : (
            <p className="flex items-center gap-2 text-sm text-ink-faint">
              <Icon name="info" size={16} />
              No more openings that day — try another date.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
