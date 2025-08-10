import React from "react";

const Data = () => {
  return (
    <div className="home__data">
      {/* .home__name */}
      <h1 className="home__title">
        Vishnu
        {/* <svg>
            send
            </svg> */}
      </h1>
      {/* .home__education */}
      <h3 className="home__subtitle">Software Developer</h3>
      {/* .home__description */}
      <p className="home__description">
       "Software is a great combination of artistry and engineering."
       {/* "Any fool can write code that a computer can understand.
        Good programmers write code that humans can understand" */}
      </p>
      <a href="#contact" className="button button--flex">
        Say Hello
            {/* <svg>
                hand  36.00
            </svg> */}
      </a>
    </div>
  );
};

export default Data;
