/**
 * NUKRITION — "The Quiet Table"
 * THE JOURNAL — editorial article listing page. Same forest-green canvas,
 * Fraunces display, olive/clay palette. Featured article header + responsive
 * article grid. Placeholder articles ready for real content.
 */
import { ArrowRight, Clock, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

const LOGO = "/manus-storage/nukrition-logo_4a7ca61a.png";
const CALENDLY = "https://calendly.com/kritipsingh/30min";

function openBooking() {
  window.open(CALENDLY, "_blank", "noopener,noreferrer");
}

/* ---- Article data (replace with CMS / real content when ready) ---- */
const FEATURED = {
  category: "Hormonal Health",
  title: "Why Your Energy Crashes at 3pm — and What Your Hormones Are Trying to Tell You",
  excerpt:
    "That mid-afternoon slump is not a willpower problem. It is a signal. Understanding the cortisol-insulin conversation happening in your body is the first step to reclaiming your afternoons — and your evenings.",
  readTime: "7 min read",
  date: "July 2025",
  image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1400&q=80&auto=format&fit=crop",
};

const ARTICLES = [
  {
    category: "Nutrition Science",
    title: "The Gut-Hormone Axis: What Every Woman Should Know",
    excerpt:
      "Your gut microbiome and your endocrine system are in constant conversation. Here is what the research says — and what it means for your plate.",
    readTime: "5 min read",
    date: "June 2025",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80&auto=format&fit=crop",
  },
  {
    category: "Lifestyle",
    title: "Sleep, Cortisol, and the Hidden Cost of Doing Too Much",
    excerpt:
      "Chronic overcommitment is a hormonal event, not just a scheduling problem. How to read the signs before your body forces the conversation.",
    readTime: "6 min read",
    date: "June 2025",
    image: "https://images.unsplash.com/photo-1531353826977-0941b4779a1c?w=800&q=80&auto=format&fit=crop",
  },
  {
    category: "The Program",
    title: "What Happens in Your First Nukrition Session",
    excerpt:
      "A transparent look at the clinical intake process — what we cover, why it matters, and how it shapes everything that follows.",
    readTime: "4 min read",
    date: "May 2025",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80&auto=format&fit=crop",
  },
  {
    category: "Hormonal Health",
    title: "Iron, Fatigue, and the Diagnosis That Gets Missed",
    excerpt:
      "Ferritin is not the same as iron. Many women with 'normal' blood results are still functionally depleted. Here is how to read your own numbers.",
    readTime: "8 min read",
    date: "May 2025",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&q=80&auto=format&fit=crop",
  },
  {
    category: "Mindset",
    title: "The Problem With 'Eating Healthy' as a Goal",
    excerpt:
      "Vague intentions produce vague results. How to set nutrition goals that are specific enough to actually change your biochemistry.",
    readTime: "5 min read",
    date: "April 2025",
    image: "https://images.unsplash.com/photo-1543362906-acfc16c67564?w=800&q=80&auto=format&fit=crop",
  },
];

function JournalNav() {
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
          <a href="/#method" className="micro-label text-espresso/70 transition-colors duration-200 hover:text-olive">The Method</a>
          <a href="/#program" className="micro-label text-espresso/70 transition-colors duration-200 hover:text-olive">The Program</a>
          <a href="/journal" className="micro-label text-espresso transition-colors duration-200 hover:text-olive border-b border-clay pb-0.5">The Journal</a>
          <a href="/#about" className="micro-label text-espresso/70 transition-colors duration-200 hover:text-olive">About Me</a>
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

export default function Journal() {
  return (
    <div className="grain forest-canvas relative min-h-screen">
      <JournalNav />

      <main className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
        {/* Page header */}
        <div className="pt-10 pb-12 lg:pt-16 lg:pb-16">
          <div className="flex items-center gap-4">
            <span className="h-px w-12 bg-clay/70" />
            <p className="micro-label text-clay">The Journal</p>
            <span className="h-px flex-1 bg-espresso/10" />
          </div>
          <h1 className="font-display mt-7 text-5xl leading-[1.06] font-light tracking-tight text-espresso sm:text-6xl lg:text-[4rem]">
            Nutrition, explained
            <br />
            <em className="font-normal text-olive italic">without the noise</em>.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed font-light text-espresso/75">
            Evidence-based writing on women's hormonal health, nutrition
            science, and the practical wisdom that makes lasting change
            possible.
          </p>
        </div>

        {/* Featured article */}
        <article className="group relative mb-16 grid grid-cols-1 overflow-hidden rounded-lg border border-espresso/15 shadow-[0_40px_80px_-30px_oklch(0.1_0.03_152/0.7)] lg:grid-cols-[1fr_1fr]">
          <div className="relative overflow-hidden">
            <img
              src={FEATURED.image}
              alt={FEATURED.title}
              className="h-72 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] lg:h-full lg:min-h-[420px]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[oklch(0.22_0.04_150/0.5)] hidden lg:block" />
          </div>
          <div className="flex flex-col justify-center bg-card/95 p-8 lg:p-12">
            <p className="micro-label text-clay">{FEATURED.category} · Featured</p>
            <h2 className="font-display mt-4 text-3xl leading-tight font-medium text-espresso lg:text-4xl">
              {FEATURED.title}
            </h2>
            <p className="mt-4 leading-relaxed font-light text-espresso/70">
              {FEATURED.excerpt}
            </p>
            <div className="mt-6 flex items-center gap-6">
              <span className="flex items-center gap-2 text-sm font-light text-espresso/50">
                <Clock className="h-3.5 w-3.5" />
                {FEATURED.readTime}
              </span>
              <span className="micro-label text-espresso/40">{FEATURED.date}</span>
            </div>
            <button
              onClick={() => {}}
              className="group/btn mt-8 inline-flex items-center gap-2 self-start border-b border-clay/60 pb-1 text-sm font-medium text-espresso transition-colors duration-200 hover:border-clay hover:text-clay"
            >
              Read article
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
            </button>
          </div>
        </article>

        {/* Article grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {ARTICLES.map((article) => (
            <article
              key={article.title}
              className="group flex flex-col overflow-hidden rounded-lg border border-espresso/10 bg-card/80 transition-all duration-300 hover:border-clay/40 hover:shadow-[0_24px_50px_-20px_oklch(0.1_0.03_152/0.6)]"
            >
              <div className="relative overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="h-52 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[oklch(0.22_0.04_150/0.6)] to-transparent" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="micro-label text-clay">{article.category}</p>
                <h3 className="font-display mt-3 text-xl leading-snug font-medium text-espresso">
                  {article.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed font-light text-espresso/65">
                  {article.excerpt}
                </p>
                <div className="mt-5 flex items-center justify-between border-t border-espresso/10 pt-5">
                  <span className="flex items-center gap-1.5 text-xs font-light text-espresso/45">
                    <Clock className="h-3 w-3" />
                    {article.readTime}
                  </span>
                  <button
                    onClick={() => {}}
                    className="micro-label text-espresso/60 transition-colors duration-200 hover:text-clay"
                  >
                    Read →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Back to home */}
        <div className="mt-16 flex justify-center">
          <a
            href="/"
            className="group inline-flex items-center gap-3 text-sm font-light text-espresso/60 transition-colors duration-200 hover:text-clay"
          >
            <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1" />
            Back to Nukrition
          </a>
        </div>
      </main>

      <footer className="border-t border-espresso/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row lg:px-10">
          <p className="micro-label text-espresso/40">
            © {new Date().getFullYear()} Nukrition — Private Nutrition Consultancy
          </p>
          <button
            onClick={openBooking}
            className="micro-label text-espresso/50 transition-colors duration-200 hover:text-clay"
          >
            hello@nukrition.com
          </button>
        </div>
      </footer>
    </div>
  );
}
