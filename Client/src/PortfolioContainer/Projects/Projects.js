import React from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Projects.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import IMG1 from "../../assets/Project/code-1076536_1920.jpg";
import IMG2 from "../../assets/Project/coding-924920_1920.jpg";
import IMG3 from "../../assets/Project/laptop-2620118_1920.jpg";

const projectsDetails = [
  {
    title: "Personal Portfolio Website",
    duration: { fromDate: "2022", toDate: "2023" },
    link: "https://github.com/JinLeeGG/Personal_Portfolio-v1",
    img: IMG1,
    description:
      "A Personal Portfolio website to showcase all my details and projects at one place.",
    subHeading: "Technologies Used: React JS, Bootsrap",
  },
  {
    title: "Mobile E-shop ",
    duration: { fromDate: "2020", toDate: "2021" },
    link: "https://github.com/JinLeeGG/Personal_Portfolio_v2",
    img: IMG2,
    description:
      "An ecommerce application designed to sell products online wth payment system integration",
    subHeading:
      "Technologies Used:  React Native, Mongo DB, Express Js, Node Js, Redux.",
  },
  {
    title: "Ecommerce Website ",
    duration: { fromDate: "2020", toDate: "2021" },
    img: IMG3,
    description:
      "Online ecommerce website for showcasing and selling products onlne with payment system integration, both Paypal and Stripe",
    subHeading:
      "Technologies Used: Mongo DB, Epress Js, React Js, Node JS, Redux, Bootstrap.",
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
          ({ title, duration, description, subHeading, img, link }, index) => {
            return (
              <SwiperSlide key={index} className="projects">
                <div className="project_img">
                  <img src={img} alt="" />
                </div>
                <h5 className="title">{title}</h5>
                <small className="description">{description}</small>
                <a href={link}>
                  <button className="btn highlighted-btn">Go to GitHub</button>
                </a>
              </SwiperSlide>
            );
          }
        )}
      </Swiper>
    </div>
  );
}
