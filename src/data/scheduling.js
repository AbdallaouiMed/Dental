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

// Next `count` calendar days starting today, each flagged closed/open per
// the real weekly schedule.
export function getUpcomingDays(count = 21) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return Array.from({ length: count }, (_, i) => {
    const date = new Date(today);
    date.setDate(date.getDate() + i);
    const entry = findHoursForDate(date);
    return {
      date,
      dayName: date.toLocaleDateString("en-US", { weekday: "long" }),
      isClosed: !entry || entry.hours === "Closed",
    };
  });
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
