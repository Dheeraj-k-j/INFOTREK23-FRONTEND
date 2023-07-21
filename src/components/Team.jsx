import React from "react";
import team from "../assets/team.jpg";
import MemberCard from "./MemberCard";
import styles from "../style";
import { bhavya, dheeraj, abhi, pawan, piyush } from "../assets";

const Data = [
  {
    batch: "2025",
    members: [
      {
        name: "Piyush Singh",
        socials: "https://www.linkedin.com/in/piyush-singh-305b721b2/",
        desc: "",
        image: piyush,
      },
      {
        name: "Bhavya Pandey",
        socials: "https://www.linkedin.com/in/bhavya-pandey-38b593246",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        // import image from assets of bhavya
        image: bhavya,
      },
      {
        name: "Abhiusnees Nandi",
        socials: "https://www.linkedin.com/in/abhiusnees-nandi-b19349196",
        desc: "",
        image: abhi,
      },
      {
        name: "Dheeraj Joshi",
        socials: "https://www.linkedin.com/in/imjoshiane",
        desc: "",
        image: dheeraj,
      },
      {
        name: "Pawan Agarwal",
        socials: "https://www.linkedin.com/in/pawan-agrawal-316a16190/",
        image: pawan,
        desc: "",
      },
    ],
  },
  {
    batch: "2024",
    members: [],
  },
];
const Team = () => {
  return (
    <div className="min-h-screen h-full relative">
      <div className="team-wrap flex flex-col">
        {" "}
        // mx width define krni h
        <div className={`mt-[110px] ${styles.paddingX}`}>
          <h1 className="title mb-3">Meet The Team</h1>
          <div className="">
            {Data.map((batchData) => {
              return (
                <div className="flex flex-col">
                  <h2 className="text-2xl text-white mb-5">
                    {batchData.batch}
                  </h2>
                  <div className="flex flex-row gap-4 pb-[90px] scrollbar-hide overflow-x-scroll wrapper-member-card p-2 gap-x-8">
                    {batchData.members.map((member) => {
                      return (
                        <MemberCard
                          name={member.name}
                          desc={member.desc}
                          socials={member.socials}
                          img={member.image}
                        />
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* Additional content */}
    </div>
  );
};

export default Team;
