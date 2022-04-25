import React from "react"
import * as styles from "./guests.module.css"
import a from "./images/a"
import b from "./images/b"
import c from "./images/c"
import d from "./images/d"
import e from "./images/e"
import f from "./images/f"
import g from "./images/g"
import h from "./images/h"

const Guests = () => {
  return (
    <div className={styles.guestSection}>
      <h1>Guests</h1>
      <div className={styles.guests}>
        <div className={styles.first}>
          <div className={styles.imageComponent + " " + styles.a}>
            <div className={styles.letter}>g</div>
            <div className={styles.content}>
              <img src={a} />
            </div>
          </div>
          <div className={styles.imageComponent + " " + styles.b}>
            <div className={styles.letter}>U</div>
            <div className={styles.content}>
              <img src={b} />
            </div>
          </div>
          <div className={styles.imageComponent + " " + styles.c}>
            <div className={styles.letter}>e</div>
            <div className={styles.content}>
              <img src={c} />
            </div>
          </div>
        </div>
        <div className={styles.second}>
          <div className={styles.imageComponent + " " + styles.d}>
            <div className={styles.letter}>s</div>
            <div className={styles.content}>
              <img src={d} />
            </div>
          </div>
          <div className={styles.imageComponent + " " + styles.e}>
            <div className={styles.letter}>t</div>
            <div className={styles.content}>
              <img src={e} />
            </div>
          </div>
          <div className={styles.imageComponent + " " + styles.f}>
            <div className={styles.letter}>s</div>
            <div className={styles.content}>
              <img src={f} />
            </div>
          </div>
        </div>
        <div className={styles.third}>
          <div className={styles.imageComponent + " " + styles.g}>
            <div className={styles.content}>
              <img src={g} />
            </div>
          </div>
          <div className={styles.imageComponent + " " + styles.h}>
            <div className={styles.content}>
              <img src={h} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Guests
