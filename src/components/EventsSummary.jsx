import React from 'react'
import Title from './Title'

function EventsSummary() {
  return (
    <div className="event-wrap">
    <div className="event-div" id="anchor">
    {/* <Title titleProp={{title:"ABOUT US"}}/> */}
      <p className="body-text">
        <span className="line-separator" />
        <Title titleProp={{title:"WELCOME TO THE FUTURE INFOTREK"}}/>
        Tagline
        <span className="line-separator" />
      </p>
    </div>
    <div className="event-inner-div"></div>
  </div>
  )
}

export default EventsSummary