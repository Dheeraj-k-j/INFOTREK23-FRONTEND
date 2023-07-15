import React from 'react'
import EventCard from './EventCard';
import eventsData from "../constants/eventsData";

const Events = () => {
  return (
    <>
    <div className='events-page'>
        <h1 className='page-title'>Events</h1>
        <div className='events-card-container'>
        {
          eventsData.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
    </div>
    </>
  )
}

export default Events;