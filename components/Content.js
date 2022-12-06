import React, { useState } from "react";
import styles from "../styles/content.module.css";
import Link from "next/link";
import Image from "next/image";
import title from "../assets/title.png";
import searchicon from "../assets/searchicon.png";
import notification from "../assets/notification.png";
import harold from "../assets/harold.png";
import dropdown from "../assets/dropdown.png";
import revohloo from "../assets/revohloo.png";
import playicon from "../assets/playicon.png";
import Arrowleft from "../assets/Arrowleft.png";
import Carosel from "../components/Carosel";
import Carosel2 from "../components/Carosel2";
import Footer from "./Footer";
// import Dropdown from "./Dropdown";

const Content = () => {
  return (
    <div className={styles.conContainer}>
      <div className={styles.topbnr}>
        <h5>Artists Join Revohloo... For More Visibility & New Fans!</h5>
      </div>
      <div className="row">
        <div className={`${styles.backgroundImage} `}>
          <div>
            <Image src={Arrowleft} className={styles.Arrowleft} />

            <input
              type="text"
              id="first"
              name="first"
              className={styles.search_box}
              placeholder="Search on Revolhoo"
            />
            <Image src={searchicon} className={styles.searchIcon} alt={"?"}/>

            <Image src={notification} className={styles.notificationIcon} alt={"?"} />
            <p>Harold John</p>
            <Image src={harold} className={styles.harold} alt={"?"}/>
            <Image src={dropdown} className={styles.dropdown} alt={"?"}/>

            <div className={styles.Heading} >
              <Image src={revohloo} className={styles.revohloo_btn} alt={"?"} />

              <h1 className={styles.know}>
                Know My name.
                <span>
                  (5 months)
                  <br />
                  <h6>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500.
                  </h6>
                </span>
              </h1>
              <div className={styles.playpart}>
                <Image src={playicon} className={styles.play} alt={"?"}/>
                <h6>Play now</h6>
              </div>

              <div className={styles.section3}>
                <div className="row">
                  <div className="col-lg-12">
                    <div className={styles.Inspired}>
                      <h6>
                        INSPIRED BY YOUR <span>BROWSING HISTORY</span>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              <Carosel />
              <div className={styles.section3}>
                <div className="row">
                  <div className="col-lg-12">
                    <div className={styles.HotNews}>
                      <h6>
                        HOT $ <span>NEWS!</span>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.secondcarosel}>
                <Carosel />
              </div>

              <div className={styles.section3}>
                <div className="row">
                  <div className="col-lg-12">
                    <div className={styles.PopularArtist}>
                      <h6>
                        Popular <span>Artists</span>
                      </h6>
                      <div className={styles.dropdown}>
                        <button
                          className="btn btn-secondary dropdown-toggle"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Genres
                        </button>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item" href="#">
                              Action
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Another action
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Something else here
                            </a>
                          </li>
                        </ul>

                        <button
                          className="btn btn-secondary dropdown-toggle"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Release Year
                        </button>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item" href="#">
                              Action
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Another action
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Something else here
                            </a>
                          </li>
                        </ul>
                        <button
                          className="btn btn-secondary dropdown-toggle"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Release Year
                        </button>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item" href="#">
                              Action
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Another action
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Something else here
                            </a>
                          </li>
                        </ul>
                        <button
                          className="btn btn-secondary dropdown-toggle"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Enter Search Criteria
                        </button>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item" href="#">
                              Action
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Another action
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Something else here
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={styles.thirdslider}>
                  <Carosel2 />
                  <div className={styles.bottompart}>{/* <Footer/> */}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

   
  );
};
export default Content;
