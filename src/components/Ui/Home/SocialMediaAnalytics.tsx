import React from 'react';
import { FeatureList } from '../Shared/FeatureList';

const SocialMediaAnalytics = () => {
 const postizAnalytics = {
    Instagram: [
        { Followers: true },
        { Likes: true },
        { Comments: true },
        { EngagementRate: true },
        { Posts: true },
        { Stories: true },
        { Reels: true },
        { Competitors: true },
        { Locations: true },
      ]as Array<Record<string, boolean>>,
      Facebook: [
        { Follows: true },
        { Fans: true },
        { Impressions: true },
        { Views: true },
        { Posts: true },
      ]as Array<Record<string, boolean>>,
      Twitter: [
        { Likes: true },
        { Replies: true },
        { Mentions: true },
        { Retweets: true },
        { Tweets: true },
      ]as Array<Record<string, boolean>>,
      LinkedIn: [
        { Views: true },
        { Visitors: true },
        { Demographics: true },
        { Updates: true },
        { Shares: true },
        { Followers: true },
      ]as Array<Record<string, boolean>>,
      Reporting: [
        { ExportPDF: true },
        { CustomColors: true },
        { CustomTimeframe: true },
        { Customizable: true },
        { ShareableURL: true },
      ]as Array<Record<string, boolean>>,
  };
  
  const bufferAnalytics = {
    Instagram: [
        { Followers: true },
        { Likes: true },
        { Comments: true },
        { EngagementRate: true },
        { Posts: true },
        { Stories: true },
        { Reels: true },
        { Competitors: false },
        { Locations: false },
      ]as Array<Record<string, boolean>>,
      Facebook: [
        { Follows: true },
        { Fans: true },
        { Impressions: true },
        { Views: true },
        { Posts: true },
      ]as Array<Record<string, boolean>>,
      Twitter: [
        { Likes: true },
        { Replies: true },
        { Mentions: false },
        { Retweets: false },
        { Tweets: true },
      ]as Array<Record<string, boolean>>,
      LinkedIn: [
        { Views: true },
        { Visitors: false },
        { Demographics: false },
        { Updates: true },
        { Shares: true },
        { Followers: true },
      ]as Array<Record<string, boolean>>,
      Reporting: [
        { ExportPDF: true },
        { CustomColors: false },
        { CustomTimeframe: true },
        { Customizable: true },
        { ShareableURL: false },
      ]as Array<Record<string, boolean>>,
  };
  

  return (
    <div className="text-white pt-[60px] lg:pt-[120px]">
      <h1 className="text-[31px] lg:text-[48px] font-bold text-center mb-[30px] lg:mb-[60px] font-plus-jakarta leading-[32px]">
        Social Media Analytics & Reporting
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {/* Postiz Section */}
        <div className="bg-[#1A1919] px-[22px] py-[32px] lg:p-10 rounded-[16px] lg:rounded-[20px]">
          <h2 className="text-[22px] lg:text-[34px] font-bold mb-7 lg:mb-9 font-plus-jakarta">Postiz – Analytics & Reporting</h2>
          <FeatureList title="Instragram" features={postizAnalytics.Instagram as Array<Record<string,boolean>>} />
          <FeatureList title="FaceBook" features={postizAnalytics.Facebook} />
          <FeatureList title="Twitter" features={postizAnalytics.Twitter} />
          <FeatureList title="Linkedin" features={postizAnalytics.LinkedIn} />
          <FeatureList title="Reporting" features={postizAnalytics.Reporting} />
        </div>

        {/* Buffer Section */}
        <div className="bg-[#1A1919] px-[22px] py-[32px] lg:p-10 rounded-[16px] lg:rounded-[20px]">
          <h2 className="text-[22px] lg:text-[34px] font-bold mb-7 lg:mb-9 font-plus-jakarta">Buffer – Analytics & Reporting</h2>
          <FeatureList title="Instragram" features={bufferAnalytics.Instagram} />
          <FeatureList title="Facebook" features={bufferAnalytics.Facebook} />
          <FeatureList title="Twitter" features={bufferAnalytics.Twitter} />
          <FeatureList title="LinkedIn" features={bufferAnalytics.LinkedIn} />
          <FeatureList title="Reporting" features={bufferAnalytics.Reporting} />
        </div>
      </div>
    </div>
  );
};

export default SocialMediaAnalytics;