import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Landing from "../components/Landing/index"
import Schedule from "../components/Schedule/Schedule"
import Workshops from "../components/Workshops"
import Interactions from "../components/Interactions"
import Faq from "../components/Faq"
import Contact from "../components/Contact"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Landing/>
    <Workshops/>
    <Interactions/>
    <Faq/>
    <Contact/>
  </Layout>
)

export default IndexPage
