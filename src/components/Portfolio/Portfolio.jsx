import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { themeContext } from "../../Context";
import pr1 from "../../image/pr1.PNG";
import pr2 from "../../image/pr2.PNG";
import pr3 from "../../image/pr3.PNG";
import pr4 from "../../image/pr4.PNG";
import p6 from "../../image/p6.jpeg";
import pr8 from "../../image/pr8.PNG";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
      <span>Portfolio</span>
      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={pr8} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pr2} alt="" className="img_1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pr1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pr3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pr4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={p6} alt="" />
      </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
