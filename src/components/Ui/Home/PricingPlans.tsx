import { PricingSection } from "./PricingSection";

const PricingPlans = () => {
  const pricingData = {
    postiz: {
      title: "Postiz Pricing",
      features: [
        "14 day free trial, credit card required",
        "10% annual discount",
      ],
      plans: [
        {
          name: "Standard",
          price: "$29",
          period: "/mo",
          features: {
            socialSets: "1",
            users: "1",
          },
        },
        {
          name: "Team",
          price: "$39",
          period: "/mo",
          features: {
            socialSets: "1",
            users: "unlimited",
          },
        },
        {
          name: "Pro",
          price: "$49",
          period: "/mo",
          features: {
            socialSets: "1",
            users: "unlimited",
          },
        },
        {
          name: "Ultimate",
          price: "$99",
          period: "/mo",
          features: {
            socialSets: "1",
            users: "unlimited",
          },
        },
      ],
      enterprisePlans: [
        {
          name: "Self service installation",
          price: "$2000",
          period: "/ One time",
          features: {
            socialSets: "1",
            users: "1",
          },
          variant: "gradient" as "gradient" | "default" | undefined,
          gradientColors: "from-[#45007C] to-[#1C0033]",
        },
        {
          name: "Enterprise",
          price: "Custom",
          period: "",
          features: {
            socialSets: "1",
            users: "1",
          },
          variant: "gradient" as "gradient" | "default" | undefined,
          gradientColors: "from-[#6B007C] to-[#280033]",
        },
      ],
    },
    buffer: {
      title: "Buffer Pricing",
      features: [
        "14 day free trial, credit card required",
        "10% annual discount",
      ],
      plans: [
        {
          name: "Free",
          price: "$0",
          period: "/mo",
          features: {
            socialSets: "1",
            users: "1",
          },
        },
        {
          name: "Essentials",
          price: "$6",
          period: "/mo",
          features: {
            socialSets: "1",
            users: "1",
            additionalCost: "$6",
          },
        },
        {
          name: "Team",
          price: "$12",
          period: "/mo",
          features: {
            socialSets: "1",
            users: "unlimited",
            additionalCost: "$12",
          },
        },
        {
          name: "Agency",
          price: "$120",
          period: "/mo",
          features: {
            socialSets: "1",
            users: "unlimited",
            additionalCost: "$6",
          },
        },
      ],
    },
  };
  return (
    <div className="mt-[60px] lg:mt-[120px]">
      <h1 className="text-[30px] lg:text-[48px] font-bold font-plus-jakarta pb-[30px] lg:pb-[60px] text-center">
        Pricing & Plans
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <PricingSection section={pricingData.postiz} />
        <PricingSection section={pricingData.buffer} />
      </div>
    </div>
  );
};

export default PricingPlans;
