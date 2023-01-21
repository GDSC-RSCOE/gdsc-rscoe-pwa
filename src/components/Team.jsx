import React from "react";
import TeamMembers from "./TeamMembers";

const Team = () => {
  document.title = "Our Team"
  return (
    <div>
      <div className="team-div-big">
        <div className="team-head-div">
          <p className="team-head">
            Our <span style={{ color: "rgb(255, 115, 0)" }}>Organizers</span>
          </p>
        </div>
        <div className="card-container-team">
          <TeamMembers />
        </div>
      </div>
    </div>
  );
};

export default Team;
