import { business } from "./content";

// Appointment slots are generated purely from business.hours (the real
// office hours) — there's no backend/appointment database behind this yet,
// so "available" means "within office hours and not already past," not
// "not already booked by someone else." Front desk still confirms by phone.
const SLOT_INTERVAL_MINUTES = 30;

function parseClockLabel(label) {
  const [time, meridiem] = label.trim().split(" ");
  let [hours, minutes] = time.split(":").map(Number);
  if (meridiem === "PM" && hours !== 12) hours += 12;
  if (meridiem === "AM" && hours === 12) hours = 0;
  return { hours, minutes };
}

function findHoursForDate(date) {
  const dayName = date.toLocaleDateString("en-US", { weekday: "long" });
  return business.hours.find((h) => h.day === dayName) ?? null;
}


// Bookable start times for a given date, at SLOT_INTERVAL_MINUTES steps,
// stopping early enough that an appointment still fits before closing, and
// never offering a time that's already passed today.
export function getTimeSlots(date) {
  const entry = findHoursForDate(date);
  if (!entry || entry.hours === "Closed") return [];

  const [startLabel, endLabel] = entry.hours.split("–").map((s) => s.trim());
  const start = parseClockLabel(startLabel);
  const end = parseClockLabel(endLabel);

  const cursor = new Date(date);
  cursor.setHours(start.hours, start.minutes, 0, 0);
  const last = new Date(date);
  last.setHours(end.hours, end.minutes, 0, 0);
  last.setMinutes(last.getMinutes() - SLOT_INTERVAL_MINUTES);

  const now = new Date();
  const slots = [];
  while (cursor <= last) {
    if (cursor > now) slots.push(new Date(cursor));
    cursor.setMinutes(cursor.getMinutes() + SLOT_INTERVAL_MINUTES);
  }
  return slots;
}

export function isSameDay(a, b) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

export function formatTime(date) {
  return date.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });
}

export function formatDate(date) {
  return date.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" });
}

export function formatMonthYear(date) {
  return date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
}

// Full weeks (Sun–Sat) covering `monthDate`'s month, including the leading/
// trailing days of adjacent months needed to fill each row — the shape a
// standard calendar grid expects. Each cell is flagged so the UI can grey
// out/disable anything unbookable (past, closed, or outside the month)
// without recomputing business hours itself.
export function getCalendarWeeks(monthDate) {
  const year = monthDate.getFullYear();
  const month = monthDate.getMonth();
  const firstOfMonth = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const startWeekday = firstOfMonth.getDay();
  const totalCells = Math.ceil((startWeekday + daysInMonth) / 7) * 7;

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const gridStart = new Date(year, month, 1 - startWeekday);
  const cells = Array.from({ length: totalCells }, (_, i) => {
    const date = new Date(gridStart);
    date.setDate(date.getDate() + i);
    const entry = findHoursForDate(date);
    return {
      date,
      inCurrentMonth: date.getMonth() === month,
      isPast: date < today,
      isToday: isSameDay(date, today),
      isClosed: !entry || entry.hours === "Closed",
    };
  });

  const weeks = [];
  for (let i = 0; i < cells.length; i += 7) weeks.push(cells.slice(i, i + 7));
  return weeks;
}
