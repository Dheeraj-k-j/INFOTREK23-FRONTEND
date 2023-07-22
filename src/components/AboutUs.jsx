import React from "react";
import Title from "./Title";
import { aboutImg } from "../assets";

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="company">
        <div className="img">
          <img src={aboutImg} alt="About image" />
        </div>
        <div className="company-info">
          <span>
            ABOUT <span className="our">INFOTREK</span>
          </span>
          <p>
            <b>Infotrek</b>, an Inter-Departmental Technical Symposium, held
            under ACM, runs over for 2 days, sometime in March-April, bringing
            in the indigenous minds of the Campus under one roof thereby giving
            a stiff competition.
          </p>
          <p>
            It is a blend of both Technical and Non-technical events. Technical
            events comprising of Coding, Web-designing, Hacking, De-bugging,
            etc. The Non-technical has in its back, events such as Dumb
            Charades, Quiz, Oratorio, Marketing, etc to test your vocal and
            managerial skills. And the endeavours are rewarded with cash prizes.
          </p>
          <p>
            Last but not the least, Who is the Star of the Event? The answer to
            this question hinges on the performance of the best performers in
            this closing event. Infotrek bridges the gap between all the
            departments and builds a platform to communicate well among the
            same. It is not just a meet but 'Fun in the Run'.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
