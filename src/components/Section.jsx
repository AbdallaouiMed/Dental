import { motion, useReducedMotion } from "motion/react";

const toneClasses = {
  white: "bg-cream",
  tint: "bg-cream-deep",
  dark: "bg-forest text-cream",
};

export default function Section({
  id,
  eyebrow,
  heading,
  subheading,
  tone = "white",
  align = "center",
  className = "",
  children,
}) {
  const reduceMotion = useReducedMotion();

  const reveal = reduceMotion
    ? { initial: { opacity: 1 }, whileInView: { opacity: 1 } }
    : {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-80px" },
        transition: { type: "spring", bounce: 0, duration: 0.6 },
      };

  const isCentered = align === "center";

  return (
    <section id={id} className={`relative ${toneClasses[tone]} ${className}`}>
      <div className="container-page py-section">
        {(eyebrow || heading || subheading) && (
          <motion.div
            className={`mb-12 lg:mb-16 ${isCentered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}`}
            {...reveal}
          >
            {eyebrow && (
              <p className={`eyebrow mb-4 ${tone === "dark" ? "text-clay-soft" : ""} ${isCentered ? "justify-center" : ""}`}>
                {eyebrow}
              </p>
            )}
            {heading && (
              <h2 className={`text-headline ${tone === "dark" ? "text-cream" : "text-ink"}`}>
                {heading}
              </h2>
            )}
            {subheading && (
              <p className={`mt-4 text-body-lg ${tone === "dark" ? "text-cream/75" : "text-ink-soft"}`}>
                {subheading}
              </p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
