import React from "react";
import "./main.css";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/content/Header";
import About from "./components/content/About";
import Work from "./components/content/Work";
import Built from "./components/content/Built";
import Projects from "./components/content/Projects";
import Next from "./components/content/Next";

export default function App() {
  return (
    <div className="container">
      <Navbar />
      <div className="content">
        <Header />
        <About />
        <Work />
        <Built />
        <Projects />
        <Next />
      </div>

      <div className="posStick">
        <div className="links">
          <ul>
            <li>
              <a href="#">
                <i class="bx bxl-github"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="bx bxl-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="bx bxl-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="bx bxl-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="bx bxl-codepen"></i>
              </a>
            </li>
          </ul>

          <div className="line"></div>
        </div>
        <div className="mail">
          <h2>dilshodmurtazoev5@gmail.com</h2>
          <div className="lineTwo"></div>
        </div>
      </div>
    </div>
  );
}
