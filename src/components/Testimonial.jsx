import Icon from "./Icon";

// Built to match a real-review-card shape, but NOT rendered on any page —
// frederick-dental-site-audit.md has zero real testimonials or reviews.
// Wire this up once the client provides actual patient quotes; do not fill
// it with invented names/quotes/ratings.
export default function Testimonial({ quote, name, location, rating = 5, timestamp }) {
  return (
    <div className="flex flex-col justify-between rounded-2xl border border-border bg-surface p-8">
      <div>
        <div className="mb-4 flex items-center gap-1 text-clay">
          {Array.from({ length: rating }).map((_, i) => (
            <Icon key={i} name="star" size={16} filled />
          ))}
        </div>
        <p className="text-body-lg leading-relaxed text-ink">"{quote}"</p>
      </div>
      <div className="flex items-center justify-between pt-6">
        <div className="flex flex-col">
          <span className="text-sm font-bold text-ink">{name}</span>
          {location && <span className="text-sm text-ink-soft">{location}</span>}
        </div>
        {timestamp && <span className="text-xs text-ink-faint">{timestamp}</span>}
      </div>
    </div>
  );
}
