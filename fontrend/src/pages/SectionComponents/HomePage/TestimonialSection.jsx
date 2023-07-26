import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import patientImg from "../../../assets/images/patient-avatar.png";
import { HiStar } from "react-icons/hi";

const TestimonialSection = () => {
  return (
    <div className=" ">
      {/* bg-gradient-to-r from-[#ccf0f3] via-[#fff] to-[#fff5df] */}
      <div className="container py-10">
        <div className="lg:w-[470px] mx-auto py-10">
          <h2 className="heading text-center">What our patient say</h2>
          <p className="text-para text-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus,
            numquam.
          </p>
        </div>
        <div>
          <Swiper
            modules={[Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
          >
            <SwiperSlide>
              <div className="py-[30px] px-5 rounded-lg">
                <div className="flex items-center gap-[13px]">
                  <img src={patientImg} alt="" />
                  <div>
                    <h4 className="text-[18px] leading-[38px] font-semibold text-headingColor">
                      Muhibur Rahaman
                    </h4>
                    <div className="flex items-center gap-1">
                      <HiStar className="text-yellowColor w-[18px] h-5"></HiStar>
                      <HiStar className="text-yellowColor w-[18px] h-5"></HiStar>
                      <HiStar className="text-yellowColor w-[18px] h-5"></HiStar>
                      <HiStar className="text-yellowColor w-[18px] h-5"></HiStar>
                      <HiStar className="text-yellowColor w-[18px] h-5"></HiStar>
                    </div>
                  </div>
                </div>
                <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae, doloribus.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="py-[30px] px-5 rounded-lg">
                <div className="flex items-center gap-[13px]">
                  <img src={patientImg} alt="" />
                  <div>
                    <h4 className="text-[18px] leading-[38px] font-semibold text-headingColor">
                      Muhibur Rahaman
                    </h4>
                    <div className="flex items-center gap-1">
                      <HiStar className="text-yellowColor w-[18px] h-5"></HiStar>
                      <HiStar className="text-yellowColor w-[18px] h-5"></HiStar>
                      <HiStar className="text-yellowColor w-[18px] h-5"></HiStar>
                      <HiStar className="text-yellowColor w-[18px] h-5"></HiStar>
                      <HiStar className="text-yellowColor w-[18px] h-5"></HiStar>
                    </div>
                  </div>
                </div>
                <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae, doloribus.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="py-[30px] px-5 rounded-lg">
                <div className="flex items-center gap-[13px]">
                  <img src={patientImg} alt="" />
                  <div>
                    <h4 className="text-[18px] leading-[38px] font-semibold text-headingColor">
                      Muhibur Rahaman
                    </h4>
                    <div className="flex items-center gap-1">
                      <HiStar className="text-yellowColor w-[18px] h-5"></HiStar>
                      <HiStar className="text-yellowColor w-[18px] h-5"></HiStar>
                      <HiStar className="text-yellowColor w-[18px] h-5"></HiStar>
                      <HiStar className="text-yellowColor w-[18px] h-5"></HiStar>
                      <HiStar className="text-yellowColor w-[18px] h-5"></HiStar>
                    </div>
                  </div>
                </div>
                <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae, doloribus.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="py-[30px] px-5 rounded-lg">
                <div className="flex items-center gap-[13px]">
                  <img src={patientImg} alt="" />
                  <div>
                    <h4 className="text-[18px] leading-[38px] font-semibold text-headingColor">
                      Muhibur Rahaman
                    </h4>
                    <div className="flex items-center gap-1">
                      <HiStar className="text-yellowColor w-[18px] h-5"></HiStar>
                      <HiStar className="text-yellowColor w-[18px] h-5"></HiStar>
                      <HiStar className="text-yellowColor w-[18px] h-5"></HiStar>
                      <HiStar className="text-yellowColor w-[18px] h-5"></HiStar>
                      <HiStar className="text-yellowColor w-[18px] h-5"></HiStar>
                    </div>
                  </div>
                </div>
                <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae, doloribus.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="py-[30px] px-5 rounded-lg">
                <div className="flex items-center gap-[13px]">
                  <img src={patientImg} alt="" />
                  <div>
                    <h4 className="text-[18px] leading-[38px] font-semibold text-headingColor">
                      Muhibur Rahaman
                    </h4>
                    <div className="flex items-center gap-1">
                      <HiStar className="text-yellowColor w-[18px] h-5"></HiStar>
                      <HiStar className="text-yellowColor w-[18px] h-5"></HiStar>
                      <HiStar className="text-yellowColor w-[18px] h-5"></HiStar>
                      <HiStar className="text-yellowColor w-[18px] h-5"></HiStar>
                      <HiStar className="text-yellowColor w-[18px] h-5"></HiStar>
                    </div>
                  </div>
                </div>
                <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae, doloribus.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="py-[30px] px-5 rounded-lg">
                <div className="flex items-center gap-[13px]">
                  <img src={patientImg} alt="" />
                  <div>
                    <h4 className="text-[18px] leading-[38px] font-semibold text-headingColor">
                      Muhibur Rahaman
                    </h4>
                    <div className="flex items-center gap-1">
                      <HiStar className="text-yellowColor w-[18px] h-5"></HiStar>
                      <HiStar className="text-yellowColor w-[18px] h-5"></HiStar>
                      <HiStar className="text-yellowColor w-[18px] h-5"></HiStar>
                      <HiStar className="text-yellowColor w-[18px] h-5"></HiStar>
                      <HiStar className="text-yellowColor w-[18px] h-5"></HiStar>
                    </div>
                  </div>
                </div>
                <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae, doloribus.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
