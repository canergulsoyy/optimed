"use client";

import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "#what-is-petct", key: "petct" },
  { href: "#when-used", key: "usage" },
  { href: "#how-it-works", key: "process" },
  { href: "#preparation", key: "preparation" },
  { href: "#comparison", key: "comparison" },
  { href: "#faq", key: "faq" },
] as const;

export default function Navbar() {
  const t = useTranslations("navbar");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const switchLocale = () => {
    const newLocale =
      locale === "tr" ? "en" : locale === "en" ? "bg" : "tr";
    const path = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(path);
  };

  const handleNavClick = () => setMobileOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <span className={`text-xl font-bold lg:text-2xl ${scrolled ? "text-primary-700" : "text-white"}`}>
              Optimed
            </span>
            <span className={`hidden text-sm sm:inline ${scrolled ? "text-text-secondary" : "text-primary-100"}`}>
              Health Group
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden items-center gap-6 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-accent-500 ${
                  scrolled ? "text-text-primary" : "text-white/90"
                }`}
              >
                {t(link.key)}
              </a>
            ))}

            {/* Language switch */}
            <button
              onClick={switchLocale}
              className={`rounded-md px-3 py-1.5 text-sm font-semibold transition-colors ${
                scrolled
                  ? "border border-primary-200 text-primary-700 hover:bg-primary-50"
                  : "border border-white/30 text-white hover:bg-white/10"
              }`}
            >
              {locale.toUpperCase()}
            </button>

            {/* CTA */}
            <a
              href="#cta"
              className="rounded-lg bg-accent-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-accent-600"
            >
              {t("cta")}
            </a>
          </div>

          {/* Mobile buttons */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={switchLocale}
              className={`rounded-md px-2 py-1 text-sm font-semibold ${
                scrolled ? "text-primary-700" : "text-white"
              }`}
            >
              {locale.toUpperCase()}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`p-2 ${scrolled ? "text-text-primary" : "text-white"}`}
              aria-label={mobileOpen ? t("closeMenu") : t("openMenu")}
            >
              {mobileOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-primary-100 bg-white shadow-lg lg:hidden">
          <div className="space-y-1 px-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                onClick={handleNavClick}
                className="block rounded-md px-3 py-2 text-sm font-medium text-text-primary hover:bg-primary-50 hover:text-primary-700"
              >
                {t(link.key)}
              </a>
            ))}
            <a
              href="#cta"
              onClick={handleNavClick}
              className="mt-3 block rounded-lg bg-accent-500 px-4 py-2.5 text-center text-sm font-semibold text-white"
            >
              {t("cta")}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
