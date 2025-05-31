import React from "react";
import Button from "@/components/common/Button";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import LiveDemo from "@/components/common/LiveDemo";
import TopSection from "@/components/common/TopSection";
import CallToAction from "@/components/common/CallToAction";
import WhyVisionlyft from "@/components/common/WhyVisionlyft";
import SolutionsOverview from "@/components/common/SolutionsOverview";

function Solutions() {
  return (
    <>
      <Header />
      <TopSection
        title="Smart, Scalable Solutions Built for the Way You Work"
        description="From custom applications and cloud systems to secure API integrations—Visionlyft empowers your business with flexible, future-ready solutions that align with your goals, accelerate workflows, and adapt as you grow."
        buttons={
          <>
            <Button variant="primary">Start Your Project</Button>
            <Button variant="secondary">View Solution Areas</Button>
          </>
        }
      />
      <SolutionsOverview />
      <WhyVisionlyft />
      <LiveDemo />
      <CallToAction />
      <Footer />
    </>
  );
}

export default Solutions;
