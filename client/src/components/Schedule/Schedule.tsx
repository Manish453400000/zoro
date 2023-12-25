import {useRef} from 'react'

import Date from './Date'

const Schedule = () => {
  const scroller = useRef<HTMLDivElement>(null)

  const scrollHandler = (dir:string) => {
    if(scroller.current){
      const container = scroller.current

      const scrollAmount = dir === 'left' ? container.scrollLeft - (container.offsetWidth) : container.scrollLeft + (container.offsetWidth)

      // const test = (scrollAmount / 7) * 3
      container.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      })
      
    }
  }



  const dates = [
    {
      day:'Sun',
      date:'Dec 17'
    },
    {
      day:'Mon',
      date:'Dec 18'
    },
    {
      day:'Tue',
      date:'Dec 19'
    },
    {
      day:'Wed',
      date:'Dec 20'
    },
    {
      day:'Thu',
      date:'Dec 21'
    },
    {
      day:'Fri',
      date:'Dec 22'
    },
    {
      day:'Sat',
      date:'Dec 23'
    }
  ]
  return (
    <div className='w-[100%]'>
      
      <div className="head mb-[10px] flex flex-wrap items-start sm:items-center flex-col sm:flex-row sm:gap-[20px]">
          <h5 className='text-unique font-unique text-[26px] lg:text-[28px] whitespace-nowrap'>Estimated Schedule</h5>
          <div className="timer text-white px-[16px] py-[5px] rounded-[30px]">12/22/2023 10:30:05</div>
      </div>

      <div className="main-container bg-[#25262a] p-[8px] md:py-[15px] md:px-[22px]">
          <div className="date-container relative mb-[30px]">
            <div 
            className="bg-aqua-hover  left-arrow-btn text-[24px] text-black bg-white  w-[30px] h-[30px] absolute  top-[50%] left-[-15px] translate-y-[-50%] rounded-[50%] cursor-pointer hidden md:flex justify-center items-center"
            onClick={() => scrollHandler('left')}
            >
               <i className='bx bx-chevron-left'></i>
            </div>

            <div className="date flex gap-[5px] md:gap-[10px] w-[100%] overflow-auto my-[10px]" ref={scroller}>
              <Date day={'Mon'} date={'Dec 25'} active={true} />
                {
                  dates.map((date, index) => {
                    return <Date day={date.day} date={date.date} active={false} key={index} />
                  }) 
                }
                  <Date day={'Mon'} date={'Dec 25'} active={false} />
                  <Date day={'Mon'} date={'Dec 25'} active={false} />
                  <Date day={'Mon'} date={'Dec 25'} active={false} />
                  <Date day={'Mon'} date={'Dec 25'} active={false} />
                  <Date day={'Mon'} date={'Dec 25'} active={false} />
            </div>
            
            <div 
            className="bg-aqua-hover  right-arrow-btn text-[24px] text-black bg-white  w-[30px] h-[30px] absolute top-[50%] right-[-15px] translate-y-[-50%] rounded-[50%] cursor-pointer hidden sm:flex justify-center items-center"
            onClick={() => scrollHandler('right')}
            >
               <i className='bx bx-chevron-right'></i>
            </div>

          </div> 

          <div className="schedule-lists text-white text-[14px]">


            <div className="item bg-[#2d2e33] flex justify-between items-center py-[15px] px-[10px]">
              <div className="left flex gap-[20px] ">
                <span>17.30</span>
                <span className='font-bold'>Stardust Telepath</span>
              </div>
              <div className="right">
                <div className="ep-btn text-[12px] py-[5px] px-[15px] bg-secondary rounded-[5px] flex items-center gap-[5px]">
                  <i className='bx bx-play-circle'></i>
                  <span className=''>Watch Now</span>
                </div>
              </div>
            </div>

            <div className="item flex justify-between items-center py-[15px] px-[10px]">
              <div className="left flex gap-[20px] ">
                <span>17.30</span>
                <span className='font-bold'>Stardust Telepath</span>
              </div>
              <div className="right">
                <div className="ep-btn text-[12px] py-[5px] px-[15px] bg-secondary rounded-[5px] flex items-center gap-[5px]">
                  <i className='bx bx-play-circle'></i>
                  <span className=''>Watch Now</span>
                </div>
              </div>
            </div>

            <div className="item bg-[#2d2e33] flex justify-between items-center py-[15px] px-[10px]">
              <div className="left flex gap-[20px] ">
                <span>17.30</span>
                <span className='font-bold'>Stardust Telepath</span>
              </div>
              <div className="right">
                <div className="ep-btn text-[12px] py-[5px] px-[15px] bg-secondary rounded-[5px] flex items-center gap-[5px]">
                  <i className='bx bx-play-circle'></i>
                  <span className=''>Watch Now</span>
                </div>
              </div>
            </div>

            <div className="item flex justify-between items-center py-[15px] px-[10px]">
              <div className="left flex gap-[20px] ">
                <span>17.30</span>
                <span className='font-bold'>Stardust Telepath</span>
              </div>
              <div className="right">
                <div className="ep-btn text-[12px] py-[5px] px-[15px] bg-secondary rounded-[5px] flex items-center gap-[5px]">
                  <i className='bx bx-play-circle'></i>
                  <span className=''>Watch Now</span>
                </div>
              </div>
            </div>

            <div className="item bg-[#2d2e33] flex justify-between items-center py-[15px] px-[10px]">
              <div className="left flex gap-[20px] ">
                <span>17.30</span>
                <span className='font-bold'>Stardust Telepath</span>
              </div>
              <div className="right">
                <div className="ep-btn text-[12px] py-[5px] px-[15px] bg-secondary rounded-[5px] flex items-center gap-[5px]">
                  <i className='bx bx-play-circle'></i>
                  <span className=''>Watch Now</span>
                </div>
              </div>
            </div>

            <div className="item flex justify-between items-center py-[15px] px-[10px]">
              <div className="left flex gap-[20px] ">
                <span>17.30</span>
                <span className='font-bold'>Stardust Telepath</span>
              </div>
              <div className="right">
                <div className="ep-btn text-[12px] py-[5px] px-[15px] bg-secondary rounded-[5px] flex items-center gap-[5px]">
                  <i className='bx bx-play-circle'></i>
                  <span className=''>Watch Now</span>
                </div>
              </div>
            </div>

            <div className="item bg-[#2d2e33] flex justify-between items-center py-[15px] px-[10px]">
              <div className="left flex gap-[20px] ">
                <span>17.30</span>
                <span className='font-bold'>Stardust Telepath</span>
              </div>
              <div className="right">
                <div className="ep-btn text-[12px] py-[5px] px-[15px] bg-secondary rounded-[5px] flex items-center gap-[5px]">
                  <i className='bx bx-play-circle'></i>
                  <span className=''>Watch Now</span>
                </div>
              </div>
            </div>

          </div>
        </div>

    </div>
  )
}

export default Schedule






// <div className="head flex flex-wrap items-start sm:items-center flex-col sm:flex-row sm:gap-[20px]">
//           <h5 className='text-unique text-[26px] lg:text-[28px] whitespace-nowrap'>Estimated Schedule</h5>
//           <div className="timer text-white px-[16px] py-[5px] rounded-[30px]">12/22/2023 10:30:05</div>
//         </div>
//         <div className="title overflow-hidden">
//           <div className="dates relative ">
//             <div className="bg-aqua-hover  left-arrow-btn text-[24px] text-black bg-white  w-[30px] h-[30px] absolute  top-[50%] left-[0px] translate-y-[-50%] rounded-[50%] opacity-80 cursor-pointer hidden sm:flex justify-center items-center">
//               <i className='bx bx-chevron-left'></i>
//             </div>
            // <div className="date flex title gap-[5px] md:gap-[10px] w-[100%] overflow-auto my-[10px]">
            //   <Date day={'Mon'} date={'Dec 25'} />
            //   <Date day={'Mon'} date={'Dec 25'} />
            //   <Date day={'Mon'} date={'Dec 25'} />
            //   <Date day={'Mon'} date={'Dec 25'} />
            //   <Date day={'Mon'} date={'Dec 25'} />
            //   <Date day={'Mon'} date={'Dec 25'} />
            //   <Date day={'Mon'} date={'Dec 25'} />
            //   <Date day={'Mon'} date={'Dec 25'} />
            //   <Date day={'Mon'} date={'Dec 25'} />
            //   <Date day={'Mon'} date={'Dec 25'} />
            //   <Date day={'Mon'} date={'Dec 25'} />
            //   <Date day={'Mon'} date={'Dec 25'} />
            //   <Date day={'Mon'} date={'Dec 25'} />
            //   <Date day={'Mon'} date={'Dec 25'} />
            // {/* {
            //   dates.map((date, index) => {
            //     return <Date day={date.day} date={date.date} key={index} />
            //   }) 
            // } */}
            // </div>
//             <div className="bg-aqua-hover  right-arrow-btn text-[24px] text-black bg-white  w-[30px] h-[30px] absolute top-[50%] right-[0px] translate-y-[-50%] rounded-[50%] opacity-80 cursor-pointer hidden sm:flex justify-center items-center">
//               <i className='bx bx-chevron-right'></i>
//             </div>
//           </div>
//         </div>