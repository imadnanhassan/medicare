import React from "react";

const SidePanel = () => {
  const timeSlots = [
    {
      date: "Sunday",
      time: " 10:00 AM - 10:00 PM",
    },
    {
      date: "Monday",
      time: " 10:00 AM - 10:00 PM",
    },
    {
      date: "Sunday",
      time: " 10:00 AM - 10:00 PM",
    },
    {
      date: "Sunday",
      time: " 10:00 AM - 10:00 PM",
    },
  ];
  return (
    <div className="shadow-panelShadow p-3 lg:p-5 rounded-md ">
      <div className="flex items-center justify-between">
        <p className="text-para font-semibold mt-0">Ticket Price</p>
        <span className="text-[16px] lg:text-[20px] text-headingColor font-bold leading-7 lg:leading-8">
          500 BDT
        </span>
      </div>

      <div className="mt-[30px]">
        <p className="text-para mt-0 font-semibold text-headingColor">
          Available Time Slots:
        </p>
        <ul className="mt-3">
          <li className="flex items-center justify-between mb-2">
            <p className="text-[15px] text-textColor font-semibold leading-6">
              Sunday
            </p>
            <p className="text-[15px] text-textColor font-semibold leading-6">
              10:00 AM - 10:00 PM
            </p>
          </li>
          <li className="flex items-center justify-between mb-2">
            <p className="text-[15px] text-textColor font-semibold leading-6">
              Sunday
            </p>
            <p className="text-[15px] text-textColor font-semibold leading-6">
              10:00 AM - 10:00 PM
            </p>
          </li>
        </ul>
      </div>
      <button className="btn px-5 w-full rounded-md">Book Appoinment</button>
    </div>
  );
};

export default SidePanel;
