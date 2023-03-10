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

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
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
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Achievements", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: "Python", ratingPercentage: 85 },
    { skill: "Java", ratingPercentage: 80 },
    { skill: "JavaScript", ratingPercentage: 85 },
    { skill: "Docker", ratingPercentage: 85 },
    { skill: "C++", ratingPercentage: 50 },
    { skill: "C", ratingPercentage: 50 },
    { skill: "Git", ratingPercentage: 89 },
    { skill: "Linux", ratingPercentage: 80 },
    { skill: "HTML", ratingPercentage: 85 },
    { skill: "CSS", ratingPercentage: 85 },
    { skill: "GitHub", ratingPercentage: 90 },
    { skill: "React JS", ratingPercentage: 70 },
    { skill: "React Native", ratingPercentage: 85 },
  ];

  const projectsDetails = [
    {
      title: "Math and CS Club",
      duration: { fromDate: "2022", toDate: "Present" },
      description:
        "Managing the club's communications, including sending out announcements, newsletters, and other updates to members. Coordinating and scheduling club events, such as guest speakers, workshops, and social activities.",
      subHeading: "Secretary",
    },
    {
      title: "CS and Math Major's Committee",
      duration: { fromDate: "2022", toDate: "Present" },
      description:
        "Participated in the CS and Math Department's major's Committee, helping to update and modernize the curriculum to better prepare students for the workforce. Contributed to the development of new course offerings and assisted in the review of professor's work and resources.",
      subHeading: "Member",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Dickinson College"}
        subHeading={"Majoring in Computer Science and Mathematics"}
        fromDate={"2022"}
        toDate={"Present"}
      />

      <ResumeHeading
        heading={"Trinity Catholic High School"}
        subHeading={"Catholic High School in Hutchinson, Kansas"}
        fromDate={"2018"}
        toDate={"2022"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Teaching Assistant"}
          subHeading={"DICKINSON COLLEGE"}
          fromDate={"2022"}
          toDate={"Present"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Provided additional support and instruction to over 30 students in
            Calculus I course during the Math helproom sessions. Assisting the
            professor in grading assignments and lab.
          </span>
        </div>
      </div>
      <div className="experience-container">
        <ResumeHeading
          heading={"Resident Advisor"}
          subHeading={"DICKINSON COLLEGE"}
          fromDate={"2022"}
          toDate={"Present"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Provided support and guidance to residents, served as a resource for
            information about campus services and resources.wrote monthly
            newsletters and conducted social events for the resident.
          </span>
        </div>
      </div>
      <div className="experience-container">
        <ResumeHeading
          heading={"Full Time Clerk"}
          subHeading={"Hyosung PC Internet Cafe"}
          fromDate={"2021 May"}
          toDate={"2021 August"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Maintain accurate records of logs and inventories of the shop.
          </span>
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
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
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
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
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Teaching"
        description="Apart from being a tech enthusiast and a code writer, i also love to teach people what i know simply because i believe in sharing."
      />
      <ResumeHeading
        heading="Music"
        description="Listening to soothing music is something i can never compromise with, skimming through Spotify's pop songs charts is at times the best stress reliever that i can get my hands on."
      />
      <ResumeHeading
        heading="Competitive Gaming"
        description="I like to challenge my reflexes a lot while competing in football games, pushing the rank and having interactive gaming sessions excites me the most."
      />
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
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreen = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((resumeDetails) => resumeDetails)}
      </div>
    );
  };

  return (
    <div className="resume-container screen-container" id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading
          title={"Qualification"}
          subHeading={"< My Formal Bio Details >"}
        />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>
          <div className="resume-bullet-details">{getResumeScreen()}</div>
        </div>
      </div>
    </div>
  );
}
