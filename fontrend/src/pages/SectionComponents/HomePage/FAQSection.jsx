import React from "react";
import { faqs } from "../../../assets/data/faqs";
import faqImg from "../../../assets/images/faq-img.png";
import FAQCard from "./FAQCard";
const FAQSection = () => {
  return (
    <div className="container py-10">
      <div className="lg:w-[470px] mx-auto py-4">
        <h2 className="heading text-center">FAQ Section</h2>
      </div>
      <div className="flex justify-between gap-[50px] lg:gap-0 ">
        <div className="w-1/2 hidden md:block">
          <img src={faqImg} alt="" />
        </div>
        <div className="w-full md:w-1/2 mt-[100px]">
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
