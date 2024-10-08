import React from "react";
import Logo from "../assets/nature-logo.png";

const Navbar = ({ handleLoginPopup }) => {
  return (
    <>
      <main className="shadow-lg bg-white/70 backdrop-blur-sm h-[10vh]">
        <div className="container">
          <nav className="flex justify-between items-center">
            <a href="#" className="text-gray-800 text-3xl font-bold ml-2">
              {/* <img src={Logo} alt="Logo" className="h-10 inline mr-1" /> */}
              LUMINA
            </a>
            <div className="hidden sm:block">
              <ul className="flex font-semibold  justify-center items-center gap-4">
                <li>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-blue-900 px-4 py-4 inline-block select-none"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-blue-900 px-4 py-4 inline-block select-none"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-blue-900 px-4 py-4 inline-block select-none"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={handleLoginPopup}
                    className="text-gray-700 hover:text-blue-900 px-4 py-4 inline-block select-none"
                  >
                    Login
                  </a>
                </li>
              </ul>
            </div>
            <div className="block sm:hidden">
              <ul className="flex text-xl font-semibold  justify-center items-center gap-4">
                <li>
                  <a
                    href="#"
                    onClick={handleLoginPopup}
                    className="text-gray-700 hover:text-blue-900 px-4 py-4 inline-block"
                  >
                    Login
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </main>
    </>
  );
};

export default Navbar;
