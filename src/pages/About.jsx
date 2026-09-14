import Section from "../components/Section";
import Card from "../components/Card";
import Reveal from "../components/Reveal";
import DoctorSpotlight from "../components/DoctorSpotlight";
import TeamCard from "../components/TeamCard";
import HoursTable from "../components/HoursTable";
import MapPlaceholder from "../components/MapPlaceholder";
import BookingCTA from "../components/BookingCTA";
import Button from "../components/Button";
import Icon from "../components/Icon";
import {
  business,
  team,
  newPatientSteps,
  newPatientIntro,
  newPatientClosing,
  newPatientForms,
} from "../data/content";

export default function About() {
  const [dentist, ...restOfTeam] = team;

  return (
    <>
      <DoctorSpotlight
        name={dentist.name}
        role={dentist.role}
        bio={dentist.bio}
        credentials={dentist.credentials}
        quote={dentist.quote}
      />

      {restOfTeam.length > 0 && (
        <Section eyebrow="Our Team" heading="The rest of the team">
          <div className="grid gap-6">
            {restOfTeam.map((member, i) => (
              <Reveal key={member.name} delay={i * 0.05}>
                <TeamCard {...member} />
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      <Section
        tone="tint"
        eyebrow="New Patients"
        heading="Your first visit"
        subheading={newPatientIntro}
      >
        <div className="grid gap-gutter sm:grid-cols-2">
          {newPatientSteps.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.05}>
              <Card>
                <span className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-forest text-sm font-semibold text-cream">
                  {index + 1}
                </span>
                <h3 className="text-title text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{step.description}</p>
              </Card>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-border bg-surface p-7">
          <h3 className="text-title text-ink">New patient paperwork</h3>
          <p className="mt-1 text-body-lg text-ink-soft">
            Complete your paperwork before your visit, available in English and Spanish.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            {newPatientForms.map((form) => (
              <Button key={form.label} variant="disabled" disabled icon={<Icon name="description" size={18} />}>
                {form.label}
              </Button>
            ))}
          </div>
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-body-lg text-ink-soft">
          {newPatientClosing}
        </p>
      </Section>

      <Section eyebrow="Visit Us" heading="Location & hours">
        <div className="rounded-3xl border border-border bg-surface p-6 sm:p-10">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h3 className="text-title text-ink">{business.address.street}</h3>
              <p className="text-body-lg text-ink-soft">
                {business.address.city}, {business.address.state} {business.address.zip}
              </p>
              <p className="mt-1 text-sm text-ink-faint">{business.address.note}</p>
              <div className="mt-6">
                <MapPlaceholder />
              </div>
            </div>
            <div>
              <h3 className="mb-4 text-title text-ink">Office Hours</h3>
              <div className="rounded-2xl bg-cream-deep p-6">
                <HoursTable />
              </div>
            </div>
          </div>
        </div>
      </Section>

      <BookingCTA />
    </>
  );
}
