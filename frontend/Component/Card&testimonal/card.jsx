import React from "react";
import FeatureCard from "../FeatureCard/featureCard"; // Import the FeatureCard component

const CardComponent = () => {
  return (
    <div className="bg-white mt-5 text-center px-16 sm:py-24 py-8 border-t border-b">
      <p className="text-4xl font-extrabold mb-8">Why Onelot?</p>
      <div className="flex flex-col gap-4 sm:flex-row sm:justify-center items-center">
        {/* Use FeatureCard component and pass props to customize each card */}
        <FeatureCard
          title="Trust"
          imageSrc="https://www.onelot.ph/_next/image?url=%2Ftrust.png&w=64&q=75"
          altText="Trust Icon"
          description="Regulated by Securities and Exchange Commission (SEC) Philippines"
        />
        <FeatureCard
          title="High Amount"
          imageSrc="https://www.onelot.ph/_next/image?url=%2Fhigh_amount.png&w=64&q=75"
          altText="High Amount Icon"
          description="Get the highest loan amounts compared to other banks and lenders"
        />
        <FeatureCard
          title="Fast"
          imageSrc="https://www.onelot.ph/_next/image?url=%2Ffast.png&w=64&q=75"
          altText="Fast Icon"
          description="Get the money within a few hours on the same day"
        />
        <FeatureCard
          title="Flexible"
          imageSrc="https://www.onelot.ph/_next/image?url=%2Fflexible.png&w=64&q=75"
          altText="Flexible Icon"
          description="Loans are tailored to your needs"
        />
        <FeatureCard
          title="Easy"
          imageSrc="https://www.onelot.ph/_next/image?url=%2Feasy.png&w=64&q=75"
          altText="Easy Icon"
          description="Run through an easy process and get your first loans within days"
        />
      </div>
    </div>
  );
};

export default CardComponent;
