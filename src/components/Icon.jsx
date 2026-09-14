// Thin wrapper around Google's Material Symbols Outlined font, matching the
// icon system used throughout stitch-design-reference.html.html.
export default function Icon({ name, size = 20, filled = false, className = "" }) {
  return (
    <span
      className={`material-symbols-outlined leading-none ${filled ? "icon-fill" : ""} ${className}`}
      style={{ fontSize: size }}
      aria-hidden="true"
    >
      {name}
    </span>
  );
}
