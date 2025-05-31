import React from "react";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import LiveDemo from "@/components/common/LiveDemo";
import TrustedBy from "@/components/common/TrustedBy";
import HeroSlider from "@/components/home/HeroSlider";
import Testimonials from "@/components/common/Testimonials";
import CallToAction from "@/components/common/CallToAction";
import WhyVisionlyft from "@/components/common/WhyVisionlyft";
import SolutionsOverview from "@/components/common/SolutionsOverview";
import NewsletterBlogPreview from "@/components/common/NewsletterBlogPreview";

function MainPage() {
  return (
    <>
      <Header />
      <HeroSlider />
      <SolutionsOverview />
      <WhyVisionlyft />
      <LiveDemo />
      <Testimonials />
      <TrustedBy />
      <NewsletterBlogPreview />
      <CallToAction />
      <Footer />
    </>
  );
}

export default MainPage;
