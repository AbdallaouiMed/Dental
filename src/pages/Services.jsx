import Section from "../components/Section";
import Reveal from "../components/Reveal";
import ServiceCard from "../components/ServiceCard";
import InsuranceBadges from "../components/InsuranceBadges";
import BookingCTA from "../components/BookingCTA";
import Icon from "../components/Icon";
import { categoryStyles } from "../components/categoryStyles";
import { services, serviceCategories, insurance } from "../data/content";

export default function Services() {
  const groups = Object.entries(serviceCategories).map(([key, meta]) => ({
    key,
    meta,
    items: services.filter((s) => s.category === key),
  }));

  return (
    <>
      <Section
        eyebrow="Services"
        heading="Treatments"
        subheading="A full range of general, restorative, and cosmetic dental care under one roof."
      >
        <div className="space-y-10">
          {groups.map((group) => {
            const style = categoryStyles[group.key];
            return (
              <div key={group.key} className={`rounded-3xl p-6 sm:p-10 ${style.panel}`}>
                <div className="mb-8 flex items-center gap-3">
                  <span className={`flex h-10 w-10 items-center justify-center rounded-xl ${style.chip}`}>
                    <Icon name={group.meta.icon} size={20} />
                  </span>
                  <div>
                    <h3 className="text-title text-ink">{group.meta.label}</h3>
                    <p className="text-sm text-ink-soft">
                      {group.items.length} treatment{group.items.length !== 1 ? "s" : ""}
                    </p>
                  </div>
                </div>
                <div className="grid gap-gutter sm:grid-cols-2 lg:grid-cols-3">
                  {group.items.map((service, i) => (
                    <Reveal key={service.name} delay={(i % 3) * 0.05}>
                      <ServiceCard {...service} showLink={false} />
                    </Reveal>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      <Section
        tone="tint"
        eyebrow="Insurance & Financing"
        heading="Making care accessible"
        subheading={insurance.intro}
      >
        <div className="mx-auto max-w-2xl text-center">
          <InsuranceBadges align="center" />
        </div>
      </Section>

      <BookingCTA />
    </>
  );
}
