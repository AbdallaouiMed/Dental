function initials(name) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function TeamCard({ name, role, bio }) {
  return (
    <div className="flex flex-col gap-5 rounded-2xl border border-border bg-surface p-8 transition-colors duration-300 hover:border-forest/30 sm:flex-row sm:items-start">
      <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-forest-soft text-lg font-semibold tracking-tight text-forest">
        {initials(name)}
      </span>
      <div>
        <h3 className="text-title text-ink">{name}</h3>
        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-clay-deep">
          {role}
        </p>
        <p className="text-sm leading-relaxed text-ink-soft">{bio}</p>
      </div>
    </div>
  );
}
