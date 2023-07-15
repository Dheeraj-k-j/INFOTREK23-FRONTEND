import React, { useEffect, useState } from 'react'
import api from '../api';
import Title from './Title'

function EventsSummary() {

  const [events, setEvents] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/events');
        console.log(response?.data?.data?.Events);
        setEvents(response?.data?.data?.Events);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="event-wrap">
    <div className="event-div" id="anchor">
    {/* <Title titleProp={{title:"ABOUT US"}}/> */}
      <p className="body-text">
        <span className="line-separator" />
        <Title titleProp={{title:"EVENTS", classes:"scndry-clr"}}/>
        <span className='tag-line prmry-clr'>Join, Compete, and Grow: Infotrek, the Pathway to Success!</span>
        <span className="line-separator" />
      </p>
    </div>
    <div className="event-inner-div">
    </div>
  </div>
  )
}

export default EventsSummary