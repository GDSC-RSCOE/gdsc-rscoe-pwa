import React from 'react'
import "../stylesheets/about.css"

const About = () => {
  document.title = "About us"
  return (
    <div>
        
       
        <h3 className="technologies-head">Technologies</h3>
        <div className="tech-container">
          <div>
            <div className="tech-flex-1">
              <div data-aos="fade-zoom-in" className="tech-card">
                <img className="tech-img" src="images/appDevelopment.png" alt="Avatar" style={{width: '100%'}} />
                <div className="container">
                  <h4 className="techNames"><b>Android</b></h4>
                  <div className="techDescription">
                    <p>
                      Are you interested in developing your own apps? Every year,
                      Google Developers releases updates to the Android operating
                      system, which is one of the most popular in the world. We
                      offer resources and study materials for various programming
                      languages used in Android app development to help you stay
                      up-to-date with the latest trends.
                    </p>
                  </div>
                </div>
              </div>
              <div className="tech-card">
                <img className="tech-img" src="images/webDev.png" alt="Avatar" style={{width: '100%'}} />
                <div className="container">
                  <h4 className="techNames"><b>Web</b></h4>
                  <div className="techDescription">
                    <p>
                      Web development is the art of crafting and maintaining
                      websites, utilizing the latest technologies to create a
                      seamless user experience by seamlessly integrating the
                      frontend and backend. Join us to gain access to expert
                      tutorials and hands-on coding experience, empowering you to
                      become a master of web development..
                    </p>
                  </div>
                </div>
              </div>
              <div className="tech-card">
                <img className="tech-img" src="images/AI_Ml.png" alt="Avatar" style={{width: '100%'}} />
                <div className="container">
                  <h4 className="techNames"><b>AI &amp; ML</b></h4>
                  <div className="techDescription">
                    <p>
                      Unlock the power of intelligent app development and learn how
                      to create apps that drive user engagement and retention by
                      automatically adapting and improving. Join our program and
                      master the art of providing users with seamless, fuss-free
                      experiences through the power of machine learning. Elevate
                      your AI-ML skills and set yourself apart in the
                      digital world.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="tech-flex-2">
              <div className="tech-card">
                <img className="tech-img" src="images/cloudTech.png" alt="Avatar" style={{width: '100%'}} />
                <div className="container">
                  <h4 className="techNames"><b>Cloud</b></h4>
                  <div className="techDescription">
                    <p>
                      Ever wondered where all the data for the services you use
                      daily, such as sending files, using mobile apps, streaming
                      shows, and playing video games, is stored? The answer is
                      Cloud, a vast digital space where all this data is kept. Join
                      us to unlock the power of the Cloud through our Google Cloud
                      Programs, with hands-on learning .
                    </p>
                  </div>
                </div>
              </div>
              <div className="tech-card">
                <img className="tech-img" src="images/Blockchain.png" alt="Avatar" style={{width: '100%'}} />
                <div className="container">
                  <h4 className="techNames"><b>Blockchain</b></h4>
                  <div className="techDescription">
                    <p>
                      Explore the future of secure, decentralized systems by mastering the art of blockchain
                      technology. Our program teaches you how to create decentralized applications, smart
                      contracts and more. Stay ahead of the curve in the rapidly evolving world of blockchain
                      development by gaining a thorough understanding of the underlying technology.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

         <div className="big-container-about">
          
          <div className="about-main">
            <div className="left-side">
              <p className="head">Google Developer Student Clubs JSPM RSCOE</p>
              <br />
              <p className="tech-io-info">
                Google Developer Student Clubs are university based community groups
                for students interested in Google developer technologies. Students
                from all undergraduate or graduate programs with an interest in
                growing as a developer are welcome. By joining a GDSC, students grow
                their knowledge in a peer-to-peer learning environment and build
                solutions for local businesses and their community.
              </p>
              <a href="https://bit.ly/join-gdsc-rscoe" target="_blank" rel='noreferrer'><button className="book" id="deets">Join
                  us</button></a>
            </div>
            <div className="right-side">
              <img className="about-vector" src="./images/rscoe-vector.png" alt='rscoe' />
            </div>
          </div>
        </div>
     
      </div>

  )
}

export default About