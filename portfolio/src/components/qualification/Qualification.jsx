import React, { useState } from "react";
import "./qualification.css";
const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="qualification section">
      {/* .section__title | .section__subtitle */}
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        {/* .tabs__button */}
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={()=>toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={()=>toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>
        {/* Part -1  */}
        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            {/* SET 1 */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">M. Tech</h3>
                <span className="qualification__subtitle">
                  xyz - Institute
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2026 - Present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            {/* SET - 2 */}
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">B .Tech</h3>
                <span className="qualification__subtitle">
                  JNTUA - Institute
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2020 - 2024
                </div>
              </div>
            </div>

            {/* SET 3 */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Intermediate</h3>
                <span className="qualification__subtitle">
                  Sree Chaitanaya - Institute
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2018 - 2020
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            {/* SET - 4 */}
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">SSC</h3>
                <span className="qualification__subtitle">
                  Ravindra Bharathi -School
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2017-2018
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Part -2 */}
        <div className="qualification__sections">
        <div
          className={
            toggleState === 2
              ? "qualification__content qualification__content-active"
              : "qualification__content"
          }
        >
          {/* SET 1 */}
          <div className="qualification__data">
            <div>
              <h3 className="qualification__title">Data Scientist</h3>
              <span className="qualification__subtitle">xyz - location</span>
              <div className="qualification__calendar">
                <i className="uil uil-calendar-alt"></i>2030 - Present
              </div>
            </div>
            <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>
          </div>
          {/* SET - 2 */}
          <div className="qualification__data">
            <div></div>
            <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>
            <div>
              <h3 className="qualification__title">Data Analyst</h3>
              <span className="qualification__subtitle">xyz - location</span>
              <div className="qualification__calendar">
                <i className="uil uil-calendar-alt"></i>2028 - 2030
              </div>
            </div>
          </div>

          {/* SET 3 */}
          <div className="qualification__data">
            <div>
              <h3 className="qualification__title">Web Developer</h3>
              <span className="qualification__subtitle">xyz - location</span>
              <div className="qualification__calendar">
                <i className="uil uil-calendar-alt"></i>2026 - 2028
              </div>
            </div>
            <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>
          </div>
          {/* SET - 4 */}
          <div className="qualification__data">
            <div></div>
            <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>
            <div>
              <h3 className="qualification__title">QA Engineer</h3>
              <span className="qualification__subtitle">xyz - location</span>
              <div className="qualification__calendar">
                <i className="uil uil-calendar-alt"></i>2025 - 2026
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
