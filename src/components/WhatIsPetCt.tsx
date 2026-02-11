"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Section from "./Section";

export default function WhatIsPetCt() {
  const t = useTranslations("whatIsPetCt");

  const bullets = [
    t("bullets.0"),
    t("bullets.1"),
    t("bullets.2"),
    t("bullets.3"),
    t("bullets.4"),
  ];

  return (
    <Section id="what-is-petct" title={t("title")} bg="white">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-6 text-lg leading-relaxed text-text-secondary">
            {t("description")}
          </p>
          <ul className="space-y-3">
            {bullets.map((bullet, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-primary-50 ring-1 ring-primary-100">
                  <svg
                    className="h-4 w-4 text-primary-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                </div>
                <span className="text-text-primary">{bullet}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center justify-center"
        >
          <div className="relative w-full max-w-md">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-primary-100 to-primary-50 p-3 shadow-xl ring-1 ring-primary-100/60">
              <div className="relative h-full w-full overflow-hidden rounded-xl bg-black/5">
                <Image
                  src="/images/haustier-ct-scanner.webp"
                  alt="Modern PET-CT scanner"
                  fill
                  sizes="(min-width: 1024px) 420px, 100vw"
                  className="object-cover"
                />
              </div>
            </div>


          </div>
        </motion.div>
      </div>
    </Section>
  );
}
