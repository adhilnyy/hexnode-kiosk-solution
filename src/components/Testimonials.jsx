import {useState, useEffect} from 'react'
import testimonialsData from '../data/testimonialsData.json'
import prevArrow from '../assets/prev-arrow-icon.svg'
import nextArrow from '../assets/next-arrow-icon.svg'
import Slider from './Slider'


const Testimonials = () => {

    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(()=>{
            goToNext()
        }, 10000)

        return () => clearInterval(interval)
        
    }, [])

    const goToNext = () => {
        setCurrentIndex((prev) => prev < testimonialsData.length - 1 ? prev + 1 : 0) 
    }

    const goToPrev = () => {
        setCurrentIndex((prev) => prev > 0 ? prev - 1 : testimonialsData.length - 1)
    }

    if (testimonialsData.length === 0) return null;


  return (
    <div className='bg-white-tab grid place-items-center'>
        <div className="container">
        <h2 className="antialiased text-[32px] md:text-[40px] leading-[40px] md:leading-[1.3] text-center font-bold text-blue pb-0 md:pb-[20px]">Why should you choose Hexnode?</h2>
        <div className="pt-[40px] pb-[80px] grid grid-cols-12 place-items-center lg:pb-0">
            <div className='col-span-2'>
                <button onClick={ goToPrev} className='bg-white w-14 h-14 rounded-xl'>
                    <img src={prevArrow} alt="previous" />
                </button>      
            </div>
                <div className={`col-span-8 bg-white grid grid-cols-12 gap-5 `}>
                    <div className='col-span-3'>                       
                        <img src={testimonialsData[currentIndex].image} alt={testimonialsData[currentIndex].name} />
                    </div>
                    <div className='col-span-9'>
                        <h4>{testimonialsData[currentIndex].quote}</h4>
                       <hr />
                        <h6>{testimonialsData[currentIndex].name}</h6>
                        <p>{testimonialsData[currentIndex].designation}</p>
                        <p>{testimonialsData[currentIndex].company}</p>
                    </div>
                </div>
            <div className="col-span-2">
                <button onClick={goToNext} className='bg-white w-14 h-14 rounded-xl'>
                    <img src={nextArrow} alt="next" />
                </button>   
            </div>
        </div>
        
        </div>
    </div>
  )
}

export default Testimonials