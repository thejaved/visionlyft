import React from "react";
import Button from "@/app/components/common/Button";
import Header from "@/app/components/common/Header";
import TopSection from "@/app/components/common/TopSection";
import ContactOptions from "@/app/components/contact/ContactOptions";
import Footer from "@/app/components/common/Footer";

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
