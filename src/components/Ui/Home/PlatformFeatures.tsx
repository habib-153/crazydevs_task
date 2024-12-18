import social from "@/src/assets/Interface.png";
import Image from "next/image";
import StartButton from "../Shared/StartButton";
import instragram from "@/src/assets/_Instagram.png";
import youtube from "@/src/assets/youtube.png";
import facebook from "@/src/assets/facebook.png";
import tiktok from "@/src/assets/tiktok.png";
import rib from "@/src/assets/rib.png";
import circle from "@/src/assets/circle.png";

const PlatformFeatures = () => {
  return (
    <div className="lg:-mt-20">
      <div className=" flex overflow-hidden rounded-[16px] bg-cover bg-center min-h-[372px] lg:min-[300px] platform items-end relative">
        {/* left side */}
        <div className="hidden md:flex flex-col w-full lg:w-[60%] py-[52px]  pl-[60px] pr-[60px] lg:pr-0">
          <span className="lg:text-[22px] xl:text-[22px] font-bold font-plus-jakarta tracking-wider">
            One-stop platform
          </span>
          <p className="md:text-[32px] lg:text-[35px] xl:text-[43px] font-extrabold pt-4 pb-4 font-plus-jakarta leading-8 lg:leading-[48px] tracking-tight relative">
            <span className="relative">Postiz</span> is an open-source tool for
            social media scheduling
            <Image
              src={circle}
              alt="text-circle"
              className="absolute top-1 lg:h-[64px] md:w-[120px] lg:w-[153px] -left-[17px]"
            />
          </p>
          <p className="text-[20px] max-w-[532px] leading-6">
            Provides tools to manage social media, build an audience, generate
            leads, and grow your business.
          </p>

          <div className="mt-[44px]">
            <StartButton />
          </div>
        </div>
        {/* right side */}
        <div className=" hidden lg:flex h-full lg:w-[40%]  relative ">
          <div className="relative">
            <Image src={social} alt="social" className="w-auto xl:h-[354px]" />
            <Image
              src={instragram}
              alt="instragram"
              className="absolute top-8 w-[56px] z-20 left-[31%]"
            />
            <Image
              src={facebook}
              alt="facebook"
              className="absolute top-[10px] w-[28px] z-20 right-[35%]"
            />
            <Image
              src={tiktok}
              alt="tiktok"
              className="absolute bottom-[24%] w-[31px] z-20 left-[18px]"
            />
          </div>

          <Image
            src={rib}
            alt="rib"
            className="absolute z-50 w-[108px] bottom-0 -left-[90px]"
          />
        </div>
        {/* youtube */}
        <Image
          src={youtube}
          alt="youtube"
          className="invisible lg:visible absolute -top-0 w-[77px] z-20 right-[7%] "
        />
      </div>
    </div>
  );
};

export default PlatformFeatures;
