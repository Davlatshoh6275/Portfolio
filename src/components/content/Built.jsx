import React from "react";
import "../built.css";

export default function Built() {
  return (
    <div id="Work" data-aos="fade-up" data-aos-anchor-placement="top-center">
      <div className="built_title">
        <p>
          <span>03.</span> Some Things I’ve Built
        </p>
        <div className="built_line"></div>
      </div>
      <div className="builtOne">
        <div className="built_one_img_box">
          <img
            src="https://raw.githubusercontent.com/bchiang7/halcyon-vscode/master/images/demo.png"
            alt="img"
          />

          <div className="back_img"></div>
        </div>
        <div className="built_one_content_box">
          <h3>Featured Project</h3>
          <h2>Halcyon Theme</h2>
          <div className="text_box">
            <p>
              A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm,
              and more. Available on{" "}
              <span>
                {" "}
                Visual Studio Marketplace, Package Control, Atom Package
                Manager,
              </span>{" "}
              and <span>npm</span>.
            </p>
          </div>
          <ul>
            <li>VS Code</li>
            <li>Sublime Text</li>
            <li>Atom</li>
            <li>iTerm2</li>
            <li>Hyper</li>
          </ul>

          <ul className="built_links">
            <li>
              <i class="bx bxl-github"></i>
            </li>
            <li>
              <i class="bx bx-link-external"></i>
            </li>
          </ul>
        </div>
      </div>
      <div className="builtTwo">
        <div className="built_two_content_box">
          <h3>Featured Project</h3>
          <h2>Spotify Profile</h2>
          <div className="text_box_two">
            <p>
              A web app for visualizing personalized Spotify data. View your top
              artists, top tracks, recently played tracks, and detailed audio
              information about each track. Create and save new playlists of
              recommended tracks based on your existing playlists and more.
            </p>
          </div>

          <ul>
            <li> React</li>
            <li>Styled Components</li>
            <li>Express</li>
            <li>Spotify API</li>
            <li>Heroku</li>
          </ul>

          <ul className="built_links">
            <li>
              <i class="bx bxl-github"></i>
            </li>
            <li>
              <i class="bx bx-link-external"></i>
            </li>
          </ul>
        </div>
        <div className="built_two_img_box">
          <img
            src="https://cdnssl.ubergizmo.com/wp-content/uploads/2018/09/2-7.jpg"
            alt="img"
          />

          <div className="back_img"></div>
        </div>
      </div>

      <div className="builtThree">
        <div className="built_three_img_box">
          <img
            src="https://cdn.dribbble.com/users/504585/screenshots/6641857/spotify_.jpg"
            alt="img"
          />

          <div className="back_img"></div>
        </div>

        <div className="built_three_content_box">
          <h3>Featured Project</h3>
          <h2>Build a Spotify Connected App</h2>

          <div className="text_box_three">
            <p>
              Having struggled with understanding how the Spotify OAuth flow
              works, I made the course I wish I could have had. <br />
            </p>
            <p>
              Unlike tutorials that only cover a few concepts and leave you with
              half-baked GitHub repositories, this course covers everything from
              explaining the principles of REST APIs to implementing Spotify's
              OAuth flow and fetching API data in a React app. By the end of the
              course, you’ll have an app deployed to the internet you can add to
              your portfolio.
            </p>
          </div>

          <ul>
            <li> React</li>
            <li>Express</li>
            <li>Spotify API</li>
            <li>Styled Components</li>
          </ul>

          <button>Learn More</button>
        </div>
      </div>
    </div>
  );
}
