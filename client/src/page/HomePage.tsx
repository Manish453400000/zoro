import Carousel from "../components/Carousel/Carousel"
import ContentWraper from "../components/ContentWraper"
import Genres from "../components/Genres/Genres"
import ToastNotification from "../components/ToastNotification/ToastNotification"
import ListData from "../components/Other/ListData"
import MostViewed from "../components/Other/MostViewed"
import UpdatedBox from "../components/Other/UpdatedBox"
import Schedule from "../components/Schedule/Schedule"
import Spotlight from "../components/Spotlight/Spotlight"




function HomePage() {
  return (
    <div className=" bg-primary-deep w-[100vw]">
      <Spotlight />
      <Carousel/>
      <ListData />
      
      <div className="container-main my-[20px] mb-[50px] w-full max-w-[110rem] flex flex-wrap m-auto ">
        <ContentWraper>
          <div className="wraper flex md:gap-[30px] flex-col lg:flex-row">
            <div className="order-one lg:w-[68%] xl:w-[72%]">
                <UpdatedBox />
                <Schedule />
            </div>
            <div className="order-two  flex-grow ">
              <Genres />
              <MostViewed />
            </div>
          </div>
        </ContentWraper>
        
      </div>
      <ToastNotification />
    </div>
  )
}

export default HomePage
