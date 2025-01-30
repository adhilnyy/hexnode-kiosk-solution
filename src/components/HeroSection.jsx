import React from 'react'
import Form from './Form'
import heroImage from './../assets/heroSection.webp'

const HeroSection = () => {

  const title = "Turn your devices into kiosks in a few minutes with Hexnode UEM"

  return (
    <div className='bg-blue flex-1 grid place-items-center' >
        <div className="container grid grid-cols-12 place-items-center py-5">
            <div className='col-span-12 lg:col-span-6 order-4 lg:order-1'>
                <h1 className='mb-10' aria-label={title}>{title}</h1>
                <Form btnContent={"get started now!"} />
            </div>
            <div className='col-span-12 lg:col-span-6 order-3 lg:order-2' >
                <img loading="lazy" className='object-contain w-fit h-fit' role="img" aria-label="Illustration of Hexnode UEM Kiosk" src={heroImage} alt='Hexnode UEM Kiosk' />
            </div>
        </div>
    </div>
  )
}

export default HeroSection