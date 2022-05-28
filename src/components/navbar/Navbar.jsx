import React, { useState } from "react";
import "./navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(true);

  const openMenu = () => {
    setOpen(!open);
  };

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
              01. <a href="#about">About</a>
            </li>
            <li>
              02. <a href="#Experience">Experience</a>
            </li>
            <li>
              03. <a href="#Work">Work</a>
            </li>
            <li>
              04. <a href="#Contact">Contact</a>
            </li>
            <li className="btn">
              <a href="#">Resume</a>
            </li>
          </ul>
        </div>
        <div className="logoMenu" onClick={openMenu}>
          <i class="bx bx-menu"></i>
        </div>
      </div>
      <div className={open ? "disNone" : "DisLinks"}>
        <ul>
          <li>
            01. <a href="#about">About</a>
          </li>
          <li>
            02. <a href="#Experience">Experience</a>
          </li>
          <li>
            03. <a href="#Work">Work</a>
          </li>
          <li>
            04. <a href="#Contact">Contact</a>
          </li>
          <li className="btn">
            <a href="#">Resume</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
