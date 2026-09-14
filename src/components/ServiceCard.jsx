import { Link } from "react-router-dom";
import Icon from "./Icon";
import { serviceCategories } from "../data/content";
import { categoryStyles } from "./categoryStyles";

export default function ServiceCard({
  name,
  description,
  icon,
  category,
  linkTo = "/services",
  showLink = true,
}) {
  const meta = serviceCategories[category];
  const styles = categoryStyles[category] ?? categoryStyles.restorative;

  return (
    <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-border bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-forest/30 hover:shadow-lg hover:shadow-forest/5">
      <div>
        <div className="mb-6 flex items-center justify-between">
          <div className={`flex h-11 w-11 items-center justify-center rounded-xl transition-transform duration-300 ${styles.chip} group-hover:scale-105`}>
            <Icon name={icon} size={20} />
          </div>
          {meta && (
            <span className={`rounded-full px-3 py-1 text-xs font-semibold ${styles.badge}`}>
              {meta.label}
            </span>
          )}
        </div>
        <h3 className="text-title text-ink">{name}</h3>
        {description && (
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">{description}</p>
        )}
      </div>
      {showLink && (
        <Link
          to={linkTo}
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-forest transition-all group-hover:gap-2.5"
        >
          <span>Learn more</span>
          <Icon name="arrow_forward" size={16} />
        </Link>
      )}
    </div>
  );
}
