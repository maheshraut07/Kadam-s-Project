import React from 'react'
import Navbar from './shared/Navbar'
import Footer from './shared/Footer'
import HeroSection from './HeroSection'
import Grapes from './Grapes'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <Grapes/>
        {/* <Footer/> */}
    </div>
  )
}

export default Home