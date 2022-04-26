import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import * as styles from "./sidebar.module.css"
const SideNavbar = ({
  sideNavBarStatus,
  aboutRef,
  contactRef,
  guestsRef,
  workshopsRef,
  scheduleRef,
  eventRef,
  alumniRef,
  faqRef,
  handleScroll,
  sponsorRef,
}) => {
  if (!sideNavBarStatus) return null
  else {
    return (
      <div className={styles.sidebar}>
        <div className={styles.brand}>
          <h2 className={styles.brandText}>Excelsior'22</h2>
        </div>
        <hr />
        <div className={styles.sideBarMenu}>
          <a onClick={() => handleScroll(guestsRef)}>Guests</a>
          <a onClick={() => handleScroll(workshopsRef)}>Workshops</a>
          <a onClick={() => handleScroll(scheduleRef)}>Schedule</a>
          <a onClick={() => handleScroll(eventRef)}>Events</a>
          <a onClick={() => handleScroll(alumniRef)}>AlumnisTalk</a>
          <a onClick={() => handleScroll(sponsorRef)}>Sponsors</a>
          <a onClick={() => handleScroll(faqRef)}>FAQ</a>
          <a onClick={() => handleScroll(contactRef)}>Team</a>
        </div>
      </div>
    )
  }
}

export default SideNavbar
