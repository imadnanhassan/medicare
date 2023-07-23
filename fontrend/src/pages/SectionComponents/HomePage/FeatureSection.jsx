import React from "react";
import { Link } from "react-router-dom";
import featureImg from "../../../assets/images/feature-img.png";
import videoIcon from "../../../assets/images/video-icon.png";

const CustomTooltip = ({ text, children }) => {
  return (
    <div className="relative group ">
      {children}
      <div className="tooltip w-[150px] absolute bg-gray-800 text-white text-xs rounded py-1 px-4 opacity-0 group-hover:opacity-100">
        {text}
      </div>
    </div>
  );
};

const FeatureSection = () => {
  return (
    <>
      <div className="container  py-10 md:flex items-center justify-between">
        <div className="lg:w-[470px] py-4">
          <h2 className="heading">
            Get virtule tretmernt <br /> anytime
          </h2>
          <ul className="pl-4 py-3 pb-10">
            <li className="text-para">
              1. Lorem, ipsum dolor sit amet consectetur adipisicing.
            </li>
            <li className="text-para">
              2. Lorem, ipsum dolor sit amet consectetur adipisicing.
            </li>
            <li className="text-para">
              3. Lorem, ipsum dolor sit amet consectetur adipisicing.
            </li>
          </ul>
          <Link
            to={"/about"}
            class="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-[#0067ff] rounded-lg group"
          >
            <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-gray-800 rounded-full group-hover:w-56 group-hover:h-56"></span>
            <span class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
            <span class="relative">Learn More</span>
          </Link>
        </div>
        <div className="xl:w-[770px] relative z-10 flex items-center justify-end mt-[50px] md:mt-0">
          <img src={featureImg} alt="" />
          <div className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-36 z-20 py-5 px-5 rounded">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-[6px] lg:gap-3">
                <p className="text-headingColor text-[10px] leading-[10px] lg:text-[14px] font-[600]">
                  Tue-Thu
                </p>
                <p className="text-textColor text-[10px] leading-[10px] lg:text-[14px] font-[400]">
                  10:00
                </p>
              </div>
              <div className="bg-yellowColor px-1 py-1 rounded">
                <CustomTooltip text="Free Health Support">
                  <a href="_#">
                    <img src={videoIcon} alt="" />
                  </a>
                </CustomTooltip>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureSection;
