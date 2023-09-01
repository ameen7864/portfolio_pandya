import React from "react";
import Header from "./Header";
import resume from "../assests/Lovesh-Resume.pdf"

const Resume = () => {
  return (
    <div id="main">
      <Header />
      <section id="resume" className="resume">
        <div className="container">
          <div className="section-title">
            <div className="d-flex justify-content-between">
              <h2>Resume</h2>
              <a href={resume} download>
                <button type="button" className="btn btn-success">
                  Download
                </button>
              </a>
            </div>
            <p>
              Committed and driven, I consistently bring a strong work ethic to
              every task. Recognized for my determination and dedication, I
              thrive on challenges and am passionate about delivering results
              through persistent effort.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-6" data-aos="fade-up">
              <h3 className="resume-title">Summary</h3>
              <div className="resume-item pb-0">
                <h4>Lovesh Pandya</h4>
                <p>
                  <em>
                    Innovative and deadline-driven DevOps Engineer with 2+ years
                    of experience developing from initial concept to final,
                    polished deliverable.
                  </em>
                </p>
                <ul>
                  <li>Ahmedabad, India</li>
                  <li>+917014425755</li>
                  <li>lovesh.pandya@gmail.com</li>
                </ul>
              </div>
              <h3 className="resume-title">Education</h3>
              <div className="resume-item">
                <h4>BCA-Bachelors in Computer Application</h4>
                <h5>2016-2018</h5>
                <p>
                  <em>PSP PG College Partapur</em>
                </p>
                <p>
                  BCA graduate with a solid foundation in computer applications,
                  seeking to apply technical skills to real-world challenges."
                </p>
              </div>{" "}
              <div className="resume-item">
                <h4>Higher Secondary Education</h4>
                <h5>2014-2015 </h5>
                <p>
                  <em>Pioneer Sr. Sec. School Garhi</em>resume
                </p>
              </div>
              <h3 className="resume-title">CERTIFICATES</h3>
              <div className="resume-item">
                <h5>03/2021 - 05/2021</h5>
                <p>
                  <em>AWS Solution Architect</em>
                </p>
                <p>
                  Learned About EC2, IAM, EBS, EFS, 53, GLACIER, VPC, ROUTES3,
                  SNS, CLOUDWATCH, RDS, AUTOSCALING, ELB, CLOUDFRONT
                </p>
              </div>
              <div className="resume-item">
                <h5>03/2021 - 05/2021</h5>
                <p>
                  <em>Devops Engineer</em>
                </p>
                <p>
                  Learned About GIT, GITHUB, Jenkins, Maven, Ansible, Docker,
                  Docker Hub
                </p>
              </div>
              <h3 className="resume-title">Company </h3>
              <div className="resume-item">
                <h4>CEO</h4>
                <h5>04/2020 - 03/2021</h5>
                <p>
                  <em>Wagadmart.in</em>
                </p>
                <ul>
                  <li>Launch New Startup</li>
                  <li>Develop and Manage Website</li>
                  <li>Learn Business Skill</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
              <h3 className="resume-title">Professional Experience</h3>
              <div className="resume-item">
                <h4>DevOps Engineer</h4>
                <h5>01/2023 - Present</h5>
                <p>
                  <em>Hamilton Web Services </em>
                </p>
                <ul>
                  <li>
                    Led a high-performing DevOps team, overseeing their work,
                    providing guidance, and fostering a collaborative and
                    productive team environment.
                  </li>
                  <li>
                    Facilitated effective collaboration and communication
                    between development, operations, and other cross-functional
                    teams, ensuring seamless coordination and alignment of goals
                  </li>
                  <li>
                    Implemented and optimized CI/CD pipelines, driving a culture
                    of continuous integration, automated testing, and efficient
                    software deployment.
                  </li>
                  <li>
                    Managed and automated infrastructure provisioning and
                    configuration management processes, leveraging
                    infrastructure as code (1aC) principles for scalability and
                    consistency.
                  </li>
                </ul>
              </div>
              <div className="resume-item">
                <h4>Technical Support Engineer</h4>
                <h5>09/2022 - 01/2023</h5>
                <p>
                  <em>Biomax Security</em>
                </p>
                <ul>
                  <li>
                    Diagnose and troubleshoot technical issues, including
                    account setup and network configuration
                  </li>
                  <li>
                    Ask customers targeted questions to quickly understand the
                    root of the problem
                  </li>
                  <li>
                    Track computer system issues through to resolution, within
                    agreed time limits
                  </li>
                  <li>
                    Talk clients through a series of actions, either via phone,
                    email or chat, until they've solved a technical issue
                  </li>
                </ul>
              </div>
              <h3 className="resume-title">Freelancer</h3>
              <div className="resume-item">
                <h4>AWS DevOps Engineer</h4>
                <h5>04/2021 - 09/2022</h5>
                <p>
                  <em>Fiverr.com</em>
                </p>
                <ul>
                  <li>Setup Website on EC2 / lightsail</li>
                  <li>Setup Email Forwarding Using SES, $3, SNS and Lambda</li>
                  <li>Setup Website on EC2 / lightsail</li>
                  <li>Setup Autoscaling Servers</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resume;
