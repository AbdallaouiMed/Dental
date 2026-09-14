/** @type {import('tailwindcss').Config} */
// Hand-built design tokens for the "Warm Editorial Sage" direction: a small
// palette of real names (not a 50-token Material dump), fluid clamp()-based
// type and spacing so the layout breathes smoothly between phone and
// desktop widths rather than jumping at fixed breakpoints, and a display
// serif (Fraunces) paired with Inter for an editorial, human feel.
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#1E2A24",
        "ink-soft": "#57685E",
        "ink-faint": "#96A197",
        cream: "#FBF7F0",
        "cream-deep": "#F1E7D6",
        surface: "#FFFFFF",
        forest: "#2B4A3E",
        "forest-dark": "#17281F",
        "forest-soft": "#DEE8E0",
        clay: "#C1703F",
        "clay-deep": "#8C4E28",
        "clay-soft": "#F3E0CB",
        border: "#E4DAC7",
        error: "#B3261E",
        "error-soft": "#F6DAD6",
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        body: ["Inter", "sans-serif"],
      },
      fontSize: {
        "display-xl": [
          "clamp(2.75rem, 2.1rem + 2.8vw, 4.75rem)",
          { lineHeight: "1.03", letterSpacing: "-0.02em", fontWeight: "600" },
        ],
        display: [
          "clamp(2.25rem, 1.8rem + 2vw, 3.5rem)",
          { lineHeight: "1.08", letterSpacing: "-0.015em", fontWeight: "600" },
        ],
        headline: [
          "clamp(1.6rem, 1.42rem + 0.8vw, 2.15rem)",
          { lineHeight: "1.18", letterSpacing: "-0.01em", fontWeight: "600" },
        ],
        title: [
          "clamp(1.15rem, 1.07rem + 0.3vw, 1.4rem)",
          { lineHeight: "1.3", fontWeight: "600" },
        ],
        "body-lg": ["clamp(1.0625rem, 1rem + 0.28vw, 1.1875rem)", { lineHeight: "1.65" }],
        label: ["0.8125rem", { letterSpacing: "0.01em", fontWeight: "600" }],
        eyebrow: ["0.75rem", { letterSpacing: "0.15em", fontWeight: "600" }],
      },
      spacing: {
        gutter: "clamp(1.25rem, 1rem + 1vw, 2rem)",
        margin: "clamp(1.25rem, 0.6rem + 2.8vw, 4rem)",
        section: "clamp(4rem, 3rem + 4vw, 7rem)",
        "section-sm": "clamp(2.5rem, 2.1rem + 1.8vw, 4rem)",
      },
      borderRadius: {
        DEFAULT: "0.375rem",
        lg: "0.75rem",
        xl: "1.25rem",
        "2xl": "1.75rem",
        "3xl": "2.25rem",
        organic: "63% 37% 54% 46% / 43% 37% 63% 57%",
      },
      maxWidth: {
        prose: "62ch",
      },
    },
  },
};
