import React from "react";
import "./about.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import a from '../../image/a.jpeg'

const About = () => {
  const clients = [
    {
      img: a,
      review:
        "I am passionate about new technologies and always wish to know more about them by reading books & documentation and watching YouTube videos.  I am comfortable in Hindi, English and Bhojpuri Languages.",
    },
    {
      img: a,
      review:
        "Working as a Front-end Developer to obtain a responsible and challenging Frontend Developer’s position where my education and work experience will have valuable application. To take a challenging role as Front End Web Developer in a highly technical company where I could utilize my skills in Web Design, Front-end Web Development, Software,",
    },
    {
      img: a,
      review: "I am very Honest Person & positive Thinking",
    },
  ];

  return (
    <div className="t-wrapper" id="About">
      <div className="t-heading">
        <span>About Me </span>
        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default About;
