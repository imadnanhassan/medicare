import React from "react";
import aboutImg from "../../../assets/images/about.png";
import aboutCard from "../../../assets/images/about-card.png";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <div className="bg-gradient-to-r from-[#ccf0f3] via-[#fff] to-[#fff5df] py-10">
      <div className="container py-4">
        <div className="flex justify-between items-center gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
          <div className="relative w-3/4 lg:w-1/2 xl:-[770px] z-10 order-2 lg:order-1">
            <img src={aboutImg} alt="" />
            <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:rigt-[-7%] lg:right-[22%]">
              <img src={aboutCard} alt="" />
            </div>
          </div>
          <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
            <h2 className="heading">Proud to be fo the nations best</h2>
            <p className="text-para">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt
              nostrum natus delectus magni expedita ratione odit aspernatur
              tenetur rerum mollitia ducimus a nisi quos iure aut, blanditiis at
              magnam recusandae!
            </p>
            <p className="text-para pb-10">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt
              nostrum natus delectus magni expedita ratione odit aspernatur
              tenetur rerum mollitia ducimus a nisi quos iure aut, blanditiis at
              magnam recusandae!
            </p>
            <Link to={'/about'} className="btn px-10">Learn More</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
