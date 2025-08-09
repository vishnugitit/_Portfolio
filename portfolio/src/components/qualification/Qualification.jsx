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
                <h3 className="qualification__title">Web design</h3>
                <span className="qualification__subtitle">
                  Spain - Institute
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2021 - Present
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
                <h3 className="qualification__title">Art Director</h3>
                <span className="qualification__subtitle">
                  Spain - Institute
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2020 - 2021
                </div>
              </div>
            </div>

            {/* SET 3 */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Development</h3>
                <span className="qualification__subtitle">
                  Spain - Institute
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
                <h3 className="qualification__title">UX Expert</h3>
                <span className="qualification__subtitle">
                  Spain - Institute
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2017 - 2018
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
              <h3 className="qualification__title">Product Designer</h3>
              <span className="qualification__subtitle">Microsoft - Spain</span>
              <div className="qualification__calendar">
                <i className="uil uil-calendar-alt"></i>2021 - Present
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
              <h3 className="qualification__title">UX Designer</h3>
              <span className="qualification__subtitle">Apple Inc - Spain</span>
              <div className="qualification__calendar">
                <i className="uil uil-calendar-alt"></i>2020 - 2021
              </div>
            </div>
          </div>

          {/* SET 3 */}
          <div className="qualification__data">
            <div>
              <h3 className="qualification__title">Web Designer</h3>
              <span className="qualification__subtitle">Figma - Spain</span>
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
              <h3 className="qualification__title">App Developer</h3>
              <span className="qualification__subtitle">Adobe - Spain</span>
              <div className="qualification__calendar">
                <i className="uil uil-calendar-alt"></i>2017 - 2018
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
