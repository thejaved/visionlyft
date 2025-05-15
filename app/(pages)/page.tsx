import React from "react";
import Hero from "@/components/Hero";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col relative overflow-hidden">
      <Header />
      <Hero />
    </main>
  );
}
