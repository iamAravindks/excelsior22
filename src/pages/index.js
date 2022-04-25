import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Landing from "../components/Landing/index"
import Workshops from "../components/Workshops"
import Interactions from "../components/Interactions"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Landing/>
    <Workshops/>
    <Interactions/>
  </Layout>
)

export default IndexPage
