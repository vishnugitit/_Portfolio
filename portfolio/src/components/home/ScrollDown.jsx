import React from 'react'

const ScrollDown = () => {
  return (
   <div className="home__scroll">
    {/* About */}
    <a href="#about" className="home__scroll-button button--flex">
    {/* <svg>
Scroll      46.00
    </svg> */}
    {/* .home__scroll-name */}
    <span className="home__scroll-name">Scroll Down</span>
    <i class="uil uil-arrow-down home__scroll-arrow"></i>
    </a>
   </div>
  )
}

export default ScrollDown
