import React from "react";
import {secLogo} from '../assets'

function FromLogo() {
  return (
    <>
      <img src={secLogo} alt="On page logo" className="on-page-logo" />
      <svg className="form__logo" width="3044" height="0"></svg>
    </>
  );
}

export default FromLogo;
