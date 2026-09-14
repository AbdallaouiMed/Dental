import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  getCalendarWeeks,
  getTimeSlots,
  isSameDay,
  formatTime,
  formatDate,
  formatMonthYear,
} from "../data/scheduling";
import Icon from "./Icon";

const WEEKDAY_LABELS = ["S", "M", "T", "W", "T", "F", "S"];
// How far ahead the calendar lets someone navigate — matches the old
// day-strip's ~3 week horizon, just expressed in months since this is a
// real month grid now.
const MONTHS_AHEAD = 2;

const fieldTriggerClasses =
  "press-feedback flex w-full items-center gap-3 rounded-xl border border-border px-4 py-3 text-left transition-colors hover:border-forest/40 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:border-border";

function DropdownPanel({ id, open, reduceMotion, children }) {
  return (
    <AnimatePresence initial={false}>
      {open && (
        <motion.div
          id={id}
          initial={reduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
          animate={reduceMotion ? { opacity: 1 } : { height: "auto", opacity: 1 }}
          exit={reduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
          transition={{ type: "spring", bounce: 0, duration: 0.3 }}
          className="overflow-hidden"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Two collapsed, dropdown-style fields (date, then time) driven entirely by
// the real business.hours — it can only ever offer slots inside actual
// office hours, and never a time that's already past. There's no
// appointments backend yet, so this can't know what's already booked; front
// desk still confirms by phone (see the note in ContactForm).
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
  const [openPanel, setOpenPanel] = useState(null); // null | "date" | "time"

  const weeks = useMemo(() => getCalendarWeeks(visibleMonth), [visibleMonth]);
  const timeSlots = useMemo(() => (selectedDate ? getTimeSlots(selectedDate) : []), [selectedDate]);

  const earliestMonth = new Date(today.getFullYear(), today.getMonth(), 1);
  const latestMonth = new Date(today.getFullYear(), today.getMonth() + MONTHS_AHEAD, 1);
  const canGoPrev = visibleMonth > earliestMonth;
  const canGoNext = visibleMonth < latestMonth;

  function changeMonth(delta) {
    setVisibleMonth((m) => new Date(m.getFullYear(), m.getMonth() + delta, 1));
  }

  function toggleDate() {
    setOpenPanel((p) => (p === "date" ? null : "date"));
  }

  function toggleTime() {
    if (!selectedDate) return;
    setOpenPanel((p) => (p === "time" ? null : "time"));
  }

  function handleSelectDate(cell) {
    if (!cell.inCurrentMonth || cell.isPast || cell.isClosed) return;
    onSelectDate(cell.date);
    onSelectTime(null);
    setOpenPanel("time");
  }

  function handleSelectTime(slot) {
    onSelectTime(slot);
    setOpenPanel(null);
  }

  return (
    <div>
      <p className="mb-2.5 text-sm font-semibold text-ink">Preferred Date</p>
      <button
        type="button"
        onClick={toggleDate}
        aria-expanded={openPanel === "date"}
        aria-controls="date-panel"
        className={fieldTriggerClasses}
      >
        <Icon name="calendar_today" size={18} className="shrink-0 text-forest" />
        <span className={`flex-1 text-sm font-medium ${selectedDate ? "text-ink" : "text-ink-faint"}`}>
          {selectedDate ? formatDate(selectedDate) : "Select a date"}
        </span>
        <Icon
          name={openPanel === "date" ? "expand_less" : "expand_more"}
          size={20}
          className="shrink-0 text-ink-soft"
        />
      </button>

      <DropdownPanel id="date-panel" open={openPanel === "date"} reduceMotion={reduceMotion}>
        <div className="mt-2.5 rounded-2xl border border-border p-3.5 sm:p-4">
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
      </DropdownPanel>

      <div className="mt-5">
        <p className="mb-2.5 text-sm font-semibold text-ink">Preferred Time</p>
        <button
          type="button"
          onClick={toggleTime}
          disabled={!selectedDate}
          aria-expanded={openPanel === "time"}
          aria-controls="time-panel"
          className={fieldTriggerClasses}
        >
          <Icon name="schedule" size={18} className="shrink-0 text-forest" />
          <span className={`flex-1 text-sm font-medium ${selectedTime ? "text-ink" : "text-ink-faint"}`}>
            {selectedTime
              ? formatTime(selectedTime)
              : selectedDate
                ? "Select a time"
                : "Pick a date first"}
          </span>
          <Icon
            name={openPanel === "time" ? "expand_less" : "expand_more"}
            size={20}
            className="shrink-0 text-ink-soft"
          />
        </button>

        <DropdownPanel id="time-panel" open={openPanel === "time"} reduceMotion={reduceMotion}>
          <div className="mt-2.5 max-h-56 overflow-y-auto rounded-xl border border-border">
            {timeSlots.length > 0 ? (
              <div role="listbox" aria-label="Available times" className="divide-y divide-border">
                {timeSlots.map((slot) => {
                  const isSelected = selectedTime && slot.getTime() === selectedTime.getTime();
                  return (
                    <button
                      key={slot.toISOString()}
                      type="button"
                      role="option"
                      aria-selected={isSelected}
                      onClick={() => handleSelectTime(slot)}
                      className={`flex w-full items-center justify-between px-4 py-2.5 text-left text-sm font-medium transition-colors ${
                        isSelected ? "bg-forest-soft text-forest" : "text-ink hover:bg-forest-soft/40"
                      }`}
                    >
                      {formatTime(slot)}
                      {isSelected && <Icon name="check" size={18} className="text-forest" />}
                    </button>
                  );
                })}
              </div>
            ) : (
              <p className="flex items-center gap-2 px-4 py-3 text-sm text-ink-faint">
                <Icon name="info" size={16} />
                No more openings that day — try another date.
              </p>
            )}
          </div>
        </DropdownPanel>
      </div>
    </div>
  );
}
