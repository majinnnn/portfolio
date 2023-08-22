import { Fragment, useContext, useState } from "react";
import NavContext from "../context/navContext";
import {
  ImgSideBar,
  SliderSideBar,
  VideoSideBar,
  YoutubeSideBar,
} from "./WorkSideBar";

const workData = [
  {
    img: "img/projects/project-1.jpg",
    name: "My Website",
    format: "img",
    project: "WEBSITE",
    client: "Self",
    duration: "1 WEEK",
    technologies: ["HTML", "CSS", "JAVASCRIPT", "REACT"],
    budget: "0 USD",
    github: "https://github.com/majinnnn/BachelorsCS/tree/main/DevWeb",
  },
  {
    img: "img/projects/project-2.jpg",
    name: "Artificial Intelligence - LAB",
    format: "img",
    project: "APPLICATION",
    client: "Self",
    duration: "2 WEEKS",
    technologies: ["PYTHON"],
    budget: "0 USD",
    github: "https://github.com/majinnnn/BachelorsCS/tree/main/AI%20Lab",
  },
  {
    img: "img/projects/project-3.jpg",
    name: "xPense eDiary - Mobile App",
    format: "slider",
    project: "Android Application",
    client: "Mr. Jameel",
    duration: "2 MONTHS",
    technologies: ["JAVA", "FIREBASE"],
    budget: "150 USD",
    github: "https://github.com/majinnnn/BachelorsCS/tree/main/MAD%20-%20Project/Xdiary",
    sliderImages: {
      img1 : "img/projects/slider/project-3-0.jpg",
      img2 : "img/projects/slider/project-3-1.jpg",
      img3 : "img/projects/slider/project-3-2.jpg",
      img4 : "img/projects/slider/project-3-3.jpg",
    }
  },
  {
    img: "img/projects/project-4.jpg",
    name: "ITC - WEB SITE",
    format: "slider",
    project: "WEBSITE",
    client: "Ms. Nida",
    duration: "2 WEEKS",
    technologies: ["HTML", "CSS", "JAVASCRIPT"],
    budget: "100 USD",
    github: "https://github.com/majinnnn/BachelorsCS/tree/main/itc%20project",
    sliderImages: {
      img1 : "img/projects/project-4.jpg",
      img2 : "img/projects/project-5.jpg",
      img3 : "img/projects/project-6.jpg",
    }
  },
  {
    img: "img/projects/project-5.jpg",
    name: "Lane Detection using Artificial Intelligence",
    format: "video",
    project: "Application",
    client: "Mr. Jawad",
    duration: "3 WEEKS",
    technologies: ["PYTHON"],
    budget: "50 USD",
    github: "https://github.com/majinnnn/BachelorsCS/tree/main/Lane%20Detection%20using%20Artificial%20Intelligence%20-%20DIP%20Project",
  },
  {
    img: "img/projects/project-6.jpg",
    name: "xPense eDiary - Website",
    format: "img",
    project: "WEBSITE",
    client: "Mr. Noman",
    duration: "2 MONTHS",
    technologies: ["HTML", "CSS", "JAVASCRIPT", "PHP", "XAMPP", "MYSQL"],
    budget: "150 USD",
    github: "https://github.com/majinnnn/BachelorsCS/tree/main/xpense-diary-web",
  },
  {
    img: "img/projects/project-7.jpg",
    name: "Fruit Shop",
    format: "img",
    project: "Desktop Application",
    client: "Mr. Tauqeer",
    duration: "1 WEEK",
    technologies: ["C++"],
    budget: "20 USD",
    github: "https://github.com/majinnnn/BachelorsCS/tree/main/OOP%20Project",
  },
  {
    img: "img/projects/project-8.jpg",
    name: "Cryptographic Cyphers",
    format: "img",
    project: "Scripts",
    client: "Ms. Faiqa",
    duration: "1 WEEK",
    technologies: ["C++", "PYTHON"],
    budget: "0 USD",
    github: "https://github.com/majinnnn/BachelorsCS/tree/main/Cryptography",
  },
  {
    img: "img/projects/project-9.jpg",
    name: "Railway Station Network",
    format: "img",
    project: "CISCO NETWORK",
    client: "Superior Rails",
    duration: "6 WEEKS",
    technologies: ["CISCO PACKET TRACER"],
    budget: "100 USD",
    github: "https://github.com/majinnnn/BachelorsCS/tree/main/Railway%20Station%20-%20Network",
  },
];


const Work = () => {
  const { nav, changeNav } = useContext(NavContext);
  const [active, setActive] = useState(null);
  return (
    <Fragment>
      <section id="work" className={`${nav === "work" ? "active" : ""}`}>
        <div
          className={`portfolio-container ${
            active ? "slide-out overflow-hidden" : ""
          }`}
        >
          {/* Main Heading Starts */}
          <div className="container page-title text-center">
            <h2 className="text-center">
              my <span>portfolio</span>
            </h2>
            <span className="title-head-subtitle">
              some of my coding projects. Want to see more?
              <a
                href={`#contact`}
                onClick={() => {
                  changeNav('contact');
                }}
                style={{
                  marginLeft: '5px',
                  color: '#72d626',
                }}
              >
                Contact me.
              </a>
            </span>
          </div>
          {/* Main Heading Ends */}
          <div className="portfolio-section">
            <div className="container cd-container">
              <div>
                {/* Portfolio Items Starts */}
                <ul className="row" id="portfolio-items">
                  {workData.map((work, i) => (
                    <li className="col-12 col-md-6 col-lg-4" key={i}>
                      <a
                        href="#"
                        data-type="project-1"
                        onClick={() => setActive(i + 1)}
                      >
                        <img
                          src={work.img}
                          alt="Project"
                          className="img-fluid"
                        />
                        <div>
                          <span>{work.name}</span>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
                {/* Portfolio Items Ends */}
              </div>
            </div>
          </div>
          {/* PORTFOLIO OVERLAY STARTS */}
          <div className="portfolio-overlay" onClick={() => setActive(null)} />
          {/* PORTFOLIO OVERLAY ENDS */}
        </div>
        {workData.map((work, i) => (
          <div
            key={i}
            className={`project-info-container project-1 ${
              active === i + 1 ? "slide-in" : ""
            }`}
          >
            {/* Main Content Starts */}
            <div className="project-info-main-content">
              {
                work.format == "img"
                  ? (<ImgSideBar img={work.img} />)
                  : work.format == "youtube"
                    ? (<YoutubeSideBar playing={active} />)
                    : work.format == "slider"
                      ? (<SliderSideBar sliderImages={work.sliderImages}/>)
                      : (<VideoSideBar playing={active} />)
              }
            </div>
            {/* Main Content Ends */}
            {/* Project Details Starts */}
            <div className="projects-info row">
              <div className="col-12 col-sm-6 p-none">
                <h3 className="font-weight-600 uppercase">{work.name}</h3>
                <ul className="project-details">
                  <li>
                    <i className="fa fa-file-text-o" />
                    <span className="font-weight-400 project-label">
                      {" "}
                      Project{" "}
                    </span>
                    :{" "}
                    <span className="font-weight-600 uppercase">
                      {work.project}
                    </span>
                  </li>
                  <li>
                    <i className="fa fa-user-o" />
                    <span className="font-weight-400 project-label">
                      {" "}
                      Client{" "}
                    </span>
                    :{" "}
                    <span className="font-weight-600 uppercase">
                      {work.client}
                    </span>
                  </li>
                  <li>
                    <i className="fa fa-hourglass-o" />
                    <span className="font-weight-400 project-label">
                      {" "}
                      Duration{" "}
                    </span>
                    :{" "}
                    <span className="font-weight-600 uppercase">
                      {work.duration}
                    </span>
                  </li>
                  <li>
                    <i className="fa fa-code" />{" "}
                    <span className="font-weight-400 project-label">
                      {" "}
                      Technologies
                    </span>{" "}
                    :{" "}
                    <span className="font-weight-600 uppercase">
                      {work.technologies.map((technology, i) => (
                        <Fragment key={i}>{technology + " "}</Fragment>
                      ))}
                    </span>
                  </li>
                  <li>
                    <i className="fa fa-money" />{" "}
                    <span className="font-weight-400 project-label">
                      {" "}
                      Budget
                    </span>{" "}
                    :{" "}
                    <span className="font-weight-600 uppercase">
                      {work.budget}
                    </span>
                  </li>
                </ul>
                <a href={work.github} target="_blank" className="btn">
                  <span>
                    <i className="fa fa-external-link" />
                    Github
                  </span>
                </a>
              </div>
              <div className="col-6 p-none text-right">
                <a
                  href="#"
                  className="btn btn-secondary close-project"
                  onClick={() => setActive(null)}
                >
                  <span>
                    <i className="fa fa-close" />
                    Close
                  </span>
                </a>
              </div>
            </div>
            {/* Project Details Ends */}
          </div>
        ))}
      </section>
      {active && (
        <span
          className={`back-mobile ${active ? "is-visible" : ""}`}
          onClick={() => setActive(null)}
        >
          <i className="fa fa-arrow-left" />
        </span>
      )}
    </Fragment>
  );
};
export default Work;




/*
  Arham, a name that brings to mind
  A fan of Messi, a football kind
  Following Barcelona with all his might
  His passion for the game shines bright

  Coding is where his heart truly lies
  Python, Javascript, and Java, he tries
  A student with a curious mind
  In programming, he seeks to find

  Solving problems with code, his aim
  Creating software, a passionate game
  A future filled with endless possibilities
  Arham, a name that exudes abilities

  As Messi weaves his way through the field
  Arham codes his way to a new build
  In Barcelona, he finds his football dream
  In programming, he finds his tech regime

  So here's to Arham, a name we'll remember
  A fan of Messi, a coder, a future contender
  May his passion never falter, his dreams never fade
  As he walks the path that he has made.
*/