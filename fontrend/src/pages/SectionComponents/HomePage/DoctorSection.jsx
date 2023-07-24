import React from "react";
import { doctors } from "../../../assets/data/doctors";
import DoctorSectionListCard from "./DoctorSectionListCard";

const DoctorSection = () => {
  return (
    <div className="container">
      <div className="lg:w-[470px] mx-auto py-4">
        <h2 className="heading text-center">Our Great Doctor</h2>
        <p className="text-para text-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus,
          numquam.
        </p>
      </div>
      <div className="grid  grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
        {doctors.map((item, index) => (
          <DoctorSectionListCard
            item={item}
            key={index}
          ></DoctorSectionListCard>
        ))}
      </div>
    </div>
  );
};

export default DoctorSection;
