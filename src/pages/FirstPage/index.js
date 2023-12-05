import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import style from "./First.module.css";
import LinearProgress from "@mui/joy/LinearProgress";
import sideimage from "../../Assest/Frame 427320775.png";
import screen1 from "../../Assest/Screen 1.png";
import Checkbox from "@mui/material/Checkbox";
import screen2 from "../../Assest/Screen 2.png";
import undraw from "../../Assest/Frame 427320775.png";
import quran from "../../Assest/quran.png";
import dollor from "../../Assest/dollor.png";
import daily from "../../Assest/daily.png";
import video from "../../Assest/video.png";
import dailyremin from "../../Assest/dailyremainder.png";
import article from "../../Assest/article.png";
import askmufti from "../../Assest/ask mufti.png";
import earn from "../../Assest/earn.png";
import chrity from "../../Assest/chrity.png";
import islamic from "../../Assest/islamic guide.png";
import leftside from "../../Assest/leftsidebar.png";
import muslimboy from "../../Assest/muslim-boy-learning-how-make-dua-allah 1.png";
import arabman from "../../Assest/arab-man-businessman-national-dress-holds-smartphone-his-hands-beige-wall 1.png";
import gulfman from "../../Assest/gulf-man-with-smart-phone-hand-closeup 1.png";
import child from "../../Assest/cf0b6a2f3fcec5e4f252ece0e3b434d1 1.png";
import muslimman from "../../Assest/muslim-man-using-laptop 1.png";
import matak from "../../Assest/mataq-darul-ulum-uhwBniYvTAU-unsplash 1.png";
import mobile from "../../Assest/undraw_active_support_re_b7sj 1.png";
import AA from "../../Assest/aa.png";
import BB from "../../Assest/bb.png";
import CC from "../../Assest/cc.png";
import DD from "../../Assest/dd.png";
import classNames from "classnames";
import PieChart from "../../Components/piechart";
import Piechart from "../../Components/piechart";

const label = { inputProps: { "aria-label": "Checkbox demo" } };
function FirstPage() {
  return (
    <div>
      {" "}
      <Header />
      <div>
        <div className={classNames(style.flx, style.bgcolor)}>
          <div className={style.container}>
            <h5 className={classNames(style.fs32, style.colorgry)}>
              Coming Soon!
            </h5>
            <div>
              <h5 className={style.fs32}>
                Our{" "}
                <span className={style.bg} style={{ fontSize: "58px" }}>
                  Boost Islam
                </span>{" "}
                App is Under Construction.
              </h5>
            </div>
            <div>
              <a href="support">
                <button className={style.supportbtn}>
                  Support Our Project
                </button>
              </a>
            </div>
          </div>
          <div className={style.imagebox}>
            <img className={style.sideimage} src={sideimage} />
          </div>
        </div>
        <div className={style.outermargin} style={{ marginTop: "120px" }}>
          <div className={style.justfitycenter}>
            <button className={style.aboutbtn}>About</button>
          </div>
          <div className={style.justfitycenter}>
            <h2>About Us</h2>
          </div>
          <div className={style.txtcenter}>
            <p className={style.justfitycenter}>
              At Boost Islam, we are dedicated to creating an innovative and
              enriching platform that caters to the diverse needs of the global
              Muslim community. Our mission is to provide a comprehensive and
              accessible resource for Islamic knowledge and spiritual growth.
            </p>
          </div>

          <div className={style.flx}>
            <div className={style.box2}>
              <h2 className={style.justfitycenter}>Our Vision & Journey</h2>
              <div className={style.box2inner}>
                <p className={style.textjustify}>
                  Our vision is to empower individuals from all walks of life to
                  deepen their understanding of Islam, strengthen their faith,
                  and foster a sense of unity within the Muslim Ummah. We
                  believe that technology can play a pivotal role in spreading
                  the teachings of Islam and fostering a stronger sense of
                  community.{" "}
                </p>
                <p className={style.textjustify}>
                  Our journey began with a simple idea – to develop a
                  user-friendly Islamic app that offers a wide range of
                  features, from access to the Quran and Hadith to learning
                  guides and community engagement. We recognized the need for a
                  digital platform that not only educates but also connects
                  Muslims worldwide.
                </p>
              </div>
              <img src={mobile} className={style.mobile} />
            </div>
            <div style={{ width: "50%" }}>
              <div className={style.flx}>
                <img src={screen1} />
                <img
                  style={{ position: "absolute", top: "115%", right: "42px" }}
                  src={screen2}
                />
              </div>
              <div>
                <p
                  style={{ textAlign: "center", margin: "0" }}
                  className={style.fs36}
                >
                  Why Support Us?
                </p>
                <p
                  className={style.textjustify}
                  style={{ paddingBottom: "20px" }}
                >
                  As we work diligently to develop Boost Islam App, we invite
                  you to be a part of our mission. Your support can help us
                  expedite the development process, enhance the app's features,
                  and reach a wider audience. By contributing to Boost Islam
                  App, you're not just supporting a project; you're investing in
                  a platform that will benefit countless individuals on their
                  spiritual journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.bgcolor}>
        <img src={leftside} className={style.leftside} />
        <div className={style.center}>
          <button className={style.aboutbtn2}>Our Services</button>
          <p style={{ fontSize: "36px", fontWeight: "600", margin: "0%" }}>
            Our Services Include
          </p>
          <div className={style.continer4}>
            <div className={style.flxb}>
              <div
                className={classNames(style.card, style.flx)}
                style={{ position: "relative", zIndex: "1" }}
              >
                <img src={quran} />
                <p style={{ margin: "35px 0 0 20px" }}>Quran Section</p>
              </div>
              <div className={classNames(style.card, style.flx)}>
                <img src={daily} />
                <p style={{ margin: "35px 0 0 20px" }}>Daily Hadith</p>
              </div>
              <div className={classNames(style.card, style.flx)}>
                <img src={video} />
                <p style={{ margin: "35px 0 0 20px" }}>Video Library</p>
              </div>
            </div>
            <div className={style.flxb} style={{ marginTop: "32px" }}>
              <div className={classNames(style.card, style.flx)}>
                <img src={dailyremin} />
                <p style={{ margin: "35px 0 0 20px" }}>Daily Reminders</p>
              </div>
              <div className={classNames(style.card, style.flx)}>
                <img src={article} />
                <p style={{ margin: "35px 0 0 20px" }}>Articles & blogs</p>
              </div>
              <div className={classNames(style.card, style.flx)}>
                <img src={askmufti} />
                <p style={{ margin: "35px 0 0 20px" }}>Ask Mufti</p>
              </div>
            </div>
            <div className={style.flxb} style={{ marginTop: "32px" }}>
              <div className={classNames(style.card, style.flx)}>
                <img src={earn} />
                <p style={{ margin: "35px 0 0 20px" }}>Learn & Earn</p>
              </div>
              <div className={classNames(style.card, style.flx)}>
                <img src={chrity} />
                <p style={{ margin: "35px 0 0 20px" }}>Charity & Donations</p>
              </div>
              <div className={classNames(style.card, style.flx)}>
                <img src={islamic} />
                <p style={{ margin: "35px 0 0 20px" }}>Islamic Guides</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className={style.container3}>
          <div className={style.flx}>
            <div className={style.flexx}>
              <div>
                <div className={style.firsthalf}>
                  <div className={style.box}>How can we become successful?</div>
                  <div className={style.mt15}>
                    <h2>What will happen with your donation?</h2>
                  </div>
                  <div className={style.mt15}>
                    <p className={style.fs}>
                      Your donation will help us develop our app. Through this
                      app, Muslims, children, and women who find it difficult to
                      access Islam will be guided towards Islam, and you will be
                      rewarded on the Day of Judgment for your contribution.
                    </p>
                  </div>
                </div>
                <div className={style.flexx}>
                  <div>
                    <img className={style.childimage} src={child} />
                  </div>
                  <div>
                    <div>
                      <img className={style.muslimmanimage} src={muslimman} />
                    </div>
                    <div>
                      <img className={style.matakimage} src={matak} />
                    </div>
                  </div>
                </div>
              </div>
              <div className={style.ml36}>
                <div>
                  <img className={style.imagewidth} src={muslimboy} />
                </div>
                <div>
                  <img className={style.imagewidth} src={arabman} />
                </div>
                <div>
                  <img className={style.imagewidth} src={gulfman} />
                </div>
              </div>
            </div>
          </div>
          <div style={{ marginTop: "120px" }} className={style.flx}>
            <p
              style={{
                fontSize: "24px",
                margin: "0",
                fontWeight: "600",
                width: "50%",
              }}
            >
              Get update on our app development
            </p>
            <div className={classNames(style.ssm, style.flx)}>
              <input placeholder="Enter your email"></input>
              <button className={style.subcribe}>Subscribe</button>
              {/* <p>We care about your data in our privacy policy.</p> */}
            </div>
          </div>
        </div>
      </div>
      <div className={style.bgcolor}>
        <div className={style.container9}>
          <button
            style={{ display: "flex", margin: "auto" }}
            className={style.aboutbtn3}
          >
            Volunteers
          </button>
          <p
            style={{
              fontSize: "36px",
              fontWeight: "600",
              marginTop: "11px",
              textAlign: "center",
            }}
          >
            Recent contributors
          </p>
          <div className={style.flxb}>
            <div className={classNames(style.card2, style.flx)}>
              <img src={AA} />
              <div style={{ margin: "0px 0 0 20px" }}>
                <p style={{ fontSize: "18px", fontWeight: "500", margin: "0" }}>
                  Muhammad Hamza
                </p>
                <p style={{ fontSize: "12px" }}>Product Designer</p>
              </div>
            </div>
            <div className={classNames(style.card2, style.flx)}>
              <img src={BB} />
              <div style={{ margin: "0px 0 0 20px" }}>
                <p style={{ fontSize: "18px", fontWeight: "500", margin: "0" }}>
                  Mohsin Ali
                </p>
                <p style={{ fontSize: "12px" }}>Software Engineer</p>
              </div>
            </div>
            <div className={classNames(style.card2, style.flx)}>
              <img src={CC} />
              <div style={{ margin: "0px 0 0 20px" }}>
                <p style={{ fontSize: "18px", fontWeight: "500", margin: "0" }}>
                  Maham mujahid
                </p>
                <p style={{ fontSize: "12px" }}>Graphic Designer</p>
              </div>
            </div>
            <div className={classNames(style.card2, style.flx)}>
              <img src={DD} />
              <div style={{ margin: "0px 0 0 20px" }}>
                <p style={{ fontSize: "18px", fontWeight: "500", margin: "0" }}>
                  Ahmed Ali
                </p>
                <p style={{ fontSize: "12px" }}>Product Designer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.container9}>
        <button
          style={{ display: "flex", margin: "auto", color: "black" }}
          className={style.aboutbtn3}
        >
          Donate
        </button>
        <p
          style={{
            fontSize: "36px",
            fontWeight: "600",
            marginTop: "11px",
            textAlign: "center",
          }}
        >
          Crowdfunding
        </p>
        <p style={{ textAlign: "center" }}>
          Your donation, no matter the size, is a significant step towards
          fulfilling our mission of spreading knowledge, fostering unity, and
          strengthening faith within the Muslim community. Together, we can
          build a platform that empowers and enriches lives.
        </p>
        <div className={style.flxb}>
          <div className={style.card4}>
            <p style={{ textAlign: "center", margin: "0", fontWeight: "600" }}>
              Revenue Overview
            </p>{" "}
            <div className={style.flx}>
              <div style={{ width: "50%" }}>
                <div className={style.flx} style={{ marginTop: "24px" }}>
                  <div>
                    <img src={dollor} className={style.dollor} />
                  </div>
                  <div>
                    {" "}
                    <p style={{ fontSize: "14px", margin: "0" }}>
                      Amount Required
                    </p>
                    <p
                      style={{
                        fontSize: "24px",
                        margin: "0",
                        fontWeight: "600",
                        paddingBottom: "15px",
                      }}
                    >
                      $10,000
                    </p>
                    <hr></hr>
                    <Piechart />
                  </div>
                </div>
              </div>
              <div style={{ width: "50%" }}></div>
            </div>
          </div>
          <div className={style.card5}>
            <p style={{ textAlign: "center", margin: "0", fontWeight: "600" }}>
              Collection Overview
            </p>{" "}
            <p
              style={{
                textAlign: "center",
                marginTop: "40px",
                fontWeight: "600",
                fontSize: "36px",
              }}
            >
              $300 Raised
            </p>{" "}
            <div className={style.flxb}>
              <div style={{ width: "20%" }}>
                <p style={{ color: "#6F6F6F", fontSize: "12px" }}>UX Design</p>
                <LinearProgress size="lg" determinate value={75} />
              </div>
              <div style={{ width: "20%" }}>
                <p style={{ color: "#6F6F6F", fontSize: "12px" }}>
                  App Development
                </p>
                <LinearProgress size="lg" determinate value={56} />
              </div>
              <div style={{ width: "20%" }}>
                <p style={{ color: "#6F6F6F", fontSize: "12px" }}>
                  Infrastructure
                </p>
                <LinearProgress size="lg" determinate value={20} />
              </div>
              <div style={{ width: "20%" }}>
                <p style={{ color: "#6F6F6F", fontSize: "12px" }}>Marketing</p>
                <LinearProgress size="lg" determinate value={100} />
              </div>
            </div>
          </div>
        </div>
        <button className={style.support}>Support Our Project</button>
      </div>
      <div className={style.bgcolor}>
        <div className={style.container9}>
          <p
            style={{ textAlign: "center", fontWeight: "700" }}
            className={style.fs36}
          >
            Contact Us
          </p>
          <form className={style.nn} style={{ margin: "50px 150px 8px 150px" }}>
            <div className={style.flxb}>
              <div className={style.nn}>
                <label>First Name</label>
                <br />
                <input />
              </div>
              <div className={style.nn}>
                <label>Second Name</label>
                <br />
                <input />
              </div>
            </div>
            <div className={style.flxb}>
              <div className={style.nn}>
                <label>Email</label>
                <br />
                <input />
              </div>
              <div className={style.nn}>
                <label>Password</label>
                <br />
                <input />
              </div>
            </div>
            <div className={style.nn}>
              <label>Message</label>
              <textarea placeholder="Type your message..." rows={10}></textarea>
            </div>
          </form>
          <div className={style.flx} style={{ margin: " 0 150px" }}>
            <Checkbox {...label} />
            <p style={{ fontSize: "16px", fontWeight: "700" }}>
              I accept the terms
            </p>
          </div>
          <button className={style.support}>Submit</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default FirstPage;
