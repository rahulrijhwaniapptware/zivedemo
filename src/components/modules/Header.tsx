import React from "react";

import logo from "../../assets/zive_logo.svg";
import SearchIcon from "../icons/search.png";
import BellIcon from "../icons/bell.svg";
import sortIcon from "../../assets/sort.svg";
import userIcon from "../../assets/user.jpg";


const Header: React.FC = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="flex items-center mb-0">
          <img src={logo} alt="logo" className="mr-5" width={68} height={28} />
        </div>

        <div className="flex items-center">
          <img
            src={BellIcon}
            alt="logo"
            className="fill-slate-400"
            width={24}
            height={24}
          />
          <span className="mr-3 ml-[16px] text-[#858585] font-[400] text-[14px]">Edward Hudson</span>
          <img
          src={userIcon}
          alt="User Avatar"
          className="w-5 h-5 rounded-full"
        />
        </div>
      </div>

      <div className="flex justify-between items-center mb-5">
        <div className="flex items-center border border-[#ddd] rounded-lg bg-[#fff] ">
          <img
            src={SearchIcon}
            alt="search"
            className="h-4 w-4 text-gray-500 ml-3 mr-3"
          />
          <input
            type="text"
            placeholder="Search Funds"
            className="flex-grow p-2 pl-3 outline-none rounded-lg my-4 placeholder:text-[#858585]"
          />
        </div>

        <div className="flex items-center">
          <img
            src={sortIcon}
            alt="logo"
            className="mr-2"
            width={24}
            height={24}
          />
          <p className="text-[#0A3C5F] font-normal text-sm">SORT</p>
        </div>
      </div>
    </>
  );
};

export default Header;
