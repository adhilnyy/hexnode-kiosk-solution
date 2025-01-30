import React from 'react'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import Achievements from '../components/Achievements'
import KioskTabs from '../components/KioskTabs'
import Footer from '../components/Footer'
import SignUp from '../components/SignUp'
import PlatForms from '../components/PlatForms'
import Testimonials from '../components/testimonials'
import KioskModeFeatures from '../components/KioskModeFeatures'

const Home = () => {
  return (
    <>
    <div className='flex flex-col min-h-screen'>
      <Header />
      <HeroSection />
    </div>
    <Achievements />
    <KioskTabs />
    <KioskModeFeatures />
    <Testimonials />
    <PlatForms />
    <SignUp />
    <Footer />
    </>
  )
}

export default Home