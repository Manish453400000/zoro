import React, { useState } from 'react'
import ContentWraper from '../ContentWraper'
import UpdateCard from './UpdateCard'

const UpdatedBox = () => {
  const [activeLng, setActiveLng] = useState('all')
  return (
    <div className=' lg:w-[70%] xl:w-[75%]'>
      <ContentWraper>

        <div className="head-title mt-[40px] relative">
           <div className="head flex justify-between items-center text-white w-[100%] 
           ">

              <div className="title-head flex gap-x-[1.5rem] flex-wrap items-center">
                <h3 className=' text-[26px] lg:text-[28px] xl:text-[32px] font-unique text-unique whitespace-nowrap'>Recently Updated</h3>
                <div className="btns flex text-[14px] bg-secondary rounded-[5px] cursor-pointer overflow-hidden">
                <div className={`all px-[10px] py-[6px] ${activeLng === 'all' ? 'bg-secondary-light text-unique':''}`} onClick={() => setActiveLng('all')}>All</div>
                <div className={`sub px-[10px] py-[6px] ${activeLng === 'sub' ? 'bg-secondary-light text-unique':''}`} onClick={() => setActiveLng('sub')}>Sub</div>
                <div className={`dub px-[10px] py-[6px] ${activeLng === 'dub' ? 'bg-secondary-light text-unique':''}`} onClick={() => setActiveLng('dub')}>Dub</div>
                <div className={`chinese px-[10px] py-[6px] ${activeLng === 'chinese' ? 'bg-secondary-light text-unique':''}`} onClick={() => setActiveLng('chinese')}>Chinese</div>
              </div>
              </div>

              <div className="more-btn flex items-center text-[12px] gap-[5px] cursor-pointer">
                <span className=' whitespace-nowrap'>View more</span>
                <i className='bx bx-chevron-right text-[16px]' ></i>
              </div>
           </div>
        </div>

        <div className="container-update py-[20px] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-[12px]">
          <UpdateCard />
          <UpdateCard />
          <UpdateCard />
          <UpdateCard />
          <UpdateCard />
          <UpdateCard />
          <UpdateCard />
          <UpdateCard />
          <UpdateCard />
          <UpdateCard />
          <UpdateCard />
          <UpdateCard />
        </div>
      </ContentWraper>
    </div>
  )
}

export default UpdatedBox
