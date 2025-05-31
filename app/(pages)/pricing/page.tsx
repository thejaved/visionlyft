import React from "react";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import TopSection from "@/components/common/TopSection";
import PricingFAQ from "@/components/pricing/PricingFAQ";
import PricingTiersGrid from "@/components/pricing/PricingTiersGrid";

function Pricing() {
  return (
    <>
      <Header />
      <TopSection
        title="Simple, Transparent Pricing That Grows with You"
        description="No surprises, no hidden fees. Whether you're building your MVP, scaling your product, or launching enterprise platforms — Visionlyft offers pricing that’s flexible, scalable, and built for your growth."
        size="large"
      />
      <PricingTiersGrid />
      <PricingFAQ />
      <Footer />
    </>
  );
}

export default Pricing;
