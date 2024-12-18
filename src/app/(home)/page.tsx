import Banner from "@/src/components/Ui/Home/Banner";
import CompareAlternatives from "@/src/components/Ui/Home/CompareAlternatives";
import CompetitorComparison from "@/src/components/Ui/Home/CompetitorComparison";
import FAQ from "@/src/components/Ui/Home/FAQ";
import PlatformFeatures from "@/src/components/Ui/Home/PlatformFeatures";
import PostizEnhance from "@/src/components/Ui/Home/PostizEnhance";
import SocialMediaInbox from "@/src/components/Ui/Home/SocialMediaInbox";
import SocialMediaScheduling from "@/src/components/Ui/Home/SocialMediaScheduling";
import Summery from "@/src/components/Ui/Home/Summery";
import TeamsApprovals from "@/src/components/Ui/Home/Teams&Approvals";
import PricingPlans from "@/src/components/Ui/Home/PricingPlans";
import SocialMediaAnalytics from "@/src/components/Ui/Home/SocialMediaAnalytics";

const page = () => {
  return (
    <div className="mx-auto ">
      {/* banner section */}
      <Banner />
      <div className="max-w-[1440px] mx-auto px-[20px] lg:px-[60px]">
        <PlatformFeatures />
        <CompetitorComparison />
        <PricingPlans />
        <SocialMediaScheduling />
        <SocialMediaAnalytics />
        <TeamsApprovals />
        <SocialMediaInbox />
        <div className="hidden md:flex">
        <Summery />
        </div>
        <CompareAlternatives />
        <PostizEnhance />
        <FAQ />
      </div>
      {/* <GetReady/>  */}
    </div>
  );
};

export default page;
