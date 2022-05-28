import React, { useState } from "react";
import "../work.css";
import MullenLove from "./workChildes/MullenLove";
import Scout from "./workChildes/Scout";
import ScoutTwo from "./workChildes/ScoutTwo";
import Apple from "./workChildes/Apple";
import Starry from "./workChildes/Starry";
import Upstatement from "./workChildes/Upstatement";

export default function Work() {
  const [count, setCount] = useState(0);
  const [active, setActive] = useState(1);

  console.log(active);

  return (
    <div
      className="work"
      id="Experience"
      data-aos="fade-up"
      data-aos-anchor-placement="bottom-bottom"
      data-aos-easing="linear"
      data-aos-duration="600"
    >
      <div className="workTitle">
        <p>
          <span>02.</span> Where I’ve Worked
        </p>
        <div className="workLine"></div>
      </div>

      <div className="workBox">
        <div className="workTabs">
          <ul>
            <li onClick={() => setActive(1)}>
              <button
                onClick={() => setCount(1)}
                className={active === 1 ? "tabBtn" : "tabBtnActive"}
              >
                Upstatement
              </button>
            </li>
            <li onClick={() => setActive(2)}>
              <button
                className={active === 2 ? "tabBtn" : "tabBtnActive"}
                onClick={() => setCount(2)}
              >
                Scout
              </button>
            </li>
            <li onClick={() => setActive(3)}>
              <button
                className={active === 3 ? "tabBtn" : "tabBtnActive"}
                onClick={() => setCount(3)}
              >
                Apple
              </button>
            </li>
            <li onClick={() => setActive(4)}>
              <button
                className={active === 4 ? "tabBtn" : "tabBtnActive"}
                onClick={() => setCount(4)}
              >
                Scout
              </button>
            </li>
            <li onClick={() => setActive(5)}>
              <button
                className={active === 5 ? "tabBtn" : "tabBtnActive"}
                onClick={() => setCount(5)}
              >
                Starry
              </button>
            </li>
            <li onClick={() => setActive(6)}>
              <button
                className={active === 6 ? "tabBtn" : "tabBtnActive"}
                onClick={() => setCount(6)}
              >
                MullenLove
              </button>
            </li>
          </ul>
        </div>

        <div className="workContent">
          {count === 1 ? (
            <Upstatement />
          ) : "" || count === 2 ? (
            <Scout />
          ) : "" || count === 3 ? (
            <Apple />
          ) : "" || count === 4 ? (
            <ScoutTwo />
          ) : "" || count === 5 ? (
            <Starry />
          ) : (
            <MullenLove />
          )}
        </div>
      </div>
    </div>
  );
}
