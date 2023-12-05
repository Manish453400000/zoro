import { useState, useRef } from 'react'

//assets
import logo from '../assets/logo-zoro.png'

function Header() {
  const [language, setLanguage] = useState('ENG')
  const [showSearchBox, setShowSearchBox] = useState(false)
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  

  const mobMenu = useRef<HTMLDivElement>(null);

  
  return (
    <>
    <div className={`bg-primary-header wrapper xl:absolute top-0 left-0 min-w-[100%] z-50 selection-off`}>
      <header className="w-full max-w-[110rem] m-auto flex justify-between items-center px-[.8rem] py-[.6rem]">
        <div className="left-nav flex justify-between items-center gap-[5px]">
          <i className='bx bx-menu text-[30px] cursor-pointer text-unique' onClick={() => setShowMobileMenu(true)}></i>
          <div className="logo px-[7px]">
            <img src={logo} alt="logo" className="min-w-[6rem] w-[6rem]" />
          </div>

          {/* ........................................SearchBox................................ */}
            <div className="w-[19rem] 2xl:w-[27rem] rounded-[5px] bg-white hidden xl:flex xl:justify-between xl:items-center mx-[5px]">
              <input type="text" className="px-[1rem] py-[.4rem] flex-1 outline-none border-none" placeholder="Search for any anime, character" /> 

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
              <div className="switch w-[3rem] rounded-[5px] flex-center cursor-pointer">
                <div className={`eng ${language == 'ENG' ? 'bg-spacial':'bg-secondary text-white'} w-[50%] h-[100%] flex-center text-[11px]`} onClick={() => setLanguage('ENG')}>EN</div>
                <div className={`jap ${language == 'JAP' ? 'bg-spacial':'bg-secondary text-white'} w-[50%] h-[100%] flex-center text-[11px]`} onClick={() => setLanguage('JAP')}>JP</div>
              </div>
              <p className='text-white text-[12px]'>Language</p>
            </div>
          </div>
        </div>

        <div className="right-nav flex gap-[10px]">
          <div className="mobile-search-btn flex-center">
            <i className="bx bx-search xl:hidden text-primary text-[22px] cursor-pointer" onClick={() => setShowSearchBox((state) => !state)}></i>
          </div>
          <div className="login-btn">
            <button type="button" className="btn bg-spacial">Login</button>
          </div>
        </div>
      </header>
      <div className={` ${showSearchBox ? 'flex':'hidden'} mobile-search-box my-[5px] gap-[5px] mx-[20px] xl:hidden`}>
        <div className="filter-button px-[8px] py-[0px] rounded-[5px] bg-secondary flex-center cursor-pointer">
          <i className='bx bxs-filter-alt text-[18px] text-white'></i>
        </div>
        <div className="rounded-[5px] bg-white xl:hidden flex flex-1 justify-between items-center ">
              <input type="text" className="px-[1rem] py-[.4rem] flex-1 outline-none border-none" placeholder="Search for any anime, character" /> 
              <div className="buttons flex-center gap-2 px-2">
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

      <div className={`${showMobileMenu ? 'translate-x-[0px]':'-translate-x-full'} slidin left-0 menu-section absolute top-0 bg-primary flex flex-col min-h-screen min-w-[20rem] text-white`} ref={mobMenu} >

        <div className="close-menu flex-center max-w-[9rem] gap-[2px] px-[5px] py-[4px] mx-[14px] my-[20px] bg-secondary bg-secondary-light rounded-[20px]" onClick={() => setShowMobileMenu(false)}>
          <i className='bx bx-chevron-left text-[20px]'></i>
          <span className='text-[14px]'>Close menu</span>
        </div>

        <div className="more md:hidden block my-[5px] bg-primary-deep py-[10px] ">
          <div className="more flex justify-start items-center gap-[20px] mx-[14px]">
            <div className="random flex flex-col text-white justify-center items-center cursor-pointer text-unique-hover ">
              <i className="fa-solid fa-shuffle  text-[18px]"></i>
              <p className='text-[12px] '>Random</p>
            </div>
            <div className="language-selector flex flex-col justify-center items-center ">
              <div className="switch w-[3rem] rounded-[5px] flex-center cursor-pointer">
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
              <li className='nav-link text-unique-hover'>Home</li>
              <li className='nav-link text-unique-hover'>Trending</li>
              <li className='nav-link text-unique-hover'>TV Series</li>
              <li className='nav-link text-unique-hover'>Movies</li>
              <li className='nav-link text-unique-hover'>OVAs</li>
              <li className='nav-link text-unique-hover'>ONAs</li>
              <li className='nav-link text-unique-hover'>Specials</li>
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
