import { useContext } from "react";
import NavContext from "../context/navContext";
const About = () => {
  const { nav } = useContext(NavContext);
  return (
    <section id="about" className={`${nav === "about" ? "active" : ""}`}>
      {/* Main Heading Starts */}
      <div className="container page-title text-center">
        <h2 className="text-center">
          about <span>me</span>
        </h2>
        <span className="title-head-subtitle">
          I dedicate myself to do the best I can.
        </span>
      </div>
      {/* Main Heading Ends */}
      <div className="container infos">
        <div className="row personal-info">
          {/* Personal Infos Starts */}
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div className="image-container">
              <img
                className="img-fluid d-block"
                src="img/about.jpg"
                alt=""
              />
            </div>
            <p className="d-block d-md-none">
              {`I'm`} arham {`;)`}
            </p>
          </div>
          <div className="row col-xl-6 col-lg-6 col-md-12">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
              <ul className="list-1">
                <li>
                  <h6>
                    <span className="font-weight-600">First Name</span>
                    Muhammad
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Last Name</span>
                    Arham
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Birthdate</span>20<sup>th</sup> August,
                    2001
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Nationality</span>
                    Pakistani
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Experience</span>Aspiring
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Address</span>
                    DHA-IV, Lahore
                  </h6>
                </li>
              </ul>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
              <ul className="list-2">
                <li>
                  <h6>
                    <span className="font-weight-600">Freelance</span>
                    Available
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Languages</span>
                    English, Urdu
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Phone</span>
                    <a href="tel:+92 (341) 068-3203"
                      style={{
                        textDecoration: 'underline',
                        color: '#555555',
                      }} 
                    >
                      +92 (341) 068-3203
                    </a>
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Email</span>
                    muhammadarham.work@gmail.com
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Skype</span>
                    <s>muhammad.arham</s>
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Dribbble</span>
                    <s>arham.dribbble</s>
                  </h6>
                </li>
              </ul>
            </div>
            <div className="col-12 resume-btn-container">
              <a href="https://drive.google.com/u/0/uc?id=196eJISA9rYqX_sbrusPgPx7rjU95dDkH&export=download" 
                target="_blank"
                className="btn btn-resume">
                <span>
                  <i className="fa fa-download" />
                  download my cv
                </span>
              </a>
            </div>
          </div>
          {/* Personal Infos Ends */}
        </div>
      </div>
      {/* Download CV Starts */}
      <div className="container col-12 mx-auto text-center">
        <hr className="about-section" />
      </div>
      {/* Download CV Ends */}
      {/* Resume Starts */}
      <div className="resume-container">
        <div className="container">
          <div className="row">
            {/* Experience Starts */}
            <div className="col-xl-6 col-lg-6 col-md-6">
              <h2 className="font-weight-600 uppercase title-section">
                experience
              </h2>
              <div className="resume-items">
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        2022 - present
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        self learner
                        <span className="separator" />
                        <span className="font-weight-700">reactjs</span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                        Learned how react js works, experienced creating custom components and render them in the web,
                        with the help of my teacher, friends, and the documentation
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        2020 - 2022
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        university
                        <span className="separator" />
                        <span className="font-weight-700">Computer Scientist</span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                        Learned Programming Fundamentals, and grasped all necessary skills to excel in 
                        creating the best programs using languages like Python, C/C++, Java, JavaScript, SQL,
                        while putting my knowledge in OOP, Databases, OS, to the use.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        2018 - 2020
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        self learner
                        <span className="separator" />
                        <span className="font-weight-700">Python</span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                        After learning languages like VB, and C, in college, I started with python for real.
                        Challenged myself to learn a completely new language by teaching myself through online material,
                        while working towards a project that I set as my goal.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
              </div>
            </div>
            {/* Experience Ends */}
            {/* Education Starts */}
            <div className="col-xl-6 col-lg-6 col-md-6 skills-container">
              <h2 className="font-weight-600 uppercase title-section">
                Education
              </h2>
              <div className="resume-items">
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        2020 - present
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        Bachelor Degree
                        <span className="separator" />
                        <span className="font-weight-700">
                          Superior University
                        </span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                        After figuring out my interest in writing computer programs, I enrolled into a computer science 
                        degree in 'Superior University' to continue to learn more while being mentoured by the 
                        professionals possessing unrivaled expertises.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        2016 - 2018
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        Intermediate
                        <span className="separator" />
                        <span className="font-weight-700">
                          Superior College
                        </span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                        Found out my hidden knack for solving problems in a way that is creative and efficient, got 
                        myself enrolled into a computer science intermediate degree in college.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        2014 - 2016
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        Matric Degree
                        <span className="separator" />
                        <span className="font-weight-700">
                          The Educators
                        </span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                        Opted to go for Computer Science instead of Biology because at that age I only hated Biology and
                        knew the only way to skip it was to go with Computers.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
              </div>
            </div>
            {/* Education Ends */}
          </div>
          {/* Skills Starts */}
          <div className="row">
            {/* Skill Bar Starts */}
            <div className="col-12">
              <h2 className="font-weight-600 uppercase title-section skills-title">
                skills
              </h2>
            </div>
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">html</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={80}
                  style={{ width: "80%" }}
                />
                <span className="percent" style={{ right: "calc(20% - 21px)" }}>
                  80%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">javascript</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={75}
                  style={{ width: "75%" }}
                />
                <span className="percent" style={{ right: "calc(25% - 21px)" }}>
                  75%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">css</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={60}
                  style={{ width: "60%" }}
                />
                <span className="percent" style={{ right: "calc(40% - 21px)" }}>
                  60%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">reactjs</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={75}
                  style={{ width: "75%" }}
                />
                <span className="percent" style={{ right: "calc(25% - 21px)" }}>
                  75%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">django</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={50}
                  style={{ width: "50%" }}
                />
                <span className="percent" style={{ right: "calc(50% - 21px)" }}>
                  50%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">android studio</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={60}
                  style={{ width: "60%" }}
                />
                <span className="percent" style={{ right: "calc(40% - 21px)" }}>
                  60%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">c/c++</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={80}
                  style={{ width: "80%" }}
                />
                <span className="percent" style={{ right: "calc(20% - 21px)" }}>
                  80%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">Java</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={80}
                  style={{ width: "80%" }}
                />
                <span className="percent" style={{ right: "calc(20% - 21px)" }}>
                  80%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">python</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={85}
                  style={{ width: "85%" }}
                />
                <span className="percent" style={{ right: "calc(15% - 21px)" }}>
                  85%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
          </div>
          {/* Skills Starts */}
        </div>
        {/* Resume Ends */}
      </div>
    </section>
  );
};
export default About;
