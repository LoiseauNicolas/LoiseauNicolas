import React from "react";
import "./stars.scss";
import Typed from "react-typed";

import CV_Nicolas_EN from "../data/CV_Nicolas_EN.pdf"

const Intro = () => {
  return (
      // <div id="home" className="intro route bg-image " style={{backgroundImage: "url("+bigImage+")"}}>
      <div id="home" className="intro route bg-image background">
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />

        <div className="intro-content display-table">
          <div className="table-cell">
            <div className="container">
              <h1 className="intro-title mb-4">Hello, I am Nicolas Loiseau</h1>
              <p className="intro-subtitle">
                <span className="text-slider-items"></span>
                <strong className="text-slider">
                  <Typed
                    strings={[
                      "French PhD Student in 3D Medical Images and AI",
                      "Keypoint detection and description",
                      "Python / C++ / CUDA-CPU"
                    ]}
                    typeSpeed={80}
                    backDelay={1100}
                    backSpeed={30}
                    loop
                  />
                </strong>
              </p>
              <p className="pt-3">
                <a
                  className="btn btn-primary btn js-scroll px-4"
                  href="#work"
                  role="button"
                >
                  View My Work
                </a>
              </p>
              <p className="pt-3">
                <a
                  className="btn btn-primary btn js-scroll px-4"
                  href={CV_Nicolas_EN}
                  role="button"
                  download
                >
                  Download my CV
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Intro;
