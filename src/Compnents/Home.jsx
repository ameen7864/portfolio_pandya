import React from "react";
import Header from "./Header";


const Home = () => {
  return (
    <div className="main">
      <Header />
      <div id="main">
        <section
          id="hero"
          className="d-flex flex-column justify-content-center align-items-center"
        >
          <div className="hero-container" data-aos="fade-in">
            <h1>Lovesh Pandya</h1>
            <p>
              I'm <span>DevOps Engineer</span>
            </p>
          </div>
        </section>
      </div>
 
    </div>
  );
};

export default Home;

