/**
 * NUKRITION — "The Quiet Table"
 * Warm editorial minimalism: ivory canvas, deep olive ink, espresso text,
 * terracotta CTA. Fraunces display serif + Outfit sans. Arch motif around
 * the founder portrait. Asymmetric split hero, calm staggered entrances.
 */
import { toast } from "sonner";
import { ArrowRight, Sparkle } from "lucide-react";

const PORTRAIT = "/manus-storage/kriti-38_08fabde0.webp";
const LOGO = "/manus-storage/nukrition-logo_4a7ca61a.png";

function comingSoon() {
  toast("This section is coming soon", {
    description: "The hero is the first piece of the new nukrition.com.",
  });
}

function Nav() {
  return (
    <header className="relative z-30">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <a href="/" className="flex items-center gap-3">
          <img src={LOGO} alt="Nukrition mark" className="h-10 w-10 object-contain" />
          <span className="font-display text-2xl font-medium tracking-tight text-espresso">
            nukrition<span className="text-clay">.</span>
          </span>
        </a>
        <nav className="hidden items-center gap-10 md:flex">
          {["The Method", "Programs", "Journal", "About"].map((item) => (
            <button
              key={item}
              onClick={comingSoon}
              className="micro-label text-espresso/70 transition-colors duration-200 hover:text-olive"
            >
              {item}
            </button>
          ))}
        </nav>
        <button
          onClick={comingSoon}
          className="micro-label hidden rounded-full border border-espresso/25 px-6 py-3 text-espresso transition-all duration-200 hover:border-olive hover:bg-olive hover:text-primary-foreground active:scale-[0.97] md:block"
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
        className="font-display pointer-events-none absolute -bottom-10 left-0 select-none text-[22vw] leading-none font-light text-espresso/[0.04] lg:-bottom-16"
      >
        nourish
      </span>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 pt-10 pb-20 lg:grid-cols-[7fr_5fr] lg:gap-8 lg:px-10 lg:pt-16 lg:pb-28">
        {/* ---- Left: editorial copy ---- */}
        <div className="relative z-20">
          <div className="rise rise-1 flex items-center gap-4">
            <span className="h-px w-12 bg-olive/60" />
            <p className="micro-label text-olive">
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
                className="absolute -bottom-2 left-0 w-full text-clay/70"
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
              onClick={comingSoon}
              className="group inline-flex items-center gap-3 rounded-full bg-olive px-8 py-4 text-sm font-medium tracking-wide text-primary-foreground shadow-[0_18px_40px_-16px_oklch(0.42_0.07_130/0.55)] transition-all duration-200 hover:bg-olive-deep active:scale-[0.97]"
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
          <div className="rise rise-5 mt-14 border-t border-espresso/10 pt-7">
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
            className="arch absolute -top-6 -right-5 bottom-10 left-10 border border-olive/30 lg:-right-8 lg:left-14"
          />
          {/* solid sand arch offset */}
          <div
            aria-hidden
            className="arch absolute -bottom-4 -left-4 h-1/2 w-2/3 bg-sand"
          />

          <figure className="hero-photo-reveal arch group relative overflow-hidden shadow-[0_40px_80px_-30px_oklch(0.31_0.035_55/0.45)]">
            <img
              src={PORTRAIT}
              alt="Founder of Nukrition enjoying a coffee at a warm wooden table"
              className="aspect-[4/5] w-full object-cover object-[62%_30%] transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
            {/* soft bottom veil for the caption */}
            <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-espresso/70 via-espresso/20 to-transparent" />
            <figcaption className="absolute inset-x-0 bottom-0 p-6">
              <p className="font-display text-xl font-medium text-white">
                Kriti, Founder &amp; Lead Nutritionist
              </p>
              <p className="micro-label mt-1 text-white/75">
                MSc Clinical Nutrition
              </p>
            </figcaption>
          </figure>

          {/* floating credential card */}
          <div className="drift absolute -left-6 top-16 hidden max-w-[220px] items-start gap-3 rounded-lg border border-espresso/10 bg-card/95 p-4 shadow-[0_24px_50px_-20px_oklch(0.31_0.035_55/0.35)] backdrop-blur-sm sm:flex lg:-left-12">
            <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-olive/10">
              <Sparkle className="h-4 w-4 text-olive" />
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
    <div className="grain relative min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
      </main>
    </div>
  );
}
