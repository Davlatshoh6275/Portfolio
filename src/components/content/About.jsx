import React from "react";
import "../about.css";
import user from "../../images/photo_2022-05-21_17-21-27.jpg";

export default function About() {
  return (
    <div
      // data-aos="fade-up"
      // data-aos-anchor-placement="center-bottom"
      // data-aos-easing="linear"
      // data-aos-duration="600"
      id="about"
    >
      <div className="about">
        <div className="title">
          <p>
            <span>01.</span> About Me
          </p>
          <div className="line"></div>
        </div>
        <div className="contentAbout">
          <div className="text">
            <p>
              Hello! My name is Dilshod and I enjoy creating things that live on
              the internet. My interest in web development started Front-end in
              2018 when I decided to try editing custom Tumblr themes — turns
              out hacking together a custom reblog button taught me a lot about
              HTML & CSS!
            </p>
            <p>
              Fast-forward to today, and I’ve had the privilege of working at an
              advertising agency, a start-up, a huge corporation, and a
              student-led design studio. My main focus these days is building
              accessible, inclusive products and digital experiences at
              Upstatement for a variety of clients.
            </p>
            <p>
              I also recently launched a course that covers everything you need
              to build a web app with the Spotify API using Node & React.
            </p>
            <p>Here are a few technologies I’ve been working with recently:</p>

            <div className="technologies">
              <ul>
                <li>
                  {" "}
                  <i class="bx bx-right-arrow"></i> JavaScript (ES6+)
                </li>
                <li>
                  {" "}
                  <i class="bx bx-right-arrow"></i> React
                </li>
                <li>
                  {" "}
                  <i class="bx bx-right-arrow"></i> Node.js
                </li>
              </ul>

              <ul>
                <li>
                  {" "}
                  <i class="bx bx-right-arrow"></i> TypeScript
                </li>
                <li>
                  {" "}
                  <i class="bx bx-right-arrow"></i> Python
                </li>
                <li>
                  {" "}
                  <i class="bx bx-right-arrow"></i> Html Css
                </li>
              </ul>
            </div>
          </div>
          <div className="img">
            <div className="blue"></div>
            <img src={user} alt="img" />
            <div className="backimg"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
