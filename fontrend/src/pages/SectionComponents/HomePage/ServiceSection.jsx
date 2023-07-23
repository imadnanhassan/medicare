// import React, { useEffect, useState } from "react";
import { services } from "../../../assets/data/services";
import ServicesSectionListCard from "./ServicesSectionListCard";

const ServiceSection = () => {
  return (
    <div>
      <div className="container py-10">
        <div className="lg:w-[470px] mx-auto py-4">
          <h2 className="heading text-center">Our medical services</h2>
          <p className="text-para text-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus,
            numquam.
          </p>
        </div>
        <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
          {services.map((item, index) => (
            <ServicesSectionListCard
              item={item}
              index={index}
              key={index}
            ></ServicesSectionListCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
