
import poster from '../../assets/poster/poster2.jpg'

const List = () => {
  return (
     <div className={` py-[8px] px-[1rem] bg-secondary-deep bg-secondary-hover flex gap-[10px] cursor-pointer`}>
          <div className="poster">
            <img src={poster} alt="" />
          </div>
          <div className="info text-white">
            <span className='text-unique-hover'>One Piece</span>
            <div className="flex items-center gap-[8px] font-light-gray ">
              <span className='text-[12px]'>TV</span>
              <i className={`sp-card bx bxs-circle cursor-pointer text-[5px]`}></i>
              <span className='text-[12px]'>EP 1085</span>
              <i className={`sp-card bx bxs-circle cursor-pointer text-[5px]`}></i>
              <span className='text-[12px]'>23 min</span>
            </div>
          </div>
       </div>
  )
}

export default List
