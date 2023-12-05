import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { useState } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const navLinks = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "Skills",
    },
    {
      id: 3,
      link: "Projects",
    },
    {
      id: 4,
      link: "Contact",
    },
  ];

  const toggleButton = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white fixed">
      <div>
        <h1 className="text-4xl font-signature ml-2">Grimble</h1>
      </div>
      <ul className="hidden md:flex">
        {navLinks.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
          >
            <Link to={link} smooth={true} duration={500}>
              {" "}
              {link}
            </Link>
          </li>
        ))}
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
          {navLinks.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 font-medium py-6 text-4xl text-gray-500"
            >
              <Link onClick={() => setShowMenu(!showMenu)} to={link} smooth={true} duration={500}>
                {" "}
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
