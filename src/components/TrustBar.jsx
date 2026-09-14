import Reveal from "./Reveal";
import Icon from "./Icon";
import { trustSignals } from "../data/content";

export default function TrustBar() {
  return (
    <section className="border-y border-border bg-surface">
      <div className="container-page">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-border">
          {trustSignals.map((signal, i) => (
            <Reveal key={signal.label} delay={i * 0.05}>
              <div className="flex items-center gap-4 py-8 lg:px-8 lg:py-10">
                <Icon name={signal.icon} size={24} className="shrink-0 text-clay" />
                <div className="flex flex-col">
                  <span className="text-title text-ink">{signal.label}</span>
                  <span className="text-sm text-ink-soft">{signal.detail}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
