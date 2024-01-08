import { useNavigate } from 'react-router-dom'
import notFound from '../assets/Zoro-404.png'

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className='min-h-[40rem] text-white flex-center'>
      <div className="not-found w-[90%] max-w-[30rem] flex justify-center gap-[10px] flex-col items-center">
        <img src={notFound} alt="" className='w-[20rem]' />
        <div className=" flex flex-col items-center justify-center">
          <h3 className='text-[34px]'>404 ERROR!</h3>
          <span className='text-[14px]'>Page not found...</span>
        </div>
        <button className='bg-spacial w-[90%] text-black flex justify-center py-[10px] rounded-[5px] items-center gap-[5px]' onClick={() => navigate('/')}>
          <i className='bx bxs-chevron-left-circle text-[25px]'></i>
          <span>Back to homepage</span>
        </button>
      </div>
    </div>
  )
}

export default NotFoundPage
