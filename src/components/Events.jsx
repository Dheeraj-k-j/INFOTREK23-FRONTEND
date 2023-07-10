import React from "react";
import EventCard from "./EventCard";
import eventsData from "../constants/eventsData";
import "../styles/events.css";

const Events = () => {
  return(
    <>
    <div className="event-cards-page">
      <h1 className="page-title">EVENTS</h1>
      <div className="event-cards-container">
        {
          eventsData.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
      </div>
    </div>
    </>
  );
};

export default Events;










// import React from 'react'
// import EventCard from './EventCard'

// function Events() {
//   // Later will be fetrched from database
//   const events = [
//     {
//       id:"1",
//       eventUrl: "https://www.mythrillfiction.com/the-dark-rider",
//       altName: "Mythrill",
//       coverImageurl : "https://ggayane.github.io/css-experiments/cards/dark_rider-cover.jpg",
//       titleImageurl : "https://ggayane.github.io/css-experiments/cards/dark_rider-title.png",
//       characterImageurl : "https://ggayane.github.io/css-experiments/cards/dark_rider-title.png"
//     },
//     {
//       id:"1",
//       eventUrl: "https://www.mythrillfiction.com/the-dark-rider",
//       altName: "Mythrill",
//       coverImageurl : "https://ggayane.github.io/css-experiments/cards/dark_rider-cover.jpg",
//       titleImageurl : "https://ggayane.github.io/css-experiments/cards/dark_rider-title.png",
//       characterImageurl : "https://ggayane.github.io/css-experiments/cards/dark_rider-title.png"
//     }
//   ]
//   return (
//     <div className="eventContainer">
//       {events.map((ele)=>(
//         <EventCard ele={ele}/>
//       ))}
//     </div>
//   )
// }

// export default Events