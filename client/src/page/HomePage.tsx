import Carousel from "../components/Carousel/Carousel"
import ListData from "../components/Other/ListData"
import UpdatedBox from "../components/Other/UpdatedBox"
import Spotlight from "../components/Spotlight/Spotlight"




function HomePage() {
  return (
    <div className=" bg-primary-deep w-[100vw]">
      <Spotlight />
      <Carousel/>
      <ListData />
      <UpdatedBox />
    </div>
  )
}

export default HomePage
