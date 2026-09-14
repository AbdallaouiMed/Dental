// All copy on this site is sourced from frederick-dental-site-audit.md
// (an extraction of the practice's existing live site). Where the source
// only provided a treatment *name* with no description, a brief factual
// one-line description was written for this rebuild — flagged inline below
// with `generated: true` so the client can review it against their voice.
//
// Visual design (palette, type scale, spacing, icon system, component
// shapes) is ported from stitch-design-reference.html.html. Every fact,
// name, number, and claim below comes from the audit — none of Stitch's
// placeholder content ("Aura Dental", fake reviews, fake credentials, fake
// SF address) appears anywhere in this file.

export const business = {
  name: "Frederick Family Dental",
  tagline: "Leave with a warm smile!",
  dentist: "Dr. Jarrett",
  // Source listed both 301-624-5999 and 301-624-5998 inconsistently.
  // 5999 used here as primary (appears most often, incl. the Services CTA
  // and the Forms closing CTA) — CONFIRM WITH CLIENT BEFORE LAUNCH.
  phone: "301-624-5999",
  phoneHref: "tel:+13016245999",
  fax: "301-624-5997",
  email: "info@frederickfamily.dental",
  address: {
    street: "1709 Rosemont Ave",
    city: "Frederick",
    state: "MD",
    zip: "21702",
    note: "A red brick, stand-alone building.",
  },
  hours: [
    { day: "Monday", hours: "9:00 AM – 4:00 PM" },
    { day: "Tuesday", hours: "10:00 AM – 5:00 PM" },
    { day: "Wednesday", hours: "10:00 AM – 4:00 PM" },
    { day: "Thursday", hours: "10:00 AM – 5:00 PM" },
    { day: "Friday", hours: "10:00 AM – 5:00 PM" },
    { day: "Saturday", hours: "10:00 AM – 3:00 PM" },
    { day: "Sunday", hours: "Closed" },
  ],
  hoursNote: "Walk-ins are welcome Monday – Thursday.",
  hoursSummary: "Open 6 days a week (Mon–Sat) · Closed Sundays",
};

export const nav = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export const team = [
  {
    name: "Dr. Jarrett",
    role: "Dentist",
    bio: "20+ years of dental healthcare experience. Believes continuing education is key to great patient care, and enjoys spending time with family outside the office.",
    credentials: [
      "B.S., Augustana College",
      "DDS, Howard University College of Dentistry",
    ],
    // Adapted from the audit's third-person "believes continuing education
    // is key to patient care" into a first-person pull-quote for the
    // Doctor Spotlight layout. This is a paraphrase, not a verbatim
    // quotation — confirm exact wording with Dr. Jarrett before treating
    // it as something he actually said.
    quote: "Continuing education is key to great patient care.",
  },
  {
    name: "Myra",
    role: "Dental Assistant",
    bio: "Part of the Frederick Family Dental team helping patients feel comfortable and cared for at every visit.",
    credentials: [],
    quote: null,
  },
];

// Trust-signal stats derived directly from source facts (no invented
// numbers, ratings, or review counts — the audit has none).
export const trustSignals = [
  { label: "20+ Years", detail: "of dental care experience", icon: "verified" },
  { label: "Walk-Ins Welcome", detail: "Monday through Thursday", icon: "directions_walk" },
  { label: "Most Insurance", detail: "plus CareCredit financing", icon: "health_and_safety" },
  { label: "6 Days a Week", detail: "open Monday through Saturday", icon: "schedule" },
];

export const serviceCategories = {
  restorative: { label: "Restorative", icon: "dentistry" },
  cosmetic: { label: "Cosmetic", icon: "auto_fix_high" },
  orthodontic: { label: "Orthodontic", icon: "straighten" },
  preventive: { label: "Preventive", icon: "clean_hands" },
};

// The 10 treatments named in the source. Descriptions marked `generated: true`
// are brief, standard clinical descriptions written for this rebuild (the
// source only listed the name) — not a claim about this practice specifically.
export const services = [
  {
    name: "Fillings / Restorative",
    description:
      "Repairing decayed or damaged teeth with tooth-colored filling material to restore strength and function.",
    generated: true,
    icon: "dentistry",
    category: "restorative",
  },
  {
    name: "Root Canal",
    description:
      "Removing infected or inflamed tissue from inside a tooth to relieve pain and save the natural tooth.",
    generated: true,
    icon: "healing",
    category: "restorative",
  },
  {
    name: "Tooth Straightening",
    description:
      "Gradually shifting misaligned teeth into a straighter, more functional position.",
    generated: true,
    icon: "straighten",
    category: "orthodontic",
  },
  {
    name: "Tooth Whitening",
    description:
      "Professional whitening treatment to brighten your smile and reduce surface stains.",
    generated: true,
    icon: "auto_fix_high",
    category: "cosmetic",
  },
  {
    name: "Dentures",
    description:
      "Custom-fitted removable replacements for missing teeth that restore chewing ability and appearance.",
    generated: true,
    icon: "medical_services",
    category: "restorative",
  },
  {
    name: "Extractions",
    description:
      "Safe removal of a severely damaged, decayed, or problematic tooth when it can't be saved.",
    generated: true,
    icon: "remove_circle",
    category: "restorative",
  },
  {
    name: "Bridges",
    description:
      "A fixed replacement that fills the gap left by one or more missing teeth, anchored to neighboring teeth.",
    generated: true,
    icon: "link",
    category: "restorative",
  },
  {
    name: "Crowns",
    description:
      "A custom cap placed over a damaged or weakened tooth to restore its shape, strength, and appearance.",
    generated: true,
    icon: "workspace_premium",
    category: "restorative",
  },
  {
    name: "Dental Sealants",
    description:
      "A thin protective coating applied to the chewing surfaces of back teeth to help prevent decay.",
    generated: true,
    icon: "shield",
    category: "preventive",
  },
  {
    name: "Gum Disease Treatment",
    description:
      "Care to treat and manage gum infection and inflammation, helping protect teeth and supporting bone.",
    generated: true,
    icon: "monitor_heart",
    category: "preventive",
  },
  // No extractable real copy exists for Fastbraces (image-only on source
  // site) — listed by name only, per client direction, with no elaboration.
  {
    name: "Fastbraces",
    description: null,
    generated: false,
    icon: "bolt",
    category: "orthodontic",
  },
];

export const insurance = {
  intro: "We currently accept most insurance plans and CareCredit financing.",
  plans: ["MetLife", "Delta Dental", "CareFirst BlueCross", "Guardian", "& more"],
  financing: "CareCredit financing accepted.",
};

export const newPatientSteps = [
  {
    title: "Comprehensive Exam",
    description:
      "A thorough exam of your teeth and gums — the more detail you can share about your dental history, the easier it is for us to diagnose and plan your care.",
  },
  {
    title: "X-Ray",
    description:
      "X-rays help diagnose issues not visible to the eye, like decay, abscesses, impacted teeth, or jawbone damage, and may include a panoramic radiograph for a complete view of the jaw.",
  },
  {
    title: "Treatment Plan",
    description:
      "A customized plan based on your exam and x-ray results. We'll make sure you're clear on what to expect before moving forward.",
  },
  {
    title: "Smile Reminders",
    description:
      "Appointment reminders by email or text, plus driving directions if it's your first time visiting our office.",
  },
];

export const newPatientIntro =
  "Finding a new dental office can often be a challenge. Fortunately, Frederick Family Dental in Frederick, Maryland can satisfy all your dental needs. Here's what to expect from your first visit.";

export const newPatientClosing =
  "Regular visits to your dentist are vital to optimal oral health. Take the first step toward a healthy, beautiful smile by scheduling a new patient appointment.";

// Real forms exist on the source site (English + Spanish) but the PDF files
// themselves were not part of the content audit — buttons are shown as
// disabled placeholders until the client supplies the actual files.
export const newPatientForms = [
  { label: "New Patient Forms (English)", available: false },
  { label: "Nuevo Paciente Formulario (Español)", available: false },
];

export const homeCopy = {
  heroBadge: "Walk-ins welcome Mon–Thu",
  heroHeading: "Leave with a warm smile.",
  heroSubheading:
    "Dr. Jarrett and staff are dedicated to providing you with a pleasant visit and results you're proud to show off.",
  missionLine: "We put your family's dental health and well-being first.",
  introBlurb:
    "Our administrative staff is ready to answer any questions you have about scheduling, financing, and insurance.",
};

// Replaces Stitch's fabricated "Sensory Dental Pillars" (heated suites, tea
// bar, binaural soundscapes) — none of that exists in the audit. Same
// 3-pillar visual structure, rebuilt entirely from real practice facts.
export const whyChooseUs = {
  eyebrow: "Why Patients Choose Us",
  heading: "A straightforward, welcoming first visit.",
  subheading:
    "No surprises — just a clear process, flexible scheduling, and help navigating insurance.",
  pillars: [
    {
      icon: "fact_check",
      title: "A Clear First-Visit Process",
      description:
        "A comprehensive exam, x-rays, and a treatment plan you understand before any work begins.",
      note: "4-step new patient process",
    },
    {
      icon: "event_available",
      title: "Flexible Scheduling",
      description:
        "Open six days a week, Monday through Saturday, with walk-ins welcome Monday through Thursday.",
      note: "No long waits for a first appointment",
    },
    {
      icon: "payments",
      title: "Insurance & Financing Made Simple",
      description:
        "We accept most insurance plans plus CareCredit financing, and our staff can walk you through your options.",
      note: "MetLife, Delta Dental, CareFirst, Guardian & more",
    },
  ],
};

export const bookingCta = {
  eyebrow: "Reserve Your Visit",
  heading: "Ready to book your visit?",
  subheading: newPatientClosing,
};

export const contactForm = {
  heading: "Send Us a Message",
  fields: ["Name", "Email", "Subject", "Message"],
  checkboxLabel: "Check here to receive email updates",
};

// Footer link groups — every destination here is a real page/section in
// this build. Stitch's "Sanctuary" column (spa philosophy, aromatherapy
// menu) and "Transparent Pricing" link had no real-content equivalent and
// were dropped rather than pointed at nothing.
export const footerLinks = {
  services: [
    { label: "Restorative", to: "/services" },
    { label: "Cosmetic", to: "/services" },
    { label: "Orthodontic", to: "/services" },
    { label: "Preventive", to: "/services" },
  ],
  practice: [
    { label: "About Dr. Jarrett", to: "/about" },
    { label: "Your First Visit", to: "/about" },
    { label: "Location & Hours", to: "/about" },
  ],
  patients: [
    { label: "Book an Appointment", to: "/contact" },
    { label: "Insurance & Financing", to: "/contact" },
    { label: "New Patient Forms", to: "/about" },
  ],
};
