"use client";

import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";

const footerNavLinks = [
  { href: "#what-is-petct", key: "petct" },
  { href: "#when-used", key: "usage" },
  { href: "#how-it-works", key: "process" },
  { href: "#preparation", key: "preparation" },
  { href: "#comparison", key: "comparison" },
  { href: "#faq", key: "faq" },
] as const;

export default function Footer() {
  const t = useTranslations("footer");
  const tn = useTranslations("navbar");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = () => {
    const newLocale = locale === "tr" ? "en" : "tr";
    const path = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(path);
  };

  return (
    <footer className="bg-primary-900 pt-16 pb-8 text-primary-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="mb-3 text-xl font-bold text-white">Optimed</h3>
            <p className="text-sm leading-relaxed text-primary-200">
              {t("description")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              {t("quickLinks")}
            </h4>
            <ul className="space-y-2">
              {footerNavLinks.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-200 transition-colors hover:text-white"
                  >
                    {tn(link.key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              {t("contact")}
            </h4>
            <ul className="space-y-3 text-sm text-primary-200">
              <li className="flex items-start gap-2">
                <svg className="mt-0.5 h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {t("address")}
              </li>
              <li className="flex items-start gap-2">
                <svg className="mt-0.5 h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+902120000000" className="hover:text-white">{t("phone")}</a>
              </li>
              <li className="flex items-start gap-2">
                <svg className="mt-0.5 h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@optimedsaglik.com" className="hover:text-white">{t("email")}</a>
              </li>
            </ul>
          </div>

          {/* Language */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              {t("language")}
            </h4>
            <button
              onClick={switchLocale}
              className="rounded-md border border-primary-600 px-4 py-2 text-sm font-medium text-primary-200 transition-colors hover:border-primary-400 hover:text-white"
            >
              {locale === "tr" ? "English" : "Turkce"}
            </button>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-800 pt-8 text-center text-sm text-primary-300">
          &copy; {new Date().getFullYear()} Optimed Health Group. {t("rights")}
        </div>
      </div>
    </footer>
  );
}
