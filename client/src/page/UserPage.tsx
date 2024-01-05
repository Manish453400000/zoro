import ContentWraper from '../components/ContentWraper'
import { useLocation, useNavigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

import { useSelector } from 'react-redux'
// import { useEffect, useState } from 'react'

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

const UserPage = () => {

  

  const navigate = useNavigate()


  const user = useSelector((state:RootState) => state.userReducer.user)

  return (
    <div className=' min-h-[50rem] bg-primary-deep '>
      <div className="user-head h-[5rem] sm:h-[11rem]  relative">
        <div className="background-banner absolute w-[100%] overflow-hidden cover-profile">
          <img src={user.data.user.avatar} alt="" className='' />
          <div className="glass-temperd"></div>
        </div>
        <ContentWraper>
          <div className="content-profile relative z-[99] flex flex-col justify-center items-center py-[10px] sm:pt-[10px]">
            <h4 className='text-white hidden sm:block md:text-[32px] text-[24px] font-bold'>Hi, {user.data.user.username}</h4>
            <div className="mobile-menu-btn sm:hidden flex items-center gap-[30px] text-[white] mt-[15px]">
              <i className={`${location.pathname === '/user/profile' ? 'active-menu-btn':''} fa-solid fa-user text-[18px] px-[10px] py-[5px] cursor-pointer`} onClick={() => navigate('/user/profile')}></i>
              <i className={`${location.pathname === '/user/continue-watching' ? 'active-menu-btn':''} bx bx-time-five text-[24px] px-[10px] py-[5px] cursor-pointer`} onClick={() => navigate('/user/continue-watching')} ></i>
              <i className={`${location.pathname === '/user/watch-list' ? 'active-menu-btn':''} bx bxs-heart text-[24px] px-[10px] py-[5px] cursor-pointer`} onClick={() => navigate('/user/watch-list')}></i>
              <i className={`${location.pathname === '/user/notification' ? 'active-menu-btn':''} bx bxs-bell text-[24px] px-[10px] py-[5px] cursor-pointer`} onClick={() => navigate('/user/notification')}></i>
              <i className={`${location.pathname === '/user/setting' ? 'active-menu-btn':''} fa-solid fa-gear text-[21px] px-[10px] py-[5px] cursor-pointer`} onClick={() => navigate('/user/setting')}></i>
              <i className={`${location.pathname === '/user/import' ? 'active-menu-btn':''} bx bxs-file-export text-[22px] px-[10px] py-[5px] cursor-pointer`} onClick={() => navigate('/user/import')} ></i>
            </div>
            <div className={`menu-btn text-white mt-[10px] hidden sm:flex justify-center flex-wrap gap-[15px]  w-[95%]`}>

              <div className={` ${location.pathname === '/user/profile' ? 'active-menu-btn':''} profile  hover:text-[#daf86f] px-[10px] py-[8px] flex items-center gap-[10px]`} onClick={() => {navigate('/user/profile')}}>
                 <i className="fa-solid fa-user text-[15px]"></i>
                 <span className='text-[15px]'>Profile</span>
              </div>
              <div className={` ${location.pathname === '/user/continue-watching' ? 'active-menu-btn':''} profile  hover:text-[#daf86f] px-[9px] py-[8px] flex items-center gap-[10px] `} onClick={() => {navigate('/user/continue-watching')}}>
                 <i className='bx bx-time-five text-[15px]' ></i>
                 <span className='text-[15px]'>Continue Watching</span>
              </div>
              <div className={` ${location.pathname === '/user/watch-list' ? 'active-menu-btn':''} profile  hover:text-[#daf86f] px-[10px] py-[8px] flex items-center gap-[10px] `} onClick={() => {navigate('/user/watch-list')}}>
                 <i className='bx bxs-heart text-[15px]'></i>
                 <span className='text-[15px]'>Watch List</span>
              </div>
              <div className={` ${location.pathname === '/user/notification' ? 'active-menu-btn':''} profile  hover:text-[#daf86f] px-[10px] py-[8px] flex items-center gap-[10px] `} onClick={() => {navigate('/user/notification')}}>
                 <i className='bx bxs-bell text-[15px]'></i>
                 <span className='text-[15px]'>Notification</span>
              </div>
              <div className={` ${location.pathname === '/user/setting' ? 'active-menu-btn':''} profile  hover:text-[#daf86f] px-[10px] py-[8px] flex items-center gap-[10px] `} onClick={() => {navigate('/user/setting')}}>
                 <i className="fa-solid fa-gear text-[15px]"></i>
                 <span className='text-[15px]'>Setting</span>
              </div>
              <div className={` ${location.pathname === '/user/import' ? 'active-menu-btn':''} profile  hover:text-[#daf86f] px-[10px] py-[8px] flex items-center gap-[10px] `} onClick={() => {navigate('/user/import')}}>
                 <i className='bx bxs-file-export text-[15px]' ></i>
                 <span className='text-[15px]'>Import</span>
              </div>
              
            </div>

          </div>
        </ContentWraper>
      </div>
      <Outlet />
    </div>
  )
}

export default UserPage
