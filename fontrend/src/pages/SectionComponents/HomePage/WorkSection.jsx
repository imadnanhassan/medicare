import React from "react";
import icon1 from "../../../assets/images/icon01.png";
import icon2 from "../../../assets/images/icon02.png";
import icon3 from "../../../assets/images/icon03.png";
import { Link } from "react-router-dom";
import { BiSolidArrowToRight } from "react-icons/bi";

const WorkSection = () => {
  return (
    <div className="bg-gradient-to-r from-[#fff5df] via-[#fff] to-[#ccf0f3] py-10">
      <div className="container">
        <div className="lg:w-[470px] mx-auto py-4">
          <h2 className="heading text-center">
            Providing the best medical services
          </h2>
          <p className="text-para text-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus,
            numquam.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
          <div className="py-[30px] px-5 flex flex-col items-center">
            <img src={icon1} alt="" />
            <h3 className="text-[26px] mt-[30px] leading-9 text-headingColor font-[700] text-center">
              Find a Doctor
            </h3>
            <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusamus, numquam.
            </p>
            <Link
              to={"/doctors"}
              className="w-[44px] h-[44px] mx-auto flex items-center justify-center group  rounded-full border-[#181a1e] mt-[30px] border hover:bg-primaryColor hover:border-none"
            >
              <BiSolidArrowToRight className="group-hover:text-white w-6 h-5"></BiSolidArrowToRight>
            </Link>
          </div>
          <div className="py-[30px] px-5 flex flex-col items-center">
            <img src={icon2} alt="" />
            <h3 className="text-[26px] mt-[30px] leading-9 text-headingColor font-[700] text-center">
              Find a Location
            </h3>
            <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusamus, numquam.
            </p>
            <Link
              to={"/doctors"}
              className="w-[44px] h-[44px] mx-auto flex items-center justify-center group  rounded-full border-[#181a1e] mt-[30px] border hover:bg-primaryColor hover:border-none"
            >
              <BiSolidArrowToRight className="group-hover:text-white w-6 h-5"></BiSolidArrowToRight>
            </Link>
          </div>
          <div className="py-[30px] px-5 flex flex-col items-center">
            <img src={icon3} alt="" />
            <h3 className="text-[26px] mt-[30px] leading-9 text-headingColor font-[700] text-center">
              Book Appoinment
            </h3>
            <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusamus, numquam.
            </p>
            <Link
              to={"/doctors"}
              className="w-[44px] h-[44px] mx-auto flex items-center justify-center group  rounded-full border-[#181a1e] mt-[30px] border hover:bg-primaryColor hover:border-none"
            >
              <BiSolidArrowToRight className="group-hover:text-white w-6 h-5"></BiSolidArrowToRight>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkSection;
