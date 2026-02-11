"use client";

import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "#top", key: "home" },
  { href: "#hospitals", key: "hospitals" },
  { href: "#stats", key: "departments" },
  { href: "#what-is-petct", key: "petctLanding" },
  { href: "#cta", key: "contact" },
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
        scrolled ? "shadow-md" : ""
      }`}
      style={{ backgroundColor: "var(--color-primary-800)" }}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <div className="relative h-7 w-28 sm:h-8 sm:w-32">
              <Image
                src="/images/optimed-logo.png"
                alt="Optimed"
                fill
                priority
                className="object-contain"
              />
            </div>
            <span className="hidden text-sm font-medium text-primary-100 sm:inline">
              Health Group
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden items-center gap-6 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                className="text-sm font-medium text-white/90 transition-colors hover:text-accent-400"
              >
                {t(link.key)}
              </a>
            ))}

            {/* Language switch */}
            <button
              onClick={switchLocale}
              className="rounded-md border border-white/30 px-3 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
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
              className="rounded-md px-2 py-1 text-sm font-semibold text-white"
            >
              {locale.toUpperCase()}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-white"
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
        <div className="border-t border-primary-700 bg-primary-900/98 shadow-lg lg:hidden">
          <div className="space-y-1 px-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                onClick={handleNavClick}
                className="block rounded-md px-3 py-2 text-sm font-medium text-primary-50 hover:bg-primary-800 hover:text-white"
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
