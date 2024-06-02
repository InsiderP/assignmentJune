import React from "react";

import { Button } from "@nextui-org/react";

const GetStarted = () => {
  return (
    <div className="bg-white">
      <div className="text-center px-8 py-20">
        <p className="sm:text-4xl text-3xl mb-8 font-extrabold">
          Get started today
        </p>
        <p className="text-gray-500 font-normal text-xl sm:w-1/2 mx-auto">
          We look forward to serving the needs of used car dealers across the
          Philippines and helping them thrive in this dynamic market.
        </p>
        <Button color="secondary">Inquire now</Button>
      </div>
    </div>
  );
};

export default GetStarted;
