import React from "react";
import "./Footer.css";
// import Wave from "../../img/wave.png";
import ftr1 from "../../image/ftr1.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import LinkedIn from "../../img/linkedin.png";

const Footer = () => {
  return (
    <div className="footer">
      <img src={ftr1} alt="" style={{ width: "100%" }} className="ftr" />
      <div className="f-content">
        <div style={{ display: 'flex', lineHeight: '49px', letterSpacing: '2px', flexDirection: "column", alignItems: 'center' }}>
          <span style={{ color: "#fff", fontSize: '28px' }}> Email:&nbsp; mdintezara35@gmail.com</span>
          <span style={{ color: "#fff", fontSize: '28px' }}>  Phone:&nbsp; +91 6238564088</span>

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
