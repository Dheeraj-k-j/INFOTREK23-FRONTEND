import React from "react";
import team from "../assets/team.jpg";
import MemberCard from "./MemberCard";
import styles from "../style";
import { bhavya, dheeraj, abhi, pawan, piyush, LeepakshiYadav, AnkitSoni, arkaprabha, HarshitSharma, umang, varun, subham, akshay, YasserKhan, Deepeeka, SonuGupta, simran, ShivamDubey } from "../assets";

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
        desc: "",
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
    members: [
      {
        name: "Leepakshi Yadav",
        socials: "https://www.linkedin.com/in/leepakshi-yadav-12975a11a/",
        desc: "",
        image: LeepakshiYadav,
      },
      {
        name: "Harshit Sharma",
        socials: "https://www.linkedin.com/in/harshit-sharma-56306a227/",
        desc: "",
        image: HarshitSharma,
      },
      {
        name: "Varun Singh",
        socials: "https://www.linkedin.com/in/varun14gb/",
        image: varun,
        desc: "",
      },
      {
        name: "Ankit Soni",
        socials: "https://www.linkedin.com/in/ankit-soni-988525147/",
        desc: "",
        image: AnkitSoni,
      },
      {
        name: "Umang Kumar",
        socials: "https://www.linkedin.com/in/umangkumarumk/",
        desc: "",
        image: umang,
      },
      {
        name: "Arkaprabha Ghosh",
        socials: "https://www.linkedin.com/in/arkaprabha-ghosh-a2733917a/",
        image: arkaprabha,
        desc: "",
      },
      {
        name: "Subham Jha",
        socials: "/",
        image: subham,
        desc: "",
      },
      {
        name: "Akshay Raj Singh",
        socials: "/",
        desc: "",
        image: akshay,
      },
    ],
  },
  {
    batch: "2023",
    members: [
      {
        name: "Shivam Dubey",
        socials: "https://www.linkedin.com/in/shivam-dubey-862086203/",
        desc: "",
        image: ShivamDubey,
      },
      {
        name: "Simran Garg",
        socials: "https://www.linkedin.com/in/simran-garg-0501",
        desc: "",
        image: simran,
      },
      {
        name: "Sonu Gupta",
        socials: "https://www.linkedin.com/in/104-sonu-gupta/",
        image: SonuGupta,
        desc: "",
      },
      {
        name: "Deepeeka",
        socials: "https://www.linkedin.com/in/deepeekachudasama/",
        desc: "",
        image: Deepeeka,
      },
      {
        name: "Yasser Osman Khan",
        socials: "https://www.linkedin.com/in/yasserkhan45",
        desc: "",
        image: YasserKhan,
      }
    ],
  },
];
const Team = () => {
  return (
    <div className="min-h-screen h-full relative">
      <div className="team-wrap flex flex-col">
        {" "}
        // mx width define krni h
        <div className={`mt-[110px] ${styles.paddingX}`}>
          <h1 className="title mb-3 scndry-clr">Meet The Team</h1>
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
