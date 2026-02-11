"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Section from "./Section";

const hospitals = [
  {
    key: "cerkezkoy",
    image: "/images/optimed-cerkezkoy-hastanesi.webp",
  },
  {
    key: "corlu",
    image: "/images/optimed-corlu-hastanesi.webp",
  },
  {
    key: "kapakli",
    image: "/images/optimed-kapakli-hastanesi.webp",
  },
] as const;

export default function Hospitals() {
  const t = useTranslations("hospitals");

  return (
    <Section id="hospitals" title={t("title")} bg="surface">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {hospitals.map((hospital, index) => {
          const name = t(`items.${index}.name`);

          return (
            <motion.article
              key={hospital.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-primary-100/70 transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={hospital.image}
                  alt={name}
                  fill
                  sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw"
                  className="object-cover"
                  priority={index === 0}
                />
              </div>

              <div className="flex flex-1 flex-col justify-between gap-4 px-5 pb-5 pt-4 sm:px-6 sm:pb-6 sm:pt-5">
                <div>
                  <h3 className="mb-1 text-lg font-semibold text-primary-900">
                    {name}
                  </h3>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="inline-flex items-start gap-2 text-sm text-text-secondary">
                    <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-primary-50 text-primary-600">
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
                          d="M2.25 6.75c0 8.284 6.716 15 15 15h1.5a2.25 2.25 0 002.25-2.25v-1.21c0-.516-.351-.966-.852-1.091l-4.423-1.106a1.125 1.125 0 00-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.364-.273.527-.739.417-1.173L6.6 3.102A1.125 1.125 0 005.509 2.25H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wide text-text-primary/70">
                        {t("infoLabel")}
                      </p>
                      <p className="font-semibold text-primary-900">
                        +90 (282) 726 05 55
                      </p>
                    </div>
                  </div>

                  <a
                    href="tel:+902827260555"
                    className="inline-flex items-center justify-center rounded-full bg-accent-500 px-6 py-2.5 text-sm font-semibold uppercase tracking-wide text-white shadow-md transition-all hover:bg-accent-600 hover:shadow-lg"
                  >
                    {t("buttonLabel")}
                  </a>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </Section>
  );
}

