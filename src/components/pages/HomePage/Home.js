import React from "react";
import HeroSection from "../../HeroSection";
import VillainSection from "../../VillainSection";
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from "./Data";

function Home() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <VillainSection {...homeObjTwo} />
    </>
  );
}

export default Home;
