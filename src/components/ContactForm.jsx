import { useState } from "react";
import { contactForm } from "../data/content";
import { formatDate, formatTime } from "../data/scheduling";
import Button from "./Button";
import BookingScheduler from "./BookingScheduler";

const inputClasses =
  "rounded-xl border border-border bg-cream px-4 py-3 text-ink outline-none transition-colors focus:border-forest focus:bg-surface focus:ring-2 focus:ring-forest/15";

// UI only, no backend wired up yet per project brief — submit just
// simulates success so the interaction can be demoed/reviewed. The date/
// time picker only knows real office hours, not existing bookings (there's
// no appointments backend), so the front desk still confirms by phone.
export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div role="status" className="rounded-2xl border border-forest-soft bg-forest-soft/30 p-6">
        <p className="font-semibold text-forest">Thanks for reaching out!</p>
        <p className="mt-1 text-sm text-ink-soft">
          {selectedDate && selectedTime
            ? `We'll call to confirm your visit on ${formatDate(selectedDate)} at ${formatTime(selectedTime)}.`
            : "We'll be in touch shortly."}{" "}
          This form isn't connected to a live inbox yet — once it is, your
          message will reach our front desk directly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <h3 className="text-title text-ink">{contactForm.heading}</h3>

      <BookingScheduler
        selectedDate={selectedDate}
        selectedTime={selectedTime}
        onSelectDate={setSelectedDate}
        onSelectTime={setSelectedTime}
      />
      <input type="hidden" name="preferredDate" value={selectedDate ? selectedDate.toISOString() : ""} />
      <input type="hidden" name="preferredTime" value={selectedTime ? selectedTime.toISOString() : ""} />

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-sm text-ink-soft">
            Name
          </label>
          <input id="name" name="name" type="text" required className={inputClasses} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-sm text-ink-soft">
            Email
          </label>
          <input id="email" name="email" type="email" required className={inputClasses} />
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="subject" className="text-sm text-ink-soft">
          Subject
        </label>
        <input id="subject" name="subject" type="text" required className={inputClasses} />
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm text-ink-soft">
          Message
        </label>
        <textarea id="message" name="message" rows={5} required className={inputClasses} />
      </div>
      <label className="flex items-center gap-2 text-sm text-ink-soft">
        <input
          type="checkbox"
          name="emailUpdates"
          className="h-4 w-4 rounded border-border text-forest focus-visible:outline-forest"
        />
        {contactForm.checkboxLabel}
      </label>
      <Button type="submit" className="w-full sm:w-auto">
        {selectedDate && selectedTime ? "Request Appointment" : "Send Message"}
      </Button>
    </form>
  );
}
