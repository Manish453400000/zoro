import React, {useEffect, useRef, useState} from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'

import { addUser } from '../../features/user/user.slice'
// import ToastNotification from '../Notification/ToastNotification'
import { addMessage, removeMessage } from '../../features/notification/notification.slice'

interface Login {
  func(newValue:boolean):void
  func2(newValue:boolean):void
}

const SignUp:React.FC<Login> = ({func, func2}) => {


  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [validUser, setValidUser] = useState({
    username: false,
    email: false,
    password: false,
    confirmPassword: false
  })

  const dispatch = useDispatch()

  const passwordRef = useRef<HTMLInputElement>(null)
  const cPasswordRef = useRef<HTMLInputElement>(null)
  
  const showPasswordHandler = () => {
    setShowPassword((state) => !state)
    if(passwordRef.current && cPasswordRef.current){
      if(passwordRef.current.type === 'password') {
        passwordRef.current.type = "text"
        cPasswordRef.current.type = "text"
      }else{
        passwordRef.current.type = "password"
        cPasswordRef.current.type = "password"
      }
    }
  }

  useEffect(() => {
    if(username.length > 5){
      setValidUser(prevState => ({...prevState, username: true}))
    }
    else{
      setValidUser(prevState => ({...prevState, username: false}))
    }
  }, [username, setUsername])
  
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
  
  useEffect(() => {
    if(confirmPassword === password && confirmPassword.length > 5){
      setValidUser(prevState => ({...prevState, confirmPassword: true}))
    }else{
      setValidUser(prevState => ({...prevState, confirmPassword: false}))
    }

  }, [confirmPassword, setConfirmPassword])


  const registerValidator = () => {
    if(validUser.username && validUser.email && validUser.password && validUser.confirmPassword) {
      return true
    }
    return false
  }

  const Register = async () => {
    console.log('testcase 1');
    
    console.log(registerValidator())
    if(!registerValidator()) return;
    console.log('testcase 2');
    
    setIsLoading(true)
    const url = '/api/v1/users/register'
    const option = {
      username,
      email,
      password
    }
    console.log(option);
    axios.post(url, option)
    .then(response => {
      setIsLoading(false)
      console.log(response.data);
      if(response.data.data){

        dispatch(addUser({
          isAuthenticated: true,
          data: response.data.data
        }))
      }

      func2(false)
      dispatch(addMessage({message: "Registration Successfull", type: 'success'}))
      setTimeout(() => {
        dispatch(removeMessage())
      }, 3000)
    }).catch(error => {
      setIsLoading(false)
      console.log(error);
      
    })
  }



  return (
     <div className='flex flex-col items-center '>
      <div className="head text-white text-[22px] font-semibold">Create an Account</div>
      <div className="form flex flex-col gap-[25px] w-full py-[20px]">

        <div className="input flex flex-col gpa-[8px] w-full">
          <span className='text-[11px] font-semibold text-[#b4adad]'>USERNAME <span className='text-[10px]'>( minimum 6 charecter )</span></span>
          <input name='username' type="text" placeholder='Username' className={`${validUser.username ? 'valid':'invalid'} border-none outline-none rounded-[5px] py-[6px] px-[10px] text-[15px]`} onChange={(e) => setUsername(e.target.value)} value={username} />
        </div>

        <div className="input flex flex-col gpa-[8px] w-full">
          <span className='text-[11px] font-semibold text-[#b4adad]'>EMAIL ADDRESS</span>
          <input name='email' type="email" placeholder='name@gmail.com' className={`${validUser.email ? 'valid':'invalid'} border-none outline-none rounded-[5px] py-[6px] px-[10px] text-[15px]`} onChange={(e) => setEmail(e.target.value)} value={email} autoComplete='email' />
        </div>

        <div className="input flex flex-col gpa-[8px] w-full">
          <span className='text-[11px] font-semibold text-[#b4adad]'>Password <span>( minimum 6 charecter )</span></span>
          <div className={`${validUser.password ? 'valid':'invalid'} input-box flex items-center gap-[10px] w-[100%] rounded-[5px] overflow-hidden bg-white`}>

          <input name="password" type="password" placeholder='Password' className=' border-none outline-none  py-[6px] px-[10px] text-[14px] w-[90%]' onChange={(e) => setPassword(e.target.value)} ref={passwordRef} value={password} />
          <i className={`bx ${showPassword ? 'bx-show-alt' : 'bxs-hide'}`} onClick={() => showPasswordHandler()}></i>
          </div>
        </div>

        <div className="input flex flex-col gpa-[8px] w-full">
          <span className='text-[11px] font-semibold text-[#b4adad]'>Confirm Password</span>
          <div className={`${validUser.confirmPassword ? 'valid':'invalid'} input-box flex items-center gap-[10px] w-[100%] rounded-[5px] overflow-hidden bg-white`}>

          <input name='confirmPassword' type="password" placeholder='Confirm Password' className=' border-none outline-none  py-[6px] px-[10px] text-[14px] w-[90%]' onChange={(e) => setConfirmPassword(e.target.value)} ref={cPasswordRef} value={confirmPassword} />
          <i className={`bx ${showPassword ? 'bx-show-alt' : 'bxs-hide'}`} onClick={() => { showPasswordHandler() }}></i>
          </div>
        </div>

        <div className="button mt-[10px] flex flex-col gap-[10px]">
          <button className={`${registerValidator() ? 'bg-spacial':'bg-block'} w-[100%] py-[8px]  text-black rounded-[5px]`} onClick={() => Register()}>Register</button>
          <div className={`loader ${isLoading ? 'flex': 'hidden'} justify-center items-center p-[5px] text-[white]`}>
            <i className="fa-solid fa-gear loading"></i>
          </div>
          <span className='text-white m-auto text-[14px]'>already have an account? <span className='text-unique cursor-pointer' onClick={()=> func(false)}>Login</span></span>
        </div>
      </div>
    </div>
  )
}

export default SignUp
