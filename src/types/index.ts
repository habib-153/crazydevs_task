import { StaticImageData } from "next/image";

export interface ComparisonCardProps {
  logo: StaticImageData;
  name: string;
  description: string;
  features?: string[];
  altText: string;
}

export interface PricingFeature {
  text: string;
  additionalInfo?: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  features: {
    socialSets: string;
    users: string;
    additionalCost?: string;
  };
  variant?: "gradient" | "default";
  gradientColors?: string;
}

export interface PricingSection {
  title: string;
  features: string[];
  plans: PricingPlan[];
  enterprisePlans?: PricingPlan[];
}
