import React from "react"
interface Date {
  date: string,
  day: string,
  active: boolean
}
const Date:React.FC<Date> = ({date, day, active}) => {
  return (
    <div className={` ${active ? 'spacial-active-btn text-black':'hover:bg-[#383a3e] text-white'} cursor-pointer date-box shrink-0   bg-secondary-deep   py-[5px] md:py-[10px] flex flex-col items-center justify-center rounded-[8px]`}>
      <h5 className="text-[13px] md:text-[14] font-bold">{day}</h5>
      <h5 className="text-[10px] md:text-[11] text-center whitespace-nowrap">{date}</h5>
    </div>
  )
}

export default Date
