import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import VideoSection from "@/components/VideoSection";
import WhatIsPetCt from "@/components/WhatIsPetCt";
import WhenUsed from "@/components/WhenUsed";
import HowItWorks from "@/components/HowItWorks";
import Duration from "@/components/Duration";
import AfterScan from "@/components/AfterScan";
import OptimedService from "@/components/OptimedService";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import Hospitals from "@/components/Hospitals";
import ScrollContactModal from "@/components/ScrollContactModal";
import Doctors from "@/components/Doctors";

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
      <a id="top" />
      <Navbar />
      <main>
        <ScrollContactModal />
        <Hero />
        <Stats />
        <VideoSection />
        <Hospitals />
        <WhatIsPetCt />
        <WhenUsed />
        <HowItWorks />
        <CTABanner />
        <Duration />
        <AfterScan />
        <CTABanner />
        <OptimedService />
        <Doctors />
      </main>
      <Footer />
    </>
  );
}
