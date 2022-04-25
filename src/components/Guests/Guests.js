import React from "react"
import * as styles from "./guests.module.css"
import a from "./images/a.png"
import b from "./images/b.png"
import c from "./images/c.png"
import d from "./images/d.png"
import e from "./images/e.png"
import f from "./images/f.png"
import g from "./images/g.png"
import h from "./images/h.png"

const Guests = () => {
  return (
    <div className={styles.guestSection}>
      <h1>Guests</h1>
      <div className={styles.guests}>
        <div className={styles.first}>
          <div className={styles.imageComponent + " " + styles.a}>
            <div className={styles.letter}>g</div>
            <div className={styles.content}>
              <h5>Prof. Achuthsankar S. Nair</h5>
              <p>description</p>
              <img src={a} />
            </div>
          </div>
          <div className={styles.imageComponent + " " + styles.b}>
            <div className={styles.letter}>U</div>
            <div className={styles.content}>
              <h5>Name</h5>
              <p>description</p>
              <img src={b} />
            </div>
          </div>
          <div className={styles.imageComponent + " " + styles.c}>
            <div className={styles.letter}>e</div>
            <div className={styles.content}>
              <h5>Name</h5>
              <p>description</p>
              <img src={c} />
            </div>
          </div>
        </div>
        <div className={styles.second}>
          <div className={styles.imageComponent + " " + styles.d}>
            <div className={styles.letter}>s</div>
            <div className={styles.content}>
              <h5>Name</h5>
              <p>description</p>
              <img src={d} />
            </div>
          </div>
          <div className={styles.imageComponent + " " + styles.e}>
            <div className={styles.letter}>t</div>
            <div className={styles.content}>
              <h5>Name</h5>
              <p>description</p>
              <img src={e} />
            </div>
          </div>
          <div className={styles.imageComponent + " " + styles.f}>
            <div className={styles.letter}>s</div>
            <div className={styles.content}>
              <h5>Name</h5>
              <p>description</p>
              <img src={f} />
            </div>
          </div>
        </div>
        <div className={styles.third}>
          <div className={styles.imageComponent + " " + styles.g}>
            <div className={styles.content}>
              <h5>Name</h5>
              <p>description</p>
              <img src={g} />
            </div>
          </div>
          <div className={styles.imageComponent + " " + styles.h}>
            <div className={styles.content}>
              <h5>Name</h5>
              <p>description</p>
              <img src={h} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Guests
