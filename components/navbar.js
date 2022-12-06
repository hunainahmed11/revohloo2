import React, { useState } from "react";
import styles from "../styles/navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import logo from "../assets/logo.png";
import Home from "../assets/Home.png";
import { Input } from "postcss";
import {
  FaFire,
  FaHeadphonesAlt,
  FaHome,
  FaIcicles,
  FaICursor,
  FaInfoCircle,
  FaMicrophone,
  FaPhotoVideo,
  FaPlayCircle,
  FaPowerOff,
  FaQuestionCircle,
  FaRegFileExcel,
  FaSms,
  FaVideo,
  FaVideoSlash,
  IconName,
} from "react-icons/fa";

const navbar = () => {
  return (
  
    <div className={styles.bnr}>
      <div className="row">
        <div className="col-lg-12">
          <div className={styles.navdiv}>
            <div className={styles.mainLogo}>
              <Image src={logo} className={styles.logo} alt="#" />
            </div>
            {/* menu */}
            <div className={styles.menu}>
              <h5> Menu</h5>
              <ul>
                <li>
                  <FaHome size={20} color={""} className={styles.sidelogos}  alt="?"/>
                  <Link href="#" className={styles.linkk}>
                    Home
                  </Link>
                </li>
                <li>
                  <FaPlayCircle size={20} className={styles.sidelogos}alt="?"/>
                  <Link href="#" className={styles.linkk}>
                    Create Revohloo
                  </Link>
                </li>
                <li>
                  <FaFire size={20} className={styles.sidelogos}alt="?" />
                  <Link href="#" className={styles.linkk}>
                    Hot & New!
                  </Link>
                </li>

                <li>
                  <FaPhotoVideo size={20} className={styles.sidelogos} alt="?" />
                  <Link href="#" className={styles.linkk}>
                    Revohloo Videos
                  </Link>
                </li>
                <li>
                  <FaMicrophone size={20} className={styles.sidelogos} alt="?"/>
                  <Link href="#" className={styles.linkk}>
                    Arstists
                  </Link>
                </li>
                <li>
                  <FaInfoCircle size={20} className={styles.sidelogos} alt="?"/>
                  <Link href="#" className={styles.linkk}>
                    About Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* setting */}
            <div className={styles.menu}>
              <h5> Setting</h5>
              <ul>
                <li>
                  <FaSms size={20} className={styles.sidelogos} alt="?"/>
                  <Link href="#" className={styles.linkk}>
                    FAQs
                  </Link>
                </li>
                <li>
                  <FaHeadphonesAlt size={20} className={styles.sidelogos} alt="?"/>
                  <Link href="#" className={styles.linkk}>
                    Help Center
                  </Link>
                </li>
                <li>
                  <FaRegFileExcel size={20} className={styles.sidelogos} alt="?"/>
                  <Link href="#" className={styles.linkk}>
                    Terms Of Use
                  </Link>
                </li>

                <li>
                  <FaPhotoVideo size={20} className={styles.sidelogos} alt="?"/>
                  <Link href="#" className={styles.linkk}>
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <FaPowerOff size={20} className={styles.sidelogos} alt="?"/>
                  <Link href="#" className={styles.linkk}>
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
            <div className={styles.question}>
              <FaQuestionCircle size={20} alt="?" />
              <h6>
                {" "}
                Question? <span>Contact Us</span>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default navbar;
