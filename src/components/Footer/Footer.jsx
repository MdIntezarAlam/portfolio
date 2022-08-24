import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import LinkedIn from "../../img/linkedin.png";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>mdintezara35@gmail.com</span>
        <div className="f-icons">
          <a href="https://www.instagram.com/mdintezar123/">
            <Insta color="white" size={"3rem"} />
          </a>
          <a href="https://www.instagram.com/mdintezar123/">
          <Facebook color="white" size={"3rem"} />
          </a>
          <a href="https://github.com/MdIntezarAlam">
          <Gitub color="white" size={"3rem"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
