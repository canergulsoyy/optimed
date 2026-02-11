"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative overflow-hidden bg-primary-900 pt-24 pb-20 text-white lg:pt-32 lg:pb-28">
      {/* Background hospital image with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/main-image.png"
          alt="Optimed hospital building"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[15%_center]"
        />
      </div>
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-primary-950/95 via-primary-900/75 to-transparent" />

      <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Empty left column so content sits over right side of image on large screens */}
          <div className="hidden lg:block" />

          <div className="max-w-2xl lg:ml-auto lg:max-w-xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary-300/40 bg-primary-900/70 px-4 py-1.5 text-sm font-medium text-primary-100 backdrop-blur"
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
            <div className="inline-flex items-center gap-2 rounded-full bg-primary-900/70 px-3 py-1">
              <span className="inline-flex h-2 w-2 rounded-full bg-emerald-300" />
              <span className="font-semibold">7/24</span>
              <span>{t("eyebrow")}</span>
            </div>
          </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
