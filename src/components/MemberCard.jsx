import React from "react";
import { linkedin } from "../assets";
const MemberCard = ({ name, desc, socials, img }) => {
  return (
    <div className="members-card shadow-lg">
      <img className="card-img" src={img} alt="" />
      <div className="desc flex flex-col justify-center items-center gap-5">
        <h1 className="text-white font-sans font-bold mb-0">{name}</h1>
        <h2 className="text-white font-sans text-base">{desc}</h2>
        <a className="h-10" href={socials}>
          <img className="w-20 z-0 font-bold h-10" src={linkedin} alt="" />
        </a>
      </div>
    </div>
  );
};

export default MemberCard;
