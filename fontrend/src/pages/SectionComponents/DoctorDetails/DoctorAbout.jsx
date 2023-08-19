import React from "react";
import { formatDate } from "../../../utils/formateDate";

const DoctorAbout = () => {
  return (
    <>
      <div>
        <h3 className="text-[20px] text-headingColor leading-[30px] font-semibold flex items-center gap-2">
          About of
          <span className="text-irisBlueColor font-bold text-[24px] leading-9">
            Adnan Hassan
          </span>
        </h3>
        <p className="text-para">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non dolorem
          temporibus amet accusamus est minima beatae provident id nobis veniam
          repellat, nulla magni voluptates. Laudantium magni maiores tenetur
          ipsum eos atque unde, praesentium rem deserunt ea incidunt voluptate
          molestias iusto ducimus, aliquid itaque? Ratione dolores commodi
          cupiditate facere alias distinctio.
        </p>
      </div>
      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
          Education
        </h3>
        <ul className="pt-4 md:pt-5">
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-center md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-5 font-semibold">
                {formatDate("12-04-2010")}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">
                PHD in Surgeon
              </p>
            </div>
            <p className="text-[14px] leading-5 font-medium text-textColor">
              New Apolo Hospital, New York
            </p>
          </li>
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-center md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-5 font-semibold">
                {formatDate("12-04-2010")}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">
                PHD in Surgeon
              </p>
            </div>
            <p className="text-[14px] leading-5 font-medium text-textColor">
              New Apolo Hospital, New York
            </p>
          </li>
        </ul>
      </div>

      <div className="mt12-">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
          Experience
        </h3>
        <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
          <li className="p-4 rounded bg-[#fff9ea] ">
            <span className="text-yellowColor text-[15px] leading-6 font-semibold">
              {formatDate("10-02-2011")} - {formatDate("10-02-2011")}
            </span>
            <p className="text-[16px] leading-6 text-textColor">Sr. Surgeon</p>
            <p className="text-[14px] leading-5 font-medium text-textColor">
              New Apolo, New York
            </p>
          </li>
          <li className="p-4 rounded bg-[#fff9ea] ">
            <span className="text-yellowColor text-[15px] leading-6 font-semibold">
              {formatDate("10-02-2011")} - {formatDate("10-02-2011")}
            </span>
            <p className="text-[16px] leading-6 text-textColor">Sr. Surgeon</p>
            <p className="text-[14px] leading-5 font-medium text-textColor">
              New Apolo, New York
            </p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default DoctorAbout;
