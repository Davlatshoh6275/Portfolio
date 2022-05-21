import React from "react";
import "../header.css";

export default function Header() {
  return (
    <div>
      <div className="header">
        <h3>Hi, my name is</h3>
        <h2 className="firstH2">Murtazoev Dilshod</h2>
        <h2 className="secondH2">I build things for the web.</h2>
        <p>
          I’m a software engineer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building accessible, human-centered products at Upstatement.
        </p>

        <div className="btn">
          <a href="#">Check out my course!</a>
        </div>
      </div>
    </div>
  );
}
