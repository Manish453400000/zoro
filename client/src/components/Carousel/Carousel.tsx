import { useRef, useEffect } from 'react';

import ContentWraper from '../ContentWraper'
import ShowCard from './ShowCard'

function Carousel() {
  const carousel = useRef<HTMLDivElement>(null)
  

  const navigation = (dir:string) => {
    if(carousel.current) {
      const container = carousel.current;
      console.log(container.scrollLeft, container.offsetWidth);
      
      const scrollAmount = dir === "left" ? container.scrollLeft - (container.offsetWidth) : container.scrollLeft + (container.offsetWidth);
      
      container.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      })
    }
  }


  return (
    <div className='carousel md:my-[2rem] my-[20px] max-w-[110rem] m-auto select-none'>
      <ContentWraper>
        <div className="head flex justify-between items-center text-white w-[100%] ">
          <h3 className=' text-[28px] lg:text-[30px] xl:text-[34px] font-unique text-unique'>Trending</h3>
          <div className="more-btn flex items-center text-[12px] gap-[5px] cursor-pointer">
            <span>View more</span>
            <i className='bx bx-chevron-right text-[16px]' ></i>
          </div>
        </div>

        <div className="carousel-container scroll-smooth my-[8px] md:my-[20px] flex items-center overflow-auto">
          
          <div className="scroll-container flex gap-[10px] flex-1 overflow-auto" ref={carousel}>
            <ShowCard />
            <ShowCard />
            <ShowCard />
            <ShowCard />
            <ShowCard />
            <ShowCard />
            <ShowCard />
            <ShowCard />
            <ShowCard />
            <ShowCard />
          </div>
          
           <div className="arrow-btn h-full py-[5px] hidden md:flex flex-col gap-[5px] justify-center items-center">
              <div className="left bg-spacial-hover flex-center py-[2rem] xl:py-[3rem] p-[4px] text-[32px] bg-secondary text-white rounded-[5px] cursor-pointer" onClick={() => navigation('left')} >
                <i className='bx bx-chevron-left'></i>
              </div>
              <div className="right bg-spacial-hover flex-center py-[2rem] xl:py-[3rem] p-[4px] text-[32px] bg-secondary text-white rounded-[5px] cursor-pointer" onClick={() => {
                navigation('right')
              }} >
                <i className='bx bx-chevron-right' ></i>
              </div>
           </div>
         
        </div>
             

      </ContentWraper>
    </div>
  )
}

export default Carousel


// <div className="arrow-btn h-full py-[5px] hidden md:flex flex-col gap-[5px] justify-center items-center">
//             <div className="left bg-spacial-hover flex-center py-[18px] p-[4px] text-[32px] bg-secondary text-white rounded-[5px] cursor-pointer" >
//              <i className='bx bx-chevron-left'></i>
//            </div>
//            <div className="right bg-spacial-hover flex-center py-[18px] p-[4px] text-[32px] bg-secondary text-white rounded-[5px] cursor-pointer" >
//              <i className='bx bx-chevron-right' ></i>
//            </div>
//           </div>