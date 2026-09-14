import Button from "./Button";
import Icon from "./Icon";
import { business, bookingCta } from "../data/content";

const infoItems = [
  { icon: "mail", label: "Call or Email", value: `${business.phone} · ${business.email}` },
  {
    icon: "location_on",
    label: "Location",
    value: `${business.address.street}, ${business.address.city}, ${business.address.state} ${business.address.zip}`,
    note: business.address.note,
  },
  { icon: "schedule", label: "Hours", value: business.hoursSummary, note: business.hoursNote },
];

export default function BookingCTA() {
  return (
    <section className="container-page pb-section">
      <div className="relative overflow-hidden rounded-3xl bg-forest-dark p-8 text-cream lg:p-16">
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 text-cream/5"
          viewBox="0 0 100 100"
        >
          <circle cx="50" cy="50" r="49" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="50" cy="50" r="36" fill="none" stroke="currentColor" strokeWidth="1" />
        </svg>
        <div className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="flex flex-col lg:col-span-7">
            <p className="eyebrow mb-4 text-clay-soft">{bookingCta.eyebrow}</p>
            <h2 className="text-headline text-cream">{bookingCta.heading}</h2>
            <p className="mb-8 mt-4 max-w-xl text-body-lg text-cream/75">
              {bookingCta.subheading}
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Button
                to="/contact"
                variant="onDark"
                size="lg"
                icon={<Icon name="event_available" size={20} />}
              >
                Book Appointment Now
              </Button>
              <Button
                href={business.phoneHref}
                variant="onDarkGhost"
                size="lg"
                icon={<Icon name="call" size={20} />}
              >
                Call Us: {business.phone}
              </Button>
            </div>
          </div>

          <div className="flex flex-col gap-4 lg:col-span-5">
            {infoItems.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-cream/10 bg-cream/5 p-6"
              >
                <div className="mb-2 flex items-center gap-3">
                  <Icon name={item.icon} size={20} className="text-clay-soft" />
                  <span className="font-semibold text-cream">{item.label}</span>
                </div>
                <p className="text-sm text-cream/70">
                  {item.value}
                  {item.note && (
                    <>
                      <br />
                      <span className="text-cream/50">{item.note}</span>
                    </>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
