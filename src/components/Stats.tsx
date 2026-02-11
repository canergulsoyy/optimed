"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Section from "./Section";

const statCards = [
  {
    key: "departments",
    image: "/images/icon-2.png",
    bg: "bg-[#E5EEFF]",
  },
  {
    key: "specialists",
    image: "/images/icon.png",
    bg: "bg-[#FDE9E1]",
  },
  {
    key: "area",
    image: "/images/icon-3.png",
    bg: "bg-[#F4F0FF]",
  },
  {
    key: "beds",
    image: "/images/icon-4.png",
    bg: "bg-[#EDE7FF]",
  },
] as const;

export default function Stats() {
  const t = useTranslations("stats");

  return (
    <Section id="stats" title={t("title")} bg="surface">
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-stretch">
        {/* Left: four stat cards */}
        <div className="grid gap-6 sm:grid-cols-2">
          {statCards.map((card, index) => {
            const value = t(`items.${index}.value`);
            const label = t(`items.${index}.label`);

            return (
              <motion.article
                key={card.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={`${card.bg} flex items-center justify-between gap-4 rounded-3xl px-5 py-4 shadow-sm ring-1 ring-primary-100/60 sm:px-6 sm:py-5`}
              >
                <div className="space-y-1">
                  <p className="text-2xl font-extrabold tracking-tight text-primary-900 sm:text-3xl">
                    {value}
                  </p>
                  <p className="max-w-[10rem] text-sm font-medium leading-snug text-text-primary">
                    {label}
                  </p>
                </div>
                <div className="flex shrink-0 items-center justify-center rounded-2xl bg-white/70 p-3 shadow-md">
                  <Image
                    src={card.image}
                    alt=""
                    width={44}
                    height={44}
                    className="h-11 w-11 object-contain"
                  />
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Right: accreditation card */}
        <motion.article
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-700 via-primary-600 to-primary-800 p-6 text-white shadow-xl sm:p-7 lg:p-8"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.24),_transparent_55%)]" />

          <div className="relative flex h-full flex-col items-center justify-between gap-6">
            <div className="relative mx-auto mt-2 h-40 w-40 sm:h-48 sm:w-48">
              <Image
                src="/images/national-quaity-accreditations.png"
                alt={t("accreditations.imageAlt")}
                fill
                sizes="(min-width: 1024px) 260px, 200px"
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>

            <div className="text-center">
              <p className="text-4xl font-extrabold leading-none tracking-tight sm:text-5xl">
                {t("accreditations.value")}
              </p>
              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.15em] text-primary-100/80">
                {t("accreditations.heading")}
              </p>
              <p className="mt-3 max-w-xs text-xs text-primary-100/90 sm:text-sm">
                {t("accreditations.subheading")}
              </p>
            </div>
          </div>
        </motion.article>
      </div>
    </Section>
  );
}

