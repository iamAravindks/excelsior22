import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import GrabBtn from "../Grabbtn/GrabBtn"
import * as styles from "./landing.module.css"

const Landing = () => {
  return (
    <div className={styles.container}>
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
    </div>
  )
}

export default Landing
