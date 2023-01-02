import React, { useState } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

export default function Resume(props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffSetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const ResumeHeading = (props) => {
    <div className="resume-heading">
      <div className="resume-main-heading">
        <div className="heading-bullet">
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <dov className="heading-date">
              {props.fromDate + "_" + props.toDate}
            </dov>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    </div>;
  };

  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Work History", logoSrc: "interests.svg" },
  ];

  const programmingSkillsDetails = [
    { skill: "JavaScript", ratingPercentage: 85 },
    { skill: "React JS", ratingPercentage: 85 },
    { skill: "React Native", ratingPercentage: 85 },
    { skill: "Node JS", ratingPercentage: 85 },
    { skill: "HTML", ratingPercentage: 85 },
    { skill: "CSS", ratingPercentage: 85 },
    { skill: "Java", ratingPercentage: 85 },
    { skill: "Python", ratingPercentage: 85 },
    { skill: "Git", ratingPercentage: 85 },
  ];

  const projectsDetails = [
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "2022", toDate: "2022" },
      description:
        "A personal portfolio website to showcase all my details and projects at one place",
      subHeading: "Technologies Used: React JS, Bootstrap",
    },
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "2022", toDate: "2022" },
      description:
        "A personal portfolio website to showcase all my details and projects at one place",
      subHeading: "Technologies Used: React JS, Bootstrap",
    },
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "2022", toDate: "2022" },
      description:
        "A personal portfolio website to showcase all my details and projects at one place",
      subHeading: "Technologies Used: React JS, Bootstrap",
    },
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "2022", toDate: "2022" },
      description:
        "A personal portfolio website to showcase all my details and projects at one place",
      subHeading: "Technologies Used: React JS, Bootstrap",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Dickinson College"}
        subHeading={"BACHELOR OF LIBERAL ARTS"}
        fromDate={"2021"}
        toDate={""}
      />
      <ResumeHeading
        heading={"High School"}
        subHeading={"Trinity Catholic High School"}
        fromDate={"2018"}
        toDate={"2021"}
      />
    </div>,

    <div className="resume-screen-container" key="work-experience">
      <ResumeHeading
        heading={"Example work place"}
        subHeading={"Position"}
        fromDate={"2023"}
        toDate={"Present"}
      />
      <div className="experience-description">
        <span className="resume-description-text">
          Overall Work experience description
        </span>
      </div>
      <div className="experience-description">
        <span className="resume-description-text">
          bulletpoint1: work experience description
        </span>
        <br />
        <span className="resume-description-text">
          bulletpoint2: work experience description
        </span>
        <br />
        <span className="resume-description-text">
          bulletpoint3: work experience description
        </span>
      </div>
      ,
      <div
        className="resume-screen-container programming-skills-container"
        key="programming-skills"
      >
        {programmingSkillsDetails.map((skill, index) => (
          <div className="skill-parent" key={index}>
            <div className="heading-bullet"></div>
            <span>{skill.skill}</span>
            <div className="skill-percentage">
              <div
                style={{ width: skill.ratingPercentage + "%" }}
                className="active-percentge"
              ></div>
            </div>
          </div>
        ))}
      </div>
      ,
      <div className="resume-screen-container" key="projects">
        {projectsDetails.map((projectsDetails, index) => (
          <ResumeHeading
            key={index}
            heading={projectsDetails.title}
            subHeading={projectsDetails.subHeading}
            description={projectsDetails.description}
            fromDate={projectsDetails.duration.fromDate}
            toDate={projectsDetails.duration.toDate}
          />
        ))}
      </div>
      ,
      <div className="resume-screen-container" key="interests">
        <ResumeHeading
          heading="1My Interests"
          description="1Interests details"
        />
        <ResumeHeading
          heading="2My Interests"
          description="2Interests details"
        />
        <ResumeHeading
          heading="3My Interests"
          description="3Interests details"
        />
      </div>
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;
    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };
    setCarousalOffSetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`).default}
          alt="oops.. no internet connection"
        />
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div style={carousalOffsetStyle.style} className="resume-details-carusal">
        {resumeDetails.map((resumeDetails) => resumeDetails)}
      </div>
    );
  };

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
}
