import { doctors } from "../../assets/data/doctors";
import DoctorSectionListCard from "../SectionComponents/HomePage/DoctorSectionListCard";
import TestimonialSection from "../SectionComponents/HomePage/TestimonialSection";

const Doctor = () => {
  return (
    <>
      <section className="bg-[#fff9ea]">
        <div className="container text-center">
          <h2 className="heading">Find a Doctor</h2>
          <div className="md:w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between">
            <input
              type="search"
              className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor"
              placeholder="Search a Doctor"
            />
            <button className="btn mt-0 rounded-[0px] rounded-r-md px-3">
              Search
            </button>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="grid  grid-col-1 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-[30px]">
            {doctors.map((item, index) => (
              <DoctorSectionListCard
                item={item}
                key={index}
              ></DoctorSectionListCard>
            ))}
          </div>
        </div>
      </section>
      <TestimonialSection />
    </>
  );
};

export default Doctor;
