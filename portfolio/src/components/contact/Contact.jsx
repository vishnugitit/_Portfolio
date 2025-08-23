import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
const Contact = () => {
  const form = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
  });

  // Track input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_f9f6ffx", "template_2t6pr9l", form.current, {
      publicKey: "oQjjRjplihvV0zZOA",
    });
    e.target.reset();

    // Show Alert if all fields are filled

    const { name, email, project } = formData;
    if (name.trim() && email.trim() && project.trim()) {
      alert("Data Saved");
    }
    //  if empty no alerts
  };

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
              <i className="bx bx-mail-send contact__card-icon" id="email"></i>
              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">
                vishnu.jangam117@gmail.com
              </span>
              <a
                href="mailto:vishnu.jangam117@gmail.com"
                className="contact__button"
              >
                <button>Write me
                <i className="bx bx-right-arrow-alt contact__button-icon"></i></button>
              </a>
            </div>

            {/* Set 2 WhatsApp*/}

            <div className="contact__card">
              <i
                className="bx bxl-whatsapp contact__card-icon"
                id="whatsapp"
              ></i>
              <h3 className="contact__card-title">Whatsapp</h3>
              <span className="contact__card-data">+91 79890 06946</span>
              <a
                href="https://api.whatsapp.com/send?phone=7989006946&text=Hello, more information!
"
                className="contact__button"
              >
                <button>Write me
                <i className="bx bx-right-arrow-alt contact__button-icon"></i></button>
              </a>
            </div>

            {/* Set 3 LinkedIn */}

            <div className="contact__card">
              {/* <i className="bx bxl-messenger contact__card-icon"></i> */}

              {/* <i class="fab fa-linkedin contact-icon"></i> */}
              <i className="fab fa-linkedin contact-icon" id="linkedin"></i>
              <h3 className="contact__card-title">LinkedIn</h3>
              <span className="contact__card-data">VISHNU VARDHAN JANGAM</span>
              <a
                href="https://www.linkedin.com/in/vishnu-vardhan-jangam-a04550258/"
                className="contact__button"
              >
                <button>Write me{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i></button>
              </a>
            </div>
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title">Write me your project</h3>
          <form ref={form} onSubmit={sendEmail} className="contact__form">
            {/* Name */}
            <div className="contact__form-div">
              <label className="contact__form-tag">Name</label>
              <input
                type="text"
                name="name"
                className="contact__form-input"
                placeholder="Insert your name"
                required
                // value={formData.name}
                onChange={handleChange}
              />
            </div>

            {/* Email */}

            <div className="contact__form-div">
              <label className="contact__form-tag">Mail</label>
              <input
                type="email"
                name="email"
                className="contact__form-input"
                placeholder="Insert your email"
                required
                //  value={formData.email}
                onChange={handleChange}
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
                required
                // value={formData.project}
                onChange={handleChange}
              ></textarea>
            </div>

            <button className="button button--flex">
              Send Message
              {/* {alert("Message Sent")} */}
              {/* <svg>
        2-34
    </svg> */}
              <svg
                width="30px"
                height="30px"
                viewBox="0 0 24 24"
                fill="none"
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
                  ></path>{" "}
                </g>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
