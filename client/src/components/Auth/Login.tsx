import React, { useState, useRef, useEffect } from 'react'
import axios from "axios";
import { useDispatch } from 'react-redux';
import { addUser } from '../../features/user/user.slice';
import { addMessage, removeMessage } from '../../features/notification/notification.slice';

//costom hooks

interface Login {
  func(newValue:boolean):void
  func2(newValue:boolean):void
}


const Login:React.FC<Login> = ({func, func2}) => {



  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isEmailVerified, setIsEmailVerified] = useState(false)
  const [validUser, setValidUser] = useState({
    email: false,
    password: false,
  })


  const [forgotPasswor, setForgotPassword] = useState(false)

  const dispatch = useDispatch()

  const LoginValidator = () => {
    if(validUser.email && validUser.password) {
      return true
    }
    return false
  }

  const Login = async () => {
    if(!LoginValidator()) return;
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
      localStorage.setItem('accessToken', response.data.data.accessToken)
      func2(false)
      setEmail('')
      setPassword('')

      dispatch(addMessage({message: 'Login successfull', type: 'success'}))
      setTimeout(() => {
        dispatch(removeMessage())
      }, 3000)

    }
  }

  useEffect(() => {
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setValidUser(prevState => ({...prevState, email: true}))
    }else{
      setValidUser(prevState => ({...prevState, email: false}))
    }
  }, [email, setEmail])
  
  useEffect(() => {
    if(password.length > 5){
      setValidUser(prevState => ({...prevState, password: true}))
    }else{
      setValidUser(prevState => ({...prevState, password: false}))
    }
    
  }, [password, setPassword])

  const handleForgotPassword =() => {
    setForgotPassword(true)
    setEmail('')
    setPassword('')
  }

  const resetPassword = () => {
    const url = '/api/v1/users/change-password'
    const options = {
      email
    }
    console.log(email) // testing email
    axios.post(url, options)
    .then(response => { 
      //reset password
    }).catch(error => {
      // throw error
    })
  }

  const [showPassword, setShowPassword] = useState(false)
  const passwordRef = useRef<HTMLInputElement>(null)

  const showPasswordHandler = () => {
    setShowPassword((state) => !state)
    if(passwordRef.current){
      if(passwordRef.current.type === 'password') {
        passwordRef.current.type = "text"
      }else{
        passwordRef.current.type = "password"
      }
    }
  }

  useEffect(() => {
    return () => {
      setEmail('')
      setPassword('')
    }
  }, [])


  return (
    <>
    {
      forgotPasswor ? 
      (<div>
      <div className='flex flex-col items-center '>
      <div className="head text-white text-[22px] font-semibold">Change Password</div>
      <div className="form flex flex-col gap-[25px] w-full py-[20px]">

        <div className="input flex flex-col gpa-[8px] w-full">
          <span className='text-[11px] font-semibold text-[#b4adad]'>EMAIL ADDRESS</span>
          <input type="email" placeholder='name@gmail.com' className={`${validUser.email ? 'valid':'invalid'} border-none outline-none rounded-[5px] py-[6px] px-[10px] text-[15px]`} onChange={(e) => setEmail(e.target.value) } />
        </div>

        <div className="input flex flex-col gpa-[8px] w-full">
          <span className='text-[11px] font-semibold text-[#b4adad]'>NEW PASSWORD <span className='text-[10px]'>( minimum 6 charecter)</span></span>
          <div className={` ${validUser.password ? 'valid':'invalid'} input-box flex items-center gap-[10px] w-[100%] rounded-[5px] overflow-hidden bg-white`}>

          <input name="password" type="password" placeholder='New Password' className=' border-none outline-none  py-[6px] px-[10px] text-[14px] w-[90%]' onChange={(e) => setPassword(e.target.value)} ref={passwordRef} value={password} />
          <i className={`bx ${showPassword ? 'bx-show-alt' : 'bxs-hide'}`} onClick={() => showPasswordHandler()}></i>
          </div>
        </div>


        <div className="button flex flex-col gap-[10px]">
          <button className={` ${LoginValidator() ? 'bg-spacial':'bg-block'} w-[100%] py-[8px] text-black rounded-[5px] `} onClick={() => ''}>Reset Password</button>
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
          <input type="email" placeholder='name@gmail.com' className={` ${validUser.email ? 'valid':'invalid'} border-none outline-none rounded-[5px] py-[6px] px-[10px] text-[15px]`} onChange={(e) => setEmail(e.target.value) } />
        </div>

        <div className="input flex flex-col gpa-[8px] w-full">
          <span className='text-[11px] font-semibold text-[#b4adad]'>PASSWORD <span className='text-[10px]'>( minimum 6 charecter)</span></span>
          <div className={` ${validUser.password ? 'valid':'invalid'} input-box flex items-center gap-[10px] w-[100%] rounded-[5px] overflow-hidden bg-white`}>

          <input name="password" type="password" placeholder='Password' className=' border-none outline-none  py-[6px] px-[10px] text-[14px] w-[90%]' onChange={(e) => setPassword(e.target.value)} ref={passwordRef} value={password} />
          <i className={`bx ${showPassword ? 'bx-show-alt' : 'bxs-hide'}`} onClick={() => showPasswordHandler()}></i>
          </div>
          <span className='text-unique text-[11px] cursor-pointer text-right' onClick={() => handleForgotPassword()}>Forget Password?</span>
        </div>

        <div className="button flex flex-col gap-[10px]">
          <button className={` ${LoginValidator() ? 'bg-spacial':'bg-block'} w-[100%] py-[8px] text-black rounded-[5px]`} onClick={() => Login()}>Login</button>
          <div className={`loader ${isLoading ? 'flex': 'hidden'} justify-center items-center p-[5px] text-[white]`}>
            <i className="fa-solid fa-gear loading"></i>
          </div>
          <span className='text-white m-auto text-[14px]'>Don't have an account? <span className='text-unique cursor-pointer' onClick={() => {
            func(true)
            setEmail('')
            setPassword('')
          }}>Register</span></span>
        </div>
      </div>
    </div>)
    }
    </>
  )
}

export default Login
