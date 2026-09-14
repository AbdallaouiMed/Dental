import { insurance } from "../data/content";

export default function InsuranceBadges({ showFinancing = true, align = "left" }) {
  return (
    <div>
      <div className={`flex flex-wrap gap-2 ${align === "center" ? "justify-center" : ""}`}>
        {insurance.plans.map((plan) => (
          <span
            key={plan}
            className="rounded-full border border-border bg-cream-deep px-4 py-1.5 text-sm text-ink"
          >
            {plan}
          </span>
        ))}
      </div>
      {showFinancing && <p className="mt-4 text-body-lg text-ink-soft">{insurance.financing}</p>}
    </div>
  );
}
