import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import GrabBtn from "../Grabbtn/GrabBtn"
import * as styles from "./events.module.css"

const Events = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h1>EVENTS</h1>
      </div>
      <div className={styles.tickets}>
        <div className={styles.ticketHeading}>
          <h2>TICKETS</h2>
        </div>
        <div className={styles.ticketContainer}>
          <div className={styles.exImgContainer}>
            <StaticImage
              alt="Day 1"
              src="../../images/ticket1.svg"
              loading="lazy"
              className={styles.exImg}
            />
            <StaticImage
              alt="Day 2"
              src="../../images/ticket2.svg"
              loading="lazy"
              className={styles.exImg}
            />
          </div>
          <div className={styles.grabBtnContainer}>
            <GrabBtn />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Events
