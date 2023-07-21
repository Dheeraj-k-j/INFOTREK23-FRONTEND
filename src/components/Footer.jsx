import React from "react";
import { mainLogo, acmLogo } from "../assets";

function Footer() {
  return (
    <div className="footer ">
      <div className="footer-upper">
        <img className="footer-logo" src={acmLogo} alt="" />
        <img className="footer-logo align-right" src={mainLogo} alt="" />
      </div>
      {/* <span className="line-separator" /> */}
      <div className="footer-lower">
        <span className="footer-attribute">Made By ACMSCNITT</span>
      </div>
    </div>
  );
}

export default Footer;
