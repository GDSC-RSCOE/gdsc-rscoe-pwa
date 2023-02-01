import React from "react";
import "../stylesheets/Footer.css"
import { BsLinkedin, BsYoutube, BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer">
      <div className="up-foot">
        <div>
          <p>Follow us on : </p>
        </div>
        <div className="footer-icon-div">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://linkedin.com/company/gdsc-rscoe/"
          >
            <BsLinkedin
              style={{fontSize: "1.4rem", color: "#0088ff"}}
            ></BsLinkedin>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/gdsc_rscoe/?hl=en"
          >
            <AiFillInstagram
              style={{fontSize: "1.8rem", color: "#ff0071"}}
            ></AiFillInstagram>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/gdsc_rscoe"
          >
            <BsTwitter
              style={{fontSize: "1.55rem", color: "#007eff"}}
            ></BsTwitter>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.youtube.com/channel/UC1607i_UbWguPIUnNacWQtw"
          >
            <BsYoutube
              style={{fontSize: "1.75rem", color: "#ff0000"}}
            ></BsYoutube>
          </a>
        </div>
      </div>
      <br />
      <hr />

      <div className="bottom-footer">
        <div className="down-foot">
          <p style={{fontSize: "1.2rem", fontWeight: "bold"}}>Contact us</p>
          <a href="mailto:gdsc@jspmrscoe.edu.in">
            <p className="quick-links">gdsc@jspmrscoe.edu.in</p>
          </a>
        </div>

        <div className="down-foot">
          <p style={{fontSize: "1.2rem", fontWeight: "bold"}}>Resources</p>
          <a href="mailto:gdsc@jspmrscoe.edu.in">
            <p className="quick-links">Become a Sponsor</p>
          </a>
        </div>

        <div className="down-foot">
          <p style={{fontSize: "1.2rem", fontWeight: "bold", padding: "0.3rem"}}>
            Developer Consoles
          </p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://console.cloud.google.com/projectselector2/apis/dashboard?supportedpurview=project"
          >
            <p className="quick-links">Google API Console</p>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://console.firebase.google.com/u/0/"
          >
            <p className="quick-links">Firebase Console</p>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://console.cloud.google.com/getting-started"
          >
            <p className="quick-links">Google Cloud Platform Console</p>
          </a>
        </div>

        <div className="down-foot">
          <p className="quick-links">&copy; 2022 All Rights Reserved</p>
          <p className="quick-links">&nbsp; GDSC RSCOE</p>
        </div>
      </div>
      <div className="foot-logo-div">
        <img className="foot-logo" src="./images/gdsc main.png" alt="..." />
      </div>

      <p className="credit">
        Designed & Developed with ❤️ by GDSC RSCOE{" "}
        <a href="webteam.html">
          <span>Web Team</span>
        </a>
      </p>
    </div>
  );
};

export default Footer;
