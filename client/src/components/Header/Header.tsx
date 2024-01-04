import { useState, useRef, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'

import { addUser } from '../../features/user/user.slice'
import { addMessage, removeMessage } from '../../features/notification/notification.slice'
//assets
import logo from '../../assets/logo-zoro.png'
import logCover from '../../assets/cover/bg-cover.jpg'
import Login from '../Auth/Login'
import SignUp from '../Auth/SignUp'

import profile from '../../assets/default/profile.jpg'


function Header() {
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
  const [language, setLanguage] = useState('ENG')
  const [showSearchBox, setShowSearchBox] = useState(false)
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [showAuthPage, setShowAuthPage] = useState(false)
  const [isNewUser, setIsNewUser] = useState(false)
  const [showUserMenu, setShowUserMenu] = useState(false)

  const dispatch = useDispatch()
  const user = useSelector((state:RootState) => state.userReducer.user)


  const updateParentState = (newValue:boolean) => {
    setIsNewUser(newValue)
  };
  const updateParentState2 = (newValue:boolean) => {
    setShowAuthPage(newValue)
  };

  const location = useLocation
  const navigate = useNavigate();

  useEffect(() => {
    const url = '/api/v1/users/get-user'
    const response = axios.post(url)
    response.then((res) => {
      console.log(res.data);
      dispatch(addUser({
        isAuthenticated: true,
        data: res.data.data
      }))
    })
  }, [])
  
  useEffect(() => {
        window.scrollTo(0, 0)
  }, [location])



  useEffect(()=> {
    if(!showAuthPage){
      setIsNewUser(false)
    }
  }, [showAuthPage, setShowAuthPage])
  
  useEffect(() => {
    if(showAuthPage) {
      document.body.style.overflowY = 'hidden'
    }else {
      document.body.style.overflowY = 'auto'
    }
  }, [showAuthPage, setShowAuthPage])
  useEffect(() => {
    
    if(showMobileMenu) {
      document.body.style.overflowY = 'hidden'
    }else {
      document.body.style.overflowY = 'auto'
    }
  }, [showMobileMenu, setShowMobileMenu])
  
  const mobMenu = useRef<HTMLDivElement>(null);
  const authCom = useRef<HTMLDivElement>(null);
  const userMenu = useRef<HTMLDivElement>(null)
  
  const Logout = () => {
    dispatch(addUser({
        isAuthenticated: false,
        data: {
          user: {
            avatar: profile,
          }
        }
    }))
    axios.post('/api/v1/users/logout')
    .then(response => {  
      if(response.data?.success) {
        dispatch(addMessage({message: "User Loged out", type: 'pending'}))
        setTimeout(() => {
          dispatch(removeMessage())
        }, 3000)
      }
    }).catch(error => console.error(error))
    setShowUserMenu(false)
  }
  
  // const test = () => {
  //     dispatch(addMessage({message: "Registration Successfull", type: 'error'}))
  //     setTimeout(() => {
  //       dispatch(removeMessage())
  //     }, 3000)
  // }
  return (
    <>
    <div className={`bg-primary-header wrapper  top-0 left-0 min-w-[100%] z-50 selection-off pb-[.2rem] pt-[.6rem]`}>
      <header className="w-full max-w-[110rem] m-auto flex justify-between items-center px-[.8rem] pb-[.4rem]">
        <div className="left-nav flex justify-between items-center gap-[5px]">
          <i className='bx bx-menu text-[30px] cursor-pointer text-unique' onClick={() => setShowMobileMenu(true)}></i>
          <div className="logo px-[7px] cursor-pointer" onClick={() => navigate('/')}>
            <img src={logo} alt="logo" className="min-w-[6rem] w-[6rem]" />
          </div>

          {/* ........................................SearchBox................................ */}
            <div className="w-[19rem] 2xl:w-[27rem] rounded-[5px] bg-white hidden xl:flex xl:justify-between xl:items-center mx-[5px]">
              <input type="text" name='searchBox' className="pl-[1rem] py-[.4rem] flex-1 outline-none border-none rounded-[5px]" placeholder="Search for Anime..." /> 

              <div className="buttons flex-center gap-2 px-2">
                <i className="bx bx-search text-black text-[20px] cursor-pointer"></i>
                <button type="button" className="text-white text-[12px] px-2 py-0 bg-black">Filter</button>
              </div> 
            </div>
          <div className="more md:flex justify-center items-center gap-[10px] ml-[10px] hidden">
            <div className="random flex flex-col text-white justify-center items-center cursor-pointer ">
              <i className="fa-solid fa-shuffle text-white text-[18px]"></i>
              <p className='text-[12px]'>Random</p>
            </div>
            <div className="language-selector flex flex-col justify-center items-center ">
              <div className="switch w-[3rem] rounded-[5px] flex-center cursor-pointer overflow-hidden">
                <div className={`eng ${language == 'ENG' ? 'bg-spacial':'bg-secondary text-white'} w-[50%] h-[100%] flex-center text-[11px]`} onClick={() => setLanguage('ENG')}>EN</div>
                <div className={`jap ${language == 'JAP' ? 'bg-spacial':'bg-secondary text-white'} w-[50%] h-[100%] flex-center text-[11px]`} onClick={() => setLanguage('JAP')}>JP</div>
              </div>
              <p className='text-white text-[12px]'>Language</p>
            </div>
          </div>
        </div>

        <div className="right-nav flex justify-between  gap-[0px] items-center">
          <div className="mobile-search-btn flex-center mr-[20px]">
            <i className="bx bx-search xl:hidden text-primary text-[22px] cursor-pointer" onClick={() => {
              setShowSearchBox((state) => !state)
              setShowUserMenu(false)
              }}></i>
          </div>

          <div className={`${user.isAuthenticated ? '':'hidden' } user-prof relative text-white flex gap-[10px] justify-center items-center`}>
            <div className="notification cursor-pointer text-[22px] flex items-center">
              <i className='bx bxs-bell'></i>
            </div>
            <div className="profile cursor-pointer w-[30px] h-[30px] rounded-[50%] overflow-hidden  object-center" onClick={() => setShowUserMenu((state) => !state)}>
              <img src={user?.data?.user?.avatar} alt="" className='' />
            </div>
            <div className={` ${showUserMenu ? 'h-[21.5rem]':'h-0 opacity-0'} overflow-hidden open-menu user-menu absolute z-50 top-[130%] right-[10px] bg-[#3a3b41] w-[16rem] py-[12px] px-[18px] rounded-[10px]`} ref={userMenu}>
              <div className="ditails flex flex-col gap-[1px]">
                <span className='text-[14px] font-bold text-unique'>{user.data.user.username}</span>
                <span className='text-[12px]'>{user.data.user.email}</span>
              </div>
              <div className="options mt-[10px] flex flex-col gap-[8px]">

               <div className="profile flex items-center gap-[14px] bg-secondary hover:bg-[#525359] hover:text-[#daf86f] px-[12px] py-[6px] rounded-[25px] cursor-pointer">
                <i className="fa-solid fa-user text-[13px]"></i>
                <span className='text-[13px]'>Profile</span>
               </div>

               <div className="profile flex items-center gap-[14px] bg-secondary hover:bg-[#525359] hover:text-[#daf86f] px-[12px] py-[6px] rounded-[25px] cursor-pointer">
                <i className='bx bx-time-five' ></i>
                <span className='text-[13px]'>Continue Watching</span>
               </div>

               <div className="profile flex items-center gap-[14px] bg-secondary hover:bg-[#525359] hover:text-[#daf86f] px-[12px] py-[6px] rounded-[25px] cursor-pointer">
                <i className='bx bxs-heart'></i>
                <span className='text-[13px]'>Watch List</span>
               </div>

               <div className="profile flex items-center gap-[14px] bg-secondary hover:bg-[#525359] hover:text-[#daf86f] px-[12px] py-[6px] rounded-[25px] cursor-pointer">
                <i className='bx bxs-bell'></i>
                <span className='text-[13px]'>Notification</span>
               </div>

               <div className="profile flex items-center gap-[14px] bg-secondary hover:bg-[#525359] hover:text-[#daf86f] px-[12px] py-[6px] rounded-[25px] cursor-pointer">
                <i className='bx bxs-file-export' ></i>
                <span className='text-[13px]'>Import/Export</span>
               </div>

               <div className="profile flex items-center gap-[14px] bg-secondary hover:bg-[#525359] hover:text-[#daf86f] px-[12px] py-[6px] rounded-[25px] cursor-pointer">
                <i className="fa-solid fa-gear"></i>
                <span className='text-[13px]'>Setting</span>
               </div>

               <div className="logout mt-[10px] hover:text-[#daf86f] flex items-center justify-end gap-[6px] cursor-pointer" onClick={() => Logout()}>
                 <span className='text-[13px]'>Logout</span>
                 <i className='bx bxs-exit'></i>
               </div>
              </div>
            </div>
            
          </div>


          <div className={`login-btn ${user.isAuthenticated ? 'hidden': ''}`}>
            <button type="button" className="btn bg-spacial" onClick={() => setShowAuthPage((state) => !state)}>Login</button>
          </div>

          <div className={`${showAuthPage ? '':'hidden'} ${user.isAuthenticated ? 'hidden': ''} login-comp absolute top-0 left-0 z-[10]`}
          onClick={(e) => {
            if(!authCom.current?.contains(e.target as Node)){
              setShowAuthPage(false)
            }
          }}
          >

            <div className={`w-[100vw] h-[100vh] bg-[#000000a9] flex justify-center ${showAuthPage ? 'translate-y-[0%]':'translate-y-[-30%] transition-transform'}  items-center`}>
              
              <div className="relative w-[90%] max-w-[30rem] " ref={authCom}>
                <div className="close-btn w-[30px] h-[30px] flex justify-center items-center rounded-[50%] bg-white text-black absolute top-0 right-0 translate-x-[40%] translate-y-[-50%] z-[101]" onClick={() => setShowAuthPage((state) => !state) }>
                  <i className='bx bx-x text-[26px]'></i>
                </div>
              <div className="relative w-[100%] h-[100%] auth-container bg-secondary-deep rounded-[10px] overflow-hidden">
             
                <div className="cover-image absolute top-0 left-0 opacity-60 rounded-[10px]">
                  <img src={logCover} alt="" className='' />
                </div>
                <div className="secondary-layer w-[100%] h-[100%] absolute bottom-0 rounded-[10px]"></div>
                <div className="auths w-full h-full  px-[20px] sm:px-[60px] py-[40px] relative z-40">
                  {
                    isNewUser ? <SignUp func={updateParentState} func2={updateParentState2}/> : <Login func={updateParentState} func2={updateParentState2}/>
                  }
                </div>
              </div>
              </div>
            </div>

          </div>

        </div>
      </header>
      <div className={` ${showSearchBox ? 'flex':'hidden'} mobile-search-box my-[5px] gap-[5px] mx-[.8rem] xl:hidden pl-[4px]`}>
        <div className="filter-button px-[8px] py-[0px] rounded-[5px] bg-secondary flex-center cursor-pointer">
          <i className='bx bxs-filter-alt text-[18px] text-white'></i>
        </div>
        <div className="rounded-[5px] overflow-hidden bg-white xl:hidden flex flex-1 justify-between items-center px-[1rem]">
              <input type="text" name='searchBox' className=" py-[.4rem] w-[80%] text-[15px] md:text-[16px] outline-none border-none" placeholder="Search for Anime..." /> 
              <div className="buttons flex-center text-black">
                <i className="bx bx-search text-black text-[20px] cursor-pointer"></i>
              </div> 
            </div>
      </div>
    </div>
    <div className={` ${showMobileMenu ? 'flex':'hidden'} flex mobile-menu min-w-[100vw] min-h-screen fixed top-0 z-50 bg-primary-transparent justify-start items-center`} onClick={(e) => {
      if(!mobMenu.current?.contains(e.target as Node)){
        setShowMobileMenu(false)
      }
    }} >

      <div className={`${showMobileMenu ? 'translate-x-[0px]':'-translate-x-full'} mob-menu slidin left-0 absolute top-0 glass-bg flex flex-col min-h-[100vh] min-w-[16rem] text-white overflow-auto`} ref={mobMenu} >

        <div className="close-menu flex-center max-w-[9rem] gap-[2px] px-[2px] py-[4px] mx-[14px] my-[10px] md:my-[15px] lg:my-[20px] cursor-pointer glass-bg-dark bg-secondary-light rounded-[20px]" onClick={() => setShowMobileMenu(false)}>
          <i className='bx bx-chevron-left text-[20px]'></i>
          <span className='text-[14px]'>Close menu</span>
        </div>

        <div className="more md:hidden block my-[5px] glass-bg-dark py-[10px] ">
          <div className="more flex justify-start items-center gap-[20px] mx-[14px]">
            <div className="random flex flex-col text-white justify-center items-center cursor-pointer text-unique-hover ">
              <i className="fa-solid fa-shuffle  text-[18px]"></i>
              <p className='text-[12px] '>Random</p>
            </div>
            <div className="language-selector flex flex-col justify-center items-center ">
              <div className="switch w-[3rem] rounded-[5px] overflow-hidden flex-center cursor-pointer">
                <div className={`eng ${language == 'ENG' ? 'bg-spacial text-black':'bg-secondary text-white'} w-[50%] h-[100%] flex-center text-[11px]`} onClick={() => setLanguage('ENG')}>EN</div>
                <div className={`jap ${language == 'JAP' ? 'bg-spacial text-black':'bg-secondary text-white'} w-[50%] h-[100%] flex-center text-[11px]`} onClick={() => setLanguage('JAP')}>JP</div>
              </div>
              <p className='text-white text-[12px]'>Language</p>
            </div>
          </div>
        </div>

        <div className="navigation">
          <nav>
            <ul className='nav-links'>
              <li className='nav-link text-unique-hover' onClick={() => navigate('/')}>Home</li>
              <li className='nav-link text-unique-hover' onClick={() => navigate('/trending')}>Trending</li>
              <li className='nav-link text-unique-hover' onClick={() => navigate('/tv')}>TV Series</li>
              <li className='nav-link text-unique-hover' onClick={() => navigate('/movies')}>Movies</li>
              <li className='nav-link text-unique-hover' onClick={() => navigate('/ovas')}>OVAs</li>
              <li className='nav-link text-unique-hover' onClick={() => navigate('/onas')}>ONAs</li>
              <li className='nav-link text-unique-hover' onClick={() => navigate('/spacial')}>Specials</li>
            </ul>
          </nav>
        </div>

        <div className="genres nav-link">
          <h4 className=''>Genre</h4>
          <div className="types">
            <span className='genre-link text-[12px] py-[8px] text-green-200'>Action</span>
            <span className='genre-link text-[12px] py-[8px] text-red'>Adventure</span>
            <span className='genre-link text-[12px] py-[8px] text-yellow-500'>Avant Grade</span>
            <span className='genre-link text-[12px] py-[8px] text-purple'>Boys Love</span>
            <span className='genre-link text-[12px] py-[8px] text-aqua'>Comedy</span>
            <span className='genre-link text-[12px] py-[8px] text-gray-300'>Demons</span>
            <span className='genre-link text-[12px] py-[8px] text-red-300'>Drama</span>
            <span className='genre-link text-[12px] py-[8px] text-purple-200'>Ecchi</span>
            <span className='genre-link text-[12px] py-[8px] text-sky-200'>Fantasy</span>
            <span className='genre-link text-[12px] py-[8px] text-green-400'>Girls Love</span>
          </div>
          <div className="more flex justify-start items-center gap-[5px]">
            <i className='bx bx-plus' ></i>
            <span className='text-[14px]'>More</span>
          </div>
        </div>

      </div>
    </div>
    </>
  )
}

export default Header
