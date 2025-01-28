import React from 'react'
import Idc from './../assets/idc.webp'
import Gartner from './../assets/gartner.webp'
import Forrester from './../assets/forrester.webp'

const AchievementsData = [
    { src: Idc, alt: 'Idc', href: "https://www.hexnode.com/blogs/mitsogo-hexnode-named-a-leader-in-idc-marketscape-worldwide-uem-software-for-apple-devices-2024-vendor-assessment/", content : "Hexnode is listed as a leader and a major player in IDC MarketScape UEM Vendors Assessment Reports 2024." },
    { src: Gartner, alt: 'Gartner', href:"https://www.hexnode.com/blogs/hexnode-listed-as-a-notable-vendor-in-gartner-midmarket-context-magic-quadranttm-for-unified-endpoint-management-tools/",  content : "Hexnode was recognized in the 2023 Gartner® Market Guide for Unified Endpoint Management Tools."},
    { src: Forrester, alt: 'Forrester', href:"https://www.hexnode.com/blogs/hexnode-included-in-the-unified-endpoint-management-landscape-report/", content : "Forrester includes Hexnode as a Notable vendor in The Unified Endpoint Management Landscape, Q3 2023."},
  ];

const Achievements = () => {

  return (
    <div className='bg-black-400 grid place-items-center md:py-[30px]'>
        <div className='container'>
        <div className='grid grid-cols-12 divide-x-1 divide-white/20'>
        {
            AchievementsData.map((data, index) => (
                <a key={index} href={data.href} className={`col-span-4  
                    ${index === 0 ? "px-0" : "md:px-[10px] lg:px-[25px] xl:px-[45px]"} `} >
                    <div className='transition-transform duration-300 hover:-translate-y-1'>
                    <div className='flex items-center min-w-[82px] max-w-[156px] max-h-[25px] mb-[15px]'>
                        <img src={data.src} alt={data.alt} className='object-fit' />
                    </div>
                    <p className='font-normal text-white/60 text-sm'>{data.content}</p>
                    </div>
                </a>
            ))
 
        }
        </div>
        </div>
    </div>
  )
}

export default Achievements