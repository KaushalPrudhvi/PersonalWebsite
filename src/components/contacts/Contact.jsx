import React, { useContext, useRef, useState } from "react";
import "./contact.css";
import phone from "../../img/phone.png";

import email from "../../img/email.png";

import address from "../../img/address.png";

import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";

const Contact = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const formRef = useRef();
  const [done, setDone] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ilqjcfq",
        "template_aflxwmq",
        formRef.current,
        "user_Q2ZPUvoP888nxHqCARKHR"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Open to opportunities</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={phone} alt="" className="c-icon" />
              +1-856-761-8348
            </div>
            <div className="c-info-item">
              <img src={email} alt="" className="c-icon" />
              kausht14@gmail.com
            </div>
            <div className="c-info-item">
              <img src={address} alt="" className="c-icon" />
              507 nagle st, Apt 103, College Station, Texas, United States -
              77840.
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>My profile meets your needs?</b> Please Get in touch. I am eager
            to work on new technologies.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Name"
              name="user_name"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Subject"
              name="user_subject"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Email"
              name="user_email"
            />
            <textarea
              rows="5"
              placeholder="Message"
              name="message"
              style={{ backgroundColor: darkMode && "#333" }}
            />
            <button> Submit</button>
            {done && "Thank you....."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
