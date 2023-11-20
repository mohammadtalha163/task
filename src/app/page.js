"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import styles from "./page.module.css";

export default function Home() {
  useEffect(() => {
    const timeline = gsap.timeline({ defaults: { duration: 1 } });
    timeline.to("#navAnimation", {
      duration: 0.5,
      delay: 1,
      y: 20,
      repeat: 1,
      yoyoEase: "bounce",
    });
    timeline.to("#img1 img", {
      duration: 1,
      y: -350,
      delay: 1,
      stagger: 1,
      ease: "power1.out",
      display: "none",
    });
    timeline.to("#text1", {
      delay: 0,
      duration: 0.5,
      y: -200,
      display: "none",
    });
    timeline.to("#slide2Heading1 h1", {
      delay: 0,
      duration: 2,
      display: "block",
      ease: "power3",
      stagger: 0.6,
    });
    timeline.to("#revo", {
      delay: 0,
      duration: 1,
      ease: "power3",
      x: -300,
    });
  });
  return (
    <div className={styles.MainSlide}>
      <div className="d-flex mr-3 ml-3 mt-4" id="navAnimation">
        <div className={styles.navItem}>
          <span>Menu</span>
          <i className="fa fa-bars" aria-hidden="true"></i>
        </div>
        <div className={styles.toothText}>
          <i className="fa fa-snowflake-o fa-2x" aria-hidden="true"></i>
          <span>DENTYTECH</span>
        </div>
        <div className={`${styles.navItem} text-sm-right`}>
          <span>Login</span>
          <span className={`border-0 ${styles.signup}`}>SignUp</span>
        </div>
      </div>
      <div className={styles.headingtext}>
        <h1 id="text1">OUR ADVANATAGES</h1>
        <div className={styles.imageBanner} id="img1">
          <Image src="/images/card.png" alt="test" width={230} height={250} />
          <Image src="/images/card.png" alt="test" width={230} height={250} />
          <Image src="/images/card.png" alt="test" width={230} height={250} />
          <Image src="/images/card.png" alt="test" width={230} height={250} />
        </div>
      </div>
      <div className="mt-4">
        <div className={styles.slide2Heading1} id="slide2Heading1">
          <h1 id="revo">revolutinzing</h1>
          <h1 id="dentalCare" className="text-left">
            Dental Care
          </h1>
          <h1 id="withTech">With Technology</h1>
        </div>
      </div>
      <div className={`mr-3 ml-3 ${styles.bottomText}`}>
        <p className="mb_unset">Your Smile Our Passion</p>
        <div className={styles.socailMedia}>
          <i className="fa fa-facebook" aria-hidden="true"></i>
          <i className="fa fa-youtube-play" aria-hidden="true"></i>
          <i className="fa fa-linkedin-square" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  );
}
