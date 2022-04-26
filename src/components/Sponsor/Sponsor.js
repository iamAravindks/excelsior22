import React from "react"
import * as styles from "./sponsor.module.css"
import { StaticImage } from "gatsby-plugin-image"

const Sponsor = () => {
  return (
    <div className={styles.sponsorSection}>
      <h1>Sponsors</h1>
      <StaticImage
        alt={"AI - Image"}
        placeholder={"blurred"}
        className={styles.alumni}
        src="../../images/alumni-sponsor.svg"
        loading="lazy"
      />
      <div className={styles.sponsorText}>
        <h2 className={styles.text}>Alumni GEC Palakkad</h2>
        <h3>A token of love and appreciation</h3>
      </div>
    </div>
  )
}

export default Sponsor
