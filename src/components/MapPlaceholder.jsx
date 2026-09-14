import Icon from "./Icon";
import { business } from "../data/content";

// Source only referenced a "View Larger Map" embed with no coordinates
// captured. Swap this for a real embedded Google Map once the client's
// place ID / API key is available.
export default function MapPlaceholder() {
  const query = encodeURIComponent(
    `${business.address.street}, ${business.address.city}, ${business.address.state} ${business.address.zip}`
  );

  return (
    <div className="flex h-64 flex-col items-center justify-center gap-3 rounded-2xl border border-border bg-cream-deep p-8 text-center">
      <Icon name="location_on" size={28} className="text-ink-faint" />
      <p className="text-sm font-medium text-ink-soft">
        Map coming soon — {business.address.street}, {business.address.city},{" "}
        {business.address.state} {business.address.zip}
      </p>
      <a
        href={`https://www.google.com/maps/search/?api=1&query=${query}`}
        target="_blank"
        rel="noreferrer"
        className="text-sm font-semibold text-forest hover:text-forest-dark"
      >
        Get directions
      </a>
    </div>
  );
}
