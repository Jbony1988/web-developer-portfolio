import React from "react";
import { Link } from "react-scroll";
import Typewriter from "typewriter-effect";
import { scrollDuration } from "../../../config/commonConfig";
import profileapaic from "../../../images/pic-two.jpeg";

const FullScreenDefaultIntro = () => {
  return (
    <section
      id="home"
      className="bg-primary d-flex fullscreen position-relative py-5"
    >
      <div className="container my-auto py-4">
        <div className="row">
          <div className="col-lg-7 text-center text-lg-start align-self-center order-1 order-lg-0 wow fadeIn">
            <h1 className="text-12 fw-300 mb-0 text-uppercase">
              Hi, I'm a Web Developer
            </h1>
            <h2 className="text-21 fw-600 text-uppercase mb-0 ms-n1">
              <Typewriter
                options={{
                  strings: ["Developer", "Instructor", "Freelancer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h2>
            <p className="text-5">based in Chicago, USA.</p>
            <Link
              className="btn btn-dark rounded-0 smooth-scroll mt-3"
              smooth="easeInOutQuint"
              duration={scrollDuration}
              style={{ cursor: "pointer" }}
              to="portfolio"
            >
              View My Works
            </Link>
            <Link
              className="btn btn-link text-dark smooth-scroll mt-3"
              smooth="easeInOutQuint"
              duration={scrollDuration}
              style={{ cursor: "pointer" }}
              to="contact"
            >
              Contact Me
              <span className="text-4 ms-2">
                <i className="far fa-arrow-alt-circle-down" />
              </span>
            </Link>
          </div>
          <div className="col-lg-5 text-center align-self-center mb-4 mb-lg-0 order-0 order-lg-1">
          <div class="blob"></div>
            {/* <div className=" blob bg-light rounded-pill d-inline-block p-3 shadow-lg wow zoomIn">
              <img
                className="img-fluid rounded-pill d-block"
                src={profileapaic}
                title="I'm Callum"
                alt="I'm David"
              />
            </div> */}
            {/* <div className=" blob  d-inline-block p-3 shadow-lg wow zoomIn">
              <img
                className="img-fluid rounded-pill d-block"
                src={profileapaic}
                title="I'm Callum"
                alt="I'm David"
              />
            </div> */}
          </div>
        </div>
      </div>
      <Link
        className="scroll-down-arrow text-dark smooth-scroll"
        smooth="easeInOutQuint"
        duration={scrollDuration}
        style={{ cursor: "pointer" }}
        to="about"
      >
        <span className="animated">
          <i className="fas fa-arrow-down" />
        </span>
      </Link>
    </section>
  );
};

export default FullScreenDefaultIntro;
