import React from 'react'
import Idc from './../assests/idc.webp'
import Gartner from './../assests/gartner.webp'
import Forrester from './../assests/forrester.webp'


const Achievements = () => {
    const AchievementsData = [
        { src: Idc, alt: 'Idc', content : "Hexnode is listed as a leader and a major player in IDC MarketScape UEM Vendors Assessment Reports 2024." },
        { src: Gartner, alt: 'Gartner', content : "Hexnode was recognized in the 2023 Gartner® Market Guide for Unified Endpoint Management Tools."},
        { src: Forrester, alt: 'Forrester', content : "Forrester includes Hexnode as a Notable vendor in The Unified Endpoint Management Landscape, Q3 2023."},
      ];
  return (
    <div className='bg-black-400'>
        <div className='flex flex-wrap'>
        {
            AchievementsData.map((data, index) => (
                <div key={index} className='' >
                    <div className='min-w-[82px] max-w-[156px] max-h-[25px]'>
                        <img src={data.src} alt={data.alt} className='w-full object-fit' />
                    </div>
                    <p className='text-white '>{data.content}</p>
                </div>
            ))
 
        }
        </div>
    </div>
  )
}

export default Achievements