import React from "react";
import pastEvents from "../utilities/pastEvents";
import "../stylesheets/PastEvents.css";

const PastEvents = () => {
  document.title = "Past Events"
  return (
    <>
      <div>
        <p className="events-head">
          Past <span style={{ color: "rgb(0, 132, 255)" }}>Events</span>
        </p>
      </div>
      <div className="card-container">
        {pastEvents.map((event, index) => {
          return (
            <div key={index} className="event-card">
              <div id={event.id} className="event-card-img-div"></div>
              <p className="event-card-name">{event.name}</p>
              <p className="card-domain">{event.date}</p>
              <a href={event.anchor}>
                {" "}
                <button className="details-btn">More Details</button>
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default PastEvents;
