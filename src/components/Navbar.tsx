import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { useState } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleButton = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className="bg-black flex justify-between items-center w-full h-20 px-4 text-white fixed">
      <div>
        <h1 className="text-4xl font-signature ml-2">Grimble</h1>
      </div>
      <ul className="hidden md:flex">
        <li className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200">
          <Link to="Home" smooth={true} duration={500}>
            home
          </Link>
        </li>
        <li className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200">
          <Link to="Skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200">
          <Link to="Projects" smooth={true} duration={500}>
            Project
          </Link>
        </li>
        <li className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200">
          <Link to="Contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      <div
        onClick={() => toggleButton()}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {showMenu ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {showMenu && (
        <ul
          className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen 
        bg-black text-gray-500 "
        >
          <li className="px-4 font-medium py-6 text-4xl text-gray-500">
          <Link to="Home" smooth={true} duration={500}>
            home
          </Link>
        </li>
        <li className="px-4 font-medium py-6 text-4xl text-gray-500">
          <Link to="Skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="px-4 font-medium py-6 text-4xl text-gray-500">
          <Link to="Projects" smooth={true} duration={500}>
            Project
          </Link>
        </li>
        <li className="px-4 font-medium py-6 text-4xl text-gray-500">
          <Link to="Contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
