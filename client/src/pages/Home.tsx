/**
 * NUKRITION — "The Quiet Table"
 * DARK VARIANT: deep forest-green canvas, ivory typography, soft sage brand
 * ink, warm gold-clay accents. Fraunces display serif + Outfit sans. Arch
 * motif around the founder portrait. Asymmetric split hero, calm entrances.
 */
import { toast } from "sonner";
import { ArrowRight, Sparkle, Quote } from "lucide-react";

const PORTRAIT = "/manus-storage/kriti-38_08fabde0.webp";
const PORTRAIT_ABOUT = "/manus-storage/kritinukrition-116_c155ad0c.jpg";
const LOGO = "/manus-storage/nukrition-logo_4a7ca61a.png";
const CALENDLY = "https://calendly.com/kritipsingh/30min";

function openBooking() {
  window.open(CALENDLY, "_blank", "noopener,noreferrer");
}

function comingSoon() {
  toast("This section is coming soon", {
    description: "The hero is the first piece of the new nukrition.com.",
  });
}

function scrollToAbout() {
  document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
}

function Nav() {
  return (
    <header className="relative z-30">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <a href="/" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-espresso/95 shadow-[0_6px_18px_-6px_oklch(0.1_0.03_152/0.8)]">
            <img src={LOGO} alt="Nukrition mark" className="h-7 w-7 object-contain" />
          </span>
          <span className="font-display text-2xl font-medium tracking-tight text-espresso">
            nukrition<span className="text-clay">.</span>
          </span>
        </a>
        <nav className="hidden items-center gap-10 md:flex">
          {["The Method", "Programs", "Journal"].map((item) => (
            <button
              key={item}
              onClick={comingSoon}
              className="micro-label text-espresso/70 transition-colors duration-200 hover:text-olive"
            >
              {item}
            </button>
          ))}
          <button
            onClick={scrollToAbout}
            className="micro-label text-espresso/70 transition-colors duration-200 hover:text-olive"
          >
            About Me
          </button>
        </nav>
        <button
          onClick={openBooking}
          className="micro-label hidden rounded-full border border-espresso/30 px-6 py-3 text-espresso transition-all duration-200 hover:border-clay hover:bg-clay hover:text-primary-foreground active:scale-[0.97] md:block"
        >
          Book a Consultation
        </button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* faint oversized watermark word */}
      <span
        aria-hidden
        className="font-display pointer-events-none absolute -bottom-10 left-0 select-none text-[22vw] leading-none font-light text-espresso/[0.05] lg:-bottom-16"
      >
        nourish
      </span>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 pt-10 pb-20 lg:grid-cols-[7fr_5fr] lg:gap-8 lg:px-10 lg:pt-16 lg:pb-28">
        {/* ---- Left: editorial copy ---- */}
        <div className="relative z-20">
          <div className="rise rise-1 flex items-center gap-4">
            <span className="h-px w-12 bg-clay/70" />
            <p className="micro-label text-clay">
              Private Nutrition Consultancy
            </p>
          </div>

          <h1 className="font-display rise rise-2 mt-7 text-[2.9rem] leading-[1.04] font-light tracking-tight text-espresso sm:text-6xl lg:text-[4.6rem]">
            Nutrition, tailored
            <br />
            like a{" "}
            <em className="relative font-normal text-olive italic">
              bespoke suit
              <svg
                aria-hidden
                viewBox="0 0 220 12"
                className="absolute -bottom-2 left-0 w-full text-clay/80"
                preserveAspectRatio="none"
              >
                <path
                  d="M3 9C60 3 160 3 217 7"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </em>
            .
          </h1>

          <p className="rise rise-3 mt-8 max-w-xl text-lg leading-relaxed font-light text-espresso/75">
            One-to-one consultation for people who invest in themselves. No
            templates, no fads — a protocol built around your bloodwork, your
            calendar, and the way you actually live.
          </p>

          <div className="rise rise-4 mt-10 flex flex-wrap items-center gap-5">
            <button
              onClick={openBooking}
              className="group inline-flex items-center gap-3 rounded-full bg-clay px-8 py-4 text-sm font-medium tracking-wide text-primary-foreground shadow-[0_20px_45px_-16px_oklch(0.72_0.11_65/0.5)] transition-all duration-200 hover:bg-[oklch(0.78_0.1_65)] active:scale-[0.97]"
            >
              Book a Private Consultation
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
            <button
              onClick={comingSoon}
              className="micro-label border-b border-espresso/30 pb-1 text-espresso transition-colors duration-200 hover:border-olive hover:text-olive"
            >
              Explore the Method
            </button>
          </div>

          {/* trust strip */}
          <div className="rise rise-5 mt-14 border-t border-espresso/15 pt-7">
            <div className="flex flex-wrap items-center gap-x-12 gap-y-6">
              <div>
                <p className="font-display text-3xl font-medium text-espresso">
                  12+
                </p>
                <p className="micro-label mt-1.5 text-espresso/50">
                  Years in practice
                </p>
              </div>
              <div>
                <p className="font-display text-3xl font-medium text-espresso">
                  400+
                </p>
                <p className="micro-label mt-1.5 text-espresso/50">
                  Private clients
                </p>
              </div>
              <div>
                <p className="font-display text-3xl font-medium text-espresso">
                  1:1
                </p>
                <p className="micro-label mt-1.5 text-espresso/50">
                  Always personal
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ---- Right: arched portrait ---- */}
        <div className="relative z-10 mx-auto w-full max-w-md lg:max-w-none">
          {/* outlined arch echo behind */}
          <div
            aria-hidden
            className="arch absolute -top-6 -right-5 bottom-10 left-10 border border-clay/40 lg:-right-8 lg:left-14"
          />
          {/* solid raised-panel arch offset */}
          <div
            aria-hidden
            className="arch absolute -bottom-4 -left-4 h-1/2 w-2/3 bg-[oklch(0.36_0.05_146)]"
          />

          <figure className="hero-photo-reveal arch group relative overflow-hidden ring-1 ring-espresso/15 shadow-[0_50px_100px_-30px_oklch(0.12_0.03_152/0.9)]">
            <img
              src={PORTRAIT}
              alt="Founder of Nukrition enjoying a coffee at a warm wooden table"
              className="aspect-[4/5] w-full object-cover object-[62%_30%] transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
            {/* soft bottom veil for the caption */}
            <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[oklch(0.16_0.03_152/0.85)] via-[oklch(0.16_0.03_152/0.3)] to-transparent" />
            <figcaption className="absolute inset-x-0 bottom-0 p-6">
              <p className="font-display text-xl font-medium text-white">
                Kriti, Founder of Nukrition
              </p>
              <p className="micro-label mt-1 text-white/75">
                Health Coach &amp; Pharmacist
              </p>
            </figcaption>
          </figure>

          {/* floating credential card */}
          <div className="drift absolute -left-6 top-16 hidden max-w-[220px] items-start gap-3 rounded-lg border border-espresso/15 bg-card/95 p-4 shadow-[0_30px_60px_-20px_oklch(0.1_0.03_152/0.8)] backdrop-blur-sm sm:flex lg:-left-12">
            <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-clay/15">
              <Sparkle className="h-4 w-4 text-clay" />
            </span>
            <p className="text-sm leading-snug text-espresso/80">
              Protocols grounded in{" "}
              <span className="font-medium text-espresso">
                clinical evidence
              </span>
              , delivered with warmth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="grain forest-canvas relative min-h-screen">
      <Nav />
      <main>
        <Hero />
        <About />
      </main>
      <footer className="border-t border-espresso/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row lg:px-10">
          <p className="micro-label text-espresso/40">
            © {new Date().getFullYear()} Nukrition — Private Nutrition Consultancy
          </p>
          <button
            onClick={comingSoon}
            className="micro-label text-espresso/50 transition-colors duration-200 hover:text-clay"
          >
            hello@nukrition.com
          </button>
        </div>
      </footer>
    </div>
  );
}

/* ---------------------------------------------------------------- */
/* ABOUT ME — closing section. Same "Quiet Table" dark-forest system: */
/* arch motif, gold-clay hairlines, Fraunces display, calm reveals.   */
/* ---------------------------------------------------------------- */
function About() {
  return (
    <section id="about" className="relative overflow-hidden pt-8 pb-24 lg:pt-16 lg:pb-32">
      {/* section furniture */}
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-center gap-4">
          <span className="h-px w-12 bg-clay/70" />
          <p className="micro-label text-clay">About Me</p>
          <span className="h-px flex-1 bg-espresso/10" />
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 pt-12 lg:grid-cols-[5fr_7fr] lg:gap-20 lg:px-10">
        {/* ---- Left: arched portrait, maximum attention ---- */}
        <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
          {/* outlined arch echo, mirrored to the left this time */}
          <div
            aria-hidden
            className="arch absolute -top-6 -left-5 bottom-10 right-10 border border-clay/40 lg:-left-8 lg:right-14"
          />
          {/* raised panel offset, mirrored */}
          <div
            aria-hidden
            className="arch absolute -bottom-4 -right-4 h-1/2 w-2/3 bg-[oklch(0.36_0.05_146)]"
          />
          <figure className="arch group relative overflow-hidden ring-1 ring-espresso/15 shadow-[0_50px_100px_-30px_oklch(0.12_0.03_152/0.9)]">
            <img
              src={PORTRAIT_ABOUT}
              alt="Kriti, founder of Nukrition, in a deep green blouse"
              className="aspect-[3/4] w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[oklch(0.16_0.03_152/0.85)] via-[oklch(0.16_0.03_152/0.25)] to-transparent" />
            <figcaption className="absolute inset-x-0 bottom-0 p-6">
              <p className="font-display text-2xl font-medium text-white">Kriti</p>
              <p className="micro-label mt-1 text-white/75">
                Health Coach &amp; Pharmacist · Founder, Nukrition
              </p>
            </figcaption>
          </figure>
        </div>

        {/* ---- Right: rewritten editorial copy ---- */}
        <div className="relative">
          <h2 className="font-display text-4xl leading-[1.08] font-light tracking-tight text-espresso sm:text-5xl lg:text-[3.4rem]">
            The science of medicine.
            <br />
            The patience of{" "}
            <em className="font-normal text-olive italic">real change</em>.
          </h2>

          <div className="mt-8 max-w-2xl space-y-5 text-lg leading-relaxed font-light text-espresso/75">
            <p>
              I'm Kriti — a health coach and pharmacist, certified in
              nutrition and health coaching at the Irish Institute of
              Nutrition &amp; Health. My work sits at the intersection of
              clinical science and daily life: I specialise in women's
              hormonal health, helping accomplished women feel energised,
              balanced, and at home in their own bodies again.
            </p>
            <p>
              This practice began with my own hormones. Navigating that
              imbalance taught me what no textbook could — that lasting
              wellness is built at the root, not by chasing symptoms. It's why
              every protocol I design starts with the whole picture: your
              biochemistry, your calendar, and the life you actually lead.
            </p>
            <p>
              With every client, I bring together evidence-based nutrition,
              considered lifestyle design, and honest mindset work — a
              personal, unhurried partnership that restores energy, digestion,
              hormonal balance, and above all, confidence.
            </p>
          </div>

          {/* philosophy pull-quote */}
          <blockquote className="relative mt-10 max-w-xl border-l-2 border-clay/60 pl-6">
            <Quote aria-hidden className="absolute -top-3 -left-3 h-6 w-6 rounded-full bg-clay/15 p-1 text-clay" />
            <p className="font-display text-2xl leading-snug font-light text-espresso italic">
              "One step at a time, for a better way of life."
            </p>
            <p className="micro-label mt-3 text-espresso/50">
              My coaching philosophy — progress, never perfection
            </p>
          </blockquote>

          <div className="mt-10 flex flex-wrap items-center gap-5">
            <button
              onClick={openBooking}
              className="group inline-flex items-center gap-3 rounded-full bg-clay px-8 py-4 text-sm font-medium tracking-wide text-primary-foreground shadow-[0_20px_45px_-16px_oklch(0.72_0.11_65/0.5)] transition-all duration-200 hover:bg-[oklch(0.78_0.1_65)] active:scale-[0.97]"
            >
              Work With Me
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
