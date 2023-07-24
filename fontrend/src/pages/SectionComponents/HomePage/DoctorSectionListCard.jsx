import React from "react";
import star from "../../../assets/images/Star.png";
import { Link } from "react-router-dom";
import { BiSolidArrowToRight } from "react-icons/bi";

const DoctorSectionListCard = ({ item }) => {
  const {
    name,
    specialty,
    avgRating,
    totalRating,
    photo,
    totalPatients,
    hospital,
  } = item;
  return (
    <div className="p-3 lg:p-5 border border-x-[#ccf0f3] border-y-[#fff5df]  rounded ">
      <div>
        <img src={photo} alt="" className="w-full" />
      </div>
      <h2 className="lg:text-[30px] text-18px text-headingColor font-[700] mt-3 lg:mt-5 leading-[30px] lg:leading-[26px] ">
        {name}
      </h2>
      <div className="mt-2 lg:mt-4 flex items-center justify-between">
        <span className="bg-[#ccf0f3] text-irisBlueColor py-1 lg:py-[6px] px-2 lg:px-6 mt-2  text-[12px] lg:text-[16px] font-semibold rounded">
          {specialty}
        </span>
        <div className="flex gap-5 items-center">
          <span className="flex items-center gap-[6px] text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-semibold text-headingColor">
            <img src={star} alt="" />
            {avgRating}
          </span>
          <span className="text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-[400] text-textColor">
            ({totalRating})
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between mt-[18px] lg:mt-5">
        <div>
          <h3 className="text-[16px] lg:text-[18px] leading-7 lg:leading-[30px] font-semibold text-headingColor">
            +{totalPatients} patients
          </h3>
          <h3 className="text-[14px] font-[400] text-textColor">{hospital}</h3>
        </div>
        <Link
          to={"/doctors"}
          className="w-[44px] h-[44px] flex items-center justify-center group  rounded-full border-[#181a1e] border hover:bg-primaryColor hover:border-none"
        >
          <BiSolidArrowToRight className="group-hover:text-white w-6 h-5"></BiSolidArrowToRight>
        </Link>
      </div>
    </div>
  );
};

export default DoctorSectionListCard;
