import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import Router from "next/router";
import { DataContext } from "./dataContext";

export default function NavBar() {
  // const [isHidden, setHidden] = useState("false");
  const [isProfileHidden, setProfileHidden] = useState("false");
  const [isCookies, setIsCookies] = useState("");
  const { profilePicture, setProfilePicture } = useContext(DataContext);
  // const handleHidden = () => {
  //   setHidden(!isHidden);
  // };
  const handleProfileHidden = () => {
    setProfileHidden(!isProfileHidden);
  };
  useEffect(() => {
    setProfilePicture(localStorage.getItem("imageUrl"));
    setIsCookies(Cookies.get("token"));
  }, []);
  return (
    <nav className="bg-[#F9F9FC] border-gray-200 py-2.5 rounded mb-[50px]">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Link href="/" className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap">
            Vakanzie
          </span>
        </Link>
        <div className="flex items-center md:order-2 relative">
          {isCookies === undefined ? (
            <Link href="/dashboard/login">Login</Link>
          ) : (
            <button
              onClick={handleProfileHidden}
              type="button"
              className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300"
              id="user-menu-button"
              aria-expanded="false"
              data-dropdown-toggle="user-dropdown"
              data-dropdown-placement="bottom"
            >
              <span className="sr-only">Open user menu</span>
              <img
                className="w-8 h-8 rounded-full"
                src={profilePicture}
                alt="user photo"
              />
            </button>
          )}

          <div
            className={`${
              isProfileHidden ? "hidden" : null
            } z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow absolute top-7 right-1 w-[150px]`}
            id="user-dropdown"
          >
            <ul className="py-2" aria-labelledby="user-menu-button">
              <li>
                <Link
                  href="/dashboard"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="dashboard/change-password"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Change password
                </Link>
              </li>

              <li>
                <Link
                  onClick={() => {
                    Cookies.remove("token");
                    Router.push("/dashboard/login");
                  }}
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Sign out
                </Link>
              </li>
            </ul>
          </div>
          {/* <button
            onClick={handleHidden}
            data-collapse-toggle="mobile-menu-2"
            type="button"
            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="mobile-menu-2"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button> */}
        </div>
        {/* <div
          className={`items-center justify-between ${
            isHidden ? "hidden" : null
          } w-full md:flex md:w-auto md:order-1`}
          id="mobile-menu-2"
        >
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0"
                aria-current="page"
              >
                Home
              </a>
            </li>
          </ul>
        </div> */}
      </div>
    </nav>
  );
}
