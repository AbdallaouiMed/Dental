import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { business, nav } from "../data/content";
import Button from "./Button";
import Icon from "./Icon";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 4);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const sheetTransition = reduceMotion
    ? { duration: 0.15 }
    : { type: "spring", bounce: 0, duration: 0.35 };

  return (
    <header
      className="sticky top-0 z-50 w-full bg-cream/90 backdrop-blur-xl"
      style={{
        boxShadow: scrolled
          ? "0 1px 0 rgba(43,74,62,0.1), 0 8px 24px -12px rgba(43,74,62,0.14)"
          : "0 1px 0 rgba(43,74,62,0), 0 8px 24px -12px rgba(43,74,62,0)",
        transition: "box-shadow 300ms ease",
      }}
    >
      <div className="mx-auto grid h-20 w-full max-w-[1600px] grid-cols-[auto_1fr_auto] items-center gap-6 px-margin">
        <NavLink to="/" className="flex shrink-0 items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-forest text-cream">
            <Icon name="dentistry" size={18} />
          </span>
          <span className="font-display text-lg font-semibold tracking-tight text-ink">
            {business.name}
          </span>
        </NavLink>

        <nav className="hidden w-full items-center justify-center xl:flex" aria-label="Primary">
          <div className="flex w-full max-w-xl items-center justify-between">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className="relative rounded-full px-5 py-2.5"
              >
                {({ isActive }) => (
                  <>
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full bg-forest-soft"
                        transition={
                          reduceMotion ? { duration: 0 } : { type: "spring", bounce: 0.2, duration: 0.5 }
                        }
                      />
                    )}
                    <span
                      className={`relative text-sm font-semibold transition-colors duration-150 ${
                        isActive ? "text-forest" : "text-ink-soft hover:text-ink"
                      }`}
                    >
                      {item.label}
                    </span>
                  </>
                )}
              </NavLink>
            ))}
          </div>
        </nav>

        <div className="flex shrink-0 items-center justify-end gap-6">
          <a
            href={business.phoneHref}
            className="hidden items-center gap-2 border-r border-border pr-6 text-sm font-medium text-ink-soft transition-colors hover:text-forest lg:flex"
          >
            <Icon name="call" size={18} className="text-clay" />
            <span className="tracking-tight">{business.phone}</span>
          </a>
          <div className="hidden md:block">
            <Button to="/contact">Book Appointment</Button>
          </div>

          <button
            type="button"
            className="press-feedback inline-flex items-center justify-center rounded-full p-2 text-ink xl:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? "close" : "menu"} size={26} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-30 bg-ink/20 xl:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />
            <motion.nav
              id="mobile-nav"
              aria-label="Primary"
              className="absolute left-0 right-0 top-full z-40 origin-top border-t border-border bg-cream/95 px-margin pb-6 pt-2 backdrop-blur-xl xl:hidden"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={sheetTransition}
            >
              <ul className="flex flex-col gap-1 pt-2">
                {nav.map((item) => (
                  <li key={item.to}>
                    <NavLink
                      to={item.to}
                      end={item.to === "/"}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        `block rounded-lg px-4 py-3 text-sm font-semibold ${
                          isActive ? "bg-forest-soft text-forest" : "text-ink-soft"
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-col gap-3">
                <a href={business.phoneHref} className="flex items-center gap-2 text-sm text-ink">
                  <Icon name="call" size={18} className="text-clay" />
                  {business.phone}
                </a>
                <Button to="/contact" onClick={() => setOpen(false)} className="w-full">
                  Book Appointment
                </Button>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
