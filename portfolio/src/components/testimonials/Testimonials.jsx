import React from "react";
import "./testimonials.css";
import { Data } from "./Data";
// 56;00  --52:00 swiper


const Testimonials = () => {
  return (
    <div>
      <section className="testimonial container section">
        {/* .section__subtitle | .section__title */}

        <h2 className="section__title">My clients say</h2>
        <span className="section__subtitle">Testimonial</span>
        <div className="testimonial__container">
          {Data.map(({ id, image, title, description }) => {
            return (
              <div className="testimonial__card" key={id}>
                <img src={image} alt="" className="testimonial__img" />
                <h3 className="testimonial__name">{title}</h3>
                <p className="testimonial__description">{description}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
