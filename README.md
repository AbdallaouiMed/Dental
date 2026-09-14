# Frederick Family Dental

Marketing website for Frederick Family Dental (Frederick, MD) — family and general dentistry with Dr. Jarrett. Built with React, Vite, and Tailwind CSS.

## Pages

- **Home** — hero, trust signals, service categories, "why choose us," doctor spotlight, booking CTA
- **Services** — full treatment menu grouped by category, insurance & financing
- **About** — doctor spotlight, team, new-patient process, location & hours
- **Contact** — office info, hours, insurance, a date/time appointment picker, and a message form

## Content sourcing

All copy is sourced from `frederick-dental-site-audit.md`, an extraction of the practice's existing live site. Visual design (palette, type, spacing, component shapes) started from `stitch-design-reference.html.html` and was later reworked into a custom "Warm Editorial Sage" design system (sage/forest + clay palette, Fraunces + Inter typography, fluid `clamp()`-based type and spacing).

The appointment picker in the Contact form only knows real office hours (`src/data/content.js` → `business.hours`) — there's no backend/appointments database yet, so it can't know what's already booked. The contact form itself is UI-only; submissions aren't wired to a live inbox.

## Development

```bash
npm install
npm run dev      # start the dev server
npm run build    # production build
npm run lint      # oxlint
npm run preview  # preview the production build
```

## Stack

- [React](https://react.dev) + [React Router](https://reactrouter.com)
- [Vite](https://vite.dev)
- [Tailwind CSS](https://tailwindcss.com) v4
- [Motion](https://motion.dev) for animation
