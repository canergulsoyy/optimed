"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-800 via-primary-700 to-primary-600 pt-24 pb-20 lg:pt-32 lg:pb-28">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-white/20" />
        <div className="absolute -bottom-12 -left-12 h-64 w-64 rounded-full bg-white/10" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
          {/* Text side */}
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary-300/40 bg-primary-600/50 px-4 py-1.5 text-sm font-medium text-primary-100 backdrop-blur"
            >
              <span className="inline-flex h-2 w-2 rounded-full bg-emerald-300" />
              {t("eyebrow")}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              {t("title")}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-10 text-lg leading-relaxed text-primary-100 sm:text-xl"
            >
              {t("subtitle")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col items-center gap-4 sm:flex-row sm:items-stretch sm:justify-start"
            >
              <a
                href="tel:+902120000000"
                className="w-full rounded-lg bg-accent-500 px-8 py-3.5 text-center text-base font-semibold text-white shadow-lg transition-all hover:bg-accent-600 hover:shadow-xl sm:w-auto"
              >
                {t("cta_primary")}
              </a>
              <a
                href="#what-is-petct"
                className="w-full rounded-lg border border-white/30 bg-white/5 px-8 py-3.5 text-center text-base font-semibold text-white backdrop-blur-sm transition-all hover:border-white/60 hover:bg-white/10 sm:w-auto"
              >
                {t("cta_secondary")}
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 flex flex-wrap items-center gap-4 text-sm text-primary-100/80"
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-primary-700/60 px-3 py-1">
                <span className="inline-flex h-2 w-2 rounded-full bg-emerald-300" />
                <span className="font-semibold">24/7</span>
                <span>{t("eyebrow")}</span>
              </div>
              <span className="hidden text-primary-100/70 sm:inline">
                PET-CT, MR ve BT alanında uluslararası akreditasyonlu hizmet.
              </span>
            </motion.div>
          </div>

          {/* Visual side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mx-auto flex max-w-md items-center justify-center"
            aria-hidden
          >
            <div className="relative">
              <div className="pointer-events-none absolute inset-0 rounded-full bg-primary-500/20 blur-3xl" />
              <div className="relative rounded-full bg-primary-900/30 p-4 shadow-2xl ring-1 ring-white/10 backdrop-blur">
                <Image
                  src="/images/national-quaity-accreditations.png"
                  alt="Optimed international quality accreditations"
                  width={360}
                  height={360}
                  priority
                  className="h-auto w-full rounded-full object-contain"
                />
              </div>

              <div className="absolute -bottom-4 left-1/2 w-[260px] -translate-x-1/2 rounded-2xl bg-white/95 p-4 text-sm shadow-xl backdrop-blur">
                <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-primary-600">
                  International Accreditation
                </p>
                <p className="text-xs text-text-secondary">
                  Quality &amp; patient safety standards audited by independent organizations.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
