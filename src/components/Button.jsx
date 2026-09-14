import { Link } from "react-router-dom";

const variants = {
  primary: "bg-forest text-cream shadow-sm shadow-forest/20 hover:bg-forest-dark",
  secondary:
    "bg-surface text-forest border border-border hover:border-forest/40 hover:bg-forest-soft/40",
  outline: "bg-transparent text-forest border border-forest/30 hover:bg-forest/5",
  onDark: "bg-clay text-cream shadow-sm shadow-black/20 hover:bg-clay-deep",
  onDarkGhost: "bg-transparent text-cream border border-cream/35 hover:bg-cream/10",
  disabled: "bg-cream-deep text-ink-faint cursor-not-allowed shadow-none",
};

const sizes = {
  sm: "px-4 py-2 gap-2 text-label",
  md: "px-6 py-3 gap-2.5 text-label",
  lg: "px-7 py-3.5 gap-3 text-label",
};

export default function Button({
  to,
  href,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  disabled = false,
  icon,
  iconAfter,
  className = "",
  children,
}) {
  const classes = `press-feedback inline-flex items-center justify-center rounded-full font-semibold transition-colors duration-200 ${
    sizes[size]
  } ${disabled ? variants.disabled : variants[variant]} ${className}`;

  const content = (
    <>
      {icon}
      <span>{children}</span>
      {iconAfter}
    </>
  );

  if (disabled) {
    return (
      <span className={classes} aria-disabled="true">
        {content}
      </span>
    );
  }

  if (to) {
    return (
      <Link to={to} className={classes}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
