import React from "react";
import Button from "@/components/common/Button";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import TopSection from "@/components/common/TopSection";
import CoreServices from "@/components/services/CoreServices";

function Services() {
  return (
    <>
      <Header />
      <TopSection
        title="Expert Services That Power Your Product from Start to Scale"
        description="Whether you need a custom app, a secure cloud backend, or a polished user interface—Visionlyft delivers full-cycle development and ongoing support tailored to your business goals."
        buttons={
          <>
            <Button variant="primary">Explore Our Services</Button>
            <Button variant="secondary">Talk to an Expert</Button>
          </>
        }
      />
      <CoreServices />
      <Footer />
    </>
  );
}

export default Services;
