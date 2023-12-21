
import ContentWraper from '../ContentWraper'
import DataCard from './DataCard'

const ListData = () => {
  return (
    <div className='w-screen'>
      <ContentWraper>
        <div className="list-container grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-[1rem] lg:gap-[2rem]">
          <DataCard />
          <DataCard />
          <DataCard />
          <DataCard />
        </div>
      </ContentWraper>
      
    </div>
  )
}

export default ListData
