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
  handleNavBar,
}) => {
  const handleNavBarClick = ref => {
    handleNavBar()
    handleScroll(ref)
  }
  if (!sideNavBarStatus) return null
  else {
    return (
      <div className={styles.sidebar}>
        <div className={styles.brand}>
          <StaticImage
            alt={"AI - Image"}
            placeholder={"blurred"}
            className={styles.logo}
            src={"../../images/favicon.png"}
          />
          <h2 className={styles.brandText}>Excelsior'22</h2>
        </div>
        <hr />
        <div className={styles.sideBarMenu}>
          <a onClick={() => handleNavBarClick(guestsRef)}>Guests</a>
          <a onClick={() => handleNavBarClick(workshopsRef)}>Workshops</a>
          <a onClick={() => handleNavBarClick(scheduleRef)}>Schedule</a>
          <a onClick={() => handleNavBarClick(eventRef)}>Events</a>
          <a onClick={() => handleNavBarClick(alumniRef)}>AlumnisTalk</a>
          {/* <a onClick={() => handleNavBarClick(sponsorRef)}>Sponsors</a> */}
          <a onClick={() => handleNavBarClick(faqRef)}>FAQ</a>
          <a onClick={() => handleNavBarClick(contactRef)}>Team</a>
        </div>
      </div>
    )
  }
}

export default SideNavbar
