import React from "react";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Deliver from "../components/deliver";
import Popular from "../components/Popular";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Slider />
      <Deliver />
      <Popular />
    </div>
  );
}
