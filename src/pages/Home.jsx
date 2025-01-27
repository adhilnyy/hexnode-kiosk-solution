import React from 'react'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import Achievements from '../components/Achievements'

const Home = () => {
  return (
    <>
    <div className='flex flex-col min-h-screen'>
      <Header />
      <HeroSection />
    </div>
    <Achievements />
    </>
  )
}

export default Home