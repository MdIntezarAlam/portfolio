import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import './contact.css'

//npm emailjs package
//if error come  instal @emailjs/browser
const Contact = () => {
  const [done, setDone] = useState(false);
  //Email.js packages
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6ek1ana", // "YOUR_SERVICE_ID",
        "template_07t5f0f", // "YOUR_TEMPLATE_ID",
        form.current,
        "hN9UYN1_Vx4Blkomk" // "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      setDone(true)
  };

  return (
    <div className="contact-form" id="Contact">
      <div className="w-left">
        <div className="awesome">
          <span >Contact Me </span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            className="user"
            placeholder="Name"
          />
          <input
            type="email"
            name="user_email"
            className="user"
            placeholder="Email"
          />
          <textarea name="message" className="user" placeholder="Message"  rows="4" cols="5"/>
          <input type="submit" value="Send" className="button" />
          <span>{done && "Thanks for Contact me"} </span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
