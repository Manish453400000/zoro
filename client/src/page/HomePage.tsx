import Carousel from "../components/Carousel/Carousel"
import ListData from "../components/Other/ListData"
import UpdatedBox from "../components/Other/UpdatedBox"
import Schedule from "../components/Schedule/Schedule"
import Spotlight from "../components/Spotlight/Spotlight"




function HomePage() {
  return (
    <div className=" bg-primary-deep w-[100vw]">
      <Spotlight />
      <Carousel/>
      <ListData />
      <div className="container w-full max-w-[110rem] flex flex-wrap m-auto ">
        <div className="order-one lg:w-[70%]">
           <UpdatedBox />
           <Schedule />
        </div>
        <div className="order-two bg-secondary text-white w-[40%]"> ldjsdljsdfsa</div>
      </div>
    </div>
  )
}

export default HomePage
