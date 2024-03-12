
import { useParams } from 'react-router-dom';

const WatchPage = () => {
  const { animeName } = useParams<{ animeName: string }>();
  return (
    <div className='text-white'>
      Watch: {animeName}
    </div>
  )
}

export default WatchPage
