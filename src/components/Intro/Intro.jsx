import React, { useContext } from "react";
import "./Intro.css";
import mer1 from "../../image/mer1.png";
import re2 from "../../image/re2.webp";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import { Link } from "react-scroll";
import a from "../../image/a.jpeg";

const Intro = () => {
  const transition = { duration: 2, type: "spring" };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "black" : "" }}>Hii I Am</span>
          <span>Md Intezar Alam</span>
          <span>
            Frontend development using modern technology such as React. I follow the best folder structure so that code will be more re-usable, scalable and flexibile. I mainly focus on code quality and performance. Redux or redux toolkit, localstorage and cookies are used for the state management. Html,Css, JavaScript, React Js, Git, GitHub, Node Js, Express Js & MongoDB
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>
        {/* social icons */}
        <div className="i-icons">
          <a href="https://github.com/MdIntezarAlam">
            <img src={Github} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/md-intezar-alam-92814b226/">
            <img src={LinkedIn} alt="" />
          </a>
          <a href="https://www.instagram.com/mdintezar123/">
            <img src={Instagram} alt="" />
          </a>
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={mer1} alt="" className="my_img" />
        <img src={re2} alt="" className="my_img" />
        <img src={a} alt="" className="my_img" />
      </div>
    </div>
  );
};

export default Intro;
