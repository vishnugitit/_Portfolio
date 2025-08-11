import React from 'react'
import "./portfolio.css"
const Portfolio = () => {
  return (
   <section className="portfolio container section" id="portfolio">
        {/* .section__subtitle | .section__title */}

        <h2 className="section__title">Portfolio</h2>
        <span className="section__subtitle">My recent work</span>
      
        <ul className="footer__list">
          {/* .footer__link */}
             
          <li>
            <a href="#" className="footer__link">
             Projects
            </a>
          </li>

          <li>
            <a href="#" className="footer__link">
              Internships
            </a>
          </li>

          <li>
            <a href="#" className="footer__link">
              Achievements
            </a>
          </li>
        </ul>
        </section>
  )
}

export default Portfolio
