import React from "react";
import Header from "../../modules/Header";
import FundCard from "../../modules/FundCard";

export const LandingPage = () => {
  return (
    <div className="pt-[26px] px-[32px] bg-[#f8f9fa] min-h-screen">
      <Header />
      <div className="flex mt-[20px]">
        <FundCard />
      </div>
    </div>
  );
};
