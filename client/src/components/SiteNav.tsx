/**
 * NUKRITION — Shared sticky navigation bar.
 * Transparent over the hero; transitions to opaque forest-green on scroll.
 * Used on Home, Journal, and Article pages.
 */
import { useEffect, useState } from "react";

const LOGO = "/manus-storage/nukrition-logo_4a7ca61a.png";
const CALENDLY = "https://calendly.com/kritipsingh/30min";

declare global {
  interface Window {
    Calendly?: { initPopupWidget: (o: { url: string }) => void };
  }
}
const CALENDLY_URL = `${CALENDLY}?background_color=1e2a1f&text_color=f2efe6&primary_color=c98a4b&hide_gdpr_banner=1`;

function openBooking() {
  if (window.Calendly) {
    window.Calendly.initPopupWidget({ url: CALENDLY_URL });
  } else {
    window.open(CALENDLY, "_blank", "noopener,noreferrer");
  }
}

interface SiteNavProps {
  /** Current page for active-link highlight: "home" | "journal" */
  page?: "home" | "journal";
  /** If true, nav starts opaque (no hero behind it) */
  alwaysOpaque?: boolean;
}

export default function SiteNav({ page = "home", alwaysOpaque = false }: SiteNavProps) {
  const [scrolled, setScrolled] = useState(alwaysOpaque);

  useEffect(() => {
    if (alwaysOpaque) return;
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [alwaysOpaque]);

  const navBase =
    "fixed inset-x-0 top-0 z-50 transition-all duration-300";
  const navBg = scrolled
    ? "bg-[oklch(0.245_0.04_150/0.97)] shadow-[0_4px_30px_-8px_oklch(0.1_0.03_152/0.6)] backdrop-blur-md border-b border-espresso/10"
    : "bg-transparent";

  return (
    <header className={`${navBase} ${navBg}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <a href="/" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-espresso/95 shadow-[0_4px_14px_-4px_oklch(0.1_0.03_152/0.7)]">
            <img src={LOGO} alt="Nukrition mark" className="h-6 w-6 object-contain" />
          </span>
          <span className="font-display text-xl font-medium tracking-tight text-espresso">
            nukrition<span className="text-clay">.</span>
          </span>
        </a>

        <nav className="hidden items-center gap-9 md:flex">
          <a
            href="/#method"
            className="micro-label text-espresso/70 transition-colors duration-200 hover:text-olive"
          >
            The Method
          </a>
          <a
            href="/#program"
            className="micro-label text-espresso/70 transition-colors duration-200 hover:text-olive"
          >
            The Program
          </a>
          <a
            href="/journal"
            className={`micro-label transition-colors duration-200 hover:text-olive ${
              page === "journal"
                ? "border-b border-clay pb-0.5 text-espresso"
                : "text-espresso/70"
            }`}
          >
            The Journal
          </a>
          <a
            href="/#about"
            className="micro-label text-espresso/70 transition-colors duration-200 hover:text-olive"
          >
            About Me
          </a>
        </nav>

        <button
          onClick={openBooking}
          className="micro-label hidden rounded-full border border-espresso/30 px-5 py-2.5 text-espresso transition-all duration-200 hover:border-clay hover:bg-clay hover:text-primary-foreground active:scale-[0.97] md:block"
        >
          Book a Consultation
        </button>
      </div>
    </header>
  );
}
