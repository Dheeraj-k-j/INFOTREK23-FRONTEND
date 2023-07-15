import React from "react";
import { Link } from "react-router-dom";

function PrimaryBtn({authProp}) {
  const {token} = authProp;
  return (
    <Link to={!!token ? `/Events` : `/SignUp`}>
      <button className="primary-button">REGISTER NOW</button>
    </Link>
  );
}

export default PrimaryBtn;
