import React from "react";
import "./info.css"
const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i className="bx bx-award about__icon" id="badge"></i>
        {/* .about__title */}
        <h3 className="about__title">Experience</h3>
        {/* .about__subtitle */}
        <span className="about__subtitle">1 Years Working</span>
      </div>
      <div className="about__box">
        <i className="bx bx-briefcase-alt about__icon" id="case"></i>
         {/* .about__title */}
        <h3 className="about__title">Completed</h3>
           {/* .about__subtitle */}
        <span className="about__subtitle">5+ Projects</span>
      </div>
      <div className="about__box">
        <i className="bx bx-support about__icon" id="headphone"></i>
         {/* .about__title */}
        <h3 className="about__title">Support</h3>
           {/* .about__subtitle */}
        <span className="about__subtitle">Online 24/7</span>
      </div>
    </div>
  );
};

export default Info;
