import React from "react";
import { BrowserRouter, Router, Route, Switch } from "react-router-dom";

import Slider from "./Slider";
import ActionSlide from "../../components/GenereSlide/ActionSlide";
import CrimeSlide from "../../components/GenereSlide/CrimeSlide";
import DramaSlide from "../../components/GenereSlide/DramaSlide";
import ThrillerSlide from "../../components/GenereSlide/ThrillerSlide";

function Home() {
  return (
    <div>
      <Slider />
      <ActionSlide />
      <CrimeSlide />
      <DramaSlide />
      <ThrillerSlide />
    </div>
  );
}

export default Home;
