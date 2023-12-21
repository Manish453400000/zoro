import poster from '../../assets/poster/poster2.jpg'

const UpdateCard = () => {
  return (
    <div className='w-[100%] bg-primary-light cursor-pointer rounded-[3px] md:rounded-none overflow-hidden'>
      <div className="card-img relative w-[100%] aspect-[1/1.3]">
        <img src={poster} alt="" className='w-full cover-image' />
        <div className="layer w-full h-[50%] absolute bottom-0 left-0"></div>
        <div className="labels flex gap-[5px] md:gap-[10px] absolute left-[5px] md:left-5px bottom-[10px]">

          <div className="flex-center bg-white text-black text-[14px] px-[4px] py-[-1px] rounded-[5px]">
                <i className='bx bxs-captions py-[2.9px]' ></i>
                <span className="text-[10px]">9</span>
          </div>
          <div className="flex-center bg-aqua text-black text-[14px] px-[6px] py-[-1px] rounded-[5px] ">
                <i className='bx bxs-microphone py-[2.9px]' ></i>
                <span className="text-[10px]">12</span>
          </div>

        </div>
        <div className="ep bg-white text-gray rounded-[5px] px-[3px] py-[1px] absolute bottom-[10px] right-[5px] md:right-[10px] text-[11px] opacity-80" >
          1085 EPS
        </div>
      </div>
      <div className="content p-[10px] text-white">
        <h5 className='text-[13px] h-[40px] overflow-hidden text-ellipsis '>One Piece: The Journey of New Pirate King Monkey D. Luffy</h5>
        <div className="info text-white pt-[5px]">
            <div className="flex items-center gap-[8px] font-light-gray ">
              <span className='text-[12px]'>TV</span>
              <i className={`sp-card bx bxs-circle cursor-pointer text-[5px]`}></i>
              <span className='text-[12px]'>Oct 8, 1998</span>
            </div>
          </div>
      </div>
    </div>
  )
}

export default UpdateCard
