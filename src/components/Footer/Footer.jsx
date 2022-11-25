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
        <div style={{ display: 'flex', flexDirection: "column", alignItems: 'center' }}>
          <span style={{color:"#000", fontSize:'19px'}}> Email:&nbsp; mdintezara35@gmail.com</span>
          <span style={{color:"#000", fontSize:'19px'}}>  Phone:&nbsp; +91 6238564088</span>

        </div>
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
