import React from "react";
import userIcon from "../../assets/user.jpg";
import bellIcon from "../icons/bell.svg";
import MenuIcon from "../icons/menu.svg";
import downloadIcon from "../icons/download.svg";

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  return (
    <header className="bg-[#F7F9FC] p-8 w-full justify-between items-center flex my-3">
      {/* Menu Icon for Small Screens */}
      <img
        src={MenuIcon}
        alt="Menu Icon"
        className="mr-3 w-[24px] h-[24px] lg:hidden cursor-pointer"
        onClick={toggleSidebar}
      />

      {/* User Section */}
      <div className="ml-auto flex items-center space-x-3">
        <img
          src={downloadIcon}
          alt="Download Icon"
          className="w-[24px] h-[24px]"
        />
        <img
          src={bellIcon}
          alt="Bell Icon"
          className="w-[24px] h-[24px]"
        />
        <span className="text-[#858585] font-[400] text-[14px]">
          Edward Hudson
        </span>
        <img
          src={userIcon}
          alt="User Avatar"
          className="w-5 h-5 rounded-full"
        />
      </div>
    </header>
  );
};

export default Header;
