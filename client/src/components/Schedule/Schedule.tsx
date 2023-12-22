import React from 'react'
import ContentWraper from '../ContentWraper'
import Date from './Date'

const Schedule = () => {
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
    <div>
      <ContentWraper>
        <div className="head flex flex-wrap items-start sm:items-center flex-col sm:flex-row sm:gap-[20px]">
          <h5 className='text-unique text-[26px] lg:text-[28px] whitespace-nowrap'>Estimated Schedule</h5>
          <div className="timer text-white px-[16px] py-[5px] rounded-[30px]">12/22/2023 10:30:05</div>
        </div>
        <div className="title overflow-hidden">
          <div className="dates relative ">
            <div className="bg-aqua-hover  left-arrow-btn text-[24px] text-black bg-white  w-[30px] h-[30px] absolute  top-[50%] left-[0px] translate-y-[-50%] rounded-[50%] opacity-80 cursor-pointer hidden sm:flex justify-center items-center">
              <i className='bx bx-chevron-left'></i>
            </div>
            <div className="date flex gap-[5px] md:gap-[10px] w-[100%] overflow-auto">
            {
              dates.map((date, index) => {
                return <Date day={date.day} date={date.date} key={index} />
              }) 
            }
            <Date day='Mon' date='Dec 24' />
            <Date day='Mon' date='Dec 24' />
            <Date day='Mon' date='Dec 24' />
            <Date day='Mon' date='Dec 24' />
            </div>
            <div className="bg-aqua-hover  right-arrow-btn text-[24px] text-black bg-white  w-[30px] h-[30px] absolute top-[50%] right-[0px] translate-y-[-50%] rounded-[50%] opacity-80 cursor-pointer hidden sm:flex justify-center items-center">
              <i className='bx bx-chevron-right'></i>
            </div>
          </div>
        </div>
      </ContentWraper>
    </div>
  )
}

export default Schedule
