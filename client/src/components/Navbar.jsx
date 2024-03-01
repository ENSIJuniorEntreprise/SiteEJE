import React, { useState } from "react";
import logo from "../assets/logo.png";

function Navbar() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const isActive = (path) => window.location.pathname === path;

  return (
    <div>
      <nav style={{ backgroundColor: 'rgba(31, 32, 41, 0.8)', zIndex: '500', position: 'fixed', width: '100%' }} className="md:h-25">
        <div className="navbar-corner"></div>
        <div style={{ boxSizing: 'border-box' }} className={`xxs:px-0 xxs:p-0 xxs:py-4 xxs:pt-4 lg:px-6 dlg:px-10 md:pb-4 max-w-screen-3xl flex flex-wrap items-center justify-between mx-0 md:mx-3 p-4 relative`}>
          <a href="/" className="flex items-center space-x-3">
            <img src={logo} className="h-16 xxs:ml-3 md:h-18" alt="Logo EJE" />
          </a>

          <div className="w-12 md:hidden mt-0 z-50 xxs:mr-3">
            <button
              className="text-white focus:outline-none mt-0"
              onClick={() => {
                const navbar = document.getElementById("navbar-default");
                navbar.classList.toggle("hidden");
                setIsDropdownVisible(!isDropdownVisible)
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="50"
                height="40"
                viewBox="0 0 50 50"
                className="xxs:ml-0"
              >
                <path
                  d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"
                  fill="#ffffff"
                ></path>
              </svg>
            </button>
          </div>
          <div style={{ boxSizing: 'border-box' }} className="xxs:mt-4 md:pr-5 dmd:pr-10 md:mt-3 hidden w-full md:flex md:w-auto" id="navbar-default">
            <ul className="justify-center w-full xxs:mt-0 xxs:pt-3 backdrop-blur-sm items-center font-large flex flex-col pt-6 md:p-0 mt-4 md:mt-0 space-y-4 md:flex-row md:space-y-0 md:space-x-10 rtl:space-x-reverse z-[10]" style={{ boxSizing: 'border-box' }}>
              <li>
                <a
                  href="/"
                  className={`tracking-wider text-xl font-proxima-nova font-light ${isActive('/') ? 'text-[#2DA2DD]' : 'text-beige'} hover:text-[#2DA2DD] md:border-0 md:hover:text-[#2DA2DD] md:p-0`}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className={`tracking-wider text-xl font-proxima-nova font-light ${isActive('/about') ? 'text-[#2DA2DD]' : 'text-beige'} hover:text-[#2DA2DD] md:border-0 md:hover:text-[#2DA2DD] md:p-0`}
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className={`tracking-wider text-xl font-proxima-nova font-light ${isActive('/services') ? 'text-[#2DA2DD]' : 'text-beige'} hover:text-[#2DA2DD] md:border-0 md:hover:text-[#2DA2DD] md:p-0`}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/events"
                  className={`tracking-wider text-xl font-proxima-nova font-light ${isActive('/events') ? 'text-[#2DA2DD]' : 'text-beige'} hover:text-[#2DA2DD] md:border-0 md:hover:text-[#2DA2DD] md:p-0`}
                >
                  Events
                </a>
              </li>
              <li>
                <a
                  href="/news"
                  className={`tracking-wider text-xl font-proxima-nova font-light ${isActive('/news') ? 'text-[#2DA2DD]' : 'text-beige'} hover:text-[#2DA2DD] md:border-0 md:hover:text-[#2DA2DD] md:p-0`}
                >
                  News
                </a>
              </li>
              <li className="xxs:pb-3 md:pb-0">
                <a
                  href="/contact"
                  className={`tracking-wider text-xl font-proxima-nova font-light ${isActive('/contact') ? 'text-[#2DA2DD]' : 'text-beige'} hover:text-[#2DA2DD] hover:text-secondary md:border-0 md:hover:text-secondary md:p-0`}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
