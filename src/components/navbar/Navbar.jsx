import React from "react";
import "./navbar.css";

export default function Navbar() {
  return (
    <div>
      <div className="navBox">
        <div className="logo">
          <div className="logoTwo">
            <h3>D</h3>
          </div>
        </div>
        <div className="links">
          <ul>
            <li>
              01. <a href="#">About</a>
            </li>
            <li>
              02. <a href="#">Experience</a>
            </li>
            <li>
              03. <a href="#">Work</a>
            </li>
            <li>
              04. <a href="#">Contact</a>
            </li>
            <li className="btn">
              <a href="#">Resume</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
