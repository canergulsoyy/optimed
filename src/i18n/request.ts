import { headers } from "next/headers";
import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  let requested = await requestLocale;

  // Aynı istekte getRequestConfig bazen requestLocale olmadan çağrılabiliyor (örn. root layout).
  // Middleware'in set ettiği header'dan locale kullan.
  if (!hasLocale(routing.locales, requested)) {
    const hdrs = await headers();
    const headerLocale = hdrs.get("x-next-intl-locale") ?? hdrs.get("X-NEXT-INTL-LOCALE");
    if (hasLocale(routing.locales, headerLocale)) {
      requested = headerLocale;
    }
  }

  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  if (process.env.NODE_ENV === "development") {
    console.log("[i18n] resolved locale:", { requested, locale });
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
