import { business } from "../data/content";

export default function HoursTable({ compact = false }) {
  return (
    <div>
      <table className="w-full border-collapse text-left">
        <caption className="sr-only">Office hours</caption>
        <tbody>
          {business.hours.map(({ day, hours }) => (
            <tr key={day} className="border-b border-border last:border-0">
              <th scope="row" className="py-2.5 pr-4 font-medium text-ink">
                {day}
              </th>
              <td className={`py-2.5 text-right ${hours === "Closed" ? "text-ink-faint" : "text-ink-soft"}`}>
                {hours}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {!compact && <p className="mt-4 text-sm text-ink-faint">{business.hoursNote}</p>}
    </div>
  );
}
