import React from 'react'
import Title from './Title'

function EventsSummary() {
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
    <div className="event-inner-div"></div>
  </div>
  )
}

export default EventsSummary