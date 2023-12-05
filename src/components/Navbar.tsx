import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleButton = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white fixed">
      <div>
        <h1 className="text-4xl font-signature ml-2">Grimble</h1>
      </div>
      <ul className="hidden md:flex">
        <Link
          className="px-4 font-medium text-gray-500 hover:scale-105 duration-200"
          to="/"
        >
          Home
        </Link>
        <Link
          className="px-4 font-medium text-gray-500 hover:scale-105 duration-200"
          to="/skills"
        >
          Skills
        </Link>
        <Link
          className="px-4 font-medium text-gray-500 hover:scale-105 duration-200"
          to="/projects"
        >
          Projects
        </Link>
        <Link
          className="px-4 font-medium text-gray-500 hover:scale-105 duration-200"
          to="/contact"
        >
          Contact
        </Link>
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
          <Link
            onClick={() => setShowMenu(!showMenu)}
            className="px-4 font-medium py-6 text-4xl text-gray-500"
            to="/"
          >
            Home
          </Link>
          <Link
            onClick={() => setShowMenu(!showMenu)}
            className="px-4 font-medium py-6 text-4xl text-gray-500"
            to="/skills"
          >
            Skills
          </Link>
          <Link
            onClick={() => setShowMenu(!showMenu)}
            className="px-4 font-medium py-6 text-4xl text-gray-500"
            to="/projects"
          >
            Projects
          </Link>
          <Link
            onClick={() => setShowMenu(!showMenu)}
            className="px-4 font-medium py-6 text-4xl text-gray-500"
            to="/contact"
          >
            Contact
          </Link>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
