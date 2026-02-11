import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatIsPetCt from "@/components/WhatIsPetCt";
import WhenUsed from "@/components/WhenUsed";
import HowItWorks from "@/components/HowItWorks";
import WhoShouldAvoid from "@/components/WhoShouldAvoid";
import Preparation from "@/components/Preparation";
import Duration from "@/components/Duration";
import AfterScan from "@/components/AfterScan";
import Comparison from "@/components/Comparison";
import OptimedService from "@/components/OptimedService";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    name: "Optimed Health Group",
    url: "https://optimedsaglik.com",
    logo: "https://optimedsaglik.com/images/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+90-212-000-0000",
      contactType: "customer service",
      availableLanguage: ["Turkish", "English", "Bulgarian"],
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Istanbul",
      addressCountry: "TR",
    },
    medicalSpecialty: "Nuclear Medicine",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <WhatIsPetCt />
        <WhenUsed />
        <HowItWorks />
        <CTABanner />
        <WhoShouldAvoid />
        <Preparation />
        <Duration />
        <AfterScan />
        <CTABanner />
        <Comparison />
        <OptimedService />
        <FAQ />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
