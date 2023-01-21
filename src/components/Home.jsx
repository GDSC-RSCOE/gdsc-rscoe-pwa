import React from "react";
import "../stylesheets/Home.css";

const Home = () => {
  document.title = "GDSC RSCOE"
  return (
    <>
      <div class="home">
        <div class="left-side">
          <p class="head">Google Developer Student Clubs JSPM RSCOE</p>
          <br />
          <p class="tech-io-info">
            Google Developer Student Clubs are university based community groups
            for students interested in Google developer technologies. Students
            from all undergraduate or graduate programs with an interest in
            growing as a developer are welcome. By joining a GDSC, students grow
            their knowledge in a peer-to-peer learning environment and build
            solutions for local businesses and their community.
          </p>
          <a href="https://bit.ly/join-gdsc-rscoe">
            <button class="join">Join us</button>
          </a>
        </div>
        <div class="right-side">
          <img
            class="about-vector"
            src="./images/rscoe-vector.svg"
            alt=""
          />
        </div>
      </div>
      <h3 className="perk-head">Perks of joining GDSC</h3>
      <div>
        <div class="clg-container">
          <div class="c-container">
            <div class="c-info">
              <h3 class="head-2">Connect</h3>
              <p class="clg-para">
                Meet students interested in development technologies at your
                university. All are welcome, including those with diverse
                background and different majors.
              </p>
            </div>
            <div>
              <img class="c-img" src="./images/connections.jpg" alt="Connect" />
            </div>
          </div>

          <div class="l-container">
            <div>
              <img class="l-img" src="./images/LearnTech.png" alt="Learn" />
            </div>
            <div class="l-info">
              <h3 class="head-2">Learn</h3>
              <p class="clg-para">
                Learn about a range of technical topics and gain new skills
                through hands-on workshops, events, talks and project building
                activities - both online and in-person.
              </p>
            </div>
          </div>

          <div class="g-container">
            <div class="g-info">
              <h3 class="head-2">Grow</h3>
              <p class="clg-para">
                Apply new learnings to build great solutions for local problems.
                Advance your skills, career and network. Give back to your
                community by helping others learn.
              </p>
            </div>
            <div>
              <img class="g-img" src="./images/grow.png" alt="Grow" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;