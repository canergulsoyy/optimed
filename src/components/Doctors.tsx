"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Section from "./Section";

const doctors = [
  {
    key: "radiology",
    image: "/images/doctors/radyoloji-5.jpeg",
  },
  {
    key: "radiology2",
    image: "/images/doctors/radyoloji-3.jpeg",
  },
  {
    key: "oncology",
    image: "/images/doctors/onkoloji.jpeg",
  },
] as const;

export default function Doctors() {
  const t = useTranslations("doctors");

  return (
    <Section id="doctors" title={t("title")} bg="white">
      <div className="mx-auto mb-10 max-w-2xl text-center text-sm text-text-secondary">
        {t("description")}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {doctors.map((doctor, index) => {
          const name = t(`items.${index}.name`);
          const title = t(`items.${index}.title`);
          return (
            <motion.article
              key={doctor.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="flex flex-col items-center rounded-3xl bg-white px-6 pb-7 pt-8 shadow-sm ring-1 ring-slate-100 transition-shadow hover:shadow-lg"
            >
              <div className="mb-4 h-32 w-32 overflow-hidden rounded-full border-4 border-surface bg-slate-100 shadow-md">
                <Image
                  src={doctor.image}
                  alt={name}
                  width={160}
                  height={160}
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <h3 className="mb-1 text-center text-base font-semibold text-primary-800">
                {name}
              </h3>
              <p className="text-xs font-medium uppercase tracking-wide text-primary-600">
                {title}
              </p>

              <button className="mt-5 rounded-full border border-primary-200 px-5 py-2 text-xs font-semibold text-primary-800 transition-colors hover:border-primary-400 hover:bg-primary-50">
                {t("detail")}
              </button>
            </motion.article>
          );
        })}
      </div>
    </Section>
  );
}

