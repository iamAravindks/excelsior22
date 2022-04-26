import React from 'react'
import Carousel from "./Carousel"
import * as styles from './alumni.module.css'
import Mcarousel from './mobile/Mcarousel'

const AlumnisTalk = ({alumniRef}) => {
  return (
    <section ref={alumniRef}>
      <h1>Alumni's Talk</h1>
      <Carousel />
      <Mcarousel />
    </section>
  )
}

export default AlumnisTalk