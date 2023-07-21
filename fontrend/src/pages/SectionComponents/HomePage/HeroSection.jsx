import React from "react";
import heroImg1 from "../../../assets/images/hero-img01.png"
import heroImg2 from "../../../assets/images/hero-img02.png"
import heroImg3 from "../../../assets/images/hero-img03.png"

const HeroSection = () => {
  return (
    <>
      <section className="hero-section pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            <div>
              <div className="lg:w-[570px]">
                <h1 className="text-[36px] leading-[45px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                  We Help patients live a healthy longer life.
                </h1>
                <p className="text-para">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Nihil modi sunt ipsam sapiente odio nesciunt libero molestias.
                  Ad eos, voluptatibus iste tenetur, corporis quam tempora
                  sequi, explicabo necessitatibus amet vitae?
                </p>
                <button className="btn px-3">Request an Appoinment</button>
              </div>

              <div className="mt-[30px] lg:mt-[78px] lg:flex flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    30+
                  </h2>
                  <span className="w-[180px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                  <p className="text-para">Years Of Exprience</p>
                </div>
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    20+
                  </h2>
                  <span className="w-[180px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                  <p className="text-para">Clinic Location</p>
                </div>
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    100%
                  </h2>
                  <span className="w-[180px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
                  <p className="text-para">Patient Satisfaction</p>
                </div>
              </div>
            </div>
            <div className="flex gap-[30px] justify-end">
               <div>
                  <img src={heroImg1} alt=""  className="w-full"/>
               </div>
               <div className="mt-[30px] flex flex-col gap-4">
                  <img src={heroImg2} alt=""  className="w-full mb-[30]"/>
                  <img src={heroImg3} alt=""  className="w-full"/>
               </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
