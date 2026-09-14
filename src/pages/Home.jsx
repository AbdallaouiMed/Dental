import Hero from "../components/Hero";
import TrustBar from "../components/TrustBar";
import Reveal from "../components/Reveal";
import ServiceCard from "../components/ServiceCard";
import WhyChooseUs from "../components/WhyChooseUs";
import DoctorSpotlight from "../components/DoctorSpotlight";
import BookingCTA from "../components/BookingCTA";
import Button from "../components/Button";
import Icon from "../components/Icon";
import { services, serviceCategories, team } from "../data/content";

// One representative teaser card per category (matches the 4-card layout
// used for "Specialized Care"). The description is just the real service
// names in that category — no marketing copy invented at the category level.
const categoryTeasers = Object.entries(serviceCategories).map(([key, meta]) => ({
  name: meta.label,
  category: key,
  icon: meta.icon,
  description: services
    .filter((s) => s.category === key)
    .map((s) => s.name)
    .join(", "),
}));

export default function Home() {
  const dentist = team[0];

  return (
    <>
      <Hero />
      <TrustBar />

      <section className="bg-cream">
        <div className="container-page py-section">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="flex max-w-2xl flex-col">
              <p className="eyebrow mb-4">Specialized Care</p>
              <h2 className="text-headline text-ink">Designed around total oral wellness.</h2>
            </div>
            <Button
              to="/services"
              variant="outline"
              className="shrink-0"
              iconAfter={<Icon name="arrow_forward" size={18} />}
            >
              View Complete Treatment Menu
            </Button>
          </div>
          <div className="grid grid-cols-1 gap-gutter md:grid-cols-2 lg:grid-cols-4">
            {categoryTeasers.map((teaser, i) => (
              <Reveal key={teaser.category} delay={i * 0.05}>
                <ServiceCard {...teaser} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <WhyChooseUs />

      <DoctorSpotlight
        name={dentist.name}
        role={dentist.role}
        bio={dentist.bio}
        credentials={dentist.credentials}
        quote={dentist.quote}
        showTeamLink
      />

      <BookingCTA />
    </>
  );
}
