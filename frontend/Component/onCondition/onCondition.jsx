"use client";
import { useMediaQuery } from "@uidotdev/usehooks";
import React from "react";
import Navbar from "../Navbar/navbar";
import Sidebar from "../Sidebar/sidebar";
const OnCondition = () => {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
  const isMediumDevice = useMediaQuery(
    "only screen and (min-width : 769px) and (max-width : 992px)"
  );
  const isLargeDevice = useMediaQuery(
    "only screen and (min-width : 993px) and (max-width : 1200px)"
  );
  const isExtraLargeDevice = useMediaQuery(
    "only screen and (min-width : 1201px)"
  );
  return isSmallDevice ? <Navbar /> : <Sidebar />;
};

export default OnCondition;
