import SpotlightCard from "./SpotlightCard"
import { useEffect, useRef, useState } from 'react'

import spotlightData from "../falseData"

function Spotlight() {
  const scroller = useRef<HTMLDivElement>(null)
  const progressBar = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)
  const [mousedown, setMousedown] = useState(false)

  scroller.current?.addEventListener('mousedown', () => {
    setMousedown(true)
  })
  scroller.current?.addEventListener('mouseup', () => {
    setMousedown(false)
  })

  const controllProgressBar = (sliderIndex:number) => {
        setActive(sliderIndex)
  }

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      if(scroller.current) {
        const slider = scroller.current
        let sliderIndex = parseInt(getComputedStyle(slider).getPropertyValue('--slider-index'))
        if(!(sliderIndex + 1 > 8)){
          scroller.current.style.setProperty('--slider-index', `${sliderIndex + 1}`)
          controllProgressBar(sliderIndex + 1)
        }else if(sliderIndex + 1 > 8){
          scroller.current.style.setProperty('--slider-index', `${sliderIndex - 8}`)
          controllProgressBar(sliderIndex - 8)
        }
      }
    },4000)

    return () => clearInterval(intervalId);
  },[])

  const scrollHandler = (dir:string) => {
    if(scroller.current) {
        const slider = scroller.current
        let sliderIndex = parseInt(getComputedStyle(slider).getPropertyValue('--slider-index'))
        if(dir === 'left'){
          if(!(sliderIndex - 1 < 0)){
          scroller.current.style.setProperty('--slider-index', `${sliderIndex - 1}`)
          controllProgressBar(sliderIndex - 1)
        }else if(sliderIndex - 1 < 0){
          scroller.current.style.setProperty('--slider-index', `${sliderIndex + 8}`)
          controllProgressBar(sliderIndex + 8)
        }
        }
        if(dir === 'right'){
          if(!(sliderIndex + 1 > 8)){
          scroller.current.style.setProperty('--slider-index', `${sliderIndex + 1}`)
          controllProgressBar(sliderIndex + 1)
        }else if(sliderIndex + 1 > 8){
          scroller.current.style.setProperty('--slider-index', `${sliderIndex - 8}`)
          controllProgressBar(sliderIndex - 8)
        }
        }
      }
  }

  const mapHandler = (index:number) => {
    if(scroller.current) {
      const slider = scroller.current
      let sliderIndex = parseInt(getComputedStyle(slider).getPropertyValue('--slider-index'))
      if(sliderIndex < index) {
        let calcIndex = index - sliderIndex;
        slider.style.setProperty('--slider-index', `${sliderIndex + calcIndex}`)
        controllProgressBar(sliderIndex + calcIndex)
      }
      if(sliderIndex > index) {
        let calcIndex = sliderIndex - index;
        slider.style.setProperty('--slider-index', `${sliderIndex - calcIndex}`)
        controllProgressBar(sliderIndex - calcIndex)
      }
    }
  }


  return (
    <div className="div max-w-[110rem] max-h-[38rem] m-auto overflow-hidden relative">
        <div className={`flex flex-row flex-nowrap justify-start m-auto items-center scroller w-[100%] select-none ${mousedown? 'cursor-grabbing':'cursor-grab'}`} ref={scroller}>
            {
              spotlightData.map((card, index)=> {
                return (
                  <SpotlightCard img={card.img} title={card.title} genre={card.genre} des={card.description} duration={card.duration} releasedOn={card.releasedOn} index={index} />
                )
              })
            }
        </div>

        <div className="buttons absolute right-[10px] bottom-[30px] hidden sm:flex flex-col justify-center items-center gap-[5px]">
           <div className="left bg-spacial-hover flex-center p-[4px] text-[32px] bg-secondary text-white rounded-[5px] cursor-pointer" onClick={() => scrollHandler('left')} >
             <i className='bx bx-chevron-left'></i>
           </div>
           <div className="right bg-spacial-hover flex-center p-[4px] text-[32px] bg-secondary text-white rounded-[5px] cursor-pointer" onClick={() =>  scrollHandler('right')} >
             <i className='bx bx-chevron-right' ></i>
           </div>
        </div>
        
        <div className="map">
           <div className={`current flex justify-center items-center flex-col sm:flex-row absolute right-[10px] sm:right-[50%] sm:translate-x-[50%] sm:bottom-[5px] bottom-[10px] text-white text-[10px] gap-[10px]`} ref={progressBar}>
            {
              spotlightData.map((item, index) => {
                return (
                  <i className={`sp-card bx bxs-circle cursor-pointer ${active === index ? 'active':''}`} onClick={()=> mapHandler(index)} key={index}></i>
                )
              })
            }  
           </div>
         </div>

    </div>
  )
}

export default Spotlight















// <div className="relative max-w-[110rem] m-auto flex">
//       <div className="flex">

//         <SpotlightCard index={1}/>

    
        
//         <div className="buttons absolute right-[10px] bottom-[10px] hidden sm:flex flex-col justify-center items-center gap-[5px]">
//           <div className="left bg-spacial-hover flex-center p-[4px] text-[32px] bg-secondary-deep text-white rounded-[5px] cursor-pointer" onClick={() => console.log('left')} >
//             <i className='bx bx-chevron-left'></i>
//           </div>
//           <div className="right bg-spacial-hover flex-center p-[4px] text-[32px] bg-secondary-deep text-white rounded-[5px] cursor-pointer" onClick={() =>  console.log('right')} >
//             <i className='bx bx-chevron-right' ></i>
//           </div>
//         </div>
 
//         <div className="map">
//           <div className={`current flex flex-col sm:flex-row absolute right-[10px] sm:right-[50%] sm:translate-x-[50%] sm:bottom-0 bottom-[10px] text-white text-[10px] gap-[10px]`}>
//           <i className='sp-card bx bxs-circle text-yellow-500 cursor-pointer'></i>
//           <i className='sp-card bx bxs-circle cursor-pointer'></i>
//           <i className='sp-card bx bxs-circle cursor-pointer'></i>
//           <i className='sp-card bx bxs-circle cursor-pointer'></i>
//           <i className='sp-card bx bxs-circle cursor-pointer'></i>
//           <i className='sp-card bx bxs-circle cursor-pointer'></i>
//           <i className='sp-card bx bxs-circle cursor-pointer'></i>
//           <i className='sp-card bx bxs-circle cursor-pointer'></i>
//           <i className='sp-card bx bxs-circle cursor-pointer'></i>
//           </div>
//         </div>

//       </div>
//     </div>