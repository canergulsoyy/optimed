"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Section from "./Section";

const uspIcons = [
  // Equipment
  <svg key="equip" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>,
  // Expert
  <svg key="expert" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg>,
  // Fast
  <svg key="fast" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>,
  // Comfort
  <svg key="comfort" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>,
];

export default function OptimedService() {
  const t = useTranslations("optimedService");

  const usps = Array.from({ length: 4 }, (_, i) => ({
    title: t(`usps.${i}.title`),
    description: t(`usps.${i}.description`),
    icon: uspIcons[i],
  }));

  return (
    <Section id="optimed-service" title={t("title")} bg="white">
      <p className="mx-auto mb-12 max-w-2xl text-center text-lg text-text-secondary">
        {t("description")}
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {usps.map((usp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="rounded-xl border border-primary-100 bg-gradient-to-b from-white to-primary-50/50 p-6 text-center shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary-100 text-primary-700">
              {usp.icon}
            </div>
            <h3 className="mb-2 text-base font-semibold text-text-primary">
              {usp.title}
            </h3>
            <p className="text-sm text-text-secondary">{usp.description}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <a
          href="tel:+902120000000"
          className="inline-block rounded-lg bg-accent-500 px-8 py-3.5 text-base font-semibold text-white shadow-lg transition-all hover:bg-accent-600 hover:shadow-xl"
        >
          {t("cta")}
        </a>
      </div>
    </Section>
  );
}
