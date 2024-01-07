import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
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

          <ul className="menu menu-horizontal px-1 bg-slate-200">
            <li>
              <details className="border bg-white px-3 w-full">
                <summary className="text-lg font-semibold text-[#140625] bg-white hover:bg-white">
                  Menu
                </summary>
                <ul className="p-2">
                  <li>
                    <Link
                      className="text-[16px] font-semibold text-[#08051a]"
                      to="/">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link className="text-[16px] font-semibold text-[#08051a]">
                      About
                    </Link>
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
                        <Link
                          className="text-[16px] font-semibold text-[#08051a]"
                          to="/login">
                          Login
                        </Link>
                      </li>
                      <li className=" list-none">
                        <Link
                          className="text-[16px] font-semibold text-[#08051a]"
                          to="/signup">
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

