"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

export default function ScrollContactModal() {
  const t = useTranslations("contactModal");
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (hasShown) return;
      if (window.scrollY > window.innerHeight * 0.6) {
        setIsOpen(true);
        setHasShown(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasShown]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    // Burada ileride gerçek submit entegrasyonu yapılabilir
    console.log("Contact form submitted", Object.fromEntries(data.entries()));
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-900/60 px-4 backdrop-blur-sm">
      <div className="relative w-full max-w-md rounded-2xl bg-primary-800 text-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-primary-600 px-5 py-4">
          <h2 className="text-base font-semibold sm:text-lg">
            {t("title")}
          </h2>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="rounded-full p-1 text-primary-100 hover:bg-primary-700/70"
            aria-label={t("close")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.8}
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-3 px-5 pb-5 pt-4 sm:space-y-4 sm:px-6 sm:pb-6 sm:pt-5"
        >
          <div className="space-y-1 text-sm">
            <label className="sr-only" htmlFor="name">
              {t("fields.name")}
            </label>
            <input
              id="name"
              name="name"
              required
              placeholder={t("fields.name")}
              className="w-full rounded-full border border-primary-400/60 bg-white/95 px-4 py-2.5 text-sm text-text-primary placeholder:text-slate-400 focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/60"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label className="sr-only" htmlFor="email">
              {t("fields.email")}
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder={t("fields.email")}
              className="w-full rounded-full border border-primary-400/60 bg-white/95 px-4 py-2.5 text-sm text-text-primary placeholder:text-slate-400 focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/60"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label className="sr-only" htmlFor="phone">
              {t("fields.phone")}
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              placeholder={t("fields.phone")}
              className="w-full rounded-full border border-primary-400/60 bg-white/95 px-4 py-2.5 text-sm text-text-primary placeholder:text-slate-400 focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/60"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label className="sr-only" htmlFor="subject">
              {t("fields.subject")}
            </label>
            <input
              id="subject"
              name="subject"
              required
              placeholder={t("fields.subject")}
              className="w-full rounded-full border border-primary-400/60 bg-white/95 px-4 py-2.5 text-sm text-text-primary placeholder:text-slate-400 focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/60"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label className="sr-only" htmlFor="message">
              {t("fields.message")}
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              placeholder={t("fields.message")}
              className="w-full rounded-2xl border border-primary-400/60 bg-white/95 px-4 py-2.5 text-sm text-text-primary placeholder:text-slate-400 focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/60"
            />
          </div>

          <div className="flex items-start gap-2 text-xs text-primary-100">
            <input
              id="kvkk"
              name="kvkk"
              type="checkbox"
              required
              className="mt-1 h-3.5 w-3.5 rounded border-primary-300 text-accent-500 focus:ring-accent-500"
            />
            <label htmlFor="kvkk" className="cursor-pointer leading-snug">
              {t("kvkk")}
            </label>
          </div>

          <button
            type="submit"
            className="mt-1 w-full rounded-full bg-accent-500 px-6 py-2.5 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-accent-600"
          >
            {t("submit")}
          </button>
        </form>
      </div>
    </div>
  );
}

