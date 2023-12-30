import React from 'react'

interface Login {
  func(newValue:boolean):void
}

const SignUp:React.FC<Login> = ({func}) => {
  return (
     <div className='flex flex-col items-center '>
      <div className="head text-white text-[22px] font-semibold">Create an Account</div>
      <div className="form flex flex-col gap-[25px] w-full py-[20px]">

        <div className="input flex flex-col gpa-[8px] w-full">
          <span className='text-[11px] font-semibold text-[#b4adad]'>USERNAME</span>
          <input type="email" placeholder='Username' className=' border-none outline-none rounded-[5px] py-[6px] px-[10px] text-[15px]' />
        </div>

        <div className="input flex flex-col gpa-[8px] w-full">
          <span className='text-[11px] font-semibold text-[#b4adad]'>EMAIL ADDRESS</span>
          <input type="email" placeholder='name@gmail.com' className=' border-none outline-none rounded-[5px] py-[6px] px-[10px] text-[15px]' />
        </div>

        <div className="input flex flex-col gpa-[8px] w-full">
          <span className='text-[11px] font-semibold text-[#b4adad]'>Password</span>
          <input type="email" placeholder='Password' className=' border-none outline-none rounded-[5px] py-[6px] px-[10px] text-[14px]' />
        </div>

        <div className="input flex flex-col gpa-[8px] w-full">
          <span className='text-[11px] font-semibold text-[#b4adad]'>Confirm Password</span>
          <input type="email" placeholder='Confirm Password' className=' border-none outline-none rounded-[5px] py-[6px] px-[10px] text-[14px]' />
        </div>

        <div className="button mt-[10px] flex flex-col gap-[10px]">
          <button className='w-[100%] py-[8px] bg-spacial text-black rounded-[5px]'>Register</button>
          <span className='text-white m-auto text-[14px]'>already have an account? <span className='text-unique cursor-pointer' onClick={()=> func(false)}>Login</span></span>
        </div>
      </div>
    </div>
  )
}

export default SignUp
