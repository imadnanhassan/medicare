import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <section className="px-5 lg:px-6">
      <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10">
        <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10 text-center md:text-left">
          Hello <span className="text-primaryColor">Welcome</span> Back 💐
        </h3>

        <form className="py-4 md:py-0 px-3 md:px-0">
          <div className="mb-5">
            <input
              type="email"
              placeholder="Enter Your Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border-b border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer"
            />
          </div>
          <div className="mb-5">
            <input
              type="password"
              placeholder="Enter Your Password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border-b border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer"
            />
          </div>
          <div className="mt-7">
            <button
              type="submit"
              className="w-full rounded-md font-semibold bg-primaryColor text-white text-[18px] leading-[38px] px-4 py-3"
            >
              Login
            </button>
          </div>
          <p className="text-center mt-5 text-textColor">
            Dont Have a Account?{" "}
            <Link
              to={"/regster"}
              className="ml-1 text-primaryColor font-semibold"
            >
              Register
            </Link>{" "}
          </p>
        </form>
      </div>
    </section>
  );
};

export default SignIn;
