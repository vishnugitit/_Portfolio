import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      {/* = = = = = Instagram = = = =  = */}
      <a
        href="https://www.instagram.com/jangamvishnu123/"
        className="home__social-icon"
        target="_blank"
      >
        <i class="uil uil-instagram"></i>
      </a>
      {/* = = = = = Web = = = =  = */}
      <a
        href="https://www.linkedin.com/in/vishnu-vardhan-jangam-a04550258/"
        className="home__social-icon"
        target="_blank"
      >
        {/* <i class="uil uil-dribbble"></i> */}
        <i className="fab fa-linkedin contact-icon"></i>
      </a>
      {/* = = = = = Github = = = =  = */}
      <a
        href="https://github.com/vishnugitit"
        className="home__social-icon"
        target="_blank"
      >
        <i class="uil uil-github-alt"></i>
      </a>
    </div>
  );
};

export default Social;
