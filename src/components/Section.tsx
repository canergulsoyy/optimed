"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

type Props = {
  id: string;
  title: string;
  children: ReactNode;
  bg?: "white" | "surface";
};

export default function Section({ id, title, children, bg = "white" }: Props) {
  return (
    <section
      id={id}
      className={`py-16 lg:py-24 ${bg === "surface" ? "bg-surface" : "bg-white"}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center text-2xl font-bold text-text-primary sm:text-3xl lg:text-4xl"
        >
          {title}
        </motion.h2>
        {children}
      </div>
    </section>
  );
}
