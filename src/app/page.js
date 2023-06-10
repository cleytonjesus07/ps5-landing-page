"use client"
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import TopHeader from "@/components/TopHeader";
import Specs from "@/components/Specs";
import Slider from "@/components/Slider";
import { useState } from "react";
import Footer from "@/components/Footer";

export default function Home() {
  const [seeingVideo, setSeeingVideo] = useState({
    sliderVideo: false,
    ps5InfoVideo: false
  });
  return (
    <main>
      <TopHeader />
      <Header />
      <Banner seeingVideo={seeingVideo} setSeeingVideo={setSeeingVideo} />
      <Specs />
      <Slider seeingVideo={seeingVideo} setSeeingVideo={setSeeingVideo} />
      <Footer />
    </main>
  )
}
