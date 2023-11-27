"use client";
import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Image from "next/image";
import { gsap } from "gsap";
import styles from "./page.module.css";

export default function Home() {
  useEffect(() => {
    const a = `"-=1"`;
    gsap.to("#text1", {
      duration: 1,
      y: -25,
      opacity: 1,
      ease: "power1.out",
    });
    gsap.to("#centerTextIcon i", {
      duration: 1,
      x: -20,
      ease: "power1.out",
      delay: 0.4,
      opacity: 1,
    });
    gsap.to("#centerTextIcon span", {
      duration: 1,
      y: 45,
      opacity: 1,
      ease: "power1.out",
      delay: 0.5,
    });
    gsap.to("#img1 img", {
      duration: 1,
      y: -10,
      ease: "power1.out",
    });
    const timeline = gsap.timeline();
    timeline.to("#navAnimation", {
      opacity: 1,
      duration: 0.8,
      y: 10,
    });
    timeline.to("#img1 img", {
      duration: 0.7,
      y: -380,
      stagger: 0.8,
      stagger: 1,
      rotate: "5 deg",
      ease: "power1.out",
      display: "none",
    });
    timeline.to("#text1", {
      duration: 0.5,
      y: -200,
      display: "none",
      opacity: 1,
    });
    timeline.to(".slide2Heading h1", {
      duration: 1,
      display: "block",
      ease: "power3",
    });
    timeline.to(
      "#revo",
      {
        duration: 1,
        ease: "power3",
        x: -100,
        onComplete() {
          timeline.to(
            ".sliderTwoIcon p,.sliderTwoIcon i",
            {
              duration: 1,
              y: -10,
              opacity: 1,
              ease: "power1.out",
            },
            a
          );
        },
      },
      a
    );
    timeline.to(
      "#dental",
      {
        duration: 1,
        ease: "power3",
        x: -200,
        opacity: 1,
      },
      a
    );
    timeline.to(
      "#Care",
      {
        duration: 1,
        ease: "power3",
        x: -400,
        opacity: 1,
      },
      a
    );
    timeline.to(
      "#dental",
      {
        duration: 1,
        ease: "power3",
        x: 10,
        delay: 1,
      },
      a
    );
    timeline.to("#lineTwoImage", {
      duration: 0.1,
      ease: "power3",
      opacity: 1,
    });
    timeline.to(".imageHide", {
      duration: 0.2,
      ease: "power3",
      x: 0,
      opacity: 1,
    });
    timeline.to(
      "#Care",
      {
        duration: 1,
        ease: "power3",
        x: -140,
        opacity: 1,
      },
      a
    );
    timeline.to(
      "#assistance",
      {
        duration: 0.3,
        ease: "power1.out",
        opacity: 1,
        y: -5,
      },
      "-=0.1"
    );
    timeline.to(
      "#withTech",
      {
        duration: 0.1,
        ease: "power3",
        x: -40,
        onComplete() {
          timeline.to(".lineThreeImage > img:nth-child(1) ", {
            duration: 0.1,
            ease: "power3",
            x: 0,
            opacity: 1,
          });
          timeline.to(".lineThreeImage > img:nth-child(2) ", {
            duration: 0.2,
            ease: "power3",
            x: 0,
            opacity: 1,
          });
          timeline.to(".lineThreeImage > img:nth-child(3) ", {
            duration: 0.2,
            ease: "power3",
            x: 0,
            opacity: 1,
          });
          timeline.to("#displayNone", {
            display: "none",
            delay: 1,
          });
          timeline.to(".sliderImages", {
            duration: 1,
            ease: "power3",
            opacity: 1,
            delay: 1,
          });
          timeline.to(".sliderImagesOne", {
            duration: 1,
            ease: "power3",
          });
          timeline.to(".slideimageThree", {
            y: -10,
            ease: "power2.inOut",
            duration: 2,
            opacity: 1,
            delay: 0,
          });
          timeline.to(".sliderImagesOne", {
            y: "-100%",
            ease: "power2.inOut",
            repeat: 1,
            delay: 0,
            duration: 4,
            yoyo: true,
          });
          timeline.to(
            ".sliderImagesTwo",
            {
              y: "20%",
              ease: "power2.inOut",
              repeat: 1,
              duration: 4,
              yoyo: true,
            },
            a
          );
        },
      },
      a
    );
  }, []);

  return (
    <div className={styles.MainSlide}>
      <Header />
      <div className={styles.headingtext}>
        <h1 id="text1">OUR ADVANATAGES</h1>
        <div className={styles.imageBanner} id="img1">
          <Image src="/images/card.png" alt="test" width={230} height={250} />
          <Image src="/images/card.png" alt="test" width={230} height={250} />
          <Image src="/images/card.png" alt="test" width={230} height={250} />
          <Image src="/images/card.png" alt="test" width={230} height={250} />
        </div>
      </div>
      <section className="mb_5 ml-5 mr-5 mt-5" id="displayNone">
        <div className="row slide2Heading">
          <div className="col-md-8 ">
            <h1 id="revo">revolutinzing</h1>
          </div>
          <div className="col-md-4 sliderTwoIcon">
            <div>
              <i className="fa fa-facebook" aria-hidden="true"></i>
              <i className="fa fa-youtube-play" aria-hidden="true"></i>
              <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            </div>
            <p className="mb_unset">Modern Solution,</p>
            <p className="mb_unset">Timeless Smile</p>
          </div>
          <div
            className="col-md-3 d-flex justify-content-center align-items-center opicity_0"
            id="assistance"
          >
            <p className="assistanceText">ASSISTANCE</p>
            <i className="fa fa-youtube-play fa-2x" aria-hidden="true"></i>
          </div>
          <div className="col-md-3">
            <h1 id="dental" className="text-left opicity_0">
              Dental
            </h1>
          </div>
          <div
            className="col-md-3 d-flex align-items-center opicity_0"
            id="lineTwoImage"
          >
            <Image src="/images/circle.png" alt="test" width={50} height={50} />
            <Image
              className="imageHide"
              src="/images/circle.png"
              alt="test"
              width={50}
              height={50}
            />
          </div>
          <div className="col-md-3">
            <h1 id="Care" className="text-left opicity_0">
              Care
            </h1>
          </div>

          <div className="col-md-8 ">
            <h1 id="withTech">With Technology</h1>
          </div>
          <div className="col-md-4 d-flex align-items-center lineThreeImage">
            <Image src="/images/circle.png" alt="test" width={40} height={40} />
            <Image src="/images/circle.png" alt="test" width={40} height={40} />
            <Image src="/images/circle.png" alt="test" width={40} height={40} />
          </div>
        </div>
      </section>
      <section className="ml-5 mr-5">
        <div className="row">
          <div className="col-md-8 slideimageThree">
            <i className="fa fa-facebook" aria-hidden="true"></i>
            <i className="fa fa-youtube-play" aria-hidden="true"></i>
            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            <h1>Explore our services, Make your smile shine</h1>
            <div>
              <button>Get The app </button>
              <button>Meet the team </button>
            </div>
          </div>
          <div className="col-md-4 sliderImages d-flex">
            <div className="sliderImagesOne">
              <Image
                src="/images/card.png"
                alt="test"
                width={160}
                height={190}
              />
              <Image
                src="/images/card.png"
                alt="test"
                width={160}
                height={190}
              />
              <Image
                src="/images/card.png"
                alt="test"
                width={160}
                height={190}
              />
              <Image
                src="/images/card.png"
                alt="test"
                width={160}
                height={190}
              />
              <Image
                src="/images/card.png"
                alt="test"
                width={160}
                height={190}
              />
            </div>
            <div className="sliderImagesTwo">
              <Image
                src="/images/card.png"
                alt="test"
                width={160}
                height={190}
              />
              <Image
                src="/images/card.png"
                alt="test"
                width={160}
                height={190}
              />
              <Image
                src="/images/card.png"
                alt="test"
                width={160}
                height={190}
              />
              <Image
                src="/images/card.png"
                alt="test"
                width={160}
                height={190}
              />
              <Image
                src="/images/card.png"
                alt="test"
                width={160}
                height={190}
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
