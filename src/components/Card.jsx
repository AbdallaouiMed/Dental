export default function Card({ className = "", children }) {
  return (
    <div
      className={`rounded-2xl border border-border bg-surface p-7 transition-colors duration-300 hover:border-forest/30 ${className}`}
    >
      {children}
    </div>
  );
}
