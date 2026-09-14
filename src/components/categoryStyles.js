// Shared per-category treatment for ServiceCard and the Services page
// panels. Built from the two brand accents (forest, clay) in alternating
// strength rather than inventing a new hue per category — keeps the
// palette small and intentional instead of a rainbow of tokens.
export const categoryStyles = {
  restorative: {
    badge: "bg-forest-soft text-forest",
    chip: "bg-forest text-cream",
    accent: "bg-forest",
    panel: "bg-forest-soft/35",
  },
  cosmetic: {
    badge: "bg-clay-soft text-clay-deep",
    chip: "bg-clay text-cream",
    accent: "bg-clay",
    panel: "bg-clay-soft/35",
  },
  orthodontic: {
    badge: "bg-cream-deep text-forest",
    chip: "bg-forest/70 text-cream",
    accent: "bg-forest/70",
    panel: "bg-forest-soft/20",
  },
  preventive: {
    badge: "bg-cream-deep text-clay-deep",
    chip: "bg-clay/70 text-cream",
    accent: "bg-clay/70",
    panel: "bg-clay-soft/20",
  },
};
