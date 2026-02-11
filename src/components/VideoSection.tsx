"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Section from "./Section";

export default function VideoSection() {
  const t = useTranslations("video");

  return (
    <Section id="video" title={t("title")} bg="surface">
      <div className="mx-auto mb-8 max-w-3xl text-center text-sm text-text-secondary sm:text-base">
        {t("description")}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-5xl"
      >
        <div className="relative overflow-hidden rounded-3xl bg-slate-900 shadow-2xl ring-1 ring-slate-900/30">
          <div className="relative aspect-video w-full">
            <iframe
              src="https://www.youtube.com/embed/HmKZnpKN6i8"
              title={t("iframeTitle")}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 h-full w-full border-0"
            />
          </div>
        </div>
      </motion.div>
    </Section>
  );
}

