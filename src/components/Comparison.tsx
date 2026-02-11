"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Section from "./Section";

export default function Comparison() {
  const t = useTranslations("comparison");

  const headers = [
    t("headers.0"),
    t("headers.1"),
    t("headers.2"),
    t("headers.3"),
  ];

  const rows = Array.from({ length: 7 }, (_, i) => [
    t(`rows.${i}.0`),
    t(`rows.${i}.1`),
    t(`rows.${i}.2`),
    t(`rows.${i}.3`),
  ]);

  const getCellColor = (value: string) => {
    const positives = ["Evet", "Yes", "Çok İyi", "Excellent"];
    const neutrals = ["İyi", "Good", "Orta", "Moderate"];
    const negatives = ["Hayır", "No", "Sınırlı", "Limited"];

    if (positives.includes(value)) return "text-green-700 bg-green-50";
    if (neutrals.includes(value)) return "text-primary-700 bg-primary-50";
    if (negatives.includes(value)) return "text-red-700 bg-red-50";
    return "text-text-primary";
  };

  return (
    <Section id="comparison" title={t("title")} bg="surface">
      {/* Desktop table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="hidden overflow-hidden rounded-xl border border-primary-100 shadow-sm md:block"
      >
        <table className="w-full">
          <thead>
            <tr className="bg-primary-700 text-white">
              {headers.map((header, i) => (
                <th
                  key={i}
                  className={`px-6 py-4 text-sm font-semibold ${i === 0 ? "text-left" : "text-center"}`}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={i}
                className={`border-t border-primary-50 ${i % 2 === 0 ? "bg-white" : "bg-surface"}`}
              >
                {row.map((cell, j) => (
                  <td
                    key={j}
                    className={`px-6 py-3 text-sm ${j === 0 ? "text-left font-medium text-text-primary" : "text-center"}`}
                  >
                    {j > 0 ? (
                      <span className={`inline-block rounded-full px-3 py-0.5 text-xs font-medium ${getCellColor(cell)}`}>
                        {cell}
                      </span>
                    ) : (
                      cell
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>

      {/* Mobile cards */}
      <div className="space-y-4 md:hidden">
        {rows.map((row, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
            className="rounded-lg border border-primary-100 bg-white p-4 shadow-sm"
          >
            <h3 className="mb-3 font-semibold text-text-primary">{row[0]}</h3>
            <div className="grid grid-cols-3 gap-2">
              {[1, 2, 3].map((j) => (
                <div key={j} className="text-center">
                  <p className="mb-1 text-xs font-medium text-text-secondary">{headers[j]}</p>
                  <span className={`inline-block rounded-full px-2 py-0.5 text-xs font-medium ${getCellColor(row[j])}`}>
                    {row[j]}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
