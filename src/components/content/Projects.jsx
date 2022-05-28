import React from "react";
import "../projects.css";

export default function Projects() {
  return (
    <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="600">
      <div className="projects_title">
        <h1>Other Noteworthy Projects</h1>
        <p>view the archive</p>
      </div>

      <div className="projects_box">
        <div className="project_item">
          <div className="icons">
            <div className="link_folder">
              <i class="bx bx-folder"></i>
            </div>
            <div className="another_links">
              <i class="bx bx-link-external"></i>
            </div>
          </div>
          <div className="project_text">
            <h3>Integrating Algolia Search with WordPress Multisite</h3>
            <p>
              Building a custom multisite compatible WordPress plugin to build
              global search with Algolia
            </p>
          </div>

          <ul>
            <li>Algolia</li>
            <li>WordPress</li>
            <li>PHP</li>
          </ul>
        </div>

        <div className="project_item">
          <div className="icons">
            <div className="link_folder">
              <i class="bx bx-folder"></i>
            </div>
            <div className="another_links">
              <i class="bx bxl-github"></i>
              <i class="bx bx-link-external"></i>
            </div>
          </div>
          <div className="project_text">
            <h3>Time to Have More Fun</h3>
            <p>
              A single page web app for helping me choose where to travel, built
              with Next.js, Firebase, and Tailwind CSS
            </p>
          </div>

          <ul>
            <li>Next.js</li>
            <li>Tailwind CSS</li>
            <li>Firebase</li>
          </ul>
        </div>

        <div className="project_item">
          <div className="icons">
            <div className="link_folder">
              <i class="bx bx-folder"></i>
            </div>
            <div className="another_links">
              <i class="bx bx-link-external"></i>
            </div>
          </div>
          <div className="project_text">
            <h3>Building a Headless Mobile App CMS From Scratch</h3>
            <p>
              Find out how we built a custom headless CMS with Node, Express,
              and Firebase for a project at Upstatement
            </p>
          </div>

          <ul>
            <li>Node</li>
            <li>Express</li>
            <li>Firebase</li>
            <li>Vue</li>
          </ul>
        </div>

        <div className="project_item">
          <div className="icons">
            <div className="link_folder">
              <i class="bx bx-folder"></i>
            </div>
            <div className="another_links">
              <i class="bx bxl-github"></i>
              <i class="bx bx-link-external"></i>
            </div>
          </div>
          <div className="project_text">
            <h3>OctoProfile</h3>
            <p>
              A nicer look at your GitHub profile and repo stats. Includes data
              visualizations of your top languages, starred repositories, and
              sort through your top repos by number of stars, forks, and size.
            </p>
          </div>

          <ul>
            <li>Next.js</li>
            <li>Chart.js</li>
            <li>GitHub API</li>
          </ul>
        </div>

        <div className="project_item">
          <div className="icons">
            <div className="link_folder">
              <i class="bx bx-folder"></i>
            </div>
            <div className="another_links">
              <i class="bx bxl-github"></i>
              <i class="bx bx-link-external"></i>
            </div>
          </div>
          <div className="project_text">
            <h3>Google Keep Clone</h3>
            <p>A simple Google Keep clone built with Vue and Firebase.</p>
          </div>

          <ul>
            <li>Vue</li>
            <li>Firebase</li>
          </ul>
        </div>

        <div className="project_item">
          <div className="icons">
            <div className="link_folder">
              <i class="bx bx-folder"></i>
            </div>
            <div className="another_links">
              <i class="bx bx-link-external"></i>
            </div>
          </div>
          <div className="project_text">
            <h3>Apple Music Embeddable Web Player Widget</h3>
            <p>
              Embeddable web player widget for Apple Music that lets users log
              in and listen to full song playback in the browser leveraging .
              Read more about this project on
            </p>
          </div>

          <ul>
            <li>MusicKit.js</li>
            <li>JS</li>
            <li>SCSS</li>
          </ul>
        </div>
      </div>

      <div className="btnShow">
        <button className="show">Show More</button>
      </div>
    </div>
  );
}
