import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const StartButton = () => {
  return (
    <button className="text-black pl-[26px] lg:pl-[34px] pr-[15px] lg:pr-[17px] py-3 
    lg:py-[14px] font-medium text-[16px] lg:text-[18px] rounded-[30px] bg-white  flex items-center justify-center gap-[4px] font-dm-sans hover:bg-[#dddddd] tracking-wider">
      Get Started
      <span className="text-[23px] lg:text-[25px] -mt-[1px]">
        <MdKeyboardDoubleArrowRight />
      </span>
    </button>
  );
};

export default StartButton;
