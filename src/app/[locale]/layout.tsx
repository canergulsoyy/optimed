import type { ReactNode } from "react";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { Inter } from "next/font/google";
import { routing } from "@/i18n/routing";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
});

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = routing.locales.includes(rawLocale as any)
    ? rawLocale
    : routing.defaultLocale;

  const messages = (await import(`../../messages/${locale}.json`)).default as any;

  let openGraphLocale: string;
  switch (locale) {
    case "tr":
      openGraphLocale = "tr_TR";
      break;
    case "bg":
      openGraphLocale = "bg_BG";
      break;
    default:
      openGraphLocale = "en_US";
  }

  return {
    title: messages.metadata.title,
    description: messages.metadata.description,
    openGraph: {
      title: messages.metadata.title,
      description: messages.metadata.description,
      locale: openGraphLocale,
      type: "website",
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale: rawLocale } = await params;
  const locale = routing.locales.includes(rawLocale as any)
    ? rawLocale
    : routing.defaultLocale;

  const messages = (await import(`../../messages/${locale}.json`)).default;

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <div className={`${inter.variable} font-sans antialiased`}>
        {children}
      </div>
    </NextIntlClientProvider>
  );
}
