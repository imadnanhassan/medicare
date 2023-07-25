import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const FAQCard = ({ item }) => {
  const { question, content } = item;
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccroding = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="border border-x-[#ccf0f3] border-y-[#fff5df] mb-5 cursor-pointer p-3 lg:p-5 rounded-[12px] ">
        <div
          className="flex items-center justify-between gap-5"
          onClick={toggleAccroding}
        >
          <h3 className="text-[16px] lg:text-[22px] text-headingColor leading-7 lg:leading-8">
            {question}
          </h3>
          <div
            className={`${isOpen && "bg-primaryColor text-white border-none"}
          w-7 h-7 lg:w-8 lg:h-8 border border-[#141f21] rounded flex items-center justify-center
          `}
          >
            {isOpen ? (
              <AiOutlineMinus></AiOutlineMinus>
            ) : (
              <AiOutlinePlus></AiOutlinePlus>
            )}
          </div>
        </div>
        {isOpen && (
          <div className="mt-4">
            <p>{content}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FAQCard;
