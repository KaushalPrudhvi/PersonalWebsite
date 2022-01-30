import React from "react";
import "./intro.css";
import Person from "../../img/Person.png";
const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro"> Howdy, My name is </h2>
          <h1 className="i-name">Kaushal Prudhvi Raj T</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Back-end Developer</div>
              <div className="i-title-item"> UI/UX Designer</div>
              <div className="i-title-item"> Programmer</div>
              <div className="i-title-item"> Network Designer</div>
              <div className="i-title-item"> OS Developer</div>
            </div>
          </div>
          <p className="i-desc">
            I design and develop services for customers of all sizes,
            specialising in creating stylish, modern websites, web services and
            network designs
          </p>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg">
          <img src={Person} alt="" className="i-img" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
