import React from "react";
import "./about.css";
import AboutImg from "../../assets/about.jpg";
import CV from "../../assets/John-Cv.pdf";
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
            Frontend developer, I create web pages with UI / UX user interface,
            I have years of experience and many clients are happy with the
            projects carried out.
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
