/**
 * NUKRITION — "The Quiet Table"
 * DARK VARIANT: deep forest-green canvas, ivory typography, soft sage brand
 * ink, warm gold-clay accents. Fraunces display serif + Outfit sans. Arch
 * motif around the founder portrait. Asymmetric split hero, calm entrances.
 */
import { toast } from "sonner";
import {
  ArrowRight,
  Sparkle,
  Quote,
  Stethoscope,
  CalendarCheck,
  LayoutDashboard,
  MonitorSmartphone,
  ShieldCheck,
  MessageCircleHeart,
  Check,
} from "lucide-react";
import { useEffect, useRef } from "react";
import SiteNav from "@/components/SiteNav";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const PORTRAIT = "/manus-storage/kriti-38_08fabde0.webp";
const PORTRAIT_ABOUT = "/manus-storage/kritinukrition-116_c155ad0c.jpg";
const LOGO = "/manus-storage/nukrition-logo_4a7ca61a.png";
const CALENDLY = "https://calendly.com/kritipsingh/30min";

/* Calendly popup widget — script + styles loaded lazily on first use.
   Brand-tinted via URL params (forest bg, ivory text, clay accent). */
declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

const CALENDLY_URL = `${CALENDLY}?background_color=1e2a1f&text_color=f2efe6&primary_color=c98a4b&hide_gdpr_banner=1`;

let calendlyLoading: Promise<void> | null = null;
function loadCalendly(): Promise<void> {
  if (window.Calendly) return Promise.resolve();
  if (!calendlyLoading) {
    calendlyLoading = new Promise<void>((resolve, reject) => {
      const css = document.createElement("link");
      css.rel = "stylesheet";
      css.href = "https://assets.calendly.com/assets/external/widget.css";
      document.head.appendChild(css);
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      script.onload = () => resolve();
      script.onerror = () => {
        calendlyLoading = null;
        reject(new Error("Calendly failed to load"));
      };
      document.head.appendChild(script);
    });
  }
  return calendlyLoading;
}

function openBooking() {
  loadCalendly()
    .then(() => window.Calendly?.initPopupWidget({ url: CALENDLY_URL }))
    .catch(() => {
      // graceful fallback if the script is blocked
      window.open(CALENDLY, "_blank", "noopener,noreferrer");
    });
}

/* Warm the script in the background shortly after page load */
function useCalendlyPrefetch() {
  useEffect(() => {
    const t = window.setTimeout(() => {
      loadCalendly().catch(() => {});
    }, 2500);
    return () => window.clearTimeout(t);
  }, []);
}


/* Scroll-triggered reveal — attaches IntersectionObserver to a container ref */
function useScrollReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  useEffect(() => {
    const container = ref.current;
    if (!container) return;
    const targets = Array.from(container.querySelectorAll<HTMLElement>(".scroll-reveal"));
    if (!targets.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const el = e.target as HTMLElement;
            const delay = el.dataset.revealDelay ?? "0";
            el.style.transitionDelay = `${delay}ms`;
            el.classList.add("in-view");
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.12 }
    );
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);
  return ref;
}
function comingSoon() {
  toast("This section is coming soon", {
    description: "The hero is the first piece of the new nukrition.com.",
  });
}

function scrollToAbout() {
  document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
}

function scrollToProgram() {
  document.getElementById("program")?.scrollIntoView({ behavior: "smooth" });
}

function scrollToMethod() {
  document.getElementById("method")?.scrollIntoView({ behavior: "smooth" });
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
          <button
            onClick={scrollToMethod}
            className="micro-label text-espresso/70 transition-colors duration-200 hover:text-olive"
          >
            The Method
          </button>
          <button
            onClick={scrollToProgram}
            className="micro-label text-espresso/70 transition-colors duration-200 hover:text-olive"
          >
            The Program
          </button>
          <a
            href="/journal"
            className="micro-label text-espresso/70 transition-colors duration-200 hover:text-olive"
          >
            The Journal
          </a>
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
    <section className="relative overflow-hidden pt-16">
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
              onClick={scrollToMethod}
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
  useCalendlyPrefetch();
  return (
    <div className="grain forest-canvas relative min-h-screen">
      <SiteNav page="home" />
      <main>
        <Hero />
        <Method />
        <Program />
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
/* THE METHOD — Assess → Design → Refine. Same "Quiet Table" system:  */
/* numbered editorial steps, gold hairlines, Fraunces, arch echoes.   */
/* ---------------------------------------------------------------- */
const STEPS = [
  {
    number: "01",
    name: "Assess",
    title: "We begin with the whole picture",
    body: "A private clinical intake: your medical history, bloodwork, lifestyle, and the goals that actually matter to you. No assumptions, no generic templates — just a careful, unhurried reading of where your body is today.",
  },
  {
    number: "02",
    name: "Design",
    title: "A protocol built for one",
    body: "From that picture, I design your personal protocol — nutrition, lifestyle rhythm, and mindset anchors — engineered around your biochemistry and your calendar, then set up in your private portal.",
  },
  {
    number: "03",
    name: "Refine",
    title: "We adjust as your body responds",
    body: "Through our 1:1 sessions, the protocol evolves with your results. Progress is tracked on your dashboard, questions are answered between sessions, and small refinements compound into lasting change.",
  },
];

function Method() {
  const sectionRef = useScrollReveal<HTMLDivElement>();
  return (
    <section id="method" ref={sectionRef} className="relative overflow-hidden pt-8 pb-10 lg:pt-16 lg:pb-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-center gap-4">
          <span className="h-px w-12 bg-clay/70" />
          <p className="micro-label text-clay">The Method</p>
          <span className="h-px flex-1 bg-espresso/10" />
        </div>

        <div className="grid grid-cols-1 gap-10 pt-12 lg:grid-cols-[5fr_7fr] lg:gap-20">
          <div>
            <h2 className="font-display text-4xl leading-[1.08] font-light tracking-tight text-espresso sm:text-5xl lg:text-[3.4rem]">
              Three moves.
              <br />
              No <em className="font-normal text-olive italic">guesswork</em>.
            </h2>
            <p className="mt-7 max-w-md text-lg leading-relaxed font-light text-espresso/75">
              Every engagement follows the same quiet discipline — assess
              honestly, design precisely, refine patiently. It is how clinical
              rigour becomes a way of life you can actually keep.
            </p>
          </div>

          <div className="space-y-0">
            {STEPS.map(({ number, name, title, body }, i) => (
              <div
                key={number}
                className="scroll-reveal group grid grid-cols-[auto_1fr] gap-6 border-t border-espresso/10 py-8 transition-colors duration-300 hover:border-clay/50 sm:gap-10"
                data-reveal-delay={String(i * 100)}
              >
                <div className="flex flex-col items-start">
                  <span className="font-display text-5xl font-light text-clay/60 transition-colors duration-300 group-hover:text-clay">
                    {number}
                  </span>
                  <span className="micro-label mt-2 text-olive">{name}</span>
                </div>
                <div>
                  <h3 className="font-display text-2xl font-medium text-espresso">
                    {title}
                  </h3>
                  <p className="mt-3 max-w-xl leading-relaxed font-light text-espresso/70">
                    {body}
                  </p>
                </div>
              </div>
            ))}
            <div className="border-t border-espresso/10" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */
/* THE PROGRAM — signature 3-month offer. Same "Quiet Table" system:  */
/* gold-clay hairlines, Fraunces display, arch motif, calm restraint. */
/* ---------------------------------------------------------------- */
const PILLARS = [
  {
    icon: Stethoscope,
    title: "Built on your medical history",
    body: "Every protocol begins with a clinical review of your history and current health picture — supported by a state-of-the-art nutrition platform exclusive to Nukrition.",
  },
  {
    icon: CalendarCheck,
    title: "Three months, side by side",
    body: "A structured 3-month programme of private 1:1 sessions — enough time to change biochemistry and build habits that hold, without the pressure of a quick fix.",
  },
  {
    icon: MonitorSmartphone,
    title: "Your private client portal",
    body: "An easy-to-use online portal, exclusive to you, where your goals, session notes, and guidance from your nutritionist live in one calm, organised place.",
  },
  {
    icon: LayoutDashboard,
    title: "A dashboard that keeps you honest",
    body: "A clean, considered dashboard tracks your progress against your wellness goals — so momentum is visible, week after week.",
  },
  {
    icon: MessageCircleHeart,
    title: "Support between sessions",
    body: "Questions don't wait for appointments. Message through the portal and receive considered guidance as your protocol evolves.",
  },
  {
    icon: ShieldCheck,
    title: "EU-compliant privacy",
    body: "Your health data is handled with EU-compliant security and privacy standards — protected with the same discretion as the consultation itself.",
  },
];

function Program() {
  const sectionRef = useScrollReveal<HTMLDivElement>();
  return (
    <section id="program" ref={sectionRef} className="relative overflow-hidden pt-8 pb-10 lg:pt-16 lg:pb-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* section furniture */}
        <div className="flex items-center gap-4">
          <span className="h-px w-12 bg-clay/70" />
          <p className="micro-label text-clay">The Program</p>
          <span className="h-px flex-1 bg-espresso/10" />
        </div>

        <div className="grid grid-cols-1 gap-10 pt-12 lg:grid-cols-[7fr_5fr] lg:gap-20">
          <div>
            <h2 className="font-display text-4xl leading-[1.08] font-light tracking-tight text-espresso sm:text-5xl lg:text-[3.4rem]">
              Twelve weeks that change
              <br />
              the next{" "}
              <em className="font-normal text-olive italic">twelve years</em>.
            </h2>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed font-light text-espresso/75">
              The Nukrition Program is a private, 3-month partnership — not a
              meal plan in a PDF. It is built on your medical history, guided
              in person through 1:1 sessions, and carried between sessions by
              a platform designed exclusively for this work. Most clients
              spend more each month on supplements that were never designed
              for them; this is the considered alternative.
            </p>
          </div>

          {/* pricing card */}
          <div className="relative">
            <div
              aria-hidden
              className="arch absolute -top-4 -right-4 bottom-8 left-8 border border-clay/30"
            />
            <div className="relative rounded-lg border border-espresso/15 bg-card/95 p-8 shadow-[0_40px_80px_-30px_oklch(0.1_0.03_152/0.8)] backdrop-blur-sm">
              <p className="micro-label text-clay">Your investment</p>
              <div className="mt-4 flex items-end gap-3">
                <span className="font-display text-6xl font-light text-espresso">
                  €450
                </span>
                <span className="mb-2 text-sm font-light text-espresso/60">
                  + VAT
                </span>
              </div>
              <p className="mt-2 text-sm font-light text-espresso/60">
                Once, or in 3 equal instalments of €150 + VAT
              </p>
              <div className="mt-6 space-y-3 border-t border-espresso/10 pt-6">
                {[
                  "3 months of private 1:1 sessions",
                  "Clinical intake & medical history review",
                  "Exclusive client portal & dashboard",
                  "Personalised, evolving protocol",
                  "Guidance between sessions",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-olive" />
                    <p className="text-sm font-light text-espresso/80">{item}</p>
                  </div>
                ))}
              </div>
              <button
                onClick={openBooking}
                className="group mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full bg-clay px-8 py-4 text-sm font-medium tracking-wide text-primary-foreground shadow-[0_20px_45px_-16px_oklch(0.72_0.11_65/0.5)] transition-all duration-200 hover:bg-[oklch(0.78_0.1_65)] active:scale-[0.97]"
              >
                Begin With a Consultation
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
              <p className="mt-4 text-center text-xs font-light text-espresso/50">
                Less than €5 a day — for a body you live in every day.
              </p>
            </div>
          </div>
        </div>

        {/* pillars grid */}
        <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map(({ icon: Icon, title, body }, i) => (
            <div
              key={title}
              className="scroll-reveal group border-t border-espresso/10 pt-6 transition-colors duration-300 hover:border-clay/50"
              data-reveal-delay={String(i * 80)}
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-olive/10 transition-colors duration-300 group-hover:bg-clay/15">
                <Icon className="h-5 w-5 text-olive transition-colors duration-300 group-hover:text-clay" />
              </span>
              <h3 className="font-display mt-4 text-xl font-medium text-espresso">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed font-light text-espresso/70">
                {body}
              </p>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div className="mt-20 grid grid-cols-1 gap-10 lg:grid-cols-[4fr_8fr] lg:gap-20">
          <div>
            <p className="micro-label text-clay">Before you begin</p>
            <h3 className="font-display mt-4 text-3xl leading-tight font-light text-espresso sm:text-4xl">
              Questions, answered{" "}
              <em className="font-normal text-olive italic">honestly</em>.
            </h3>
            <p className="mt-4 max-w-sm leading-relaxed font-light text-espresso/70">
              Everything you may want to know before booking. Anything else —
              ask in your consultation.
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map(({ q, a }) => (
              <AccordionItem
                key={q}
                value={q}
                className="border-espresso/10"
              >
                <AccordionTrigger className="font-display py-6 text-left text-lg font-medium text-espresso hover:text-clay hover:no-underline">
                  {q}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-base leading-relaxed font-light text-espresso/70">
                  {a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

      </div>
    </section>
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
const FAQS = [
  {
    q: "Who is the Program for?",
    a: "Primarily women who want to address energy, digestion, and hormonal balance at the root — and who are ready to invest three months in doing it properly. If you are managing a diagnosed condition, we will work alongside your medical team, never instead of it.",
  },
  {
    q: "How do the 1:1 sessions work?",
    a: "We meet privately at a regular rhythm across the three months — online, at times that fit your calendar. Each session reviews your progress on the dashboard, refines your protocol, and sets clear, manageable focus points for the weeks ahead.",
  },
  {
    q: "Can I pay in instalments?",
    a: "Yes. The Program is €450 + VAT, payable once or in 3 equal monthly instalments of €150 + VAT. There is no surcharge for choosing instalments.",
  },
  {
    q: "What happens in the portal between sessions?",
    a: "Your private portal holds your goals, session notes, and guidance from me in one place. You can message questions as they arise and log progress, so no momentum is lost between our conversations.",
  },
  {
    q: "How is my health data protected?",
    a: "All information you share is handled under EU-compliant (GDPR) security and privacy standards, on a platform exclusive to Nukrition. Your data is never sold or shared, and you can request its deletion at any time.",
  },
  {
    q: "What if I'm not sure the Program is right for me?",
    a: "Begin with the consultation. It is a relaxed, no-obligation conversation about your health picture and goals — and an honest assessment of whether the Program will serve you. If it won't, I will say so.",
  },
];
