import React, { useState } from "react";
import avater from "../../../assets/images/avatar-icon.png";
import { formatDate } from "../../../utils/formateDate";
import { AiFillStar } from "react-icons/ai";
import FeedbackFrom from "./FeedbackFrom";

const DoctorFeedback = () => {
  const [feedBackFrom, setFeedBackFrom] = useState(false);

  return (
    <div>
      <div className="mb-[50px]">
        <h3 className="text-[20px] text-textColor font-bold leading-[30px] mb-[30px]">
          All Reviews (1000+)
        </h3>

        <div className="flex justify-between gap-10 mb-[30px]">
          <div className="flex gap-3">
            <figure>
              <img src={avater} alt="" className="w-10 h-10 rounded-full" />
            </figure>
            <div>
              <h5 className="text-[16px] font-bold text-primaryColor leading-6">
                Adnan Hassan
              </h5>
              <p className="text-[14px] text-textColor leading-6">
                {formatDate("2-08-2023")}
              </p>
              <p className="text-para mt-3 font-medium text-[15px]">
                Good Services, High quality recomended 👍
              </p>
            </div>
          </div>
          <div className="flex gap-1">
            {[...Array(5).keys()].map((_, index) => (
              <AiFillStar key={index} color="#0067ff" />
            ))}
          </div>
        </div>
      </div>

      {!feedBackFrom && (
        <div className="text-center">
          <button className="btn px-5" onClick={() => setFeedBackFrom(true)}>
            Give a Feedback
          </button>
        </div>
      )}
      {feedBackFrom && <FeedbackFrom />}
    </div>
  );
};

export default DoctorFeedback;
