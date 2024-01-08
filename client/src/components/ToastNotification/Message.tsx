// import React, { useEffect } from 'react'

interface Message {
  message: string,
  type: string
}


const Message:React.FC<Message> = ({message, type}) => {
  return (
    <div className={`rounded-[5px] ${type === 'success' ? 'bg-[#edfeec]':''} ${type === 'error' ? 'bg-[#feecec]':''} ${type === 'pending' ? 'bg-[#fef6ec]':''}  overflow-hidden message-box`}>
      <div className=' min-w-[280px] px-[15px] py-[8px] flex items-center gap-[10px]'>
        <i className={` ${type === 'success' ? 'fa-check text-[#30c430]':''} ${type === 'error' ? 'fa-triangle-exclamation text-[red]':''} ${type === 'pending' ? 'text-[orange] fa-circle-exclamation':''} fa-solid    text-[20px] `}></i>
        <span className='text-[14px] font-bold '>{message}</span>
      </div>
      <div className={`${type === 'pending' ? 'bg-[#ffa73b]':''} ${type === 'error' ? 'bg-[#ff4141]':''} ${type === 'success' ? 'bg-[#4eff33]':''} toast-timer w-full h-[3px] `}></div>
    </div>
  )
}

export default Message
