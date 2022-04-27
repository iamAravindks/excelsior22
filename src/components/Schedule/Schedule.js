import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import * as styles from "./schedule.module.css"

const Schedule = ({ scheduleRef }) => {
  return (
    <div className={styles.container}ref={scheduleRef}>
      <div className={styles.heading}>
        <h1>SCHEDULE</h1>
      </div>
      <div className={styles.scheduleContainer}>
        <div className={styles.exImgContainer}>
          <StaticImage
            alt="Day 1"
            src="../../images/day1.png"
            loading="lazy"
            className={styles.exImg}
          />
          <StaticImage
            alt="Day 2"
            src="../../images/day2.png"
            loading="lazy"
            className={styles.exImg}
          />
          <StaticImage
            alt="Day 3"
            src="../../images/day3.png"
            loading="lazy"
            className={styles.exImg}
          />
        </div>
      </div>
    </div>
  )
}

export default Schedule
