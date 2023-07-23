import React from "react";
import HeroSection from "../SectionComponents/HomePage/HeroSection";
import WorkSection from "../SectionComponents/HomePage/WorkSection";
import AboutSection from "../SectionComponents/HomePage/AboutSection";
import ServiceSection from "../SectionComponents/HomePage/ServiceSection";

const Home = () => {
  return (
    <>
      <HeroSection></HeroSection>
      <WorkSection></WorkSection>
      <AboutSection></AboutSection>
      <ServiceSection></ServiceSection>
    </>
  );
};

export default Home;
