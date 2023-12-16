import React from "react"

interface SpotlightCardProps {
  img: string,
  title: string,
  des: string,
  genre: string,
  duration: string,
  releasedOn: string,
  index: number
}

const SpotlightCard: React.FC<SpotlightCardProps> =({img, title, des, genre, duration, releasedOn, index}) => {

  
  
  return (
    <div className="cards bg-red flex justify-center items-center max-w-[100%] w-[100%] shrink-0" key={index} >
      <div className="spotlight w-[100%]  max-w-[100%] sm:h-[23rem] h-[18rem] md:h-[28rem] xl:h-[35rem] 2xl:h-[38rem] ">
        <div className="cover-spotlight max-w-[100%] absolute top-0 left-[0px] flex-center ">
          <img src={img} alt="spotlight" className="" />
        </div>
        <div className="opacity-layer absolute top-0 left-0 w-full h-full hidden lg:block"></div>
        <div className="opacity-layer-mobile absolute bottom-0 left-0 w-[100%] h-[100%] block lg:hidden"></div>

        <div className="data flex flex-col flex-wrap px-[.8rem] gap-[8px] lg:gap-[10px] xl:gap-[16px] absolute bottom-[20px] text-white max-w-[80%] ">
          <div className="rank text-unique ">{`#${index + 1} Spotlight `}</div>
          <h2 className=" text-[30px] sm:text-[38px] leading-none lg:text-[48px] xl:text-[58px] 2xl:text-[68px] overflow-hidden">{title}</h2>
          <div className="info-details sm:flex hidden gap-[14px] wrap">
            <div className="type flex items-center text-[14px] gap-1">
              <i className='bx bx-play-circle'></i>
              <span>{genre}</span>
            </div>
            <div className="duration flex items-center text-[14px] gap-1">
              <i className='bx bx-time-five' ></i>
              <span>{duration}</span>
            </div>
            <div className="released flex items-center text-[14px] gap-1">
              <i className='bx bx-calendar' ></i>
              <span>{releasedOn}</span>
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
            <p className="text-[14px] lighter-weight ">{des}</p>
          </div>
          <div className="mt-[0px] lg:mt-[10px]">
            <button className="flex items-center gap-[5px] px-[10px] lg:px-[14px] py-[6px] bg-spacial rounded-[30px] text-black sm:mb-[18px]">
              <i className='bx bx-play-circle'></i>
              <span className="text-[15px] lg:text-[18px]">Watch Now</span>
            </button>
          </div>
        </div>


      </div>
    </div>
  )
}

export default SpotlightCard
