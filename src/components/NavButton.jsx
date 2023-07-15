import React from "react";
import { Link } from "react-router-dom";
import {removeJwtTokenFromCookie} from "../authorization"

const NavButton = ({authProp}) => {
  // console.log(authProp);
  const {token, setTokenValue} = authProp;

  const SignOut = () => {
    removeJwtTokenFromCookie();
    setTokenValue(null);
  }

  if (!!token) {
    return (
      <Link to="/SignUp">
      <button onClick={SignOut}>
        <div className="cyber-cta">
          <div className="cyber-cta--background">
            <div></div>
          </div>
          <div className="cyber-cta--foreground"></div>
          <div className="cyber-cta--text">LogOut</div>
        </div>
      </button>
      </Link>
    );
  } else {
    return (
      <Link to="/SignUp">
        <div className="cyber-cta">
          <div className="cyber-cta--background">
            <div></div>
          </div>
          <div className="cyber-cta--foreground"></div>
          <div className="cyber-cta--text">Sign In</div>
        </div>
      </Link>
    );
  }
};

export default NavButton;
