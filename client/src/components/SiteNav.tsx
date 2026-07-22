/**
 * NUKRITION — Shared sticky navigation bar.
 * Transparent over the hero; transitions to opaque forest-green on scroll.
 * Used on Home, Journal, and Article pages.
 */
import { useEffect, useState, useRef } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

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
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (alwaysOpaque) return;
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [alwaysOpaque]);

  /* Close menu on outside click */
  useEffect(() => {
    if (!menuOpen) return;
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [menuOpen]);

  /* Lock body scroll when menu is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const navBase =
    "fixed inset-x-0 top-0 z-50 transition-all duration-300";
  const navBg = scrolled
    ? "bg-[oklch(0.245_0.04_150/0.97)] shadow-[0_4px_30px_-8px_oklch(0.1_0.03_152/0.6)] backdrop-blur-md border-b border-espresso/10"
    : "bg-transparent";

  const navLinks = [
    { label: "The Method",  href: "/#method"  },
    { label: "The Program", href: "/#program" },
    { label: "The Journal", href: "/journal"  },
    { label: "About Me",    href: "/#about"   },
  ];

  return (
    <header ref={menuRef} className={`${navBase} ${navBg}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <a href="/" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-espresso/95 shadow-[0_4px_14px_-4px_oklch(0.1_0.03_152/0.7)]">
            <img src={LOGO} alt="Nukrition mark" className="h-6 w-6 object-contain" />
          </span>
          <span className="font-display text-xl font-medium tracking-tight text-espresso">
            nukrition<span className="text-clay">.</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-9 md:flex">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className={`micro-label transition-colors duration-200 hover:text-olive ${
                (label === "The Journal" && page === "journal")
                  ? "border-b border-clay pb-0.5 text-espresso"
                  : "text-espresso/70"
              }`}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={openBooking}
            className="micro-label hidden rounded-full border border-espresso/30 px-5 py-2.5 text-espresso transition-all duration-200 hover:border-clay hover:bg-clay hover:text-primary-foreground active:scale-[0.97] md:block"
          >
            Book a Consultation
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-espresso/20 text-espresso transition-colors duration-200 hover:border-clay hover:text-clay md:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] md:hidden ${
          menuOpen ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ background: "oklch(0.245 0.04 150 / 0.98)", backdropFilter: "blur(16px)" }}
      >
        <nav className="flex flex-col px-6 pb-8 pt-2">
          {navLinks.map(({ label, href }, i) => (
            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-between border-b border-espresso/10 py-5 font-display text-2xl font-light text-espresso transition-colors duration-200 hover:text-clay"
              style={{ transitionDelay: menuOpen ? `${i * 50}ms` : "0ms" }}
            >
              {label}
              <ArrowRight className="h-4 w-4 text-clay/60" />
            </a>
          ))}
          <button
            onClick={() => { setMenuOpen(false); openBooking(); }}
            className="mt-6 w-full rounded-full bg-clay py-4 text-sm font-medium tracking-wide text-primary-foreground transition-all duration-200 hover:bg-[oklch(0.78_0.1_65)] active:scale-[0.97]"
          >
            Book a Consultation
          </button>
        </nav>
      </div>
    </header>
  );
}
