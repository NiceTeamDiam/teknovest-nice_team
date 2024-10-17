import React from 'react'
import Hero from '../components/Hero'
import Service from '../components/Service'
import Portofolio from '../components/Portofolio'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Hero />
      <Service />
      <Portofolio />
      <Footer />
    </div>
  )
}

export default Home
