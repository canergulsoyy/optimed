"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function CTABanner() {
  const t = useTranslations("cta");

  return (
    <section id="cta" className="bg-gradient-to-r from-primary-700 to-primary-800 py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="mb-3 text-2xl font-bold text-white sm:text-3xl">
            {t("title")}
          </h2>
          <p className="mb-8 text-primary-100">{t("description")}</p>
          <a
            href="tel:+902120000000"
            className="inline-block rounded-lg bg-accent-500 px-8 py-3.5 text-base font-semibold text-white shadow-lg transition-all hover:bg-accent-600 hover:shadow-xl"
          >
            {t("button")}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
