import React from "react"
interface Date {
  date: string,
  day: string
}
const Date:React.FC<Date> = ({date, day}) => {
  return (
    <div className=" cursor-pointer date bg-spacial-hover bg-secondary-deep text-white md:flex-grow hover:text-black px-[15px] py-[10px] md:py-[10px] flex flex-col items-center justify-center rounded-[10px]">
      <h5 className="text-[13px] md:text-[14] font-bold">{day}</h5>
      <h5 className="text-[10px] md:text-[11] text-center whitespace-nowrap">{date}</h5>
    </div>
  )
}

export default Date
