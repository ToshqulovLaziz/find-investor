import { Link } from "react-router-dom";

import {
  FaDollarSign,
  FaFacebook,
  FaInstagram,
  FaTelegram,
} from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="py-[28px] bg-slate-200">
      <div className="container max-w-full px-4 mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <div className="flex items-center gap-1">
              <FaDollarSign className="text-[35px] text-[#35e252]" />
              <Link className="font-extrabold w-[100px] text-[20px] tracking-[10px] text-[#35e252] leading-4 pt-1">
                FIND{" "}
                <span className="tracking-[2.2px] text-[12px]">INVESTOR</span>
              </Link>
            </div>
            <div className="flex flex-col gap-4 pt-4">
              <h3 className="text-2xl font-semibold text-gray-800">
                Bizni ijtimoiy tarmoqlarda <br /> toping
              </h3>
              <div className="flex gap-5">
                <FaInstagram color="#E52765" size={30} />
                <FaFacebook color="#3046F4" size={30} />
                <FaTelegram color="#27A3E3" size={30} />
              </div>
            </div>
          </div>
          <div className="flex gap-[60px]">
            <ul className="flex-col gap-8">
              <li>
                <Link className="text-[18px] hover:text-[#2db945]">
                  Loyiha Haqida
                </Link>
              </li>
              <li>
                <Link className="text-[18px]  hover:text-[#2db945]">
                  Xizmatlar
                </Link>
              </li>
            </ul>
            <ul className="flex-col gap-8">
              <li>
                <Link className="text-[18px] hover:text-[#2db945]">
                  Yangiliklar
                </Link>
              </li>
              <li>
                <Link className="text-[18px]  hover:text-[#2db945]">
                  Bog{"'"}lanish
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <form className="w-[400px] mx-auto">
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search busnisse"
                  required
                />
                <button
                  type="submit"
                  className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
