import Section from "../components/Section";
import Card from "../components/Card";
import Reveal from "../components/Reveal";
import HoursTable from "../components/HoursTable";
import MapPlaceholder from "../components/MapPlaceholder";
import InsuranceBadges from "../components/InsuranceBadges";
import ContactForm from "../components/ContactForm";
import Icon from "../components/Icon";
import { business, insurance } from "../data/content";

const infoRow = "flex items-start gap-3 rounded-xl bg-cream-deep px-4 py-3";

export default function Contact() {
  return (
    <Section
      eyebrow="Contact"
      heading="Stop by or call"
      subheading="We're happy to answer questions about scheduling, financing, and insurance."
    >
      <div className="grid gap-gutter lg:grid-cols-2">
        <div className="space-y-6">
          <Reveal>
            <Card>
              <h3 className="text-title text-ink">{business.name}</h3>
              <p className="mt-2 text-body-lg text-ink-soft">
                {business.address.street}
                <br />
                {business.address.city}, {business.address.state} {business.address.zip}
              </p>
              <p className="mt-1 text-sm text-ink-faint">{business.address.note}</p>
              <div className="mt-5 flex flex-col gap-2.5">
                <a href={business.phoneHref} className={`${infoRow} transition-colors hover:bg-forest-soft/40`}>
                  <Icon name="call" size={18} className="mt-0.5 text-forest" />
                  <div className="flex flex-col">
                    <span className="text-sm text-ink-soft">Phone</span>
                    <span className="text-sm font-medium text-ink">{business.phone}</span>
                  </div>
                </a>
                <div className={infoRow}>
                  <Icon name="print" size={18} className="mt-0.5 text-forest" />
                  <div className="flex flex-col">
                    <span className="text-sm text-ink-soft">Fax</span>
                    <span className="text-sm font-medium text-ink">{business.fax}</span>
                  </div>
                </div>
                <a
                  href={`mailto:${business.email}`}
                  className={`${infoRow} transition-colors hover:bg-forest-soft/40`}
                >
                  <Icon name="mail" size={18} className="mt-0.5 text-forest" />
                  <div className="flex flex-col">
                    <span className="text-sm text-ink-soft">Email</span>
                    <span className="text-sm font-medium text-ink">{business.email}</span>
                  </div>
                </a>
              </div>
            </Card>
          </Reveal>

          <Reveal delay={0.05}>
            <Card>
              <h3 className="mb-3 text-title text-ink">Office Hours</h3>
              <HoursTable />
            </Card>
          </Reveal>

          <Reveal delay={0.1}>
            <Card>
              <h3 className="mb-2 text-title text-ink">Insurance & Financing</h3>
              <p className="mb-3 text-body-lg text-ink-soft">{insurance.intro}</p>
              <InsuranceBadges />
            </Card>
          </Reveal>
        </div>

        <div className="space-y-6">
          <Reveal delay={0.05}>
            <Card>
              <ContactForm />
            </Card>
          </Reveal>
          <Reveal delay={0.1}>
            <MapPlaceholder />
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
