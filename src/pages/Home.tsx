import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import WorkWithUs from '../components/WorkWithUs'
import Services from '../components/Services'
import Team from '../components/Team'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'

function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <WorkWithUs/>
      <Services/>
      <Team/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default Home
