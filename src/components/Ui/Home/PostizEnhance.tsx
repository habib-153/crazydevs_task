import line from "@/src/assets/Line1.png";
import Image from "next/image";
import StartButton from "../Shared/StartButton";
import Doodle from "@/src/assets/Doodle.png"
import Doodle2 from "@/src/assets/Doodle2.png"

const PostizEnhance = () => {
  return (
    <div className="bg-[#3C1AC9] py-[50px] px-[19px] lg:px-[60px] lg:py-[60px]  grid grid-cols-1 lg:grid-cols-3 gap-10 justify-between items-center rounded-[20px] mt-[100px] lg:mt-[180px] w-full">
      <div className="lg:col-span-2 ">
        <h1 className="text-[30px] lg:text-[48px] leading-[30px] lg:leading-[52px] font-plus-jakarta font-bold mb-[32px] inline">
          Choose{" "}
          <p className="text-[#F471FF] inline relative">
            Postiz{" "}
            <span className="">
              <Image src={line} alt={"line image"} className={"absolute -bottom-1 left-0"} />
            </span>
          </p>{" "}
          to enhance your social media approach!
        </h1>
        <p className=" text-[18px] lg:text-[20px] font-normal mt-[20px] lg:mt-[32px]">
          Easily design, schedule, and optimize captivating content for all your
          channels.
        </p>
      </div>
      <div className="-mt-1 lg:mt-0 lg:col-span-1 flex flex-row-reverse lg:flex-row justify-end lg:justify-between  items-center  w-full gap-3">
        <Image src={Doodle} alt="doodle image " className="mt-8 ml-8 hidden lg:flex"/>
        
        <Image src={Doodle2} alt="doodle image " className=" flex lg:hidden -mt-5"/>
        
        
        <StartButton/>
        
      </div>
    </div>
  );
};

export default PostizEnhance;
