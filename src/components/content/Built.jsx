import React from "react";
import "../built.css";

export default function Built() {
  return (
    <div>
      <div className="builtOne">
        <div className="built_one_img_box">
          <img
            src="https://raw.githubusercontent.com/bchiang7/halcyon-vscode/master/images/demo.png"
            alt="img"
          />
        </div>
        <div className="built_one_content_box">
          <h3>Featured Project</h3>
          <h2>Halcyon Theme</h2>
          <div className="text_box">
            <p>
              A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm,
              and more. Available on Visual Studio Marketplace, Package Control,
              Atom Package Manager, and npm.
            </p>
          </div>
          <ul>
            <li>VS Code</li>
            <li>Sublime Text</li>
            <li>Atom</li>
            <li>iTerm2</li>
            <li>Hyper</li>
          </ul>
        </div>
      </div>
      <div className="builtTwo"></div>
      <div className="builtThree"></div>
    </div>
  );
}
