import React from "react";
import HeroSection from "../SectionComponents/HomePage/HeroSection";
import WorkSection from "../SectionComponents/HomePage/WorkSection";
import AboutSection from "../SectionComponents/HomePage/AboutSection";
import ServiceSection from "../SectionComponents/HomePage/ServiceSection";
import FeatureSection from "../SectionComponents/HomePage/FeatureSection";
import DoctorSection from "../SectionComponents/HomePage/DoctorSection";
import FAQSection from "../SectionComponents/HomePage/FAQSection";

const Home = () => {
  return (
    <>
      <HeroSection></HeroSection>
      <WorkSection></WorkSection>
      <AboutSection></AboutSection>
      <ServiceSection></ServiceSection>
      <FeatureSection></FeatureSection>
      <DoctorSection></DoctorSection>
      <FAQSection></FAQSection>
    </>
  );
};

export default Home;
