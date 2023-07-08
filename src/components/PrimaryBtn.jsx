import React from "react";
import { Link } from "react-router-dom";

function PrimaryBtn() {
  return (
    <Link to="/SignUp">
      <button className="primary-button">REGISTER NOW</button>
    </Link>
  );
}

export default PrimaryBtn;
