import React, { useState } from "react";
import Sidebar from "../../modules/DashboardSlider";
import Header from "../../modules/DashboardHeader";
import Content from "../../modules/DashboardContent";

const Dashboard: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex min-h-screen bg-[#F7F9FC] min-w-min">
      <div
        className={`transform top-0 left-0 h-full fixed z-50 bg-[#F7F9FC] shadow-lg transition-transform duration-300 lg:static lg:transform-none lg:shadow-none w-72 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Sidebar toggleSidebar={toggleSidebar} />
      </div>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      <div className="flex flex-col flex-1 lg:mr-[32px] mr-[16px]  ml-[16px]">
        <Header toggleSidebar={toggleSidebar} />
        <Content />
      </div>
    </div>
  );
};

export default Dashboard;
