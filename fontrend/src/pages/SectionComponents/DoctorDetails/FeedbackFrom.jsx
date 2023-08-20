import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";

const FeedbackFrom = () => {
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewtext] = useState("");
  const [hoverStates, setHoverStates] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const handelReviewSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <form>
      <div>
        <h3 className="text-headingColor text-[16px] font-semibold leading-6 mb-4 mt-0">
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
                  setHoverStates([false, false, false, false, false, false]);
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

        <div className="mt-[30px]">
          <h3 className="text-headingColor text-[16px] font-semibold leading-6 mb-4 mt-0">
            Lorem ipsum dolor sit amet consectetur elit.
          </h3>
          <textarea
            className="border border-[#0066ff34] focus:outline outline-primaryColor w-full px-4 py-3 rounded-md"
            rows="10"
            placeholder="Write your message"
            onChange={(e) => setReviewtext(e.target.value)}
          ></textarea>
          <button type="submit" className="btn px-4" onClick={handelReviewSubmit}>
            Submit Feedback
          </button>
        </div>
      </div>
    </form>
  );
};

export default FeedbackFrom;
