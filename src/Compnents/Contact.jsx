import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Header from "./Header";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nzulpns",
        "template_dpcn0wd",
        form.current,
        "4B8tpzEtRgItyr99n"
      )
      .then(
        (result) => {
          alert("Thanks for contacting")
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="main" id="main">
      <Header />
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-title">
            <h2>Contact</h2>
          </div>
          <div className="row" data-aos="fade-in">
            <div className="col-lg-5 d-flex align-items-stretch">
              <div className="info">
                <div className="address">
                  <i className="bi bi-geo-alt" />
                  <h4>Location:</h4>
                  <p>Ahmedabad, India</p>
                </div>
                <div className="email">
                  <i className="bi bi-envelope" />
                  <h4>Email:</h4>
                  <p>lovesh.pandya@gmail.com</p>
                </div>
                <div className="phone">
                  <i className="bi bi-phone" />
                  <h4>Call:</h4>
                  <p>+917014425755</p>
                </div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d123.0225!2d-72.5714!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!Ahmedabad!5e0!3m2!1smk!2sbg!4v1539943755621&ll=23.0225,72.5714&z=15"
                  frameBorder={0}
                  style={{ border: 0, width: "100%", height: 290 }}
                  allowFullScreen=""
                />
              </div>
            </div>
            <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
              <form ref={form} onSubmit={sendEmail} className="php-email-form">
                <div className="row">
                  <div className="form-group col-md-6">
                    <label htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      name="user_name"
                      className="form-control rounded"
                      id="name"
                      required=""
                    />
                  </div>
                  <div className="form-group col-md-6">

                    <label htmlFor="name">Your Email</label>
                    <input
                      type="email"
                      className="form-control rounded"
                      name="user_email"
                      id="email"
                      required=""
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="name">Subject</label>
                  <input
                    type="text"
                    className="form-control rounded"
                    name="subject"
                    id="subject"
                    required=""
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="name">Message</label>
                  <textarea
                    className="form-control rounded"
                    name="message" rows={10}
                    required=""
                    defaultValue={""}
                  />
                </div>
                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message" />
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* End Contact Section */}
    </div>
  );
};

export default Contact;
