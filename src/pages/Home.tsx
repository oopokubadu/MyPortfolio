import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import WorkWithUs from '../components/WorkWithUs'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'
import Teams from '../components/Teams'

function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <WorkWithUs/>
      <Services/>
      <Teams/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default Home
