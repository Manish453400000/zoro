import { useRef } from "react";
import spotlight from "../falseData"

interface SpotlightCardProps {
  index: number;
  // other props...
}

const SpotlightCard: React.FC<SpotlightCardProps> =({index}) => {

  const cards = useRef<HTMLDivElement>(null);

  window.setInterval(()=> {
    cards.current?.scrollBy(-cards.current.clientWidth, 0)
  }, 3000)
  
  return (
    <div className=" scroll flex-center min-w-[100%] " key={index} ref={cards}>
      <div className="spotlight w-[100%] lg:w-[98%] max-w-[110rem] sm:h-[23rem] h-[16rem] md:h-[28rem] xl:h-[35rem] ">
        <div className="cover-spotlight opacity-80 max-w-[115rem] absolute top-0 left-[0px] flex-center ">
          <img src={spotlight[0].img} alt="spotlight" className="" />
        </div>
        <div className="opacity-layer absolute top-0 left-0 w-full h-full hidden lg:block"></div>
        <div className="opacity-layer-mobile absolute bottom-0 left-0 w-[100%] h-[100%] block lg:hidden"></div>

        <div className="data flex flex-col flex-wrap gap-[8px] lg:gap-[10px] absolute bottom-[5px] left-[4px] sm:left-[4px] lg:left-[10px] xl:left-[15px] text-white ">
          <div className="rank text-unique ">{`#${'1'} Spotlight `}</div>
          <h2 className=" text-[38px] leading-none lg:text-[48px] xl:text-[58px] 2xl:text-[68px] overflow-hidden">{spotlight[0].title}</h2>
          <div className="info-details sm:flex hidden gap-[14px] wrap">
            <div className="type flex items-center text-[14px] gap-1">
              <i className='bx bx-play-circle'></i>
              <span>{spotlight[0].genre}</span>
            </div>
            <div className="duration flex items-center text-[14px] gap-1">
              <i className='bx bx-time-five' ></i>
              <span>{spotlight[0].duration}</span>
            </div>
            <div className="released flex items-center text-[14px] gap-1">
              <i className='bx bx-calendar' ></i>
              <span>{spotlight[0].releasedOn}</span>
            </div>
            <div className="details flex justify-center items-center gap-[5px]">
              <div className="hd flex-center bg-spacial text-black text-[13px] px-[6px] py-[-1px] rounded-[5px]">HD</div>
              <div className="flex-center bg-white text-black text-[14px] px-[6px] py-[-1px] rounded-[5px]">
                <i className='bx bxs-captions py-[2.9px]' ></i>
                <span className="text-[10px]">9</span>
              </div>
              <div className="flex-center bg-aqua text-black text-[14px] px-[6px] py-[-1px] rounded-[5px]">
                <i className='bx bxs-microphone py-[2.9px]' ></i>
                <span className="text-[10px]">12</span>
              </div>
            </div>
          </div>
        
          <div className="desc md:max-w-[25rem] max-w-[20rem]  mt-[0px] lg:mt-[10]">
            <p className="text-[14px] lighter-weight ">{spotlight[0].description}</p>
          </div>
          <div className="mt-[0px] lg:mt-[10px]">
            <button className="flex items-center gap-[5px] px-[8px] py-[3px] bg-spacial rounded-[30px] text-black sm:mb-[18px]">
              <i className='bx bx-play-circle'></i>
              <span>Watch Now</span>
            </button>
          </div>
        </div>


      </div>
    </div>
  )
}

export default SpotlightCard
