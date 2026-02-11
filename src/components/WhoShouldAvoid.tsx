"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import Section from "./Section";

function AccordionItem({
  title,
  description,
  isOpen,
  onToggle,
}: {
  title: string;
  description: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-primary-100">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-4 text-left"
        aria-expanded={isOpen}
      >
        <span className="flex items-center gap-3 text-base font-medium text-text-primary">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent-50 text-accent-600 ring-1 ring-accent-100">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0 3.75h.007v.008H12v-.008zM4.5 19.5h15L12 4.5 4.5 19.5z" />
            </svg>
          </span>
          {title}
        </span>
        <svg
          className={`h-5 w-5 shrink-0 text-text-secondary transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="pb-4 pl-8 text-sm leading-relaxed text-text-secondary">
              {description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function WhoShouldAvoid() {
  const t = useTranslations("whoShouldAvoid");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const items = Array.from({ length: 4 }, (_, i) => ({
    title: t(`items.${i}.title`),
    description: t(`items.${i}.description`),
  }));

  return (
    <Section id="who-should-avoid" title={t("title")} bg="surface">
      <div className="mx-auto max-w-3xl">
        <div className="rounded-xl border border-primary-100 bg-white p-6 shadow-sm">
          {items.map((item, i) => (
            <AccordionItem
              key={i}
              title={item.title}
              description={item.description}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
