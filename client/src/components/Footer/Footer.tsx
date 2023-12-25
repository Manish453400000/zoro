import banner from '../../assets/cover/spotlight1.jpg'
import logo from '../../assets/logo-zoro.png'
import ContentWraper from '../ContentWraper'
import Label from './Label'

const Footer = () => {
  const arr = ['All', '0-9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'W', 'X', 'Y', 'Z']
  return (
    <div className='footer w-screen bg-secondary-deep'>
      <ContentWraper>
          <div className=" relative w-full inset-shadow ">
            <div className="banner-bg absolute opacity-10 z-[0] w-full h-full ">
              <img src={banner} alt="" className='cover-image layer-dark' />
              <div className="left-layer w-[50%] h-full absolute top-0 left-0"></div>
              <div className="right-layer w-[50%] h-full absolute top-0 right-0"></div>
            </div>
            <div className="content flex flex-col gap-[15px] justify-center items-center py-[1rem] relative z-10 ">
              <div className="logo border-bottom pb-[20px]">
                <img src={logo} alt="" className='w-[8rem]' />
              </div>

              <div className="az-list flex flex-col items-center justify-center">
                <div className="head text-white flex items-center gap-[1rem] md:gap-[2rem] m-auto py-[10px]">
                  <h5 className=' text-[16px] sm:text-[18px] md:text-[20px] border-right px-[20px] font-extrabold'>A - Z List</h5>
                  <span className='text-[12px] md:text-[14px]'>Searching anime order by alphabet name A to Z.</span>
                </div>
                <div className="container hidden sm:flex flex-wrap gap-[10px] w-[90%] justify-center">
                  {
                    arr.map((item, index) => {
                      return <Label letter={item} key={index} />
                    })
                  }
                </div>

              </div>
              <div className=" flex gap-[15px] text-white text-[12px] md:text-[16px]">
                <span className='text-unique-hover cursor-pointer'>Terms of service</span>
                <span className='text-unique-hover cursor-pointer'>DMCA</span>
                <span className='text-unique-hover cursor-pointer'>Contact</span>
              </div>

              <div className="about font-light-gray text-[11px] w-[90%] text-center">
                Zoro does not store any files on our server, we only linked to the media which is hosted on 3rd party services.
              </div>

              <span className='copyright font-light-gray text-[12px]'>&copy; Zoro.to</span>

            </div>
          </div>
      </ContentWraper>
    </div>
  )
}

export default Footer
