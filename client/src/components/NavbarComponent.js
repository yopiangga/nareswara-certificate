import React, { useContext, useState } from "react";
import { FiBell } from "react-icons/fi";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import Logo from "src/logo.svg";
import { SidebarContext } from "src/context/SidebarContext";

export function NavbarUploaderComponent() {
  const { user, setUser } = useContext(UserContext);
  const { sidebar, setSidebar } = useContext(SidebarContext);

  return (
    <div className="fixed z-40 md:w-full md:top-0 md:z-20 flex flex-row flex-wrap items-center bg-white h-20 w-full px-6 shadow-sm">
      <div className="flex-none w-56 flex flex-row items-center">
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 mr-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={() => setSidebar(!sidebar)}
        >
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              ffillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <Link to="/">
          <a className="flex items-center text-2xl font-semibold text-gray-900">
            <img className="w-6 h-6 mr-2" src={Logo} alt="logo" />
            <h2 className="text-sm">
              Nares <span className="text-indigo-600">Certificate</span>
            </h2>
          </a>
        </Link>

        <button
          id="sliderBtn"
          className="flex-none text-right text-gray-900 hidden md:block"
        >
          <i className="fad fa-list-ul"></i>
        </button>
      </div>

      <button
        id="navbarToggle"
        className="hidden md:block md:fixed right-0 mr-6"
      >
        <i className="fad fa-chevron-double-down"></i>
      </button>

      <div className="hidden xl:flex space-x-5 items-center ml-auto text-dark">
        <button className="flex items-center hover:text-gray-600" href="#">
          <FiBell className="text-xl" />
          <span className="flex absolute -mt-5 ml-4">
            <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500"></span>
          </span>
        </button>
        <Link to={"/profile"}>
          <div className="flex items-center hover:text-gray-600">
            <span className="mr-2">{user.name}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 hover:text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </Link>
      </div>
    </div>
  );
}

export function NavbarDownloaderComponent() {
  const { user, setUser } = useContext(UserContext);
  const { sidebar, setSidebar } = useContext(SidebarContext);

  return (
    <div className="fixed z-40 md:w-full md:top-0 md:z-20 flex flex-row flex-wrap items-center bg-white h-20 w-full px-6 shadow-sm">
      <div className="flex-none w-56 flex flex-row items-center">
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 mr-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={() => setSidebar(!sidebar)}
        >
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              ffillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <Link to="/">
          <a className="flex items-center text-2xl font-semibold text-gray-900">
            <img className="w-6 h-6 mr-2" src={Logo} alt="logo" />
            <h2 className="text-sm">
              Nares <span className="text-indigo-600">Certificate</span>
            </h2>
          </a>
        </Link>

        <button
          id="sliderBtn"
          className="flex-none text-right text-gray-900 hidden md:block"
        >
          <i className="fad fa-list-ul"></i>
        </button>
      </div>

      <button
        id="navbarToggle"
        className="hidden md:block md:fixed right-0 mr-6"
      >
        <i className="fad fa-chevron-double-down"></i>
      </button>

      <div className="hidden xl:flex space-x-5 items-center ml-auto text-dark">
        <button className="flex items-center hover:text-gray-600" href="#">
          <FiBell className="text-xl" />
          <span className="flex absolute -mt-5 ml-4">
            <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500"></span>
          </span>
        </button>
        <Link to={"/profile"}>
          <div className="flex items-center hover:text-gray-600">
            <span className="mr-2">{user.name}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 hover:text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </Link>
      </div>
    </div>
  );
}

export function NavbarAdminComponent() {
  const { user, setUser } = useContext(UserContext);
  const { sidebar, setSidebar } = useContext(SidebarContext);

  return (
    <div className="fixed z-40 md:w-full md:top-0 md:z-20 flex flex-row flex-wrap items-center bg-white h-20 w-full px-6 shadow-sm">
      <div className="flex-none w-56 flex flex-row items-center">
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 mr-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={() => setSidebar(!sidebar)}
        >
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              ffillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <Link to="/">
          <a className="flex items-center text-2xl font-semibold text-gray-900">
            <img className="w-6 h-6 mr-2" src={Logo} alt="logo" />
            <h2 className="text-sm">
              Nares <span className="text-indigo-600">Certificate</span>
            </h2>
          </a>
        </Link>

        <button
          id="sliderBtn"
          className="flex-none text-right text-gray-900 hidden md:block"
        >
          <i className="fad fa-list-ul"></i>
        </button>
      </div>

      <button
        id="navbarToggle"
        className="hidden md:block md:fixed right-0 mr-6"
      >
        <i className="fad fa-chevron-double-down"></i>
      </button>

      <div className="hidden xl:flex space-x-5 items-center ml-auto text-dark">
        <button className="flex items-center hover:text-gray-600" href="#">
          <FiBell className="text-xl" />
          <span className="flex absolute -mt-5 ml-4">
            <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500"></span>
          </span>
        </button>
        <Link to={"/profile"}>
          <div className="flex items-center hover:text-gray-600">
            <span className="mr-2">{user.name}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 hover:text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </Link>
      </div>
    </div>
  );
}

export function NavbarLanding() {
  const { sidebar, setSidebar } = useContext(SidebarContext);
  return (
    <nav className="bg-white border-gray-200 px-6 sm:px-4 py-2.5 rounded dark:bg-gray-900 fixed z-50 w-full shadow-md shadow-gray-100">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <a href="/" className="flex items-center">
          <img src={Logo} className="mr-3 h-6 sm:h-9" alt="Nares Logo" />
          <div className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            <h2 className="">
              Nares <span className="text-indigo-600">Certificate</span>
            </h2>
          </div>
        </a>

        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={() => setSidebar(!sidebar)}
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
              ffillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          className={`w-full md:block md:w-auto ${
            sidebar ? "block" : "hidden"
          }`}
          id="navbar-default"
        >
          <ul className="flex flex-col p-4 mt-4 items-center bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="#"
                className="block py-2 pr-4 pl-3 text-base text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                aria-current="page"
              >
                Solusi
              </a>
            </li>

            <li>
              <a
                href="#"
                className="block py-2 pr-4 pl-3 text-base text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Produk
              </a>
            </li>

            <li>
              <a
                href="#"
                className="block py-2 pr-4 pl-3 text-base text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Mitra
              </a>
            </li>

            <li>
              <a
                href="#"
                className="block py-2 pr-4 pl-3 text-base text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Tentang Kami
              </a>
            </li>

            <li className="lg:mt-0 mt-6">
              <Link to="/login">
                <a className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                  Masuk
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
