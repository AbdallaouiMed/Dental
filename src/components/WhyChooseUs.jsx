import Reveal from "./Reveal";
import Icon from "./Icon";
import { whyChooseUs } from "../data/content";

export default function WhyChooseUs() {
  return (
    <section className="bg-cream-deep">
      <div className="container-page py-section">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <p className="eyebrow mb-4">{whyChooseUs.eyebrow}</p>
            <h2 className="text-headline text-ink">{whyChooseUs.heading}</h2>
            <p className="mt-4 text-body-lg text-ink-soft">{whyChooseUs.subheading}</p>
          </div>

          <div className="flex flex-col divide-y divide-border lg:col-span-8">
            {whyChooseUs.pillars.map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 0.08}>
                <div className="grid grid-cols-[auto_1fr] items-start gap-5 py-7 first:pt-0 last:pb-0 sm:grid-cols-[auto_auto_1fr] sm:items-center">
                  <span className="font-display text-2xl text-clay/50">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full bg-forest-soft text-forest sm:flex">
                    <Icon name={pillar.icon} size={22} />
                  </span>
                  <div>
                    <h3 className="text-title text-ink">{pillar.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                      {pillar.description}
                    </p>
                    <div className="mt-3 flex items-center gap-2 text-sm font-semibold text-forest">
                      <Icon name="check_circle" size={16} />
                      {pillar.note}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
