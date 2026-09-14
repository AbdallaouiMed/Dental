import { Link } from "react-router-dom";
import Icon from "./Icon";
import doctorPhoto from "../Images/Dental_img2.png";

export default function DoctorSpotlight({ name, role, bio, credentials, quote, showTeamLink = false }) {
  return (
    <section className="bg-cream">
      <div className="container-page py-section">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="relative lg:col-span-5">
            <div className="relative mx-auto aspect-[4/5] max-w-sm overflow-hidden rounded-organic lg:max-w-none">
              <img
                src={doctorPhoto}
                alt={`${name}, ${role} at Frederick Family Dental`}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col lg:col-span-7">
            <p className="eyebrow mb-4">Meet Your Dentist</p>
            {quote && (
              <blockquote className="relative mb-6 font-display text-2xl italic leading-snug text-ink">
                <span aria-hidden="true" className="absolute -left-4 -top-3 font-display text-5xl not-italic text-clay/30">
                  "
                </span>
                {quote}
              </blockquote>
            )}
            <h2 className="text-headline text-ink">{name}</h2>
            <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-clay-deep">{role}</p>
            <p className="mt-5 max-w-xl text-body-lg text-ink-soft">{bio}</p>
            {credentials.length > 0 && (
              <div className="mt-7 flex flex-wrap gap-2.5">
                {credentials.map((c) => (
                  <span
                    key={c}
                    className="rounded-full border border-border bg-surface px-3.5 py-1.5 text-sm text-ink-soft"
                  >
                    {c}
                  </span>
                ))}
              </div>
            )}
            {showTeamLink && (
              <Link
                to="/about"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-forest transition-colors hover:text-forest-dark"
              >
                <span>Meet the Full Team</span>
                <Icon name="arrow_forward" size={18} />
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
