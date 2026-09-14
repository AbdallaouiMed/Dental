import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { getCalendarWeeks, getTimeSlots, isSameDay, formatTime, formatMonthYear } from "../data/scheduling";
import Icon from "./Icon";

const WEEKDAY_LABELS = ["S", "M", "T", "W", "T", "F", "S"];
// How far ahead the calendar lets someone navigate — matches the old
// day-strip's ~3 week horizon, just expressed in months since this is a
// real month grid now.
const MONTHS_AHEAD = 2;

// Calendar date/time picker driven entirely by the real business.hours — it
// can only ever offer slots inside actual office hours, and never a time
// that's already past. There's no appointments backend yet, so this can't
// know what's already booked; front desk still confirms by phone (see the
// note in ContactForm).
export default function BookingScheduler({ selectedDate, selectedTime, onSelectDate, onSelectTime }) {
  const reduceMotion = useReducedMotion();
  const today = useMemo(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }, []);
  const [visibleMonth, setVisibleMonth] = useState(
    () => new Date(today.getFullYear(), today.getMonth(), 1)
  );
  const [timeOpen, setTimeOpen] = useState(false);

  const weeks = useMemo(() => getCalendarWeeks(visibleMonth), [visibleMonth]);
  const timeSlots = useMemo(() => (selectedDate ? getTimeSlots(selectedDate) : []), [selectedDate]);

  const earliestMonth = new Date(today.getFullYear(), today.getMonth(), 1);
  const latestMonth = new Date(today.getFullYear(), today.getMonth() + MONTHS_AHEAD, 1);
  const canGoPrev = visibleMonth > earliestMonth;
  const canGoNext = visibleMonth < latestMonth;

  function changeMonth(delta) {
    setVisibleMonth((m) => new Date(m.getFullYear(), m.getMonth() + delta, 1));
  }

  function handleSelectDate(cell) {
    if (!cell.inCurrentMonth || cell.isPast || cell.isClosed) return;
    onSelectDate(cell.date);
    onSelectTime(null);
    setTimeOpen(true);
  }

  function handleSelectTime(slot) {
    onSelectTime(slot);
    setTimeOpen(false);
  }

  return (
    <div>
      <p className="mb-2.5 text-sm font-semibold text-ink">Preferred Date</p>
      <div className="rounded-2xl border border-border p-3.5 sm:p-4">
        <div className="mb-3 flex items-center justify-between">
          <button
            type="button"
            onClick={() => changeMonth(-1)}
            disabled={!canGoPrev}
            aria-label="Previous month"
            className="press-feedback inline-flex h-9 w-9 items-center justify-center rounded-full text-ink-soft transition-colors enabled:hover:bg-forest-soft/60 disabled:cursor-not-allowed disabled:opacity-30"
          >
            <Icon name="chevron_left" size={20} />
          </button>
          <p className="text-sm font-semibold text-ink">{formatMonthYear(visibleMonth)}</p>
          <button
            type="button"
            onClick={() => changeMonth(1)}
            disabled={!canGoNext}
            aria-label="Next month"
            className="press-feedback inline-flex h-9 w-9 items-center justify-center rounded-full text-ink-soft transition-colors enabled:hover:bg-forest-soft/60 disabled:cursor-not-allowed disabled:opacity-30"
          >
            <Icon name="chevron_right" size={20} />
          </button>
        </div>

        <div className="grid grid-cols-7 gap-y-1">
          {WEEKDAY_LABELS.map((label, i) => (
            <span
              key={i}
              className="flex h-8 items-center justify-center text-[11px] font-semibold uppercase tracking-wide text-ink-faint"
            >
              {label}
            </span>
          ))}
          {weeks.flat().map((cell) => {
            const isSelected = selectedDate && isSameDay(cell.date, selectedDate);
            const isDisabled = !cell.inCurrentMonth || cell.isPast || cell.isClosed;
            return (
              <div key={cell.date.toISOString()} className="flex items-center justify-center py-0.5">
                {cell.inCurrentMonth ? (
                  <button
                    type="button"
                    disabled={isDisabled}
                    onClick={() => handleSelectDate(cell)}
                    aria-pressed={isSelected}
                    aria-label={cell.date.toDateString()}
                    className={`press-feedback flex h-9 w-9 items-center justify-center rounded-full text-sm transition-colors ${
                      isSelected
                        ? "bg-forest font-semibold text-cream"
                        : isDisabled
                          ? "cursor-not-allowed text-ink-faint/50"
                          : cell.isToday
                            ? "border border-forest/40 text-ink hover:bg-forest-soft/60"
                            : "text-ink hover:bg-forest-soft/60"
                    }`}
                  >
                    {cell.date.getDate()}
                  </button>
                ) : (
                  <span className="h-9 w-9" aria-hidden="true" />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {selectedDate && (
        <div className="mt-5">
          <p className="mb-2.5 text-sm font-semibold text-ink">Preferred Time</p>
          <button
            type="button"
            onClick={() => setTimeOpen((v) => !v)}
            aria-expanded={timeOpen}
            aria-controls="time-slot-panel"
            className="press-feedback flex w-full items-center justify-between rounded-xl border border-border px-4 py-3 text-left transition-colors hover:border-forest/40"
          >
            <span className={`text-sm font-medium ${selectedTime ? "text-ink" : "text-ink-faint"}`}>
              {selectedTime ? formatTime(selectedTime) : "Select a time"}
            </span>
            <Icon name={timeOpen ? "expand_less" : "expand_more"} size={20} className="text-ink-soft" />
          </button>

          <AnimatePresence initial={false}>
            {timeOpen && (
              <motion.div
                id="time-slot-panel"
                initial={reduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                animate={reduceMotion ? { opacity: 1 } : { height: "auto", opacity: 1 }}
                exit={reduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                transition={{ type: "spring", bounce: 0, duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="mt-2.5 max-h-52 overflow-y-auto rounded-xl border border-border p-2.5">
                  {timeSlots.length > 0 ? (
                    <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
                      {timeSlots.map((slot) => {
                        const isSelected = selectedTime && slot.getTime() === selectedTime.getTime();
                        return (
                          <button
                            key={slot.toISOString()}
                            type="button"
                            onClick={() => handleSelectTime(slot)}
                            aria-pressed={isSelected}
                            className={`press-feedback rounded-lg border px-2.5 py-2 text-sm font-medium transition-colors ${
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
                    <p className="flex items-center gap-2 px-1 py-2 text-sm text-ink-faint">
                      <Icon name="info" size={16} />
                      No more openings that day — try another date.
                    </p>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}
