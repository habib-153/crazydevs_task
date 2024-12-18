import React from "react";

const CompareAlternatives = () => {
  return (
    <div className="text-white pt-[60px] lg:pt-[100px]">
      <h1 className="text-[32px] lg:text-[48px] font-bold text-center mb-[30px] lg:mb-[60px] font-plus-jakarta">
        Compare ALternatives
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="bg-[#1A1919] rounded-[16px] lg:rounded-[20px]  p-[22px] lg:p-[44px] font-plus-jakarta">
          <h1 className="text-[22px] lg:text-[34px] font-bold font-plus-jakarta">
            Postiz - Compare Alternatives
          </h1>
          {/* compare */}
          <div className="mt-[32px] lg:mt-[40px]">
            <ul className="space-y-3 text-[18px] lg:text-[22px] font-bold">
              <li>Postiz vs. Later</li>
              <li>Postiz vs. Hootsuite</li>
              <li>Postiz vs. Loomly</li>
              <li>Postiz vs. Planoly</li>
              <li>Postiz vs. Senible</li>
              <li>Postiz vs. Socialpilot</li>
              <li>Postiz vs. Sprout social</li>
              <li>Postiz vs. Iconosquare</li>
              <li>Postiz vs. Hopperhq</li>
            </ul>
          </div>
          
        </div>
        {/* right side */}
        <div className="bg-[#1A1919] rounded-[20px]  p-[22px] lg:p-[44px]  font-plus-jakarta">
          <h1 className="text-[22px] lg:text-[34px] font-bold font-plus-jakarta ">
            Buffer - Compare Alternatives
          </h1>
          {/* compare */}
          <div className="mt-[32px] lg:mt-[40px]">
            <ul className="space-y-3 text-[18px] lg:text-[22px] font-bold">
              <li>Buffer vs. Later</li>
              <li>Buffer vs. Hootsuite</li>
              <li>Buffer vs. Loomly</li>
              <li>Buffer vs. Planoly</li>
              <li>Buffer vs. Senible</li>
              <li>Buffer vs. Socialpilot</li>
              <li>Buffer vs. Sprout social</li>
              <li>Buffer vs. Iconosquare</li>
              <li>Buffer vs. Hopperhq</li>
            </ul>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default CompareAlternatives;
