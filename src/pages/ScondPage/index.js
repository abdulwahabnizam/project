import React from "react";
import classNames from "classnames";
import Style from "./scond.module.css";
import Back from "../../Assest/back.png";
import Copy from "../../Assest/copy.png";
import Share from "../../Assest/Share.png";
import Shar from "../../Assest/System.png";
import QRcode from "../../Assest/qrcode.png";
import Header from "../../Components/Header/index";
import Footer from "../../Components/Footer/index";
import LinearProgress from "@mui/joy/LinearProgress";
import Timer from "../../Assest/timer.png";
function SecondPage() {
  return (
    <div>
      <div>
        <Header />
        <div className={classNames(Style.container)}>
          <div className={classNames(Style.pt80, Style.flxp)}>
            <img src={Back} className={Style.back} />
            <p className={Style.fs18}>Back</p>
          </div>
          <div>
            <p className={classNames(Style.pt16, Style.fs40)}>
              Let’s Make Islam For All
            </p>
          </div>
          <div style={{ marginTop: "40px" }} className={classNames(Style.flx)}>
            <div className={classNames(Style.W776)}>
              <p className={Style.fs24}>Donation Methods</p>
              <div className={Style.card}>
                <div className={Style.flx}>
                  <div style={{ width: "570px" }}>
                    <p className={classNames(Style.fs20)}>
                      Directly Bank Transfer
                    </p>
                    <div className={Style.flx}>
                      <div style={{ width: "25%" }} className={Style.data}>
                        <p>Account Number</p>
                        <p>IBAN</p>
                        <p>Account Title</p>
                        <p>Bank Name</p>
                        <p>Swift Code</p>
                        <p>Branch Address</p>
                        <p>Bank Country</p>
                      </div>
                      <div className={Style.data2}>
                        <p>02450104493780</p>
                        <p>PK38MEZN0002450104493780</p>
                        <p>Muhammad Hamza</p>
                        <p>Meezan Bank</p>
                        <p>MEZNPKKALHR</p>
                        <p>Ghalib Market, Lahore</p>
                        <p></p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className={Style.circle}>
                      <img src={Copy} className={Style.icon} />
                    </div>
                    <div className={Style.circle}>
                      <img src={Share} className={Style.icon} />
                    </div>
                  </div>
                </div>
              </div>
              <div className={Style.card}>
                <div className={Style.flx}>
                  <div style={{ width: "570px" }}>
                    <p className={classNames(Style.fs20)}>Payoneer Account</p>
                    <div className={Style.flx}>
                      <div style={{ width: "25%" }} className={Style.data}>
                        <p>Account Title</p>
                        <p>Account ID</p>
                      </div>
                      <div className={Style.data2}>
                        <p>Muhammad Hamza</p>
                        <p>16571524</p>

                        <p></p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className={Style.circle}>
                      <img src={Copy} className={Style.icon} />
                    </div>
                    <div className={Style.circle}>
                      <img src={Share} className={Style.icon} />
                    </div>
                  </div>
                </div>
              </div>
              <div className={Style.card}>
                <div className={Style.flx}>
                  <div style={{ width: "570px" }}>
                    <p className={classNames(Style.fs20)}>Metamask Wallet</p>
                    <div className={Style.flx}>
                      <div style={{ width: "25%" }} className={Style.data}>
                        <p>Account Number</p>
                        <p>OR QCode</p>
                      </div>
                      <div className={Style.data2}>
                        <p>0x3a841e5cD3A4A907a469139a8</p>
                        <img src={QRcode} className={Style.qrcode} />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className={Style.circle}>
                      <img src={Copy} className={Style.icon} />
                    </div>
                    <div className={Style.circle}>
                      <img src={Share} className={Style.icon} />
                    </div>
                  </div>
                </div>
              </div>
              <div className={Style.card}>
                <div className={Style.flx}>
                  <div style={{ width: "570px" }}>
                    <p className={classNames(Style.fs20)}>Binance Wallet</p>
                    <div className={Style.flx}>
                      <div style={{ width: "25%" }} className={Style.data}>
                        <p>Payer ID </p>
                        <p>Nick Name </p>
                        <p>OR QCode</p>
                      </div>
                      <div className={Style.data2}>
                        <p>280126986</p>
                        <p>Boostislam</p>

                        <img src={QRcode} className={Style.qrcode} />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className={Style.circle}>
                      <img src={Copy} className={Style.icon} />
                    </div>
                    <div className={Style.circle}>
                      <img src={Share} className={Style.icon} />
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ marginBottom: "60px" }} className={Style.card}>
                <div className={Style.flx}>
                  <div style={{ width: "570px" }}>
                    <p className={classNames(Style.fs20)}>Paypal Account</p>
                    <div className={Style.flx}>
                      <div className={Style.data}>
                        <p>Paypal ID</p>
                        <p>Account Link</p>
                      </div>
                      <div className={Style.data2}>
                        <p>Hamzasiddique951@gmail.com</p>
                        <p>https://paypal.me/muhammadhamza951</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className={Style.circle}>
                      <img src={Copy} className={Style.icon} />
                    </div>
                    <div className={Style.circle}>
                      <img src={Share} className={Style.icon} />
                    </div>
                  </div>
                </div>
              </div>
              <p
                style={{ margin: "40px 0 24px 0" }}
                className={classNames(Style.fs24)}
              >
                Contact Details
              </p>
              <div className={Style.card} style={{ marginBottom: "73px" }}>
                <div className={Style.flx}>
                  <div style={{ width: "570px" }}>
                    <div className={Style.flx}>
                      <div style={{ width: "25%" }} className={Style.data}>
                        <p style={{ padding: "0%" }}>Name</p>
                        <p>Contact</p>
                        <p>E Mail</p>
                      </div>
                      <div className={Style.data2}>
                        <p style={{ padding: "0%" }}>Bilal Hassan</p>
                        <p>+92 302 4902507</p>
                        <p>bilal.hassan2507@gmail.com</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className={Style.circle}>
                      <img src={Copy} className={Style.icon} />
                    </div>
                    <div className={Style.circle}>
                      <img src={Share} className={Style.icon} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={classNames(Style.W420)}>
              <div className={Style.cardR}>
                <p className={classNames(Style.fs40, Style.mb24)}>$300</p>
                <div>
                  <LinearProgress determinate value={75} />
                </div>
                <div className={Style.between}>
                  <div>
                    <p className={Style.fs12}>Goal</p>
                    <p className={Style.fs18}>$10,000</p>
                  </div>
                  <div>
                    <p className={Style.fs12}>Remaining</p>
                    <p className={Style.fs18}>$9,700</p>
                  </div>
                </div>
                <div className={Style.flxp}>
                  <img src={Timer} className={Style.timer} />
                  <p className={classNames(Style.fs24)}>45 days left</p>
                </div>
                <p className={classNames(Style.fs24, Style.py24)}>
                  ❤️ 12 Contributors
                </p>
                <hr />
                <div className={Style.flx}>
                  <button className={classNames(Style.mt24, Style.btn2)}>
                    Donate
                  </button>
                  <div className={classNames(Style.share)}>
                    <img src={Shar} className={Style.icon2} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
export default SecondPage;
