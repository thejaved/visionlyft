"use client";

import React from "react";
import Button from "@/components/common/Button";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import TopSection from "@/components/common/TopSection";
import LearningHub from "@/components/resources/LearningHub";
import FeaturedResources from "@/components/resources/FeaturedResources";
import DocumentationGrid from "@/components/resources/DocumentationGrid";
import CommunitySupport from "@/components/resources/CommunitySupport";
import ResourceCTABanner from "@/components/resources/ResourceCTABanner";

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
      <FeaturedResources />
      <DocumentationGrid />
      <LearningHub />
      <CommunitySupport />
      <ResourceCTABanner />
      <Footer />
    </>
  );
}

export default Resources;
