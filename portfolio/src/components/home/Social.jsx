import React from "react";
import "./social.css"
const Social = () => {
  return (
    <div className="home__social">
      {/* = = = = = Instagram = = = =  = */}
      <a
        href="https://www.instagram.com/jangamvishnu123/"
        className="home__social-icon"
        target="_blank"
      >
        <i class="uil uil-instagram" id="insta_logo"></i>
      </a>
      {/* = = = = = LinkedIn = = = =  = */}
      <a
        href="https://www.linkedin.com/in/vishnu-vardhan-jangam-a04550258/"
        className="home__social-icon"
        target="_blank"
      >
        {/* <i class="uil uil-dribbble"></i> */}
        <i className="fab fa-linkedin contact-icon" id="linkedin_logo"></i>
      </a>
      {/* = = = = = Github = = = =  = */}
      <a
        href="https://github.com/vishnugitit"
        className="home__social-icon"
        target="_blank"
      >
        <i class="uil uil-github-alt" id="github_logo"></i>
      </a>
    </div>
  );
};

export default Social;
