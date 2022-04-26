import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import GrabBtn from "../Grabbtn/GrabBtn"
import * as styles from "./landing.module.css"
import Schedule from "../Schedule"
import Events from "../Events"

const Landing = ({ aboutRef }) => {
  return (
    <div className={styles.container} ref={aboutRef}>
      {/* image section  */}
      <div className={styles.exImgMain}>
        <div className={styles.exImgContainer}>
          <StaticImage
            alt="excelsior'22"
            src="../../images/exMain.svg"
            loading="lazy"
            className={styles.exImg}
          />
          <GrabBtn />
        </div>
      </div>

      {/* Hero text */}

      <div className={styles.heroText}>
        <div className={styles.line1}></div>
        <h1>rise above the rest</h1>
        <div className={styles.line2}></div>
      </div>

      {/* info section */}

      <div className={styles.infoContainer}>
        <div className={styles.question}>
          <div>
            <h2>What is</h2>
            <h1>EXCELSIOR'22</h1>
          </div>
        </div>
        <div className={styles.answer}>
          <p className={styles.answer1}>
            Excelsior 2022 is the fourth iteration of the flagship event of IEEE
            SB GEC Palakkad. It is conducted at Government Engineering College
            Sreekrishnapuram, Palakkad, and lasts for about 3 days. The
            participation of active and enthusiast engineering students all over
            Kerala marks the major attraction of the occasion.
          </p>
          <p className={styles.answer2}>
            The tech fest comprises the coalesce of different technological
            workshops and interactive disquisitions by proficient personalities
            according to each student's passion in their respective
            fields.Excelsior’22 offers a platform for learning and augmenting
            technical virtuosity, and knowledge, without bound and in annex lots
            of fun and entertainment ingredients to boost up the spirit of
            vibrant technophiles.
          </p>
        </div>
      </div>

      {/* logo section */}

      <div className={styles.logoContainer}>
        <StaticImage
          alt="excelsior coordinators"
          src="../../images/logoGroup.svg"
          loading="lazy"
          className={styles.logoImg}
        />
        <StaticImage
          alt="excelsior coordinators"
          src="../../images/logoGroupMb.svg"
          loading="lazy"
          className={styles.logoImgMb}
        />
      </div>
    </div>
  )
}

export default Landing
