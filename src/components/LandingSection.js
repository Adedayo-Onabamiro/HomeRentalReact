import React from 'react'
import { IntroBox } from './IntroBox'
import "../index.css"
import NavbarA from './NavbarA'

export const LandingSection = () => {
  return (
    <>
      <section className='landing' style={{backgroundImage: 'url("../images/etienne-beauregard-riverin-B0aCvAVSX8E-unsplash.png")'}}>
      <NavbarA />
      <IntroBox />
      </section>
    </>
  )
}
