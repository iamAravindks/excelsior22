import React from "react"
import * as styles from "./guests.module.css"

const Guests = () => {
  return (
    <div className={styles.guestSection}>
      <h1>Guests</h1>
      <div className={styles.guests}>
        <div className={styles.first}>
          <div className={styles.imageComponent + " " + styles.a}>
            <div className={styles.letter}></div>
          </div>
          <div className={styles.imageComponent + " " + styles.b}>
            <div className={styles.letter}></div>
          </div>
          <div className={styles.imageComponent + " " + styles.c}>
            <div className={styles.letter}></div>
          </div>
        </div>
        <div className={styles.second}>
          <div className={styles.imageComponent + " " + styles.d}>
            <div className={styles.letter}></div>
          </div>
          <div className={styles.imageComponent + " " + styles.e}>
            <div className={styles.letter}></div>
          </div>
          <div className={styles.imageComponent + " " + styles.f}>
            <div className={styles.letter}></div>
          </div>
        </div>
        <div className={styles.third}>
          <div className={styles.imageComponent + " " + styles.g}>
            <div className={styles.letter}></div>
          </div>
          <div className={styles.imageComponent + " " + styles.h}>
            <div className={styles.letter}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Guests
