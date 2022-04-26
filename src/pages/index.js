import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Landing from "../components/Landing/index"
import Guests from "../components/Guests/Guests"
import Schedule from "../components/Schedule/Schedule"
import Events from "../components/Events/Events"
import Workshops from "../components/Workshops"
import Interactions from "../components/Interactions"
import Sponsor from "../components/Sponsor"
import Faq from "../components/Faq"
import Contact from "../components/Contact"
import AlumnisTalk from "../components/AlumnisTalk/index"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Landing />
    <Guests />
    <Events />
    <Schedule />
    <Workshops />
    <Interactions />
    <Sponsor />
    <AlumnisTalk />
    <Faq />
    <Contact />
  </Layout>
)

export default IndexPage
