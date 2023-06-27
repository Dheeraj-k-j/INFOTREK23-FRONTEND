import React from "react";

function EventCard({ele}) {
  return (
    <a
      href={ele.eventUrl}
      alt={ele.altName}
    >
      <div className="card">
        <div className="wrapper">
          <img
            src={ele.coverImageurl}
            className="cover-image"
          />
        </div>
        <img
          src={ele.titleImageurl}
          className="title"
        />
        <img
          src={ele.characterImageurl}
          className="character"
        />
      </div>
    </a>
  );
}

export default EventCard;
