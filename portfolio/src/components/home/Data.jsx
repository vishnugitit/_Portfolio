import React from "react";

const Data = () => {
  return (
    <div className="home__data">
      {/* .home__name */}
      <h1 className="home__title">
        John Smith
        {/* <svg>
            send
            </svg> */}
      </h1>
      {/* .home__education */}
      <h3 className="home__subtitle">Visual Designer</h3>
      {/* .home__description */}
      <p className="home__description">
        I'm creative designer based in New York, and I'm very passionate and
        dedicated to my work.
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
