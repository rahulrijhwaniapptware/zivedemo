import React from "react";
import CompanyLogo from "../icons/companyLogo.svg";
import { useNavigate } from "react-router-dom";

const FundCard: React.FC = () => {
  const fundData = [
    {
      name: "Shareholders",
      value: "28",
    },
    {
      name: "Priced Rounds",
      value: "1",
    },
    {
      name: "Allocated Shares",
      value: "19,6558,715",
    },
    {
      name: "Issued and Outstanding",
      value: "18,223,715",
    },
  ];
  const navigate = useNavigate();
  return (
    <div className="bg-[#fff] py-[28px] px-[24px] rounded-2xl shadow-md w-full max-w-[680px] h-auto sm:w-[680px] sm:h-[295px]">
      <div className="flex justify-between items-center mb-5">
        <div className="flex items-center">
          <img
            src={CompanyLogo}
            alt="Company Logo"
            className="mr-3"
            width={32}
            height={32}
          />
          <p className="m-0 text-[#001828] font-[600] text-[16px]">
            DroidCloud Inc
          </p>
        </div>
        <button
          className="py-2.5 px-3.5 bg-[#0A3C5F] text-white font-[600] border-none rounded-lg cursor-pointer"
          onClick={() => {
            navigate("/dashboard");
          }}
        >
          Dashboard
        </button>
      </div>
      <div className="flex flex-wrap sm:flex-nowrap justify-between mt-[32px]">
        <div className="w-full sm:w-auto mb-4 sm:mb-0">
          <p className="text-xs text-[#858585] font-normal mb-2">Fund Size</p>
          <p className="text-2xl text-[#0A3C5F] font-bold">22,968,539.79</p>
        </div>
        <div>
          {fundData.map((item, index) => (
            <div key={index} className="flex flex-row justify-between w-full lg:w-[305px] lg:pt-0 mb-4">
              <p className="text-[#858585] font-[400] text-[12px]">
                {item?.name}
              </p>
              <p className="text-[#0A3C5F] font-[600] text-[14px]">{item?.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FundCard;
