import React, { useEffect, useState } from 'react'
import EventCard from './EventCard';
import ShimmerCard from './ShimmerCard';
import api from "../api"

const Events = ({authProp}) => {
  const [eventsData, setEventsData] = useState([]);

  useEffect(()=>{
    const fetchEvent = async () => {
      try {
        const response = await api.get(
          "/events",
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const events = response?.data?.data?.Events;
        setEventsData(events);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchEvent();
  },[])

  if(eventsData.length==0){
    return (
      <>
      <div className='events-page'>
          <h1 className='page-title'>Events</h1>
          <div className='events-card-container'>
          <ShimmerCard/>
          <ShimmerCard/>
          <ShimmerCard/>
          <ShimmerCard/>
          <ShimmerCard/>
          <ShimmerCard/>
          <ShimmerCard/>
          </div>
      </div>
      </>
    )
  } else {
    return (
      <>
      <div className='events-page'>
          <h1 className='page-title'>Events</h1>
          <div className='events-card-container'>
          {
            eventsData.map((event) => (
              <EventCard key={event._id} eventProp={{authProp:authProp, event:event}} />
            ))}
          </div>
      </div>
      </>
    )
  }
}

export default Events;