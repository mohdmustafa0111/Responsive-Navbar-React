import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiCloseLargeLine } from "react-icons/ri";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:flex flex md:justify-between justify-between md:items-center items-center md:p-5 p-5 bg-gray-100 shadow-xl">
      {/* Logo */}
      <div className="md:ml-10">LOGO</div>

      {/* Desktop Icon */}
      <div className="hidden md:flex md:space-x-10 md:mr-10">
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Services</a>
        <a href="">Contact Us</a>
      </div>

      {/* Hamburger Icon */}
      <div className="md:hidden">
        {isOpen ? (
          <RiCloseLargeLine
            onClick={toggleMenu}
            className="text-2xl text-gray-800"
          />
        ) : (
          <RxHamburgerMenu
            onClick={toggleMenu}
            className="text-2xl text-gray-800"
          />
        )}
      </div>

      {/* Mobile Icon */}

      <div
        className={`md:hidden absolute w-full top-16 left-0 text-center  bg-gray-100 transition-all duration-500 ease-in-out transform ${
          isOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-10 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center">
          <a href="" className="py-2">
            Home
          </a>
          <a href="" className="py-2">
            About
          </a>
          <a href="" className="py-2">
            Services
          </a>
          <a href="" className="py-2 pb-5">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
