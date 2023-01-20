import React from "react";
import team from "../utilities/team";
import { BsLinkedin, BsGithub, BsTwitter } from "react-icons/bs";
import { RxExternalLink } from "react-icons/rx";
import "../stylesheets/Team.css";

const TeamMembers = () => {
  return (
    <div className="team-members-div">
      {team.map((member) => {
        return (
          <div key={member.key} className="card">
            <div className="card-img-div">
              <img
                className="card-img"
                src={member.img}
                alt="core team member"
              />
            </div>
            <p className="card-name">{member.name}</p>
            <p className="card-domain">{member.domain}</p>
            <div className="card-social">
              {member?.social.jspm && (
                <a
                  href={member?.social.jspm}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <RxExternalLink></RxExternalLink>
                </a>
              )}
              {member?.social.linkedIn && (
                <a
                  href={member?.social.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsLinkedin fontSize={"1rem"}></BsLinkedin>
                </a>
              )}
              {member?.social.github && (
                <a
                  href={member?.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsGithub style={{fontSize: "1rem", margin: "0 0.3rem"}}></BsGithub>
                </a>
              )}
              {member?.social.twitter && (
                <a
                  href={member?.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsTwitter fontSize={"1rem"}></BsTwitter>
                </a>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TeamMembers;
