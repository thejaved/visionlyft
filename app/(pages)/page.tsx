import React from "react";
import Hero from "@/components/Home/Hero";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col relative overflow-hidden">
      <Header />
      <Hero />
      {/* <Footer /> */}
    </main>
  );
}
