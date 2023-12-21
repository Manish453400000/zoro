
import List from './List'

const DataCard = () => {
  return (
    <div className="bg-secondary">
      <div className="head-title text-unique text-[18px] px-[1rem] py-[.5rem]">New Added</div>
       
       <List />
       <List />
       <List />
       <List />
       <List />

      <div className="more-btn bg-secondary-light py-[10px] flex justify-center text-white items-center text-[12px] gap-[5px] cursor-pointer">
            <span className="">View more</span>
            <i className='bx bx-chevron-right text-[16px]' ></i>
      </div>
    </div>
  )
}

export default DataCard
