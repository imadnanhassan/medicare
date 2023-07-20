import React, { useEffect, useRef } from "react";
import logo from "../assets/images/logo.png";
import avaterImg from "../assets/images/avatar-icon.png";
import { Link, NavLink } from "react-router-dom";
import { BiMenu } from "react-icons/bi";

const navLink = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "/doctors",
    display: "Find a Doctor",
  },
  {
    path: "/service",
    display: "Services",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const handleStikyHeader = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky-header");
      } else {
        headerRef.current.classList.remove("sticky-header");
      }
    });
  };
  useEffect(() => {
    handleStikyHeader();
    return () => window.removeEventListener("scroll", handleStikyHeader);
  }, []);


  const toggleMenu = ()=>menuRef.current.classList.toggle('show-menu')

  return (
    <div className="header flex items-center" ref={headerRef}>
      <div className="container">
        <div className="flex items-center justify-between">
          <Link to={"/"}>
            <img src={logo} alt="" />
          </Link>
          {/* navLink */}
          <div className="navagation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu flex items-center gap-[2.7rem]">
              {navLink.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={(navClass) =>
                      navClass.isActive
                        ? "text-primaryColor text-[16px] font-[600] leading-7"
                        : "text-textColor hover:text-primaryColor text-[16px] font-[500] leading-7"
                    }
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          {/* user and login */}
          <div className="flex items-center gap-4">
            <div className="user-profile md:hidden">
              <Link to={"/"}>
                <figure className="w-[35px] h-[35px] rounded-full cursor-pointer">
                  <img
                    src={avaterImg}
                    className="w-full rounded-full"
                    alt="user-profile"
                  />
                </figure>
              </Link>
            </div>
            <div className="login">
              <Link to={"login"}>
                <button className="bg-primaryColor px-4 py-3 text-white font-[600] rounded flex items-center justify-center">
                  Login
                </button>
              </Link>
            </div>
            <span className="md:hidden" onClick={toggleMenu}>
              <BiMenu className="w-6 h-6 cursor-pointer"></BiMenu>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
