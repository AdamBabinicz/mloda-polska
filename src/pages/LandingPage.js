import React from "react";
import AboutSection from "../components/AboutSection";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import ServicesSection from "../components/services/ServicesSection";
import TeamSection from "../components/team/TeamSection";

function LandingPage() {
  return (
    <>
      <Header />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <TeamSection />
      <Footer />
    </>
  );
}

export default LandingPage;
