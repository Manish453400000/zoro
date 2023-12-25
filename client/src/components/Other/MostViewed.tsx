import poster from '../../assets/poster/poster2.jpg'

const MostViewed = () => {
  return (
    <div className=''>
      <div className="head-viewed font-unique text-unique text-[26px] lg:text-[28px] xl:text-[32px]">
        Most Viewed
      </div>

      <div className="viewed-container my-[20px] bg-[#27282d] rounded-[5px] overflow-hidden">

        <div className="period flex text-[13px] bg-[#414149]">
          <div className="day flex-grow  py-[10px] flex-center text-unique-hover font-semibold text-unique bg-[#4b4b56] cursor-pointer">Day</div>
          <div className="day flex-grow text-white py-[10px] flex-center text-unique-hover font-semibold cursor-pointer ">Week</div>
          <div className="day flex-grow text-white py-[10px] flex-center text-unique-hover font-semibold cursor-pointer ">Month</div>
        </div>

        <div className="show-list text-white">

          {
            Array.from({length: 6}).map((_, i) => {
               return (
                <div className="item px-[20px] py-[25px] flex gap-[15px] md:gap-[25px] items-center border-bottom-light">
                  <div className="rank">
                    <h5 className='border-bottom-spacial text-[20px] md:text-[22px] font-semibold px-[2px]'>01</h5>
                  </div>
                  <div className="image-content">
                    <img src={poster} alt="" className='w-[40px] ' />
                  </div>
                  <div className="content-container ">
                    <h6 className='text-[14px] font-semibold'>One Piece</h6>
                    <div className="info text-[11px] text-[#c6c1c1] flex gap-[8px] items-center">
                      <div className="watch">
                        <i className="fa-solid fa-eye"></i>
                        <span className='pl-[1px]'>25k</span>
                      </div>
                      <div className="like">
                        <i className="fa-solid fa-heart"></i>
                        <span className='pl-[2px]'>22k</span>
                      </div>
                    </div>
                  </div>
                </div>
               )
            })
          }
          <div className="item px-[20px] py-[25px] flex gap-[15px] md:gap-[25px] items-center">
            <div className="rank">
              <h5 className='border-bottom-spacial text-[20px] md:text-[22px] font-semibold px-[2px]'>01</h5>
            </div>
            <div className="image-content">
              <img src={poster} alt="" className='w-[40px] ' />
            </div>
            <div className="content-container ">
              <h6 className='text-[14px] font-semibold'>One Piece</h6>
              <div className="info text-[11px] text-[#c6c1c1] flex gap-[8px] items-center">
                <div className="watch">
                  <i className="fa-solid fa-eye"></i>
                  <span className='pl-[1px]'>25k</span>
                </div>
                <div className="like">
                  <i className="fa-solid fa-heart"></i>
                  <span className='pl-[2px]'>22k</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
      
    </div>
  )
}

export default MostViewed
