import { PricingPlan } from "@/src/types";

export const PricingCard = ({ plan }: { plan: PricingPlan }) => {
  const gradientClass = plan.variant === "gradient"
    ? `bg-gradient-to-r ${plan.gradientColors || ''}`
    : "bg-[#242323]";

  return (
    <div className={`flex flex-col md:flex-row justify-between p-[24px] lg:p-[30px] items-start ${gradientClass} rounded-[16px] min-h-[142px]`}>
      <div className="flex flex-col">
        <span className="text-[18px] lg:text-[22px] font-medium font-plus-jakarta -mt-[8px]">
          {plan.name}
        </span>
        <span className="text-[32px] lg:text-[40px] font-semibold font-plus-jakarta -mt-1 -mb-[15px]">
          {plan.price}{" "}
          <span className="text-[18px] lg:text-[22px] tracking-wider font-normal">
            {plan.period}
          </span>
        </span>
      </div>
      <div className="text-[18px] lg:text-[20px] font-dm-sans mt-6 md:mt-0">
        <div className="flex flex-row md:flex-col items-center gap-1 md:gap-0">
          <p>Social sets: {plan.features.socialSets}</p>
          {plan.features.additionalCost && (
            <p className="font-normal text-[18px] md:-mt-1">
              (additional: {plan.features.additionalCost})
            </p>
          )}
        </div>
        <p className="-mt-1">Users: {plan.features.users}</p>
      </div>
    </div>
  );
};