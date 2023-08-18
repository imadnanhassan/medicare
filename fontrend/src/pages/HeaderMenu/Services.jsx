import React from "react";
import { services } from "../../assets/data/services";
import ServicesSectionListCard from '../SectionComponents/HomePage/ServicesSectionListCard'

const Services = () => {
  return (
    <section>
      <div className="container">
        <div className="grid  grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] ">
          {services.map((item, index) => (
            <ServicesSectionListCard
              item={item}
              index={index}
              key={index}
            ></ServicesSectionListCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
