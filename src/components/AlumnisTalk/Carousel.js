import { StaticImage } from "gatsby-plugin-image"
import React, { useEffect, useRef, useState } from "react"
import * as styles from "./carousel.module.css"
import { peopleDesktop } from "./constants/data"
import { Slider } from "./Slider"
const Carousel = () => {
  const state = useRef(peopleDesktop)
  const [currentSlide, setCurrentSlide] = useState(0)
  const delay = useRef(4000)
  console.log({ currentSlide })
  useEffect(() => {
    const { length } = state.current
    // console.log(length)

    if (currentSlide === length) {
      setCurrentSlide(0)
    }
  }, [currentSlide])

  useEffect(() => {
    let slider = setInterval(() => {
      setCurrentSlide(prevSlide => prevSlide + 1)
    }, delay.current)
    return () => {
      clearInterval(slider)
    }
  }, [currentSlide])

  return (
    <>
      <div className={styles.sliderContainer}>
        <StaticImage
          alt="Excelsior'22"
          loading="lazy"
          src="../../images//exC.svg"
          className={styles.sliderHead}
        />
        <Slider currentSlide={currentSlide} slides={state.current} />
        <h1 className={styles.sliderFooter}>GEC PALAKKAD</h1>
      </div>
    </>
  )
}

export default Carousel


