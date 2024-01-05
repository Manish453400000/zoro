import React ,{ ChangeEvent, useState, useRef } from 'react'
import { useSelector } from 'react-redux'
import ContentWraper from '../../ContentWraper'

interface User {
    isAuthenticated: boolean,
    data: {
      accessToken: string,
      reffreshToken: string,
      user: {
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

  const uploadBox = useRef<HTMLDivElement>(null);
  const user = useSelector((state:RootState) => state.userReducer.user)
  const [file , setFile] = useState<File | null>(null)
  const [showUploadBox, setShowUploadBox] = useState(false)

  const handelFile = (e: ChangeEvent<HTMLInputElement>) => {
    if(e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0]
      setFile(file)
    }
  }

  const handelUpload = () => {
    const uri = '/api/v1/users/edit/avatar'
    const formData = new FormData();
    if(!file) return;

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
              <button className='bg-spacial rounded-[5px] py-[10px] text-black w-[90%]'>Upload</button>

              <div className="exit w-[30px] h-[30px] bg-white text-black text-[30px] absolute rounded-full top-0 right-0 translate-x-[50%] translate-y-[-50%] flex-center cursor-pointer" onClick={() => setShowUploadBox(false)}>
                <i className='bx bx-x'></i>
              </div>
            </div>
          </div>

          <div className="edit-box flex flex-col justify-center items-center rounded-[5px] bg-primary max-w-[40rem] w-[96%] px-[20px] py-[15px]">

            <div className="avatar-container relative w-[8rem] h-[8rem] rounded-[50%]">
              <div className="profile-pic w-[8rem] h-[8rem] rounded-[50%] overflow-hidden">
                <img src={user.data.user.avatar} alt="" />
                <div className="edit-btn bg-[white] text-[black] absolute bottom-[4px] right-[2px] z-40 w-[35px] h-[35px] flex-center rounded-full" onClick={() => {
                  setShowUploadBox(true)
                }}>
                  <i className='bx bxs-pencil text-[20px]'></i>
                </div>
              </div>
            </div>

            

          </div>
        </div>
      </ContentWraper>
    </div>
  )
}

export default Profile
