<<<<<<< HEAD
import React from "react";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-[rgba(48,117,154)1%] to-[rgba(31,41,55,1)17%] ">
      <div className="max-w-screen-3xl flex flex-wrap items-center justify-between mx-4 md:mx-16 p-4">
        <a href="/" className="flex items-center space-x-3">
          <img src={logo} className="h-16 md:h-18 " alt="Logo EJE" />
        </a>

        <div className="w-32 md:hidden mt-0 z-50">
          <button
            className="text-white focus:outline-none mt-0"
            onClick={() => {
              const navbar = document.getElementById("navbar-default");
              navbar.classList.toggle("hidden");
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="50"
              height="40"
              viewBox="0 0 50 50"
              className="ml-10"
            >
              <path
                d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"
                fill="#ffffff"
              ></path>
            </svg>
          </button>
        </div>

        <div className="hidden w-full  md:flex md:w-auto  " id="navbar-default">
          <ul className="font-large flex flex-col p-6 md:p-0 mt-4 md:mt-0 space-y-4 md:flex-row md:space-y-0 md:space-x-8 rtl:space-x-reverse z-[10]">
            <li>
              <a
                href="#"
                className="text-lg font-photograph font-light text-white hover:text-[#2DA2DD] md:border-0 md:hover:text-[#2DA2DD] md:p-0"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-lg font-photograph font-light text-white hover:text-[#2DA2DD] md:border-0 md:hover:text-[#2DA2DD] md:p-0"
              >
                About us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-lg font-photograph font-light text-white hover:text-[#2DA2DD] md:border-0 md:hover:text-[#2DA2DD] md:p-0"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-lg font-photograph font-light text-white hover:text-[#2DA2DD] md:border-0 md:hover:text-[#2DA2DD] md:p-0"
              >
                Events
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-lg font-photograph font-light text-white hover:text-[#2DA2DD] md:border-0 md:hover:text-[#2DA2DD] md:p-0"
              >
                News
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-lg font-photograph font-light text-white hover:text-secondary md:border-0 md:hover:text-secondary md:p-0"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
=======
export function Navbar() {
  return <div className="text-3xl font-bold underline">Navbarr</div>;
>>>>>>> 8e545fa75adbaeca6ccdb4d894fbd0071adc1336
}

export default Navbar;
