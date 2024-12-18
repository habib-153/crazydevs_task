import { FeatureList } from "../Shared/FeatureList";

const SocialMediaScheduling = () => {
  const postizFeatures = {
    autoPublish: [
      { Instagram: true },
      { Facebook: true },
      { LinkedIn: true },
      { Twitter: true },
      { "Google My Business": true },
      { TikTok: true },
      { Pinterest: true },
      { Youtube: false },
    ] as Array<Record<string, boolean>>,
    essentials: [
      { Notes: true },
      { "Video Publishing": true },
      { "Save as Draft": true },
      { "Drag & Drop Calendar": true },
      { "Post Previews": true },
      { "Saved Captions Lists": true },
      { "Best Times to Post": true },
      { "Import Holidays": true },
      { "Instragram Grid Planner": true },
      { "Image Cropping": true },
      { "Sharable Calendar URL": true },
    ] as Array<Record<string, boolean>>,
    tags: [
      { Instagram: true },
      { Facebook: true },
      { LinkedIn: true },
    ] as Array<Record<string, boolean>>,
    autoPublishChannels: [
      { Instagram: true },
      { Facebook: true },
      { LinkedIn: true },
      { Twitter: true },
    ] as Array<Record<string, boolean>>,
    views: [
      { Week: true },
      { Month: true },
      { List: true },
      { Day: false },
      { Grid: true },
      { Board: true },
      { Table: true },
    ] as Array<Record<string, boolean>>,
  };

  const bufferFeatures = {
    autoPublish: [
      { Instagram: true },
      { Facebook: true },
      { LinkedIn: true },
      { Twitter: true },
      { "Google My Business": true },
      { Tiktok: true },
      { Pinterest: true },
      { YouTube: false },
    ] as Array<Record<string, boolean>>,
    essentials: [
      { Notes: true },
      { "Video Publishing": true },
      { "Save as Draft": true },
      { "Drag & Drop Calendar": true },
      { "Post Previews": true },
      { "Saved Captions Lists": false },
      { "Best Times to Post": true },
      { "Import Holidays": false },
      { "Instragram Grid Planner": false },
      { "Image Cropping": true },
      { "Sharable Calendar URL": false },
    ] as Array<Record<string, boolean>>,
    tags: [
      { Instagram: true },
      { Facebook: true },
      { LinkedIn: false },
    ] as Array<Record<string, boolean>>,
    autoPublishChannels: [
      { Instagram: true },
      { Facebook: true },
      { LinkedIn: true },
      { Twitter: true },
    ] as Array<Record<string, boolean>>,
    views: [
      { Week: true },
      { Month: true },
      { List: true },
      { Day: true },
      { Grid: false },
      { Board: false },
      { Table: false },
    ] as Array<Record<string, boolean>>,
  };

  return (
    <div className="text-white pt-[60px] lg:pt-[120px]">
      <h1 className="text-[32px] lg:text-[48px] font-bold text-center mb-[30px] lg:mb-[60px] font-plus-jakarta leading-[32px]">
        Social Media Scheduling & Publishing
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {/* Postiz Section */}
        <div className="bg-[#1A1919] px-[22px] py-[32px] lg:p-10 rounded-[16px] lg:rounded-[20px]">
          <h2 className="text-[22px] lg:text-[34px] font-bold mb-7">
            Postiz – Scheduling & Publishing
          </h2>
          <FeatureList
            title="Social networks for auto-publishing"
            features={
              postizFeatures.autoPublish as Array<Record<string, boolean>>
            }
          />
          <FeatureList
            title="Essentials"
            features={postizFeatures.essentials}
          />
          <FeatureList title="Tags users on" features={postizFeatures.tags} />
          <FeatureList
            title="Auto-publish carousels on"
            features={postizFeatures.autoPublishChannels}
          />
          <FeatureList
            title="Scheduling views supported"
            features={postizFeatures.views}
          />
        </div>

        {/* Buffer Section */}
        <div className="bg-[#1A1919] px-[22px] py-[32px] lg:p-10 rounded-[16px] lg:rounded-[20px]">
          <h2 className="text-[22px] lg:text-[34px] font-bold mb-7">
            Buffer – Scheduling & Publishing
          </h2>
          <FeatureList
            title="Social networks for auto-publishing"
            features={bufferFeatures.autoPublish}
          />
          <FeatureList
            title="Essentials"
            features={bufferFeatures.essentials}
          />
          <FeatureList title="Tags users on" features={bufferFeatures.tags} />
          <FeatureList
            title="Auto-publish carousels on"
            features={bufferFeatures.autoPublishChannels}
          />
          <FeatureList
            title="Scheduling views supported"
            features={bufferFeatures.views}
          />
        </div>
      </div>
    </div>
  );
};

export default SocialMediaScheduling;
