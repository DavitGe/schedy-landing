"use client";

import HeroSection from "./components/home/HeroSection";
import FeaturesSection from "./components/home/FeaturesSection";
import TestimonialsSection from "./components/home/TestimonialsSection";
import PricingSection from "./components/home/PricingSection";
import FAQSection from "./components/home/FAQSection";
import CTASection from "./components/home/CTASection";
import PageContainer from "./components/layout/PageContainer";

export default function Home() {
  return (
    <PageContainer>
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Pricing Section */}
      <PricingSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA Section */}
      <CTASection />
    </PageContainer>
  );
}
