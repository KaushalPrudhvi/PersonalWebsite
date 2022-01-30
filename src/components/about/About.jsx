import React from "react";
import "./about.css";
const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <a
            href="https://www.linkedin.com/in/kaushal-prudhvi-raj-t-7ba89621b/"
            target="_blank"
          >
            <img
              src="https://media-exp1.licdn.com/dms/image/D4E35AQGLch8TJEGgUQ/profile-framedphoto-shrink_400_400/0/1638888081259?e=1643587200&v=beta&t=zSwbYlyYlbksZgM12eDLkP7TPSO6wmUK7H5zjmRutZM "
              alt=""
              className="a-img"
            />
          </a>
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>

        <p className="a-sub">
          A Master's student in Computer Engineering, Texas A&M University,
          College Station, United States.
        </p>

        <p className="a-desc">
          Highly Motivated and skilled Software Developer using agile
          methodologies.
        </p>
        <div className="a-award">
          {/* <img src={Family} alt="" className="a-award-img" /> */}

          <div className="a-awards-texts">
            <ul>
              My areas of interest are:
              <li>
                {" "}
                <b>Algorithm Design: </b>
                To develop software that is long lasting
              </li>
              <li>
                <b>Computational Optimization: </b> Develop code with minimum
                bugs
              </li>
              <li>
                {" "}
                <b>Software Engineering: </b> To develop easily understandable
                code
              </li>
              <li>
                {" "}
                <b>Operating System: </b> AI powered OS Development
              </li>
            </ul>
            {/* <h4 className="a-awards-title">International Design Awards 2021</h4>  */}

            {/* <p className="a-awards-desc">Won this award for great design</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
