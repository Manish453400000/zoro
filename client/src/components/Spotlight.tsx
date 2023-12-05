import SpotlightCard from "./SpotlightCard"
import { useRef } from "react"

function Spotlight() {
  const itemList = useRef<HTMLDivElement>(null)
  if(itemList.current){
    const scrollContainer = itemList.current
    window.setTimeout(() => {
      scrollContainer.style.transform = `translateX(${-scrollContainer.clientWidth})`
    }, 3000)
  }
  const scrollHandler = (dir:string) => {
    if(itemList.current){
      itemList.current?.scrollBy(-1000, 0)
      console.log(itemList.current.clientWidth);
    }
    return dir
    
  }
  

  return (
    <div className="relative">
      <div className="overflow-auto" ref={itemList}>
        <div className="scroller flex flex-row cursor-grab overflow-auto">
        <SpotlightCard index={1}/>
        <SpotlightCard index={2}/>
        <SpotlightCard index={3}/>
        <SpotlightCard index={4}/>
        <SpotlightCard index={5}/>
        <SpotlightCard index={6}/>
        <SpotlightCard index={7}/>
        <SpotlightCard index={8}/>
        <SpotlightCard index={9}/>
        </div>
    
        
        <div className="buttons absolute right-[10px] bottom-[10px] hidden sm:flex flex-col justify-center items-center gap-[5px]">
          <div className="left bg-spacial-hover flex-center p-[4px] text-[32px] bg-secondary text-white rounded-[5px] cursor-pointer" onClick={() => scrollHandler('left')} >
            <i className='bx bx-chevron-left'></i>
          </div>
          <div className="right bg-spacial-hover flex-center p-[4px] text-[32px] bg-secondary text-white rounded-[5px] cursor-pointer" onClick={() => scrollHandler('right')} >
            <i className='bx bx-chevron-right' ></i>
          </div>
        </div>
 
        <div className="map">
          <div className={`current flex flex-col sm:flex-row absolute right-[10px] sm:right-[50%] sm:translate-x-[50%] sm:bottom-0 bottom-[10px] text-white text-[10px] gap-[10px]`}>
          <i className='sp-card bx bxs-circle text-yellow-500 cursor-pointer'></i>
          <i className='sp-card bx bxs-circle cursor-pointer'></i>
          <i className='sp-card bx bxs-circle cursor-pointer'></i>
          <i className='sp-card bx bxs-circle cursor-pointer'></i>
          <i className='sp-card bx bxs-circle cursor-pointer'></i>
          <i className='sp-card bx bxs-circle cursor-pointer'></i>
          <i className='sp-card bx bxs-circle cursor-pointer'></i>
          <i className='sp-card bx bxs-circle cursor-pointer'></i>
          <i className='sp-card bx bxs-circle cursor-pointer'></i>
        </div>
        </div>

      </div>
    </div>
  )
}

export default Spotlight
