import React from "react";
import Button from "@/components/common/Button";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import TopSection from "@/components/common/TopSection";
import ContactOptions from "@/components/contact/ContactOptions";

function Contact() {
  return (
    <>
      <Header />
      <TopSection
        title="Let’s Build Something Great Together"
        description="Whether you're looking to start a project, ask a question, or explore a partnership—our team is here to help. Reach out and let's turn your ideas into reality."
        buttons={
          <>
            <Button variant="primary">Contact Sales</Button>
            <Button variant="secondary">Support & Help</Button>
          </>
        }
      />
      <ContactOptions />
      <Footer />
    </>
  );
}

export default Contact;
