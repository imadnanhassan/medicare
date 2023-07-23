import React from "react";

const ServicesSectionListCard = ({ item, index }) => {
  const { name, desc, bgColor, textColor } = item;
  const styles = {
    background: bgColor,
    color: textColor,
  };
  return (
    <>
      <div className="py-[30px] relative px-3 lg:px-5 rounded-md border border-x-[#ccf0f3] border-y-[#fff5df]  ">
        <h2 className="text-[26px] leading-9 text-headingColor font-[700] ">
          {name}
        </h2>
        <p className="text-[16px] leading-7 font-[400] text-textColor">
          {desc}
        </p>
        <div className="flex items-center justify-between pt-12">
         
          <span
            className=" absolute top-0 right-0 w-[44px] h-[44px] flex item-center justify-center text-[18px] leading-[30px] font-[600]"
            style={styles}
          >
            {index + 1}
          </span>
        </div>
      </div>
    </>
  );
};

export default ServicesSectionListCard;
