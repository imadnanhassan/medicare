import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";

const FeedbackFrom = () => {
  const [rating, setRating] = useState(0);
  const [hoverStates, setHoverStates] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);
  return (
    <form>
      <div>
        <h3 className="text-headingColor text-[16px] font-semibold leading-6 mb-4">
          Lorem ipsum dolor sit amet consectetur elit.
        </h3>
        <div>
          {[...Array(5).keys()].map((index) => {
            index += 1;
            return (
              <button
                key={index}
                type="button"
                onClick={() => setRating(index)}
                className={`${
                  index <= (rating && hoverStates[index - 1]) ||
                  hoverStates[index - 1]
                    ? "text-yellowColor"
                    : "text-gray-400"
                } bg-transparent border-none outline-none text-[22px] cursor-pointer`}
                onMouseEnter={() => {
                  const newHoverStates = [...hoverStates];
                  newHoverStates[index - 1] = true;
                  setHoverStates(newHoverStates);
                }}
                onMouseLeave={() => {
                  const newHoverStates = [...hoverStates];
                  newHoverStates[index - 1] = false;
                  setHoverStates(newHoverStates);
                }}
                onDoubleClick={() => {
                  setHoverStates([false, false, false, false, false]);
                  setRating(0);
                }}
              >
                <span>
                  <AiFillStar />
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </form>
  );
};

export default FeedbackFrom;
