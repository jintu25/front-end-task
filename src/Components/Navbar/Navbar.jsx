import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  // const toggleMenu = () => {
  // Toggle the menu visibility when the button is clicked
  // setIsMenuOpen(!isMenuOpen);
  // };

  return (
    <div className=" max-w-screen-xl m-auto ">
      <div className="w-full flex md:hidden justify-end items-center relative mt-4">
        <p className="absolute mr-2 w-10">
          <FaSearch></FaSearch>
        </p>
        <input
          placeholder="Search Audio book"
          className="border border-gray-400 rounded-lg px-4 py-2 w-full"
        />
      </div>
      <div className="navbar flex justify-between items-center">
        <div className="navbar-start">
          <Link to="/" className=" font-[cursive] text-2xl font-semibold">
            PtI
          </Link>
        </div>
        <div className="w-full">
          <div className="w-full hidden md:flex justify-end items-center relative">
            <p className="absolute mr-2 w-10">
              <FaSearch></FaSearch>
            </p>
            <input
              placeholder="Search Audio book"
              className="border border-gray-400 rounded-lg px-4 py-2 w-full"
            />
          </div>

          <ul className="menu menu-horizontal px-1 ">
            <li>
              <details className="bg-white border border-slate-200">
                <summary>Menu</summary>
                <ul className="p-2">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link>About</Link>
                  </li>

                  {user ? (
                    <>
                      <li>
                        <button
                          onClick={handleLogOut}
                          to="/login"
                          className="btn btn-neutral btn-sm">
                          LogOut
                        </button>
                      </li>
                    </>
                  ) : (
                    <>
                      <li className=" list-none">
                        <Link to="/login" className="">
                          Login
                        </Link>
                      </li>
                      <li className=" list-none">
                        <Link to="/signup" className="">
                          Signup
                        </Link>
                      </li>
                    </>
                  )}
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <div className="justify-end ml-4 md:ml-12">
          <div className="avatar">
            <div className="w-[4rem] rounded-full">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

{
  /* <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost lg:hidden"
        onClick={toggleMenu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </div>
      {isMenuOpen && (
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <li>
            <a>Parent</a>
            <ul className="p-2">
              <li>
                <a>Submenu 1</a>
              </li>
              <li>
                <a>Submenu 2</a>
              </li>
            </ul>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </ul>
      )}
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li>
        <a>Item 1</a>
      </li>
      <li>
        <details>
          <summary>Parent</summary>
          <ul className="p-2">
            <li>
              <a>Submenu 1</a>
            </li>
            <li>
              <a>Submenu 2</a>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <a>Item 3</a>
      </li>
    </ul>
  </div>
  {user ? (
    <>
      <li>
        <button
          onClick={handleLogOut}
          to="/login"
          className="btn btn-neutral btn-sm">
          Log Out
        </button>
      </li>
    </>
  ) : (
    <>
      <li>
        <Link to="/login" className="btn btn-primary btn-sm">
          Login
        </Link>
      </li>
    </>
  )}
</div>; */
}
