import React from "react";
import PrimaryBtn from "./PrimaryBtn"

function Hero({authProp}) {
  return (
    <div className="hero-wrap">
      <div className="hero-div">
        <div className="hero-inner-div">
          <div className="one">
             <div className="XL-text">INFOTREK 23</div>
             <div className="L-text">INFOTREK 23</div>
            <div className="container-center"></div>
            <div className="hero-btn-container">
            <PrimaryBtn authProp={authProp}/>
            </div>
            <div className="featured">ACM</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
