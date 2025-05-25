import React from "react";
import Button from "@/app/components/common/Button";
import Header from "@/app/components/common/Header";
import TopSection from "@/app/components/common/TopSection";

function Resources() {
  return (
    <>
      <Header />
      <TopSection
        title="Guides, Docs & Insights to Build Smarter, Faster"
        description="Explore technical documentation, developer guides, and product insights—all designed to help you maximize the power of Visionlyft’s platform with clarity and confidence."
        buttons={
          <>
            <Button variant="primary">Browse Documentation</Button>
            <Button variant="secondary">View Tutorials</Button>
          </>
        }
      />
    </>
  );
}

export default Resources;
