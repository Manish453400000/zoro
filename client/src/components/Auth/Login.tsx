import React, { useState } from 'react'
import axios from "axios";
import { useDispatch } from 'react-redux';
import { addUser } from '../../features/user/user.slice';

interface Login {
  func(newValue:boolean):void
  func2(newValue:boolean):void
}


const Login:React.FC<Login> = ({func, func2}) => {



  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const [forgotPasswor, setForgotPassword] = useState(false)

  const dispatch = useDispatch()

  const Login = async () => {
    setIsLoading(true)
    const url = '/api/v1/users/login'
    const option = {
      email,
      password
    }
    console.log(option);
    const response = await axios.post(url, option)
    setIsLoading(false)
    if(response.data.success) {
      console.log(response.data);
      
      dispatch(addUser({
        isAuthenticated: true,
        data: response.data.data
      }))
      func2(false)
      setEmail('')
      setPassword('')
    }
  }

  const handleForgotPassword =() => {
    setForgotPassword(true)
    setEmail('')
    setPassword('')
  }

  const verifyEmail = () => {
    const url = '/api/v1/users/change-password'
    const options = {
      email
    }
    axios.post(url, options)
    .then(response => {
      //reset password
    }).catch(error => {
      // throw error
    })
  }


  return (
    <>
    {
      forgotPasswor ? 
      (<div>
      <div className='flex flex-col items-center '>
      <div className="head text-white text-[22px] font-semibold">Forget Password</div>
      <div className="form flex flex-col gap-[25px] w-full py-[20px]">

        <div className="input flex flex-col gpa-[8px] w-full">
          <span className='text-[11px] font-semibold text-[#b4adad]'>EMAIL ADDRESS</span>
          <input type="email" placeholder='name@gmail.com' className=' border-none outline-none rounded-[5px] py-[6px] px-[10px] text-[15px]' onChange={(e) => setEmail(e.target.value) } />
        </div>


        <div className="button flex flex-col gap-[10px]">
          <button className='w-[100%] py-[8px] bg-spacial text-black rounded-[5px]' onClick={() => ''}>Verify Email</button>
          <div className={`loader ${isLoading ? 'flex': 'hidden'} justify-center items-center p-[5px] text-[white]`}>
            <i className="fa-solid fa-gear loading"></i>
          </div>
          <span className='text-white m-auto text-[14px]'>Remember Password? <span className='text-unique cursor-pointer' onClick={() => {
            setEmail('');
            setForgotPassword(false)
          }}>Login</span></span>
        </div>
      </div>
    </div>
    </div>)
      : 
      (<div className='flex flex-col items-center '>
      <div className="head text-white text-[22px] font-semibold">Welcome back!</div>
      <div className="form flex flex-col gap-[25px] w-full py-[20px]">

        <div className="input flex flex-col gpa-[8px] w-full">
          <span className='text-[11px] font-semibold text-[#b4adad]'>EMAIL ADDRESS</span>
          <input type="email" placeholder='name@gmail.com' className=' border-none outline-none rounded-[5px] py-[6px] px-[10px] text-[15px]' onChange={(e) => setEmail(e.target.value) } />
        </div>

        <div className="input flex flex-col gpa-[8px] w-full">
          <span className='text-[11px] font-semibold text-[#b4adad]'>PASSWORD</span>
          <input type="password" placeholder='Password' className=' border-none outline-none rounded-[5px] py-[6px] px-[10px] text-[14px]' onChange={(e) => setPassword(e.target.value)} />
          <span className='text-unique text-[11px] cursor-pointer text-right' onClick={() => handleForgotPassword()}>Forget Password?</span>
        </div>

        <div className="button flex flex-col gap-[10px]">
          <button className='w-[100%] py-[8px] bg-spacial text-black rounded-[5px]' onClick={() => Login()}>Login</button>
          <div className={`loader ${isLoading ? 'flex': 'hidden'} justify-center items-center p-[5px] text-[white]`}>
            <i className="fa-solid fa-gear loading"></i>
          </div>
          <span className='text-white m-auto text-[14px]'>Don't have an account? <span className='text-unique cursor-pointer' onClick={() => {func(true)}}>Register</span></span>
        </div>
      </div>
    </div>)
    }
    </>
  )
}

export default Login
