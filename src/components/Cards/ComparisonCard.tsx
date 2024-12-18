import { ComparisonCardProps } from "@/src/types";
import Image from "next/image";

export const ComparisonCard = ({
  logo,
  name,
  description,
  altText,
}: ComparisonCardProps) => {
  return (
    <div className="bg-gradient-to-r from-[#5608D5] to-[#24005E] py-[33px] lg:py-[60px] px-[21px] lg:px-[70px] rounded-[20px]">
      <Image
        src={logo}
        alt={altText}
        className="w-[123px] lg:w-[180px] h-auto"
      />
      <div className="mt-[12px] lg:mt-[24px]">
        <h2 className="font-semibold pb-3 text-[22px] lg:text-[34px]">
          {name}
        </h2>
        <p className="text-[18px] lg:text-[21px] tracking-wide font-normal leading-[24px]">
          {description}
        </p>
      </div>
    </div>
  );
};
