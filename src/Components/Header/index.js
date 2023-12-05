import React from "react";
import content from "../../Assest/Content.png";
import nav from "./header.module.css";

function Header() {
  return (
    <div className={nav.outer}>
      <div>
        <img src={content} />
      </div>
      <div>
        <ul className={nav.li}>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Features</a>
          </li>
          <li>
            <a>Team</a>
          </li>
          <li>
            <a>Contact Us</a>
          </li>
        </ul>
      </div>
      <div>
        <button className={nav.fundbtn}>Fund the App!</button>
      </div>
    </div>
  );
}

export default Header;
