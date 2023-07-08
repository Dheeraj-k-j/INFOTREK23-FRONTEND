import React from "react";
import { Link } from "react-router-dom";

const NavButton = ({buttonProp}) => {
  return (
    <Link to={buttonProp.to}>
      <div className="cyber-cta">
        <div className="cyber-cta--background">
          <div></div>
        </div>
        <div className="cyber-cta--foreground"></div>
        <div className="cyber-cta--text">{buttonProp.text}</div>
      </div>
    </Link>
  );
};

export default NavButton;
