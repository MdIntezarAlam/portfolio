import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import d from "../../image/d.jpg";
import r from "../../image/r.png";
import js from "../../image/js.jpg";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import oneres from '../Services/oneres.pdf'
// import
const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>Skills</span>
        <p style={{fontSize:'18px', }}>Frontend & Backend Developer</p>
        <span style={{fontSize:'16px'}}>Html, Css, JavaScript, React Js,TypeScript, Node Js, Express Js, MongoDB Git, GitHub, </span>
        <a href={oneres} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={js}
            heading={"Other"}
            detail={"Git, GitHub, Material-Ui,Figma..."}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={r}
            heading={"Developer"}
            detail={"Html, CSS, JavaScript, Bootstrap, React Js, Typescript..."}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={d}
            heading={"UI/UX"}
            detail={"Figma, Material-Ui"}
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
