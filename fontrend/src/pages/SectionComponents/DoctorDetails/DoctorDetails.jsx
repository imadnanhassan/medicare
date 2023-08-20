import React, { useState } from "react";
import doctorImg from "../../../assets/images/doctor-img02.png";
import StarIcon from "../../../assets/images/Star.png";
import DoctorAbout from "./DoctorAbout";
import DoctorFeedback from "./DoctorFeedback";
import SidePanel from "./SidePanel";

const DoctorDetails = () => {
  const [tab, setTab] = useState("about");

  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">
        <div className="grid md:grid-cols-3 gap-[50px]">
          <div className="md:col-span-2">
            <div className="md:flex items-center gap-5">
              <figure className="md:max-w-[200px] lg:max-h-[200px] pb-2">
                <img src={doctorImg} alt="" className="w-full" />
              </figure>
              <div>
                <span className="bg-[#ccf0f3] text-irisBlueColor py-1 px-6 trxt-[12px] lg:py-2 lg:px-6 leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded ">
                  Surgeon
                </span>
                <h3 className="text-headingColor text-[22px] leading-9 mt-3 font-bold">
                  Adnan Hassan
                </h3>
                <div className="flex items-center gap-[16px]">
                  <span className="flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold text-headingColor">
                    <img src={StarIcon} alt="" />
                    4.5
                  </span>
                  <span className="text-[14px] leading-5 lg:text-[16px] font-[400] text-textColor">
                    (220)
                  </span>
                </div>
                <p className="text-para text-[14px] lg:text-[16px] leading-5 lg:leading-7 lg:max-w-[390px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi, ipsam!
                </p>
              </div>
            </div>
            <div className="mt-[50px] border-b border-[#0066ff34]">
              <button
                onClick={() => setTab("about")}
                className={`${
                  tab === "about" && "border-b border-primaryColor"
                } py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}
              >
                About
              </button>
              <button
                onClick={() => setTab("feedback")}
                className={`${
                  tab === "feedback" && "border-b border-primaryColor"
                } py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}
              >
                Feedback
              </button>
            </div>

            <div className="mt-[50px]">
              {tab === "about" && <DoctorAbout />}
              {tab === "feedback" && <DoctorFeedback />}
            </div>
          </div>
          <div>
            <SidePanel />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorDetails;
