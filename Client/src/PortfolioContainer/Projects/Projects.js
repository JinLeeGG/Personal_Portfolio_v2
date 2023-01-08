import React from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Projects.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import IMG1 from "../../assets/Project/portfolioV1_demo.jpg";
import IMG2 from "../../assets/Project/portfolioV2_demo.jpg";
import IMG3 from "../../assets/Project/laptop-2620118_1920.jpg";

const projectsDetails = [
  {
    title: "Personal Portfolio Website v.1",
    duration: "December 2022",
    gitHubLink: "https://github.com/JinLeeGG/Personal_Portfolio-v1",
    demoLink: "https://gyujinlee.netlify.app/",
    img: IMG1,
    description:
      "A Personal Portfolio website to showcase all my details and projects at one place. (Technologies Used: React JS, Bootsrap)",
  },
  {
    title: "Personal Portfolio Website v.2",
    duration: "January 2023",
    gitHubLink: "https://github.com/JinLeeGG/Personal_Portfolio_v2",
    demoLink: "", //update it later
    img: IMG2,
    description:
      "A Personal Portfolio website to showcase all my details and projects at one place. (Technologies Used: HTML, CSS, Java)",
  },
  {
    title: "Sample project",
    duration: "January 2023",
    gitHubLink: "", //update it later
    demoLink: "", //update it later
    img: IMG3,
    description: "Sample project description",
  },
];

export default function Projects(props) {
  return (
    <div className="main-container" id={props.id || ""}>
      <ScreenHeading subHeading={"My personal Projects"} title={"Projects"} />
      <Swiper
        className="container projects__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {projectsDetails.map(
          (
            { title, duration, description, img, gitHubLink, demoLink },
            index
          ) => {
            return (
              <SwiperSlide key={index} className="projects">
                <div className="project_img">
                  <img src={img} alt="" />
                </div>
                <div className="duration">{duration}</div>
                <h5 className="title">{title}</h5>
                <small className="description">{description}</small>
                <div className="about-me-options">
                  <a href={gitHubLink}>
                    <button className="btn highlighted-btn1">
                      Go to GitHub &nbsp;
                      <i className="fa fa-github"></i>
                    </button>
                  </a>
                  <a href={demoLink}>
                    <button className="btn highlighted-btn2">
                      See Demo &nbsp;
                      <i class="fa fa-mouse-pointer" aria-hidden="true"></i>
                    </button>
                  </a>
                </div>
              </SwiperSlide>
            );
          }
        )}
      </Swiper>
    </div>
  );
}
