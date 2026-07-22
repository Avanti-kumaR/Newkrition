/**
 * NUKRITION — Individual article page.
 * Route: /journal/:slug
 * Same forest-green "Quiet Table" design system.
 */
import { useParams } from "wouter";
import { ArrowLeft, Clock, ArrowRight } from "lucide-react";
import SiteNav from "@/components/SiteNav";
import { ARTICLES, RECENT_ARTICLES, type ArticleBlock } from "@/data/articles";

const CALENDLY = "https://calendly.com/kritipsingh/30min";
function openBooking() {
  window.open(CALENDLY, "_blank", "noopener,noreferrer");
}

function renderBlock(block: ArticleBlock, i: number) {
  switch (block.type) {
    case "h2":
      return (
        <h2
          key={i}
          className="font-display mt-12 mb-4 text-3xl font-medium leading-tight text-espresso"
        >
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3
          key={i}
          className="font-display mt-8 mb-3 text-2xl font-medium text-espresso"
        >
          {block.text}
        </h3>
      );
    case "p":
      return (
        <p key={i} className="mt-5 text-lg leading-relaxed font-light text-espresso/80">
          {block.text}
        </p>
      );
    case "blockquote":
      return (
        <blockquote
          key={i}
          className="my-8 border-l-2 border-clay/60 pl-6 font-display text-2xl font-light italic leading-snug text-espresso"
        >
          {block.text}
        </blockquote>
      );
    case "ul":
      return (
        <ul key={i} className="mt-5 space-y-3">
          {block.items.map((item, j) => (
            <li key={j} className="flex items-start gap-3 text-base leading-relaxed font-light text-espresso/80">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-clay" />
              {item}
            </li>
          ))}
        </ul>
      );
    default:
      return null;
  }
}

export default function ArticlePage() {
  const params = useParams<{ slug: string }>();
  const article = ARTICLES.find((a) => a.slug === params.slug);

  if (!article) {
    return (
      <div className="grain forest-canvas flex min-h-screen flex-col items-center justify-center gap-6">
        <SiteNav page="journal" alwaysOpaque />
        <p className="font-display mt-20 text-3xl font-light text-espresso">Article not found.</p>
        <a href="/journal" className="micro-label text-clay hover:underline">
          ← Back to The Journal
        </a>
      </div>
    );
  }

  const related = RECENT_ARTICLES.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <div className="grain forest-canvas relative min-h-screen">
      <SiteNav page="journal" alwaysOpaque />

      {/* Hero image */}
      <div className="relative h-[50vh] min-h-[340px] w-full overflow-hidden pt-16">
        <img
          src={article.image}
          alt={article.title}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.22_0.04_150/0.3)] via-transparent to-[oklch(0.22_0.04_150/0.85)]" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-3xl px-6 pb-10 lg:px-0">
          <p className="micro-label text-clay">{article.category}</p>
          <h1 className="font-display mt-3 text-4xl font-medium leading-tight text-white sm:text-5xl">
            {article.title}
          </h1>
          <div className="mt-4 flex items-center gap-6">
            <span className="flex items-center gap-2 text-sm font-light text-white/70">
              <Clock className="h-3.5 w-3.5" />
              {article.readTime}
            </span>
            <span className="micro-label text-white/50">{article.date}</span>
          </div>
        </div>
      </div>

      {/* Article body */}
      <article className="mx-auto max-w-3xl px-6 py-14 lg:px-0">
        <p className="text-xl leading-relaxed font-light text-espresso/75 border-l-2 border-olive/50 pl-5">
          {article.excerpt}
        </p>
        <div>{article.body.map((block, i) => renderBlock(block, i))}</div>

        {/* Author byline */}
        <div className="mt-16 flex items-center gap-4 border-t border-espresso/10 pt-8">
          <div className="h-12 w-12 overflow-hidden rounded-full ring-2 ring-clay/40">
            <img
              src="/manus-storage/kritinukrition-116_c155ad0c.jpg"
              alt="Kriti"
              className="h-full w-full object-cover object-top"
            />
          </div>
          <div>
            <p className="font-display text-lg font-medium text-espresso">Kriti</p>
            <p className="micro-label text-espresso/50">Health Coach &amp; Pharmacist · Founder, Nukrition</p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-lg border border-espresso/10 bg-card/70 px-8 py-10 text-center backdrop-blur-sm">
          <p className="micro-label text-clay">Ready to apply this to your own health?</p>
          <h3 className="font-display mt-3 text-2xl font-light text-espresso">
            Book a private consultation with Kriti.
          </h3>
          <button
            onClick={openBooking}
            className="group mt-6 inline-flex items-center gap-3 rounded-full bg-clay px-8 py-4 text-sm font-medium tracking-wide text-primary-foreground shadow-[0_20px_45px_-16px_oklch(0.72_0.11_65/0.5)] transition-all duration-200 hover:bg-[oklch(0.78_0.1_65)] active:scale-[0.97]"
          >
            Book a Consultation
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </div>
      </article>

      {/* Related articles */}
      {related.length > 0 && (
        <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
          <div className="flex items-center gap-4 mb-10">
            <span className="h-px w-12 bg-clay/70" />
            <p className="micro-label text-clay">Recent Articles</p>
            <span className="h-px flex-1 bg-espresso/10" />
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((a) => (
              <a
                key={a.slug}
                href={`/journal/${a.slug}`}
                className="group flex flex-col overflow-hidden rounded-lg border border-espresso/10 bg-card/80 transition-all duration-300 hover:border-clay/40 hover:shadow-[0_24px_50px_-20px_oklch(0.1_0.03_152/0.6)]"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={a.image}
                    alt={a.title}
                    className="h-48 w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="micro-label text-clay">{a.category}</p>
                  <h4 className="font-display mt-2 text-lg font-medium leading-snug text-espresso">
                    {a.title}
                  </h4>
                  <p className="mt-2 flex-1 text-sm leading-relaxed font-light text-espresso/60">
                    {a.excerpt}
                  </p>
                  <div className="mt-4 flex items-center gap-1.5 text-xs font-light text-espresso/45">
                    <Clock className="h-3 w-3" />
                    {a.readTime}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>
      )}

      {/* Back link */}
      <div className="mx-auto flex max-w-7xl justify-center px-6 pb-16 lg:px-10">
        <a
          href="/journal"
          className="group inline-flex items-center gap-2 text-sm font-light text-espresso/60 transition-colors duration-200 hover:text-clay"
        >
          <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1" />
          Back to The Journal
        </a>
      </div>

      <footer className="border-t border-espresso/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row lg:px-10">
          <p className="micro-label text-espresso/40">
            © {new Date().getFullYear()} Nukrition — Private Nutrition Consultancy
          </p>
        </div>
      </footer>
    </div>
  );
}
