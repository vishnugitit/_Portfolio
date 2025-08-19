import React from "react";
import "./data.css"
const Data = () => {
  return (
    <div className="home__data">
      {/* .home__name */}
      <h1 className="home__title">
        Vishnu
       
      </h1>

      {/* .home__education */}
           
      <h3 className="home__subtitle">
        Software Developer <span> <svg

          // fill="pink"
          className="message"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="40px"
          height="40px"
          viewBox="0 0 256 249"
          enable-background="new 0 0 256 249"
          xml:space="preserve"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path d="M47.522,170.287l11.172,76.681h138.612l11.172-76.681H47.522z M128,215.249c-5.748,0-10.407-3.063-10.407-6.84 s4.659-6.84,10.407-6.84c5.748,0,10.407,3.062,10.407,6.84S133.748,215.249,128,215.249z M233.315,233.054h-26.028l10.292-70.639 H38.421l10.292,70.639H22.685c-14.848,0-24.85-15.195-18.978-28.834l36.809-85.489c7.149-16.605,23.493-27.362,41.571-27.362h14.486 l22.885,34.061l4.665-22.254l-7.809-11.807h23.491l-7.81,11.807l4.655,22.098l22.78-33.905h14.486 c18.078,0,34.422,10.757,41.571,27.362l36.808,85.489C258.165,217.858,248.164,233.054,233.315,233.054z M128,2.033 c22.496,0,40.733,18.237,40.733,40.733S150.496,83.498,128,83.498S87.267,65.261,87.267,42.765S105.504,2.033,128,2.033z"></path>{" "}
          </g>
        </svg></span>
  
        
      </h3>
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
        <svg
        className="scroll"
          width="30px"
          height="30px"
          viewBox="0 0 24 24"
          // fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M10.3009 13.6949L20.102 3.89742M10.5795 14.1355L12.8019 18.5804C13.339 19.6545 13.6075 20.1916 13.9458 20.3356C14.2394 20.4606 14.575 20.4379 14.8492 20.2747C15.1651 20.0866 15.3591 19.5183 15.7472 18.3818L19.9463 6.08434C20.2845 5.09409 20.4535 4.59896 20.3378 4.27142C20.2371 3.98648 20.013 3.76234 19.7281 3.66167C19.4005 3.54595 18.9054 3.71502 17.9151 4.05315L5.61763 8.2523C4.48114 8.64037 3.91289 8.83441 3.72478 9.15032C3.56153 9.42447 3.53891 9.76007 3.66389 10.0536C3.80791 10.3919 4.34498 10.6605 5.41912 11.1975L9.86397 13.42C10.041 13.5085 10.1295 13.5527 10.2061 13.6118C10.2742 13.6643 10.3352 13.7253 10.3876 13.7933C10.4468 13.87 10.491 13.9585 10.5795 14.1355Z"
              stroke="var(--container-color)"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              color="pink"
            ></path>{" "}
          </g>
        </svg>
      </a>
    </div>
  );
};

export default Data;
