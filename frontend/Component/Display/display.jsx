"use client";
import { Button } from "@nextui-org/react";
import React from "react";

const Display = () => {
  return (
    <div className="flex flex-col items-center justify-between">
      <div className="mt-12 text-center">
        <p className="sm:text-5xl text-3xl sm:mb-8 mb-4 font-extrabold px-4 sm:px-20 xl:px-20 2xl:px-72 text-black">
          Grow your dealership with car loans <br />
          and <br />
          digital tools for dealers
        </p>
        <p className="sm:text-md text-3xl sm:mb-3 mb-2 font-[10px] px-4 sm:px-20 xl:px-20 2xl:px-72 text-black">
          We enable dealers to buy more cars through our inventory loan
          <br />
          solutions and sell cars more efficiently through our Dealership
          <br />
          Management System with its inventory management, <br />
          marketing solutions and market insights
        </p>
        <div className="items-center">
          <Button color="secondary">Get Started</Button>
        </div>
      </div>
      <div className="items-center mt-4">
        <img src="https://www.onelot.ph/_next/image?url=%2Fhome_hero_image.png&w=1920&q=75" />
      </div>
      <div className="items-center mt-6">
        <p className="ml-5 text-lg text-black">Regulated by</p>
        <img src="https://www.onelot.ph/_next/image?url=%2Fsec.png&w=256&q=75" />
      </div>
    </div>
  );
};

export default Display;
