import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Landing from "../components/Landing/index"
import Guests from "../components/Guests/Guests"
import Schedule from "../components/Schedule/Schedule"
import  react,{useState,useRef} from 'react'
import Events from "../components/Events/Events"
import Workshops from "../components/Workshops"
import Interactions from "../components/Interactions"
import Sponsor from "../components/Sponsor"
import Faq from "../components/Faq"
import Contact from "../components/Contact"
import AlumnisTalk from '../components/AlumnisTalk/index'
import Header from "../components/Header/Header"
import SideNavbar from "../components/sidebar/SideNavbar"

const IndexPage = () =>
{
  const [sideNavBarStatus, setSideNavBarStatus] = useState(false)

    const aboutRef = useRef(null)
    const contactRef = useRef(null)
    const eventRef = useRef(null)
    const interactionRef = useRef(null)
    const guestsRef = useRef(null)
    const workshopsRef = useRef(null)
    const scheduleRef = useRef(null)
    const alumniRef = useRef(null)
    const faqRef = useRef(null)
  
  const handleNavBar = () => setSideNavBarStatus(preState => !preState)
  
  const handleScroll = ref => {
  window.scrollTo({ top: ref.current.offsetTop, behavior: "smooth" })
  }

  return (
    <Layout>
      <Seo title="Home" />
      <Header
        sideNavBarStatus={sideNavBarStatus}
        handleNavBar={handleNavBar}
        handleScroll={handleScroll}
        aboutRef={aboutRef}
        contactRef={contactRef}
        workshopsRef={workshopsRef}
        eventRef={eventRef}
      />
      <SideNavbar
        sideNavBarStatus={sideNavBarStatus}
        handleScroll={handleScroll}
        aboutRef={aboutRef}
        contactRef={contactRef}
        guestsRef={guestsRef}
        workshopsRef={workshopsRef}
        scheduleRef={scheduleRef}
        eventRef={eventRef}
        alumniRef={alumniRef}
        faqRef={faqRef}
        handleNavBar={handleNavBar}
      />
      <Landing aboutRef={aboutRef} />
      <Guests guestsRef={guestsRef} />
      <Events eventRef={eventRef} />
      <Schedule scheduleRef={scheduleRef} />
      <Workshops workshopsRef={workshopsRef} />
      <Interactions interactionRef={interactionRef} />
      <AlumnisTalk alumniRef={alumniRef} />
      <Faq faqRef={faqRef} />
      <Contact contactRef={contactRef} />
    </Layout>
  )
}

export default IndexPage
