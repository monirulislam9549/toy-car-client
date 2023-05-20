import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Lottie from "lottie-react";
import car from "./14717-sedan-car-animation.json";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full  md:px-24 lg:px-8 bg-slate-100">
      <div className="relative flex items-center justify-between ">
        <Link to="/" className="inline-flex items-center">
          <span className="ml-2 font-bold text-xl tracking-wide text-gray-800">
            Petite Cuisine
          </span>

          <Lottie className="w-24 h-24" animationData={car}></Lottie>
        </Link>

        {/* nav section  */}
        <ul className="items-center hidden space-x-8 lg:flex">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "active hover:text-blue-400"
                  : "default hover:text-blue-400"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive
                  ? "active hover:text-blue-400"
                  : "default hover:text-blue-400"
              }
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "active hover:text-blue-400"
                  : "default hover:text-blue-400"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? "active hover:text-blue-400"
                  : "default hover:text-blue-400"
              }
            >
              Login
            </NavLink>
          </li>
          {/* <li>
            {user ? (
              <button className="active " onClick={handleLogout}>
                {" "}
                Logout
              </button>
            ) : (
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive
                    ? "active hover:text-blue-400"
                    : "default hover:text-blue-400"
                }
              >
                Login
              </NavLink>
            )}
          </li> */}
        </ul>
        {/* mobile navbar  */}
        <div className="lg:hidden">
          {/* dropdown open button */}
          <button
            aria-level="Open Menu"
            title="Open Menu"
            onClick={() => setIsMenuOpen(true)}
          ></button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full z-10">
              <div className="p-5 bg-white border rounded shadow-sm">
                {/* logo and button section */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link to="/" className="inline-flex items-center">
                      <span className="ml-2 font-bold text-xl tracking-wide text-gray-800">
                        Petite Cuisine
                      </span>
                      <Lottie
                        className="w-24 h-24"
                        animationData={car}
                      ></Lottie>
                    </Link>
                  </div>
                  <div>
                    {/* dropdown button close button */}
                    <button
                      aria-level="Close Menu"
                      title="Close Menu"
                      onClick={() => setIsMenuOpen(false)}
                    ></button>
                  </div>
                </div>
                {/* Mobile nav item section */}
                <nav>
                  <ul className="space-y-4">
                    <li>
                      <Link
                        to="/"
                        className="font-medium tracking-wide text-gray-700 transition duration-200 hover:text-blue-400"
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/books"
                        className="font-medium tracking-wide text-gray-700 transition duration-200 hover:text-blue-400"
                      >
                        Blog
                      </Link>
                    </li>
                    {/* <li>
                      {user ? (
                        <button className="active " onClick={handleLogout}>
                          {" "}
                          Logout
                        </button>
                      ) : (
                        <NavLink
                          to="/login"
                          className={({ isActive }) =>
                            isActive
                              ? "active hover:text-blue-400"
                              : "default hover:text-blue-400"
                          }
                        >
                          Login
                        </NavLink>
                      )}
                    </li> */}
                    <li>
                      <Link
                        to="/login"
                        className="font-medium tracking-wide text-gray-700 transition duration-200 hover:text-blue-400"
                      >
                        Login
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
