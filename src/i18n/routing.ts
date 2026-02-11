import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["tr", "en", "bg"],
  defaultLocale: "bg",
  localePrefix: "always",
});
