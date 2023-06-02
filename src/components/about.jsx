import React from "react";
import myImage from "../img/myImage.png";

import { useState } from "react";

const About = () => {

  const skills= [
    {
      id: "Python_skill",
      content: "Python 3",
      porcentage: "95%",
      value: "95"
    },
    {
      id: "Pytorch_skill",
      content: "Pytorch",
      porcentage: "95%",
      value: "95"
    },
    {
      id: "Tensorflow_skill",
      content: "Tensorflow",
      porcentage: "60%",
      value: "60"
    },
    {
      id: "C++_skill",
      content: "C++",
      porcentage: "85%",
      value: "85"
    },
    { id: "CUDA_skill", content: "CUDA", porcentage: "60%", value: "60" },
    {
      id: "Java_skill",
      content: "Java",
      porcentage: "85%",
      value: "85"
    },
    { id: "CMAKEGITLATEX_skill", content: "CMake, Git, Latex", porcentage: "90%", value: "90" },
    {
      id: "ReactJS_skill",
      content: "ReactJS / JavaScript / CSS3",
      porcentage: "70%",
      value: "70"
    }
  ]
  const othersskills = [
    {
      id: "French_skill",
      content: "French",
      porcentage: "100%",
      value: "100"
    },
    {
      id: "English_skill",
      content: "English",
      porcentage: "70%",
      value: "70"
    },
  ]

  const about_me = [
    {
      id: "first-p-about",
      content:
        "I'm a French PhD Student working on AI and 3D Medical images."
    },
    {
      id: "second-p-about",
      content:
        "Ph.D. student in Computer Science working A.I. and more specifically Deep Learning. The goal of the thesis is the extraction and description of keypoints in medical 3D CT-Scan images. The final aim is to register efficiently more than 10000 3D images. The tests are performed on the HPC machine of the CNRS, using GPUs."
    },
    {
      id: "third-p-about",
      content:
        "Hospitals are increasingly generating 3D medical images that require automatic registration for systematic and large-scale analysis. Key points are used to reduce the time and memory required for this registration, and can be detected and described using various classical methods, as well as neural networks, as demonstrated numerous times in 2D. This thesis presents results and discussions on methods for detecting and describing key points using 3D neural networks. Two types of networks were studied to detect and/or describe characteristic points in 3D medical images. The first networks studied describe the areas directly surrounding key points, while the second type performs both detection and description of key points in a single step."
    }
  ]

  return (
    <section id="about" className="about-mf sect-pt4 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="box-shadow-full">
              <div className="row">
                <div className="col-md-6">
                  <div className="row">
                    <div
                      className="col-sm-6 col-md-5"
                      style={{ margin: "0 auto" }}
                    >
                      <div
                        className="about-img"
                        style={{ textAlign: "center" }}
                      >
                        <img
                          className="img-fluid rounded b-shadow-a"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="skill-mf">
                    <p className="title-s">Skills</p>
                    {skills.map(skill => { 
                      return (
                        <React.Fragment key={skill.id}>
                          <span>{skill.content}</span>{" "}
                          <span className="pull-right">
                            {skill.porcentage}
                          </span>
                          <div className="progress">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{ width: skill.porcentage }}
                              aria-valuenow={skill.value}
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </React.Fragment>
                      );
                    })}
                  </div>
                  <div className="skill-mf">
                  <p className="title-s">Others Skills</p>
                    {/* <p className="title-s">Skill</p> */}
                    {othersskills.map(othersskills => { 
                      return (
                        <React.Fragment key={othersskills.id}>
                          <span>{othersskills.content}</span>{" "}
                          <span className="pull-right">
                            {othersskills.porcentage}
                          </span>
                          <div className="progress">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{ width: othersskills.porcentage }}
                              aria-valuenow={othersskills.value}
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </React.Fragment>
                      );
                    })}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="about-me pt-4 pt-md-0">
                    <div className="title-box-2">
                      <h5 className="title-left">About Me</h5>
                    </div>
                    {about_me.map(content => {
                      return (
                        <p className="lead text-justify" key={content.id}>
                          {content.content}
                        </p>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="d-flex">
                <p className="text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac malesuada eros, ut rutrum lacus. Curabitur commodo feugiat tortor non varius. Aliquam mattis scelerisque tristique. Cras consequat luctus blandit. In hac habitasse platea dictumst. Nam non massa et urna mollis finibus. Proin nec dapibus est. Donec scelerisque mauris et gravida consequat. Proin tincidunt lorem et arcu hendrerit elementum. Suspendisse rutrum volutpat felis, a consequat arcu pulvinar ac. Proin in pretium quam. Donec hendrerit id sapien non tincidunt. Vivamus sit amet rhoncus diam. Nunc urna diam, volutpat vel consequat non, rutrum id eros. Sed eget convallis felis, vel iaculis arcu.

                  Etiam eget nulla lectus. Donec diam nunc, rhoncus nec justo a, condimentum tempor mauris. Integer id magna nisi. Aenean hendrerit dapibus malesuada. Integer auctor, nunc egestas hendrerit egestas, tellus elit venenatis dui, vitae tristique est risus vitae urna. Morbi venenatis dictum condimentum. Praesent ultrices libero vel dapibus imperdiet. Morbi ipsum magna, tempor vitae fermentum vitae, posuere a mauris.

                  Sed condimentum dui et gravida venenatis. Nullam id dui feugiat, lobortis massa eget, hendrerit tortor. Nullam lectus diam, ultrices et odio eget, varius dictum risus. Vestibulum aliquet ante eu erat ornare, non vulputate risus venenatis. Suspendisse commodo nec enim ut ullamcorper. Phasellus non est nec mauris laoreet tristique. Mauris ac tellus vel massa sodales facilisis et eu lacus. Vestibulum sem turpis, hendrerit at felis at, molestie placerat orci. Nam aliquam iaculis felis, et imperdiet mi laoreet vel. Donec viverra varius auctor. Aenean consequat ornare erat, vel auctor dui sollicitudin eu. Ut quis laoreet massa. Maecenas accumsan sodales blandit.
                </p>
              </div>


            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
