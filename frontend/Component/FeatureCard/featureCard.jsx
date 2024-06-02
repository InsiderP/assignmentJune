import React from "react";

const FeatureCard = ({ title, imageSrc, altText, description }) => {
  return (
    <div
      className="bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 
      flex flex-col items-center border border-gray-200 rounded-lg overflow-hidden w-80 h-80"
    >
      <div className="flex h-full flex-col justify-center gap-4 p-5">
        <div className="h-1/3 flex items-center justify-center mb-0">
          <div className="p-0">
            <img
              alt={altText}
              loading="lazy"
              width="64"
              height="64"
              decoding="async"
              data-nimg="1"
              src={imageSrc}
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center p-0 h-1/3 overflow-hidden w-full">
          <p className="text-lg font-semibold mx-4 text-black text-center mb-2 w-full" style={{ minHeight: "3rem" }}>
            {title}
          </p>
          <p className="text-sm text-gray-500 text-center px-4 overflow-hidden">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
