import React from 'react'
import './holiday.css'
import './timelineView.css';
import { Timeline, sortEventList } from "@progress/kendo-react-layout";
import { events } from "../data/events";

const sortedEvents = sortEventList(events);

  

function TimelineView() {

  const onActionClick = (e) => {
    const event = e.syntheticEvent;
    event.preventDefault();
    window.open(event.target.getAttribute("href"));
  };

  return (
    
     
    
    
    <my-app>
                <span class="k-icon k-i-loading"></span>

                <div className="app-wrapper">
              <Timeline
                events={sortedEvents}
                alterMode={true}
                collapsibleEvents={true}
                onActionClick={onActionClick}
              />
    </div>
            </my-app>
              
  )
}

export default TimelineView