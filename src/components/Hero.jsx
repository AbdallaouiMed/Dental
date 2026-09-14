import { motion, useReducedMotion } from "motion/react";
import Button from "./Button";
import Icon from "./Icon";
import { business, homeCopy } from "../data/content";
import officePhoto from "../Images/Dental_img1.png";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  const reveal = (delay) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { type: "spring", bounce: 0, duration: 0.7, delay },
        };

  return (
    <div className="relative w-full overflow-hidden bg-cream">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[42rem]"
        style={{
          background:
            "radial-gradient(60% 55% at 15% 20%, rgba(222,232,224,0.9) 0%, rgba(251,247,240,0) 100%)",
        }}
      />
      <section className="container-page grid grid-cols-1 items-center gap-12 pb-16 pt-14 lg:grid-cols-12 lg:gap-8 lg:pb-28 lg:pt-20">
        <div className="flex flex-col items-start lg:col-span-6">
          <motion.p {...reveal(0)} className="eyebrow mb-6">
            {homeCopy.heroBadge}
          </motion.p>

          <motion.h1 {...reveal(0.06)} className="text-display-xl text-ink">
            {homeCopy.heroHeading}
          </motion.h1>

          <motion.p
            {...reveal(0.16)}
            className="mt-6 max-w-md text-body-lg text-ink-soft"
          >
            {homeCopy.heroSubheading}
          </motion.p>

          <motion.div {...reveal(0.26)} className="mt-10 flex flex-wrap items-center gap-4">
            <Button href={business.phoneHref} icon={<Icon name="calendar_today" size={18} />}>
              Book Appointment
            </Button>
            <Button
              to="/services"
              variant="secondary"
              iconAfter={<Icon name="arrow_forward" size={18} />}
            >
              Explore Treatments
            </Button>
          </motion.div>
        </div>

        <motion.div {...reveal(0.2)} className="relative lg:col-span-6">
          <div className="relative mx-auto aspect-[4/5] max-w-md overflow-hidden rounded-organic shadow-xl shadow-forest/10 lg:max-w-none">
            <img
              src={officePhoto}
              alt="A patient relaxing in the Frederick Family Dental waiting area"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 left-0 flex max-w-[13rem] items-start gap-3 rounded-2xl border border-border bg-surface p-4 shadow-lg shadow-forest/10 sm:-left-6">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-clay-soft text-clay-deep">
              <Icon name="favorite" size={18} filled />
            </span>
            <p className="text-sm leading-snug text-ink-soft">
              <span className="font-semibold text-ink">20+ years</span> caring for
              Frederick families
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
