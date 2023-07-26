import React from "react";
import { faqs } from "../../../assets/data/faqs";
import faqImg from "../../../assets/images/faq-img.png";
import happyImg from "../../../assets/images/happy.svg";
import FAQCard from "./FAQCard";
const FAQSection = () => {
  return (
    <div className="container py-10">
      <div className="lg:w-[470px] mx-auto py-4">
        <h2 className="heading text-center">FAQ Section</h2>
      </div>
      <div className="flex items-center justify-between gap-[50px] lg:gap-0 mt-10">
        <div className="w-1/2 hidden md:block relative">
          <img src={faqImg} alt="" />
          <div className="absolute bottom-[-30px] left-[150px] py-5 px-5 bg-white shadow-2xl rounded-md flex justify-between items-center gap-3 text-headingColor text-[25px] font-[800] leading-7">
            <img src={happyImg} alt="" className="w-[45px]"/>
            <span>
              <p>95k+</p>
              <p>happy Patients</p>
            </span>
          </div>
        </div>
        <div className="w-full md:w-1/2 ">
          <h1 className="heading">Lorem ipsum dolor sit amet.</h1>
          <div className="mt-[50px]">
            {faqs.map((item, index) => (
              <FAQCard item={item} index={index} key={index}></FAQCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
