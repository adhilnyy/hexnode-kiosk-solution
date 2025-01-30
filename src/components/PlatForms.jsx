import React from 'react'
import Andriod from './../assets/android.svg'
import Windows from './../assets/windows.svg'
import Ios from './../assets/ios.svg'
import AndriodTv from './../assets/android-tv.svg'
import AppleTv from './../assets/apple-tv.svg'
import AmazonFire from './../assets/amazon-fire.webp'


const platformsData = [
    { src: Andriod, alt: 'Android' },
    { src: Windows, alt: 'Windows'},
    { src: Ios, alt: 'iOS'},
    { src: AndriodTv, alt: 'Android TV'},
    { src: AppleTv, alt: 'Apple TV'},
    { src: AmazonFire, alt: 'Amazon Fire'}
    ]



const PlatForms = () => {
  return (
    <div className='bg-white grid place-items-center py-[60px] lg:py-30'>
        <div className='container'>
            <h2 className='text-center mb-10 text-blue text-[32px] leading-[40px] antialiased font-bold md:mb-[60px] sm:text-[40px] sm:leading-[1.3]'>Platforms supported</h2>
            <div className='flex flex-wrap lg:justify-start justify-center'>
                {platformsData.map((data, index) => (
                    <div key={index} className='max-w-[150px] h-[60px] sm:max-w-[190px] sm:h-[72px] rounded-[10px] mb-[25px] sm:mb-[15px] px-[12px] max-xs:even:pr-0 max-xs:odd:pl-0'>
                        <img loading="lazy" src={data.src} alt={data.alt} className='transition-transform duration-300 hover:-translate-y-1' />
                    </div>
                ))}
            </div>

        </div>
    </div>
  )
}

export default PlatForms