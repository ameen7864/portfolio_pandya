import React from "react";
import Header from "./Header";

const About = () => {
  return (
    <div className="main" id="main">
      <Header />
      {/* ======= About Section ======= */}
      <section id="about" className="about">
        <div className="container">
          <div className="section-title">
            <h2>About</h2>
            <p>
              Excellent understanding of technical trends, architectures and
              highly motivated to keep myself updated with current events,
              technologies in the software industry
            </p>
          </div>
          <div className="row">
            <div className="col-lg-4" data-aos="fade-right">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8j1phplfUkt-F1EAB3ieH1liY7MD_GvOg3Q&usqp=CAU"
                className="w-100"
                alt=""
              />
            </div>
            <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
              <h3>DevOps Engineer</h3>
              <p className="fst-italic">
                We need to work closely with both development and operations
                teams, fostering effective communication and collaboration.
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>Birthday:</strong> <span>13 September, 1996</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>Website:</strong> <span>www.example.com</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>Phone:</strong> <span>+917014425755</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>City:</strong> <span>Ahmedabad, India</span>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>Age:</strong> <span>27</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>Degree:</strong> <span>BCA</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>Email:</strong>{" "}
                      <span>lovesh.pandya@gmail.com</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>Freelance:</strong> <span>Available</span>
                    </li>
                  </ul>
                </div>
              </div>
              <p>
              Experienced DevOps professional with a passion for streamlining software development and deployment lifecycles. Proficient in implementing and optimizing continuous integration and continuous deployment (CI/CD) pipelines, automation, and infrastructure as code (IaC) practices. Skilled in fostering collaboration between development and operations teams to enhance efficiency, reduce downtime, and accelerate time-to-market. Dedicated to driving innovation through agile methodologies and leveraging cutting-edge tools to ensure seamless software delivery and optimal performance.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* End About Section */}
    </div>
  );
};

export default About;
