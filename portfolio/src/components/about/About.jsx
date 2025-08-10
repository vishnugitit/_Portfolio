import React from "react";
import "./about.css";
import AboutImg from "../../assets/about.jpeg";
import CV from "../../assets/J_Vishnu_resume.pdf";
import Info from "./Info";
// import CV from "../../assets/Smith-Cv.pdf"
const About = () => {
  return (
    <section className="about section" id="about">
      {/* .section__title */}
      <h2 className="section__title">About Me</h2>
      {/* .section__subtitle */}
      <span className="section__subtitle">My Introduction</span>

      <div className="about__container container grid">
        {/* About Image */}
        <img src={AboutImg} alt="" className="about__img" />

        <div className="about__data">
          <Info />
          {/* .about__description */}
          <p className="about__description">
            Frontend developer, I am passionate about creating interactive and
            beautiful user interfaces, along with the required functionalities
            on the front end.One of my favourite technologies to work with is
            React.js, particularly within the MERN stack.
            {/* I have years of experience and many clients are happy with the
            projects carried out.
            
             I am a front-end developer. I am skilled in
            Search Engine Optimization, Express.js, React.js, and JavaScript. I
            am passionate about creating interactive and beautiful user
            interfaces, along with the required functionalities on the front
            end.One of my favourite technologies to work with is React.js,
            particularly within the MERN stack. */}
          </p>
          <a download="" href={CV} className="button button--flex">
            Download CV
            {/* <svg>
                1-3-20  download CV
            </svg> */}
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
