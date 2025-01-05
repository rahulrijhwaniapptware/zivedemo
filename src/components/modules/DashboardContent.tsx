import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import SearchIcon from "../icons/search.png";

ChartJS.register(ArcElement, Tooltip, Legend);

const Content: React.FC = () => {
  const [selectedButton, setSelectedButton] = useState<string>("Summary");
  const [selectedTab, setSelectedTab] = useState<string>(
    "SHARES ISSUED AND OUTSTANDING"
  );
  const [activeTab, setActiveTab] = useState<string>("Shares Info");

  const tabs = [
    "Charts",
    "Shares Info",
    "People",
    "COI",
    "Corporate History",
    "Funding History",
  ];

  const buttons = ["Summary", "Shareholder", "Vote", "Type"];
  const subTabs = ["SHARES ISSUED AND OUTSTANDING", "FULLY DILUTED SHARES"];

  const data = {
    labels: [],
    datasets: [
      {
        data: [91.3, 8.7],
        backgroundColor: ["#80d4ff", "#6699ff"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    cutout: "70%",
  };

  return (
    <>
      <nav className="flex justify-between min-w-screen rounded-lg shadow-md px-6 py-3 border border-gray-200 bg-white w-full mx-auto">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative px-4 py-2 text-[14] flex-grow text-center ${
              activeTab === tab
                ? "text-[#0A3C5F] font-[600]"
                : "text-[#858585] font-[400]"
            }`}
          >
            {tab}
            {activeTab === tab && (
              <div className="absolute bottom-[-12px] left-0 w-full h-[3px] bg-[#0A3C5F]"></div>
            )}
          </button>
        ))}
      </nav>

      <div className="bg-white p-8 rounded-lg shadow-lg w-full mx-auto my-3 min-w-screen">
        <div className="flex items-center space-x-4 my-6">
          {buttons.map((button) => (
            <button
              key={button}
              onClick={() => setSelectedButton(button)}
              className={`py-4 px-3 rounded-full border-[1px] ${
                selectedButton === button
                  ? "bg-[#107ECB] text-white border-[#107ECB]"
                  : "border-[rgba(0, 0, 0, 0.2] bg-[#fff] text-[#858585]"
              }`}
            >
              {button}
            </button>
          ))}
        </div>

        <div className="flex border-gray-200 mb-6">
          {subTabs.map((tab) => (
            <div>
              <button
                key={tab}
                onClick={() => setSelectedTab(tab)}
                className={`py-[12px] px-[12px] text-[12px] ${
                  selectedTab === tab
                    ? "text-[#107ECB] font-[600] border-[#107ECB]"
                    : "text-[#858585] font-[400]"
                }`}
              >
                {tab}
              </button>
              {selectedTab === tab && (
                <div className="left-0 w-full h-[2px] bg-[#107ECB]"></div>
              )}
            </div>
          ))}
        </div>

        <div className="flex items-center border border-[#ddd] rounded-lg bg-[#F7F9FC] my-5 w-[240px]">
          <img
            src={SearchIcon}
            alt="search"
            className="h-4 w-4 text-gray-500 ml-3 mr-[12px]"
          />
          <input
            type="text"
            placeholder="Search"
            className="flex-grow p-2 outline-none rounded-lg my-4 placeholder:text-[#858585] bg-[#F7F9FC]"
          />
        </div>
        <div className="relative p-[16px] bg-[#F7F9FC] flex items-center justify-center">
          <div className="w-[400px] h-[400px]  items-center justify-center">
            <Doughnut data={data} options={options} />
            <div className="absolute inset-1 flex flex-col items-center justify-center">
              <p className="text-xs lg:text-sm font-semibold mt-5 text-black">
                Common (CS) Stock : 16442833
              </p>
              <p className="text-xs lg:text-sm font-semibold text-black mt-5">
                Distribution: 91.30%
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
