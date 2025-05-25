import React from "react";
import Header from "../components/common/Header";
import HeroSlider from "../components/home/HeroSlider";
import SolutionsOverview from "../components/common/SolutionsOverview";
import WhyVisionlyft from "../components/common/WhyVisionlyft";
import LiveDemo from "../components/common/LiveDemo";
import TrustedBy from "../components/common/TrustedBy";
import Testimonials from "../components/common/Testimonials";
import CallToAction from "../components/common/CallToAction";
import NewsletterBlogPreview from "../components/common/NewsletterBlogPreview";
import Footer from "../components/common/Footer";

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
