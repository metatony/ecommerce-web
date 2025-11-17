import Images from "../constants/images";
import AnnounceBar from "./AnnounceBar";
import HamburgerMenu from "./HamburgerMenu";
import { FaBagShopping } from "react-icons/fa6";
import navigationMenuItems from "../constants/hamburgerList";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import { useGlobal } from "../provider/GlobalProvider";
import { useLocation } from "react-router-dom";

function Navbar(props) {
  const { cart } = useGlobal();

  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMegaMenuOpen(false);
  }, [location.pathname]);

  const handleMouseEnter = () => {
    setIsMegaMenuOpen(true);
  };

  const handleMouseLeave = () => {
    setIsMegaMenuOpen(false);
  };

  return (
    <nav className=" top-0 bg-white z-20 border-b border-gray-200">
      <AnnounceBar />
      <ul className="relative flex justify-between items-center py-4 px-4 container mx-auto">
        {/* Left side: Desktop logo and mobile menu icon */}
        <li className="flex justify-between items-center lg:space-x-8 paragraph-text tracking-wider">
          {/* Logo displayed on desktop */}
          <Link to="/" className="hidden lg:block">
            <img className="w-20 h-5" src={Images.logo} alt="logo" />
          </Link>

          {/* Hamburger menu for mobile */}
          <HamburgerMenu />

          {/* Desktop Navigation Items */}
          {navigationMenuItems.map((item) => (
            <Link
              // onMouseEnter={handleMouseEnter}
              // onMouseLeave={handleMouseLeave}
              key={item.page}
              to={item.link}
              className="hidden lg:block "
            >
              {item.page}
            </Link>
          ))}
        </li>

        {/* Center area for Mobile Logo */}
        <li className="lg:hidden flex justify-center items-center">
          <Link to="/">
            <img className="w-20 h-5" src={Images.logo} alt="logo" />
          </Link>
        </li>

        {/* Right side nav: Search and Cart */}
        <li className="flex items-center justify-between space-x-8 paragraph-text">
          <SearchBar />

          <div onClick={props.toggleCart} className="text-center ">
            <FaBagShopping className="lg:h-10" />
            {cart.length > 0 && (
              <p className="absolute top-7 border-2 border-white right-1 bg-red-500 text-white rounded-full w-4 h-4 p-2 flex items-center justify-center text-center">
                {cart.length}
              </p>
            )}
          </div>
        </li>
      </ul>

      {/* Mega Dropdown */}
      {/* {isMegaMenuOpen && ( */}

      <div
        className={`fixed top-[110px] left-0 right-0 w-full bg-white shadow-xs hidden lg:grid grid-cols-7 py-10 transform transition-all duration-300 ease-out justify-items-center
            ${
              isMegaMenuOpen
                ? "translate-y-0 opacity-100"
                : "-translate-y-5 opacity-0 pointer-events-none"
            } `}
        // onMouseEnter={handleMouseEnter}
        // onMouseLeave={handleMouseLeave}
      >
        {/* Categories Dropdown */}
        {navigationMenuItems.map(function (item) {
          return (
            <div key={item.header} className="font-light ">
              <h4 className="mb-5 font-medium ">
                {item.header}
              </h4>
              <ul className="space-y-3">
                {item.subItems.map((subItem) => (
                  <li key={subItem.page}>
                    <Link to={subItem.link}>{subItem.page}</Link>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}

      </div>
    </nav>
  );
}

export default Navbar;
