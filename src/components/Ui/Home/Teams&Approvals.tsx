import React from 'react';
import { FeatureList } from '../Shared/FeatureList';

const TeamsApprovals = () => {
    const postizAnalytics = {
        Teams: [
            { "Approval Workflows": true },
            { "Assign Users to Posts": true },
            { "Leave Comments on Posts": true },
            { "Assign Users to Messages": true },
            { "Tag Team Members in Comments": true }
          ]as Array<Record<string, boolean>>,
         
      };
      
      const bufferAnalytics = {
        Teams: [
            { "Approval Workflows": true },
            { "Assign Users to Posts": false },
            { "Leave Comments on Posts": false },
            { "Assign Users to Messages": false },
            { "Tag Team Members in Comments": false }
          ]as Array<Record<string, boolean>>,
         
      };
      
    
      return (
        <div className="text-white pt-[60px] lg:pt-[120px]">
      <h1 className="text-[32px] lg:text-[48px] font-bold text-center mb-[30px] lg:mb-[60px] font-plus-jakarta leading-[32px]">
            Teams & Approvals
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {/* Postiz Section */}
            <div className="bg-[#1A1919] px-[22px] py-[32px] lg:p-10 rounded-[16px] lg:rounded-[20px]">
            <h2 className="text-[22px] lg:text-[34px] font-bold mb-9 font-plus-jakarta">Postiz – Teams & Approvalse</h2>
              <FeatureList  features={postizAnalytics.Teams as Array<Record<string,boolean>>} />
              
            </div>
    
            {/* Buffer Section */}
            <div className="bg-[#1A1919] px-[22px] py-[32px] lg:p-10 rounded-[16px] lg:rounded-[20px]">
          <h2 className="text-[22px] lg:text-[34px] font-bold mb-9 font-plus-jakarta">Buffer – Teams & Approvalse</h2>
              <FeatureList  features={bufferAnalytics.Teams} />
              
            </div>
          </div>
        </div>
      );
};

export default TeamsApprovals;