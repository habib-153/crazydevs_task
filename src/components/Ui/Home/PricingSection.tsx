import { MdCheck } from "react-icons/md";
import { PricingCard } from "../../Cards/PricingCard";
import { PricingSection as PricingSectionType } from "@/src/types";

export const PricingSection = ({
  section,
}: {
  section: PricingSectionType;
}) => {
  return (
    <div className="bg-[#1A1919] rounded-[20px] px-[22px] py-[32px] lg:p-[44px]">
      <h2 className="text-[22px] lg:text-[34px] font-bold font-plus-jakarta">
        {section.title}
      </h2>
      <section className="pt-[24px] pb-[32px] lg:py-[25px] space-y-3">
        <ul>
          {section.features.map((feature, index) => (
            <li
              key={index}
              className="text-[20px] lg:text-[22px] font-normal flex items-start md:items-center gap-2 text-[#D1D1D1]"
            >
              <span className="text-[18px] lg:text-[22px] text-[#38FF9F] p-2 bg-[#262525] rounded-full font-bold">
                <MdCheck />
              </span>
              {feature}
            </li>
          ))}
        </ul>
      </section>
      <section className="flex flex-col gap-2">
        {section.plans.map((plan, index) => (
          <PricingCard key={index} plan={plan} />
        ))}
        {section.enterprisePlans && (
          <>
            <h3 className="text-[20px] lg:text-[28px] font-semibold mt-6 mb-2">
              Enterprise Solutions
            </h3>
            {section.enterprisePlans.map((plan, index) => (
              <PricingCard key={`enterprise-${index}`} plan={plan} />
            ))}
          </>
        )}
      </section>
    </div>
  );
};
