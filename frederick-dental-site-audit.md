# Frederick Family Dental — Content & Site Audit
Source: https://www.frederickdentalweb.com (crawled 2026-09-14)

This is a full extraction of every page on the current site, plus notes on structure, design, and technical issues — everything needed to rebuild the site with Claude Code without losing any real content.

---

## 1. Site map (all pages found)

| Page | URL | Purpose |
|---|---|---|
| Home | `/home.html` | Landing page, tagline, intro, promo banner, insurance teaser |
| About Us | `/about-us.html` | Dentist bio, staff, office hours, location/map |
| Services | `/services.html` | Wrapper/landing page for services |
| Services (detail) | `/services2.html` | Full treatment list + contact CTA |
| Insurance | `/insurance.html` | Accepted insurance list |
| Contact Us | `/contact-us.html` | Address, phone, fax, email, contact form, map |
| Forms | `/forms.html` | New patient info, first-visit process, downloadable forms (EN/ES) |
| Fastbraces | `/fastbraces.html` | Fastbraces landing (mostly image-only content) |
| Fastbraces (detail) | `/fastbraces2.html` | "Treatable Cases" (mostly image-only content) |

Nav menu appears (inconsistently — see UX notes below) as some combination of:
`Home / About Us / Services / Insurance / Contact Us / Forms` and a separate `Fastbraces` sub-nav.

There's also a "View on Mobile" link on the homepage, implying a separate legacy mobile template — not needed in a modern responsive rebuild.

---

## 2. Business / NAP info (use exactly this on the new site)

- **Name:** Frederick Family Dental
- **Dentist:** Dr. Jarrett — 20+ years of dental healthcare experience. B.S. from Augustana College (Rock Island, IL); DDS from Howard University College of Dentistry (Washington, DC). Believes continuing education is key to patient care. Enjoys spending time with family.
- **Staff:** Myra — Dental Assistant
- **Address:** 1709 Rosemont Ave, Frederick, MD 21702 (described as "a red brick stand alone building")
- **Phone:** 301-624-5999 (also listed as 301-624-5998)
- **Fax:** 301-624-5997
- **Email:** info@frederickfamily.dental
- **Tagline:** "Leave with a warm smile! :)"
- **Copyright:** Frederick Family Dental © 2016 (site is ~10 years old — good justification for a refresh)

### Office hours
| Day | Hours |
|---|---|
| Monday | 9:00 AM – 4:00 PM |
| Tuesday | 10:00 AM – 5:00 PM |
| Wednesday | 10:00 AM – 4:00 PM |
| Thursday | 10:00 AM – 5:00 PM |
| Friday | 10:00 AM – 5:00 PM |
| Saturday | 10:00 AM – 3:00 PM |
| Sunday | Closed |

Note: "Walk ins are welcome Monday – Thursday"

### Insurance accepted
- MetLife
- Delta Dental
- CareFirst BlueCross
- Guardian
- "& more"
- CareCredit financing accepted

---

## 3. Page-by-page content

### Home (`home.html`)
- Header tagline: "Welcome to Frederick Family Dental — Leave with a warm smile! :)"
- Promo graphic/banner: **"4 X-Rays + Exam for $100 — FREE"**-style new-patient special (rendered as a flattened image, not real text — see technical notes)
- Intro blurb: "Dr. Jarrett and staff are dedicated to providing you with a pleasant visit and results that you are proud to show off. Our administrative staff is ready to answer any questions you have about scheduling, financing and insurances."
- Mission line: "Welcome to the Frederick Family Dental Clinic. We put your family's dental health and well being first."
- Insurance teaser card: "We are currently accepting most insurances and Care Credit." + logos (MetLife, Delta Dental, Carefirst BlueCross, Guardian & more)
- Multiple "Read More" links → About Us
- Repeated nav blocks (see UX notes — nav is duplicated 3–4x per page in the current build)

### About Us (`about-us.html`)
- Section heading: "Meet your dentists!"
- Dr. Jarrett bio (see Section 2)
- Staff: Myra – Dental Assistant
- "Our Locations" heading + address + embedded Google Map ("View Larger Map")
- Office hours table (see Section 2)
- Repeats homepage intro blurb about Dr. Jarrett and staff

### Services (`services.html` + `services2.html`)
- Page heading: "Treatments"
- Full service list:
  1. Fillings / Restorative
  2. Root Canal
  3. Tooth Straightening
  4. Tooth Whitening
  5. Dentures
  6. Extractions
  7. Bridges
  8. Crowns
  9. Dental Sealants
  10. Gum Disease Treatment
- CTA block: "Call us today" — Tel: 301-624-5999 / 301-624-5998, Fax: 301-624-5997, info@frederickfamily.dental
- Newsletter signup prompt ("Subscribe to our newsletter") — no visible functioning form found beyond the label

### Insurance (`insurance.html`)
- "We are currently accepting most insurances and Care Credit."
- Insurance logos/list: MetLife, Delta Dental, Carefirst BlueCross, Guardian & more

### Contact Us (`contact-us.html`)
- Heading: "Stop by or Call"
- Address, phone, fax, email (see Section 2)
- Contact form fields: Name*, Email*, Subject*, Message*, "Check here to receive email updates" checkbox
- Heading: "Send Us a Message"
- Embedded Google Map ("View Larger Map")

### Forms (`forms.html`)
- Heading: "New Patients"
- Intro: "Finding a new dental office can often be a challenge. Fortunately, Frederick Family Dental in Frederick, Maryland can satisfy all your dental needs. The following will provide you with a detailed guide outlining what to expect from your first visit to our dental office."
- "Paper Work" section: patients can complete new-patient paperwork before their visit
- Downloadable **New Patient Forms** button (PDF, English)
- Downloadable **Nuevo Paciente Formulario** button (PDF, Spanish) — bilingual support worth keeping
- First-visit process, explained in 4 steps:
  1. **Comprehensive Exam** — thorough exam of teeth and gums; more detail from patient = easier diagnosis
  2. **X-Ray** — diagnoses issues not visible to the eye (decay, abscesses, impacted teeth, jawbone damage); may include a panoramic radiograph for a complete jaw view
  3. **Treatment Plan** — customized plan based on exam + x-ray results; patient should be clear about expectations
  4. **Smile Reminders** — appointment reminders via email/text, plus driving directions for first-time visitors
- Closing CTA: "Regular visits to your dentist are vital to obtaining optimal oral health. Take the first step in achieving a healthy, beautiful smile by scheduling a new patient appointment... Contact our dental office today by calling 301-624-5999."

### Fastbraces (`fastbraces.html` + `fastbraces2.html`)
- Almost entirely image-based — no meaningful extractable body text beyond the "Treatable Cases" heading on the second page.
- **Action needed for rebuild:** the actual Fastbraces marketing copy and case images live inside flattened graphics. Recommend either re-writing generic Fastbraces educational copy (Fastbraces is a real orthodontic brand — fast, low-force teeth-straightening system, alternative to traditional braces) or asking the client for the original creative/copy, since it can't be scraped as text.

---

## 4. Design & UX observations (from screenshots)

- Nav bar uses a jarring rainbow of solid color blocks per tab (purple/blue/green/yellow/orange/red) — dated, inconsistent with any brand palette.
- Hero is a big flat-color banner with a giant "Frederick Family Dental" wordmark graphic.
- Promotional offer ("4 X-Rays + Exam for $100") is a low-res flattened image with drop shadows/bevels — 2010s clip-art style.
- Layout is a fixed-width, non-fluid box (visible horizontal scrollbar) — not responsive; hence the separate "View on Mobile" link, which is itself a legacy pattern modern responsive design replaces entirely.
- Navigation is duplicated multiple times within a single page (looks like remnants of a template with stacked/overlapping nav widgets).
- No visible logo file — "Frederick Family Dental" appears to be styled text, not a graphic logo.

## 5. Technical / SEO issues to fix in the rebuild

- **No meta description** found on any crawled page — hurts search snippets.
- **No favicon** detected.
- **No alt text** on any image (all `img` tags had empty `alt=""`) — accessibility and SEO gap.
- Key content (the promo offer, Fastbraces info) is baked into images instead of real text — invisible to search engines and screen readers.
- Site appears to be a legacy website-builder export (image-heavy, table/box layout, per-page duplicate nav) — rebuilding with semantic HTML/CSS will fix layout, responsiveness, and load time in one pass.
- Phone number is listed inconsistently as both 301-624-5999 and 301-624-5998 — confirm the correct primary number with the client before launch.

---

## 6. Recommended structure for the new site

A clean rebuild could consolidate the 9 legacy pages into a simpler, modern IA:

1. **Home** — hero with real headline text (not an image), current new-patient offer, quick trust signals (years of experience, insurance accepted, hours), CTA to book/call.
2. **About** — Dr. Jarrett bio, staff (Myra), office photos, map, hours.
3. **Services** — the 10 treatments as real content blocks (icon + short description each), plus a dedicated Fastbraces section/page since it's a distinct product.
4. **Insurance & Financing** — accepted plans + CareCredit, kept separate from Services for easy scanning.
5. **New Patients / Forms** — the 4-step first-visit process, downloadable forms (EN/ES), kept as real PDFs linked with descriptive text.
6. **Contact** — address, phone, fax, email, hours, embedded map, and a real working contact form.

All copy above is transcribed directly from the live site so nothing factual needs to be reinvented — only the visual design, layout, and code need to be rebuilt.
