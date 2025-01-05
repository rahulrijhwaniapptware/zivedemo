import React, { useState } from "react";
import bellIcon from "../icons/bell.png";
import wallet from "../icons/wallet.svg";
import walletActive from "../icons/walletActive.svg";
import agent from "../icons/agent.svg";
import agentActive from "../icons/agentActive.svg";
import audit from "../icons/audit.svg";
import auditActive from "../icons/auditActive.svg";
import cap from "../icons/cap.svg";
import capActive from "../icons/capActive.svg";
import currencySign from "../icons/currencySign.svg";
import currencySignActive from "../icons/currencySignActive.svg";
import dashboard from "../icons/dashboard.svg";
import dashboardActive from "../icons/dashboardActive.svg";
import dataRoom from "../icons/dataRoom.svg";
import dataRoomActive from "../icons/dataRoomActive.svg";
import portfolio from "../icons/portfolio.svg";
import portfolioActive from "../icons/portfolioActive.svg";
import report from "../icons/report.svg";
import reportActive from "../icons/reportActive.svg";
import simulations from "../icons/simulation.svg";
import simulationsActive from "../icons/simulationActive.svg";
import userIcon from "../icons/userIcon.svg";
import userIconActive from "../icons/userIconActive.svg";
import setting from "../icons/setting.svg";
import settingActive from "../icons/settingActive.svg";
import CompanyLogo from "../icons/companyLogo.svg";

interface SideBarProps {
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SideBarProps> = ({ toggleSidebar }) => {
  const [selectedItem, setSelectedItem] = useState<string>("Dashboard");

  const menuItems = [
    { label: "Dashboard", activeIcon: dashboardActive, icon: dashboard },
    { label: "Authorized Shares", activeIcon: walletActive, icon: wallet },
    { label: "Cap Table", activeIcon: capActive, icon: cap },
    { label: "Portfolio View", activeIcon: portfolioActive, icon: portfolio },
    { label: "Reports", activeIcon: reportActive, icon: report },
    { label: "Simulations", activeIcon: simulationsActive, icon: simulations },
    { label: "409A", activeIcon: currencySignActive, icon: currencySign },
    { label: "Data Room", activeIcon: dataRoomActive, icon: dataRoom },
    { label: "Audit Log", activeIcon: auditActive, icon: audit },
    { label: "Transfer Agent", activeIcon: agentActive, icon: agent },
  ];

  const bottomMenuItems = [
    { label: "User Management", activeIcon: userIconActive, icon: userIcon },
    { label: "Settings", activeIcon: settingActive, icon: setting },
  ];

  const handleItemClick = (label: string) => {
    toggleSidebar();
    setSelectedItem(label);
  };

  const renderMenu = (
    items: { label: string; activeIcon: string; icon: string }[]
  ) => (
    <ul className="space-y-6">
      {items.map(({ label, activeIcon, icon }) => (
        <li
          key={label}
          className={`cursor-pointer flex items-center ${
            selectedItem === label
              ? "text-[#107ECB] font-bold text-sm"
              : "text-[#001828] text-sm font-[400]"
          }`}
          onClick={() => handleItemClick(label)}
        >
          <img
            src={selectedItem === label ? activeIcon : icon}
            alt={`${label} Icon`}
            className="mr-3"
            width={24}
            height={24}
          />
          {label}
        </li>
      ))}
    </ul>
  );

  return (
    <aside className="w-72 bg-[#F7F9FC] flex flex-col p-6 min-h-screen">
      {/* Company Logo Section */}
      <div className="flex items-center mb-10">
        <img
          src={CompanyLogo}
          alt="Company Logo"
          className="mr-[8px]"
          width={32}
          height={32}
        />
        <h2 className="text-[16px] font-semibold text-[#0A3C5F] leading-tight">
          Contra Venture Fund I{" "}
          <i className="fa fa-angle-down text-[12px] ml-2"></i>
        </h2>
      </div>

      {/* Main Menu */}
      {renderMenu(menuItems)}

      {/* Bottom Menu */}
      <div className="mt-auto pt-6 border-gray-200">
        {renderMenu(bottomMenuItems)}
      </div>
    </aside>
  );
};

export default Sidebar;
