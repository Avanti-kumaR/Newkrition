/**
 * NUKRITION — "The Quiet Table"
 * THE JOURNAL — editorial article listing page. Same forest-green canvas,
 * Fraunces display, olive/clay palette. Featured article header + responsive
 * article grid. Placeholder articles ready for real content.
 */
import { Clock, ArrowRight } from "lucide-react";
import SiteNav from "@/components/SiteNav";
import { FEATURED_ARTICLE, RECENT_ARTICLES } from "@/data/articles";

export default function Journal() {
  return (
    <div className="grain forest-canvas relative min-h-screen">
      <SiteNav page="journal" alwaysOpaque />

      <main className="mx-auto max-w-7xl px-6 pb-24 pt-20 lg:px-10">
        {/* Page header */}
        <div className="pt-6 pb-12 lg:pt-10 lg:pb-16">
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
        <a
          href={`/journal/${FEATURED_ARTICLE.slug}`}
          className="group relative mb-16 grid grid-cols-1 overflow-hidden rounded-lg border border-espresso/15 shadow-[0_40px_80px_-30px_oklch(0.1_0.03_152/0.7)] transition-all duration-300 hover:border-clay/40 lg:grid-cols-[1fr_1fr]"
        >
          <div className="relative overflow-hidden">
            <img
              src={FEATURED_ARTICLE.image}
              alt={FEATURED_ARTICLE.title}
              className="h-72 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] lg:h-full lg:min-h-[420px]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[oklch(0.22_0.04_150/0.5)] hidden lg:block" />
          </div>
          <div className="flex flex-col justify-center bg-card/95 p-8 lg:p-12">
            <p className="micro-label text-clay">{FEATURED_ARTICLE.category} · Featured</p>
            <h2 className="font-display mt-4 text-3xl leading-tight font-medium text-espresso lg:text-4xl">
              {FEATURED_ARTICLE.title}
            </h2>
            <p className="mt-4 leading-relaxed font-light text-espresso/70">
              {FEATURED_ARTICLE.excerpt}
            </p>
            <div className="mt-6 flex items-center gap-6">
              <span className="flex items-center gap-2 text-sm font-light text-espresso/50">
                <Clock className="h-3.5 w-3.5" />
                {FEATURED_ARTICLE.readTime}
              </span>
              <span className="micro-label text-espresso/40">{FEATURED_ARTICLE.date}</span>
            </div>
            <span className="group/btn mt-8 inline-flex items-center gap-2 self-start border-b border-clay/60 pb-1 text-sm font-medium text-espresso transition-colors duration-200 hover:border-clay hover:text-clay">
              Read article
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
            </span>
          </div>
        </a>

        {/* Article grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {RECENT_ARTICLES.map((article) => (
            <a
              key={article.slug}
              href={`/journal/${article.slug}`}
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
                  <span className="micro-label text-espresso/60 transition-colors duration-200 group-hover:text-clay">
                    Read →
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </main>

      <footer className="border-t border-espresso/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row lg:px-10">
          <p className="micro-label text-espresso/40">
            © {new Date().getFullYear()} Nukrition — Private Nutrition Consultancy
          </p>
          <p className="micro-label text-espresso/40">hello@nukrition.com</p>
        </div>
      </footer>
    </div>
  );
}
