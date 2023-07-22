import React from "react";
import { secLogo, acmLogo } from "../assets";

function Footer() {
  return (
    <div className="footer ">
      <div className="footer-upper">
        <img className="footer-logo" src={acmLogo} alt="" />
        <p>logo</p>
        <img className="footer-logo align-right" src={secLogo} alt="" />
      </div>
      {/* <span className="line-separator" /> */}
      {/* <div className="footer-lower">
        <span className="footer-attribute">Made By ACMSCNITT</span>
      </div> */}
    </div>
  );
}

export default Footer;
