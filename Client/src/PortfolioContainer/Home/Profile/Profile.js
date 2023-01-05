import React from "react";
import Typical from "react-typical";
import "./Profile.css";
import ScrollService from "../../../utilities/ScrollService";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.facebook.com/profile.php?id=100015853840100">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="https://www.instagram.com/gyujin_lee.js/">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/gyujin-lee-9aa707241/">
                <i className="fa fa-linkedin"></i>
              </a>
              <a href="https://github.com/JinLeeGG">
                <i className="fa fa-github"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hi There! I'M <span className="highlighted-text">GyuJin</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Front-end Developer 🖥️",
                    1500,
                    "Back-end Developer 🖱️",
                    1500,
                    "Software Engineer 🧑🏻‍💻",
                    1500,
                    "Cross Platform Dev 🖧",
                    1500,
                    "Passionate Coder💡",
                    1500,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                As a software engineer, I have a strong foundation in computer
                science concepts and programming languages.
                <br /> I am skilled in analyzing user and system requirements to
                determine the appropriate design and development <br />
                approach, and have experience designing, implementing, and
                testing software components.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button
              className="btn primary-btn"
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            >
              {" "}
              Contact Me&nbsp;&nbsp;{" "}
              <i class="fa fa-mouse-pointer" aria-hidden="true"></i>
            </button>
            <a href="ehizcv.pdf" download="Ehiedu Ehizcv.pdf">
              <button className="btn highlighted-btn">
                Get Resume&nbsp;&nbsp;
                <i class="fa fa-download" aria-hidden="true"></i>
              </button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
