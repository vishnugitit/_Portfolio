import React from "react";
import "./contact.css"
const Contact = () => {
  return (
    <section className="contact section" id="contact">
      {/* .section__subtitle | .section__title */}
      <h2 className="section__title">Get in touch</h2>
      <span className="section__subtitle">Contact Me</span>
      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Talk to me</h3>
          <div className="contact__info">
            {/* Set 1 Email*/}
            <div className="contact__card">
              <i className="bx bx-mail-send contact__card-icon"></i>
              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">vishnu.jangam117@gmail.com</span>
              <a href="mailto:vishnu.jangam117@gmail.com" className="contact__button">
                Write me
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            {/* Set 2 WhatsApp*/}

            <div className="contact__card">
              <i className="bx bxl-whatsapp contact__card-icon"></i>
              <h3 className="contact__card-title">Whatsapp</h3>
              <span className="contact__card-data">+91 79890 06946</span>
              <a href="https://api.whatsapp.com/send?phone=7989006946&text=Hello, more information!
" className="contact__button">
                Write me
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            {/* Set 3 Messenger */}

            <div className="contact__card">
              <i className="bx bxl-messenger contact__card-icon"></i>
              <h3 className="contact__card-title">LinkedIn</h3>
              <span className="contact__card-data">VISHNU VARDHAN JANGAM</span>
              <a href="https://www.linkedin.com/in/vishnu-vardhan-jangam-a04550258/" className="contact__button">
                Write me{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>


          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title">Write me your project</h3>
          <form className="contact__form">
            {/* Name */}
            <div className="contact__form-div">
            <label className="contact__form-tag">Name</label>
            <input type="text" 
            name="name" 
            className="contact__form-input"
            placeholder="Insert your name"
             />
            </div>

            {/* Email */}

                <div className="contact__form-div">
            <label className="contact__form-tag">Mail</label>
            <input type="email" 
            name="email" 
            className="contact__form-input"
            placeholder="Insert your email"
             />
            </div>

            {/*Project  Message */}

                <div className="contact__form-div contact__form-area">
            <label className="contact__form-tag">Project</label>
           <textarea 
           name="project" 
           cols="30"
           rows="10"
           placeholder="Write your Project"
           >
           </textarea>

            </div>
<button  className="button button--flex">
    Send Message
    {/* <svg>
        2-34
    </svg> */}
</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
