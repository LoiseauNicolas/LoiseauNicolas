import React from "react";
import myImage from "../img/myImage.png";

import { useState } from "react";

import { CgCPlusPlus } from 'react-icons/cg';
import { DiPython } from 'react-icons/di';
import { SiLatex } from 'react-icons/si';
import { SiPytorch } from 'react-icons/si';
import { SiTensorflow } from 'react-icons/si';
import { SiNvidia } from 'react-icons/si';
import { DiJava } from 'react-icons/di';
import { SiCmake } from 'react-icons/si';
import { DiGithubBadge } from 'react-icons/di';
import { DiReact } from 'react-icons/di';
import { DiJavascript1 } from 'react-icons/di';
import { RiEnglishInput } from 'react-icons/ri';
import { GiFrance } from 'react-icons/gi';

// import Badge from 'react-bootstrap';

function createComponent(componentName, props, children){
  var component = React.createElement(eval(componentName), props, children);
  return component;
}

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

  const secondskills = [
    { id: "english_skill", content: "English fluent", icon: RiEnglishInput },
    { id: "french_skill", content: "French native", icon: GiFrance }
  ]
  const firstskills = [
    { id: "Python_skill", content: "Python 3", icon: DiPython },
    { id: "Pytorch_skill", content: "Pytorch", icon: SiPytorch },
    { id: "Tensorflow_skill", content: "Tensorflow", icon: SiTensorflow },
    { id: "C++_skill", content: "C++", icon: CgCPlusPlus },
    { id: "CUDA_skill", content: "CUDA", icon: SiNvidia },
    { id: "Java_skill", content: "Java", icon: DiJava },
    { id: "cmake_skill", content: "CMake", icon: SiCmake },
    { id: "Git_skill", content: "Git", icon: DiGithubBadge },
    { id: "Latex_skill", content: "Latex", icon: SiLatex },
    { id: "ReactJS_skill", content: "ReactJS", icon: DiReact },
    { id: "JavaScript_skill", content: "JavaScript", icon: DiJavascript1 },
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

                  <div className="d-flex flex-column mb-5">
                    <div className="skill-mfh1 gap-2">
                      <p className="title-s text-center font-weight-bold h1 ">IT Skills</p>
                      {
                        firstskills.map(skill => { 
                          return (
                            <div className="h1 mt-20 mb-20" key={skill.id}>
                              <p className="pull-left mt-20 h3">{skill.content}
                              </p>
                              <span className="badge bg-info pull-right h3">
                                <skill.icon/>
                              </span>
                              <br></br>
                            </div>
                        );})
                      }
                    </div>
                    </div>


                    <div className="d-flex flex-column mb-5">
                    <div className="skill-mfh1 gap-2">
                      <p className="title-s text-center font-weight-bold h1 ">Others Skills</p>
                      {
                        secondskills.map(skill => { 
                          return (
                            <div className="h1 mt-20 mb-1" key={skill.id}>
                              <span className="badge bg-info pull-right">
                                <skill.icon/>
                              </span>
                              <p className="pull-left mt-1 h3">{skill.content}
                              </p>
                              <br></br>

                            </div>
                        );})
                      }
                    </div>
                  </div>

{/* 

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
                  </div> */}

                  {/* <div className="skill-mf">
                  <p className="title-s">Others Skills</p>
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
                  </div> */}

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
