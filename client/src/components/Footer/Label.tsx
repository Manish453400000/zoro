import React from "react"

interface Label {
  letter: string
}
const Label: React.FC<Label> = ({letter}) => {
  console.log(letter);
  
  return (
    <div className=" cursor-pointer px-[14px] py-[2px] md:py-[4px] text-[13px] md:text-[16px] text-white bg-spacial-hover bg-secondary rounded-[5px]">
      {`${letter}`}
    </div>
  )
}

export default Label
