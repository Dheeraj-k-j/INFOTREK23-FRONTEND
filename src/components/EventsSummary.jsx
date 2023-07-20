import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EventCard from "./EventCard";
import ShimmerCard from "./ShimmerCard";
import api from "../api";
import Title from "./Title";

function EventsSummary({ authProp }) {
  const [eventsData, setEventsData] = useState([]);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await api.get("/events", {
          headers: {
            "Content-Type": "application/json",
          },
        });
        const events = response?.data?.data?.Events;
        setEventsData(events.slice(0, 3));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchEvent();
  }, []);

  if (eventsData.length == 0) {
    return (
      <div className="event-wrap">
        <div className="event-div" id="anchor">
          {/* <Title titleProp={{title:"ABOUT US"}}/> */}
          <p className="body-text">
            <span className="line-separator" />
            <Title titleProp={{ title: "EVENTS", classes: "scndry-clr" }} />
            <span className="tag-line prmry-clr">
              Join, Compete, and Grow: Infotrek, the Pathway to Success!
            </span>
            <span className="line-separator" />
          </p>
        </div>
        <div className="event-inner-div">
          <div className="shimmer-card-container">
            <ShimmerCard />
            <ShimmerCard />
            <ShimmerCard />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="event-wrap">
        <div className="event-div" id="anchor">
          {/* <Title titleProp={{title:"ABOUT US"}}/> */}
          <p className="body-text">
            <span className="line-separator" />
            <Title titleProp={{ title: "EVENTS", classes: "scndry-clr" }} />
            <span className="tag-line prmry-clr">
              Join, Compete, and Grow: Infotrek, the Pathway to Success!
            </span>
            <span className="line-separator" />
          </p>
        </div>
        <div className="event-inner-div">
          <div className="events-card-container">
            {eventsData.map((event) => (
              <EventCard
                key={event._id}
                eventProp={{ authProp: authProp, event: event }}
              />
            ))}
          </div>
          <Link to="/Events">
            <button className="explore-button">EXPLORE EVENTS</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default EventsSummary;
