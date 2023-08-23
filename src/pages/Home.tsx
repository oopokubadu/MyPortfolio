import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import WorkWithUs from '../components/WorkWithUs'
import Services from '../components/Services'

function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <WorkWithUs/>
      <Services/>
    </div>
  )
}

export default Home
