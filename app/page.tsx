import type { Metadata } from "next";
import Nav from "@/components/sections/Nav";
import Hero from "@/components/sections/Hero";
import Mission from "@/components/sections/Mission";
import Bridge from "@/components/sections/Bridge";
import Fundraising from "@/components/sections/Fundraising";
import Team from "@/components/sections/Team";
import Momentum from "@/components/sections/Momentum";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Islands of Valor — Veterans Healing in the USVI",
};

export default function HomePage() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <Hero />
        <Mission />
        <Bridge />
        <Fundraising />
        <Team />
        <Momentum />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
