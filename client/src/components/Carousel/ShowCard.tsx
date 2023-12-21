
import poster from '../../assets/poster/poster2.jpg'

function ShowCard() {
  return (
    <div className=" show-card bg-white shrink-0 flex cursor-pointer rounded-[3px] md:rounded-none overflow-hidden">
      <div className="details w-[28%] hidden md:flex gap-[55px] lg:gap-[10px] flex-col justify-end items-center max-w-[3rem] min-w-[2.2rem] h-full bg-secondary-grandiet overflow-hidden">
        <span className='text-white absolute bottom-[6rem] md:bottom-[5rem] lg:bottom-[5.5rem] text-[18px] md:text-[20px] lg:text-[22px] font-unique whitespace-nowrap rotate-[270deg] text-ellipsis w-[130px]
        lg:w-[150px] overflow-hidden px-[10px]'>One Piece</span>
        <span className='font-unique text-[24px] text-unique xl:text-[26px] '>01</span>
      </div>
      <div className="rank w-[2.3rem] md:hidden absolute bg-white text-center">
        <span className='font-unique text-[24px]'>01</span>
      </div>
      <div className="poster-block">
        <img src={poster} alt="" />
      </div>
    </div>
  )
}

export default ShowCard
