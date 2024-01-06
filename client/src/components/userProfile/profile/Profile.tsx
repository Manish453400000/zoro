import React ,{ ChangeEvent, useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'

import { addUser } from '../../../features/user/user.slice'
import { addMessage, removeMessage } from '../../../features/notification/notification.slice'

import ContentWraper from '../../ContentWraper'
interface User {
    isAuthenticated: boolean,
    data: {
      accessToken: string,
      reffreshToken: string,
      user: {
        createdAt: string,
        username: string,
        email: string,
        avatar: string,
        watchHistory: [],
        __v: number,
        _id: string
      },
    }
  }
  interface RootState {
    userReducer: {
      user: User
    }
  }

const Profile: React.FC = () => {
  const user = useSelector((state:RootState) => state.userReducer.user)

  const uploadBox = useRef<HTMLDivElement>(null);
  const [file , setFile] = useState<File | null>(null)
  const [showUploadBox, setShowUploadBox] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')

  const [username, setUserName] = useState('')

  const [showChangePassword, setShowChangePassword] = useState(false)

  const dispatch = useDispatch()

  const handelFile = (e: ChangeEvent<HTMLInputElement>) => {
    if(e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0]
      setFile(file)
    }
  }

  const handelUpload = () => {
    setIsLoading(true)
    console.log(isLoading);
    if(!file) return;
    const uri = '/api/v1/users/edit/avatar'
    //add file to form
    const formData = new FormData();
    formData.append('avatar', file)

    const option = formData;
    
    axios.post(uri, option)
    .then((response) => {
      console.log(response.data)
      setIsLoading(false)
      setShowUploadBox(false)
      console.log(isLoading);
      setFile(null)

      dispatch(addUser({
        isAuthenticated: true,
        data: response.data.data
      }))

      dispatch(addMessage({message: 'Avatar Updated', type: 'success'}))
      setTimeout(() => {
        dispatch(removeMessage())
      }, 3000)


    }).catch((error) => {
      console.log(error)
      setIsLoading(false)
      setShowUploadBox(false)
      console.log(isLoading);
      setFile(null)

      dispatch(addMessage({message: 'Somthing Went Wrong', type: 'error'}))
      setTimeout(() => {
        dispatch(removeMessage())
      }, 3000)

    })
   
  }

  return (
    <div className=' text-[white]'>
      <ContentWraper>
        <div className="flex-center py-[40px] flex-col gap-[20px]">
          <div className="edit-profile max-w-[40rem] w-[96%] flex items-center gap-[10px]">
            <i className="fa-solid fa-user text-[28px]"></i>
            <div className="title-head text-[24px] font-semibold">Edit Profile</div>
          </div> 

          <div className={`${showUploadBox ? 'flex':'hidden'} avatar-upload-container w-[100vw] h-[100vh] bg-popup-glass absolute z-[666] text-white  items-center justify-center ` } onClick={(e) => {
            if(!uploadBox.current?.contains(e.target as Node) ) {
              setShowUploadBox(false)
            }
          }}>
            <div className={` avatar-upload-box w-[90%] max-w-[30rem] py-[20px] bg-[#46464c] rounded-[5px] flex justify-center items-center flex-col relative`} ref={uploadBox}>
              <div className="choose-file flex flex-col py-[10px]">
                <label htmlFor="fileInput" className='file-label bg-[#5a5b63] rounded-[5px] flex flex-col items-center'>
                  <i className='bx bxs-file-blank text-[60px]' ></i>
                  <span>Choose avatar</span>
                  <input type="file" id='fileInput' onChange={(e) => handelFile(e)} className='file-input'/>
                </label>
                {file && <span>Selected file: {file.name}</span>}

              </div>
              <button className={`${file ? 'bg-spacial':'bg-block'} rounded-[5px] py-[10px] text-black w-[90%]`} onClick={() => handelUpload()}>Upload</button>

              <div className={`${isLoading ? 'flex':'hidden'} loader mt-[15px]  justify-center items-center p-[5px] text-[white]`}>
                <i className="fa-solid fa-gear loading"></i>
              </div>

              <div className="exit w-[30px] h-[30px] bg-white text-black text-[30px] absolute rounded-full top-0 right-0 translate-x-[50%] translate-y-[-50%] flex-center cursor-pointer" onClick={() => {
                setShowUploadBox(false)
                setFile(null)
                }}>
                <i className='bx bx-x'></i>
              </div>
            </div>
          </div>

          <div className="edit-box flex flex-col justify-center items-center rounded-[5px] bg-primary max-w-[40rem] w-[96%] px-[20px] py-[15px]">

            <div className="avatar-container relative w-[8rem] h-[8rem] rounded-[50%]">
              <div className="profile-pic w-[8rem] h-[8rem] rounded-[50%] overflow-hidden">
                <img src={user.data.user.avatar} alt="" className='w-full h-full object-cover object-center' />
                <div className="edit-btn bg-[white] text-[black] absolute bottom-[4px] right-[2px] z-40 w-[35px] h-[35px] flex-center rounded-full" onClick={() => {
                  setShowUploadBox(true)
                }}>
                  <i className='bx bxs-pencil text-[20px]'></i>
                </div>
              </div>
            </div>

            <div className="info-container flex flex-col gap-[10px] w-[90%] max-w-[30rem] py-[20px]">

              <div className="input-field flex flex-col">
                <span className='text-[13px] text-[#dbd6d6]'>EMAIL ADDRESS</span>
                <input type="email" disabled defaultValue={user.data.user.email} className=' px-[10px] py-[8px] rounded-[5px] bg-[#e4e9ff] text-black outline-none border-none' />
              </div>

              <div className="input-field flex flex-col">
                <span className='text-[13px] text-[#dbd6d6]'>USERNAME</span>
                <input type="email" value={user.data.user.username} className=' px-[10px] py-[8px] rounded-[5px] bg-[#ffffff] text-black outline-none border-none' onChange={(e) => setUserName(e.target.value)} />
              </div>

              <div className="input-field flex flex-col">
                <span className='text-[13px] text-[#dbd6d6]'>JOINED</span>
                <input type="email" disabled defaultValue={user.data.user.createdAt} className=' px-[10px] py-[8px] rounded-[5px] bg-[#e4e9ff] text-black outline-none border-none' />
              </div>

              <div className="forget-password flex items-center gap-[5px] text-[#dbd6d6] cursor-pointer mt-[15px]">
                <i className='bx bxs-key'></i>
                <span className='text-[13px] ' onClick={() => setShowChangePassword((state) => !state)}>Change PASSWORD</span>
              </div>

              <div className={`${showChangePassword ? 'flex':'hidden'} password-change  flex-col gap-[10px]`}>
                <div className="input-field flex flex-col">
                  <span className='text-[13px] text-[#dbd6d6]'>OLD PASSWORD</span>
                  <input type="password" value={oldPassword} placeholder='Old Password' className=' px-[10px] py-[8px] rounded-[5px] bg-[#ffffff] text-black outline-none border-none' onChange={(e) => setOldPassword(e.target.value)} />
                </div>

                <div className="input-field flex flex-col">
                  <span className='text-[13px] text-[#dbd6d6]'>NEW PASSWORD</span>
                  <input type="password" value={newPassword} placeholder='New Password' className=' px-[10px] py-[8px] rounded-[5px] bg-[#ffffff] text-black outline-none border-none' onChange={(e) => setNewPassword(e.target.value)} />
                </div>
              </div>

              <div className="button flex flex-col mt-[10px]">
                <button className='bg-spacial py-[10px] rounded-[5px] text-black'>Save Changes</button>
              </div>

            </div>

            

          </div>
        </div>
      </ContentWraper>
    </div>
  )
}

export default Profile
