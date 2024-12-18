"use client";
import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import doodle3 from "@/src/assets/Doodle3.png";
import Image from "next/image";

const FAQ = () => {
  const [openitem, setOpenItem] = useState<number | null>(1);
  const [mounted, setMounted] = useState(false);

  const handleFaq = (number: number) => {
    setOpenItem((prev) => (prev === number ? null : number));
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div>
      <div className="text-white mx-auto rounded-lg flex flex-col md:flex-row items-start justify-between my-[100px] lg:my-[180px] gap-[60px]">
        <div className=" lg:max-w-[25%]">
          <h2 className="text-[30px] lg:text-[48px] font-bold leading-[33px] lg:leading-[52px] text-center lg:text-left font-plus-jakarta">
            Frequently asked questions
          </h2>
          <Image
            src={doodle3}
            alt={"doodlw3"}
            className="mt-[9px] lg:mt-2 mx-auto lg:mx-0 w-[40%] lg:w-[72%] h-auto"
          />
        </div>
        <div className="space-y-3 -mt-[32px] lg:mt-0">
          {/* First FAQ */}
          <div className="border border-[#696969] rounded-[20px] p-[20px] lg:p-[30px] bg-[#1A1919]">
            <div
              className="w-full  text-[20px] lg:text-[24px] md:flex lg:justify-between lg:items-center font-bold cursor-pointer"
              onClick={() => handleFaq(1)}
            >
              <p className=" text-[20px] lg:text-[24px] font-bold w-[85%] lg:w-[75%] leading-6 font-plus-jakarta">
                How easy is it to switch from Buffer to Postiz?
              </p>
              <span
                className={`transition-transform duration-300 hidden lg:flex  ${
                  openitem === 1 ? "rotate-180" : ""
                }`}
              >
                <IoIosArrowDown />
              </span>
            </div>
            <div
              className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                openitem === 1 ? "max-h-[300px]" : "max-h-0"
              }`}
            >
              <div className="mt-[20px] text-[#D1D1D1] w-full lg:w-[85%] text-[18px] lg:text-[22px] font-normal leading-[22px] lg:leading-7">
                Very easy, and only takes minutes. Our social set setup is quick
                & easy so you&#39;ll be up and running in no time.
              </div>
            </div>
          </div>

          {/* Second FAQ */}
          <div className="border border-[#696969] rounded-[20px] p-[20px] lg:p-[30px] bg-[#1A1919]">
            <div
              className="w-full  text-[20px] lg:text-[24px] md:flex lg:justify-between lg:items-center font-bold cursor-pointer"
              onClick={() => handleFaq(2)}
            >
              <p className=" text-[20px] lg:text-[24px] font-bold w-[85%] lg:w-[75%] leading-6 font-plus-jakarta">
                Can I use Postiz & Buffer at the same time safely?
              </p>
              <span
                className={`transition-transform duration-300 hidden lg:flex  ${
                  openitem === 2 ? "rotate-180" : ""
                }`}
              >
                <IoIosArrowDown />
              </span>
            </div>
            <div
              className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                openitem === 2 ? "max-h-[300px]" : "max-h-0"
              }`}
            >
              <div className="mt-[20px] text-[#D1D1D1] w-full lg:w-[85%] text-[18px] lg:text-[22px] font-normal leading-[22px] lg:leading-7">
                Yes, you can safely use both Postiz and Buffer at the same time
                without any issues.
              </div>
            </div>
          </div>

          {/* Third FAQ */}
          <div className="border border-[#696969] rounded-[20px] p-[20px] lg:p-[30px] bg-[#1A1919]">
            <div
              className="w-full  text-[20px] lg:text-[24px] md:flex lg:justify-between lg:items-center font-bold cursor-pointer"
              onClick={() => handleFaq(3)}
            >
              <p className=" text-[20px] lg:text-[24px] font-bold w-[85%] lg:w-[75%] leading-[22px] lg:leading-7 font-plus-jakarta">
                I’m paying for Buffer, but don’t want to pay double while I get
                setup – can I get an extended trial?
              </p>
              <span
                className={` transition-transform duration-300  hidden lg:flex ${
                  openitem === 3 ? "rotate-180" : ""
                }`}
              >
                <IoIosArrowDown />
              </span>
            </div>
            <div
              className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                openitem === 3 ? "max-h-[300px]" : "max-h-0"
              }`}
            >
              <div className="mt-[20px] w-full lg:w-[85%] text-[#D1D1D1] text-[18px] lg:text-[22px] font-normal leading-[22px] lg:leading-7">
                Yes, you can safely use both Postiz and Buffer at the same time
                without any issues.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
