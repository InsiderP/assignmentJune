import CardComponent from "@/Component/Card&testimonal/card";
import Display from "@/Component/Display/display";
import EverythingComponent from "@/Component/EverythingComponent/everythingComponent";
import FAQ from "@/Component/Faq/faq";
import Footer from "@/Component/Footer/Footer";
import GetStarted from "@/Component/GetStarted/getStarted";
import App from "@/Component/Navbar/navbar";
import StayConnected from "@/Component/StayConnected/stayConnected";
import TestimonialsCarousel from "@/Component/Testimonal/testimonal";
import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <>
      <App />
      <Display />
      <EverythingComponent />
      <CardComponent />
      <TestimonialsCarousel />
      <StayConnected />
      <FAQ />
      <GetStarted />
      <Footer />
    </>
  );
}
