import React from 'react'
import Form from './Form'
import heroImage from './../assests/heroSection.webp'

const HeroSection = () => {


  return (
    <div className='bg-blue flex-1 grid place-items-center' >
        <div className="container flex items-center">
            <div className='w-[50%]'>
                <h1 className='font-bold text-white text-[42px] leading-[53px] mb-[20px] md:mb-[40px]'>Turn your devices into <br /> kiosks in a few minutes <br /> with Hexnode UEM</h1>
                <Form btnContent={"get started now!"} />
            </div>
            <div className='w-[50%]' >
                <img className='object-contain w-fit h-fit' src={heroImage} alt='Hexnode UEM Kiosk' />
            </div>
        </div>
    </div>
  )
}

export default HeroSection