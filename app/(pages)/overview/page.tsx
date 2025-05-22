import React from "react";
import Header from "@/components/common/Header";
import Intro from "@/components/overview/Intro";
import Footer from "@/components/common/Footer";
import FinalCTA from "@/components/overview/FinalCTA";
import Comparison from "@/components/overview/Comparison";
import HowItWorks from "@/components/overview/HowItWorks";
import LivePreview from "@/components/overview/LivePreview";
import FeatureGrid from "@/components/overview/FeatureGrid";
import Testimonials from "@/components/overview/Testimonials";
import TargetAudience from "@/components/overview/TargetAudience";
import HeroSection from "@/components/common/HeroSection";
import Button from "@/components/ui/Button";

function OverviewPage() {
  return (
    <>
      <Header />
      <HeroSection
        title="Your API-First Platform to Launch Fast & Scale Confidently"
        description="Visionlyft lets you design, deploy, and manage scalable APIs—without touching backend code."
        buttons={
          <>
            <Button variant="primary">Get Started</Button>
            <Button variant="secondary">Explore Docs</Button>
          </>
        }
      />
      <Intro />
      <FeatureGrid />
      <Comparison />
      <HowItWorks />
      <LivePreview />
      <Testimonials />
      <TargetAudience />
      <FinalCTA />
      <Footer />
    </>
  );
}

export default OverviewPage;
