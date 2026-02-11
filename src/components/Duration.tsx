"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Section from "./Section";

export default function Duration() {
  const t = useTranslations("duration");

  const cards = Array.from({ length: 3 }, (_, i) => ({
    value: t(`cards.${i}.value`),
    unit: t(`cards.${i}.unit`),
    label: t(`cards.${i}.label`),
    description: t(`cards.${i}.description`),
  }));

  return (
    <Section id="duration" title={t("title")} bg="surface">
      <div className="grid gap-6 sm:grid-cols-3">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="rounded-xl border border-primary-100 bg-white p-8 text-center shadow-sm"
          >
            <div className="mb-2 flex items-baseline justify-center gap-1">
              <span className="text-4xl font-extrabold text-primary-700">{card.value}</span>
              <span className="text-lg font-medium text-primary-500">{card.unit}</span>
            </div>
            <h3 className="mb-2 text-base font-semibold text-text-primary">{card.label}</h3>
            <p className="text-sm text-text-secondary">{card.description}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
