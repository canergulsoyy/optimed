"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Section from "./Section";

const stepIcons = [
  // Injection / preparation
  <svg
    key="inject"
    className="h-7 w-7"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.6}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.5 19.5h15m-12-3-1.5 3m7.5-3-1.5 3M9 6l6 6m3-9L9 12"
    />
  </svg>,
  // Waiting time
  <svg
    key="wait"
    className="h-7 w-7"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.6}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>,
  // Scanner
  <svg
    key="scan"
    className="h-7 w-7"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.6}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 7.5h16.5M6 4.5h12M4.5 10.5h15A1.5 1.5 0 0121 12v5.25A2.25 2.25 0 0118.75 19.5H5.25A2.25 2.25 0 013 17.25V12a1.5 1.5 0 011.5-1.5z"
    />
  </svg>,
  // Report
  <svg
    key="report"
    className="h-7 w-7"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.6}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0018 4.5h-3.75L12 2.25 9.75 4.5H6A2.25 2.25 0 003.75 6.75v9.75A2.25 2.25 0 006 18.75h3"
    />
  </svg>,
];

export default function HowItWorks() {
  const t = useTranslations("howItWorks");

  const steps = Array.from({ length: 4 }, (_, i) => ({
    title: t(`steps.${i}.title`),
    description: t(`steps.${i}.description`),
    icon: stepIcons[i],
  }));

  return (
    <Section id="how-it-works" title={t("title")} bg="white">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="relative text-center"
          >
            {/* Connector line */}
            {i < 3 && (
              <div className="absolute top-10 left-[60%] hidden h-0.5 w-[calc(100%-20%)] bg-primary-100 lg:block" />
            )}

            {/* Step number + icon */}
            <div className="relative mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary-50 ring-4 ring-white shadow-sm">
              <span className="absolute -top-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-accent-500 text-xs font-bold text-white">
                {i + 1}
              </span>
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-600 text-white shadow-sm">
                {step.icon}
              </div>
            </div>

            <h3 className="mb-2 text-lg font-semibold text-text-primary">
              {step.title}
            </h3>
            <p className="text-sm leading-relaxed text-text-secondary">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
