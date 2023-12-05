import React from "react";
import Islam from "../../Assest/Content.png";
import Style from "./footer.module.css";
import { ImLinkedin2 } from "react-icons/im";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
function Footer() {
  return (
    <div style={{ margin: "64px 0 48px 0" }}>
      <div>
        <img src={Islam} className={Style.islam} />
        <ul className={Style.flx}>
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
            <a>Contact</a>
          </li>
          <li>
            <a>Privacy</a>
          </li>
        </ul>
      </div>
      <div className={Style.outer}>
        <div className={Style.Iconss}>
          <ImLinkedin2 className={Style.icon} />
          <FaFacebook className={Style.icon} />
          <FaYoutube className={Style.icon} />
          <FaInstagram className={Style.icon} />
        </div>
        <p className={Style.fs16}>
          © 2023 Boostislam.com. All rights reserved.
        </p>
      </div>
    </div>
  );
}
export default Footer;
