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

            <Link
              to={"/about"}
              class="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group"
            >
              <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#0067ff] rounded-full group-hover:w-56 group-hover:h-56"></span>
              <span class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
              <span class="relative">Learn More</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
