import { Fragment, useContext, useState } from "react";
import NavContext from "../context/navContext";
import BlogPopup from "./BlogPopup";
const data = [
  {
    title: "Angular v16 is here!",
    by: "Minko Gechev",
    img: "img/blog/angularv16ishere.jpg",
    tag: "Development",
    date: { date: "3", month: "may", year: "2023" },
    des: [
      "Six months ago, we reached a significant milestone in Angular’s simplicity and developer experience by graduating the standalone APIs from developer preview. Today, we’re thrilled to share that we’re continuing the Angular Momentum with the biggest release since the initial rollout of Angular; making large leaps in reactivity, server-side rendering, and tooling. All this comes with dozens of quality-of-life improvements across feature requests, with over 2,500 combined thumbs up on GitHub!",
      "Rethinking Reactivity",
      "As part of the v16 release we’re excited to share a developer preview of a brand new reactivity model for Angular which brings significant improvements to performance and developer experience.",
      " ",
    ],
    link: "https://blog.angular.io/angular-v16-is-here-4d7a28ec680d",
  },
  {
    title: "Migrating Critical Traffic",
    by: "Netflix Technology Blog",
    img: "img/blog/netflix.jpg",
    tag: "Documentary",
    date: { date: "5", month: "may", year: "2023" },
    des: [
      "Hundreds of millions of customers tune into Netflix every day, expecting an uninterrupted and immersive streaming experience. Behind the scenes, a myriad of systems and services are involved in orchestrating the product experience. These backend systems are consistently being evolved and optimized to meet and exceed customer and product expectations.",
      "When undertaking system migrations, one of the main challenges is establishing confidence and seamlessly transitioning the traffic to the upgraded architecture without adversely impacting the customer experience. This blog series will examine the tools, techniques, and strategies we have utilized to achieve this goal.",
      " ",
    ],
    link: "https://netflixtechblog.com/migrating-critical-traffic-at-scale-with-no-downtime-part-1-ba1c7a1c7835",
  },
  {
    title: "Starting New Habits",
    by: "Jay Sillings",
    img: "img/blog/newhabits.jpg",
    tag: "Lifestyle",
    date: { date: "1", month: "may", year: "2023" },
    des: [
      "Becoming a wood artist crept up on me. I’ve tinkered over the years with practical woodworking projects like fixing cabinet doors, mounting bookshelves and troubleshooting the assembly of an improperly manufactured POÄNG armchair from IKEA, though my girlfriend insisted I botched the assembly. Not true.",
      "I have always admired the POÄNG armchair on account of its stylish curved lines in bentwood, providing nice support for the neck and comfy resilience. Comfy resilience? I don’t know what that is — the last part of that sentence came from the IKEA catalog.",
      " ",
    ],
    link: "https://medium.com/sybarite/starting-a-new-hobby-what-my-research-shows-81057e10d0a",
  },
  {
    title: "How I used Midjourney",
    by: "Matty Brownwell",
    img: "img/blog/midjourney.jpg",
    tag: "Entrepreneurship",
    date: { date: "5", month: "may", year: "2023" },
    des: [
      "By now, it’s no secret that AI will considerably impact the future of branding and design—making us question how we can continue to provide irreplaceable value as designers.",
      "Some creatives like Alif Ibrahim of It’s Nice That have suggested it be used to automate mundane and repetitive tasks like resizing, exporting, or mindless pixel pushing.",
      "Others like Evelio, the creative director at IDP Direct, see it as a way to build more curated mood boards and quickly communicate brand ideas to a client.",
      "As a founder of a branding agency myself, I’ve begun a journey to discover how AI can improve upon what we create and how we create it.",
      " ",
    ],
    link: "https://uxdesign.cc/how-i-used-midjourney-to-design-a-brand-identity-394cf9ddaeed",
  },
];

const Blog = () => {
  const { nav } = useContext(NavContext);
  const [modal, setModal] = useState(false);
  const [activeData, setActiveData] = useState({});
  const onClick = (value) => {
    setModal(true);
    setActiveData(data[value]);
  };
  return (
    <Fragment>
      <BlogPopup open={modal} close={() => setModal(false)} data={activeData} />
      <section id="blog" className={`${nav === "blog" ? "active" : ""}`}>
        <div className="container page-title text-center">
          <h2 className="text-center">
            my <span>favourite</span> blogs
          </h2>
          <span className="title-head-subtitle">
            when i'm not coding, or playing music, or playing football, blogs like these are what I like to read
          </span>
        </div>
        <div className="container">
          <div className="row">
            {data.map((data, i) => (
              <div className="col-12 col-sm-6" key={i}>
                <article>
                  {/* Figure Starts */}
                  <figure className="blog-figure">
                    <a href="#" onClick={() => onClick(i)}>
                      <img className="img-fluid" src={data.img} alt="" />
                    </a>
                    <div className="post-date">
                      {" "}
                      <span>{data.date.date}</span>
                      <span>{data.date.month}</span>
                    </div>
                  </figure>
                  {/* Figure Ends */}
                  <a href="#" onClick={() => onClick(i)}>
                    <h4>{data.title}</h4>
                  </a>
                  <p style={{color:"black"}}>By: {data.by}</p>
                  {/* Excerpt Starts */}
                  <div className="blog-excerpt">
                    <p>{data.des[0].substring(0, 69)}... </p>
                    <a
                      href="#"
                      onClick={() => onClick(i)}
                      className="btn readmore"
                    >
                      <span>Read more</span>
                    </a>
                  </div>
                  {/* Excerpt Ends */}
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export default Blog;
