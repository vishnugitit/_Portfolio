import React from "react";
import "./about.css";
import AboutImg from "../../assets/about.jpeg";
// import CV from "../../assets/J_Vishnu_resume.pdf";
import CV from "../../assets/j.vishnu_resume.pdf";
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
            <svg
              width="34px"
              height="34px"
              viewBox="0 0 21 21"
              xmlns="http://www.w3.org/2000/svg"
              fill="var(--container-color)"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g
                  fill="none"
                  fill-rule="evenodd"
                  stroke="var(--container-color)"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  transform="translate(3 2)"
                >
                  {" "}
                  <path d="m14.5 12.5v-7l-5-5h-5c-1.1045695 0-2 .8954305-2 2v10c0 1.1045695.8954305 2 2 2h8c1.1045695 0 2-.8954305 2-2z"></path>{" "}
                  <path d="m.5 2.5v10c0 2.209139 1.790861 4 4 4h8m-3-16v3c0 1.1045695.8954305 2 2 2h3"></path>{" "}
                </g>{" "}
              </g>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
