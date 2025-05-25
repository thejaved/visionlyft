import React from "react";
import Button from "@/app/components/common/Button";
import Header from "@/app/components/common/Header";
import TopSection from "@/app/components/common/TopSection";

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
    </>
  );
}

export default Services;
