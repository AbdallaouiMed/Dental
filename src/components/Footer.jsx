import { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "./Icon";
import { business, footerLinks, homeCopy } from "../data/content";

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);

  function handleSubscribe(event) {
    event.preventDefault();
    setSubscribed(true);
  }

  const columnHeading = "mb-1 text-eyebrow uppercase tracking-widest text-cream";
  const link = "text-sm text-cream/75 transition-colors hover:text-cream";

  return (
    <footer className="w-full bg-forest-dark pb-4 pt-8 text-cream">
      <div className="container-page">
        <div className="mb-5 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-12">
          <div className="flex flex-col gap-2.5 lg:col-span-4">
            <div className="flex items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-clay text-cream">
                <Icon name="dentistry" size={15} />
              </span>
              <span className="font-display text-base font-semibold text-cream">
                {business.name}
              </span>
            </div>
            <p className="max-w-sm text-sm leading-snug text-cream/65">{homeCopy.missionLine}</p>

            <div className="flex flex-col gap-1.5">
              <a
                href={business.phoneHref}
                className="flex items-center gap-2.5 rounded-lg bg-cream/5 px-3 py-1.5 transition-colors hover:bg-cream/10"
              >
                <Icon name="call" size={14} className="text-clay-soft" />
                <span className="text-sm font-medium text-cream">{business.phone}</span>
              </a>
              <div className="flex items-start gap-2.5 rounded-lg bg-cream/5 px-3 py-1.5">
                <Icon name="location_on" size={14} className="mt-0.5 text-clay-soft" />
                <span className="text-sm text-cream/75">
                  {business.address.street}, {business.address.city}, {business.address.state}{" "}
                  {business.address.zip}
                </span>
              </div>
              <div className="flex items-start gap-2.5 rounded-lg bg-cream/5 px-3 py-1.5">
                <Icon name="schedule" size={14} className="mt-0.5 text-clay-soft" />
                <span className="text-sm text-cream/75">{business.hoursSummary}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-1.5 lg:col-span-2">
            <h4 className={columnHeading}>Services</h4>
            {footerLinks.services.map((item) => (
              <Link key={item.label} to={item.to} className={link}>
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-1.5 lg:col-span-2">
            <h4 className={columnHeading}>Practice</h4>
            {footerLinks.practice.map((item) => (
              <Link key={item.label} to={item.to} className={link}>
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-1.5 lg:col-span-2">
            <h4 className={columnHeading}>Patients</h4>
            {footerLinks.patients.map((item) => (
              <Link key={item.label} to={item.to} className={link}>
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-1.5 lg:col-span-2">
            <h4 className={columnHeading}>Newsletter</h4>
            {subscribed ? (
              <p className="text-sm text-clay-soft">Thanks — you're on the list.</p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-1.5">
                <input
                  type="email"
                  required
                  placeholder="Your email"
                  className="h-8 rounded-lg bg-cream/10 px-3 text-sm text-cream placeholder:text-cream/40 focus:outline-none focus:ring-2 focus:ring-clay/50"
                />
                <button
                  type="submit"
                  className="press-feedback h-8 rounded-lg bg-clay text-sm font-semibold text-cream transition-colors hover:bg-clay-deep"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-2 border-t border-cream/10 pt-3 text-sm text-cream/45 md:flex-row">
          <p>
            © {new Date().getFullYear()} {business.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
