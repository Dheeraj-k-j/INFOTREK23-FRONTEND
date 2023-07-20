import React from "react";
import Hero from "./Hero";
import EventsSummary from "./EventsSummary";
import AboutUsSummary from "./AboutUsSummary"

function LandingPage({authProp}) {
  return (
    <>
      <Hero authProp={authProp}/>
      <EventsSummary authProp={authProp}/>
      <AboutUsSummary/>
    </>
  );
}

export default LandingPage;
