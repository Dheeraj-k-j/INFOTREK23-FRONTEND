import React from "react";
import { secLogo, acmLogo } from "../assets";

function Footer() {
  return (
    <div className="min-h-[90px] flex justify-between items-center bg-black">
      <div className="w-[200px] m-2">
        <img className="flex-1" src={acmLogo} alt="" />
      </div>

      <div className="text-center">
        <h1 className="text-white flex-1 text-sm md:text-xl">
          Made With ❤️ by ACM NITT
        </h1>
      </div>
      <div className="w-[200px] m-2 mr-4">
        <img className=" flex-1" src={secLogo} alt="" />
      </div>
    </div>
  );
}

export default Footer;
