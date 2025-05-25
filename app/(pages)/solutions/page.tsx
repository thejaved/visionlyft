import React from "react";
import Button from "@/app/components/common/Button";
import Header from "@/app/components/common/Header";
import TopSection from "@/app/components/common/TopSection";

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
    </>
  );
}

export default Solutions;
