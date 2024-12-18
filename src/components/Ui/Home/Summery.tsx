import React from 'react';

const Summery = () => {
    return (
        <div className="text-white pt-[60px] lg:pt-[100px]">
          <h1 className="text-[32px] lg:text-[48px] font-bold text-center mb-[30px] lg:mb-[45px] font-plus-jakarta">
            Summery
          </h1>
            <div className='p-[22px] lg:p-[44px] bg-[#1A1919] rounded-[20px]'>
                <h3 className='text-[22px] font-bold mb-5'>Which platform is the most affordable?</h3>
            <p className='text-[22px] text-[#D1D1D1] leading-7 '>The most affordable plan is the Standart plan from Postiz. It starts from $29 per month, and includes 1 social set (which includes 1 social profiles), and 1 users.</p>
            </div>
        </div>
    );
};

export default Summery;