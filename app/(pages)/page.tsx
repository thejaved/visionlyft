import React from "react";
import HeroSlider from "@/app/components/home/HeroSlider";
import Header from "@/app/components/common/Header";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col relative overflow-hidden">
      <Header />
      <HeroSlider />
    </main>
  );
}
