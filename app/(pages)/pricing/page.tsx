import React from "react";
import Header from "@/app/components/common/Header";
import TopSection from "@/app/components/common/TopSection";
import PricingTiersGrid from "@/app/components/pricing/PricingTiersGrid";
import PricingFAQ from "@/app/components/pricing/PricingFAQ";
import Footer from "@/app/components/common/Footer";

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
