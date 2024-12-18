import postiz from "@/src/assets/Logo3.png";
import buffer from "@/src/assets/buffer.png";
import { ComparisonCard } from "../../Cards/ComparisonCard";

export const CompetitorComparison = () => {
  const competitors = [
    {
      logo: postiz,
      name: "Postiz",
      description: "Postiz helps you build an audience organically. We're a values-driven company that provides affordable, intuitive,",
      altText: "postiz logo"
    },
    {
      logo: buffer,
      name: "Buffer",
      description: "Your competitor's description here",
      altText: "buffer logo"
    }
  ];

  return (
    <section className="mt-[100px] lg:mt-[140px]">
      <h1 className="text-[30px] lg:text-[48px] font-bold text-center pb-[32px] lg:pb-[60px]">
        Platform Comparison
      </h1>
      <div className="flex flex-col md:flex-row gap-2 lg:gap-3 relative">
        {competitors.map((competitor, index) => (
          <ComparisonCard
            key={index}
            {...competitor}
          />
        ))}
      </div>
    </section>
  );
};

export default CompetitorComparison;