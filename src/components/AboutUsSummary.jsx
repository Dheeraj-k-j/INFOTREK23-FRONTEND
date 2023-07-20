import React from "react";
import { Link } from "react-router-dom";
import Title from "./Title";
import SubmitButton from "./SubmitButton";

function AboutUs() {
  return (
    <div className="about-wrap">
      <div className="about-div">
        <p className="body-text">
          <span className="line-separator" />
          <Title titleProp={{ title: "ABOUT US" , classes:"scndry-clr"}} />
          <span className='tag-line prmry-clr'>Discover the limitless possibilities at Infotrek: Ignite, Explore, Excel</span>
          <span className="line-separator" />
        </p>
      </div>
      <div className="about-second-div">
          <div className="about-us-description">
          Infotrek, an Inter-Departmental Technical Symposium, held under ACM, runs over few days, bringing in the indigenous minds of the Campus under one roof thereby giving a stiff competition.
          </div>
          <Link to="/AboutUs">
          <button className="explore-button">MORE ABOUT US</button>
          </Link>
      </div>
    </div>
  );
}

export default AboutUs;
