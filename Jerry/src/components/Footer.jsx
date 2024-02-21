import React from "react";

const Footer = () => {
  return (
    <footer id="footer" className="section bg-dark text-white">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 text-center text-lg-start wow fadeInUp">
            <p className="mb-2 mb-lg-0">
              Copyright © 2024{" "}
              <a className="fw-600" href="/">
             Jerry Bony
              </a>
              . All Rights Reserved.
            </p>
          </div>
          <div className="col-lg-6 wow fadeInUp">
            <p className="mb-0 text-center text-lg-end">
              Designed by{" "}
              <a target="_blank" className="fw-600" rel="noopener noreferrer" href="https://www.linkedin.com/in/jerry-bony/">
                Jerry Bony
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
