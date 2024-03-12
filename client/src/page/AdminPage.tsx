import {PieChart, Pie, Tooltip} from 'recharts'

import './admin.scss'

const AdminPage = () => {
  const data = [
    {name:'Clasic Member', user: 300 },
    {name:'Premium Member', user: 100 }
  ]
  return (
    <div className='text-white min-h-[40rem] admin-panel py-[2rem] px-[1rem] max-w-[110rem] m-auto '>
      <div className="side-panel bg-[#2d2d34] rounded-sm flex items-center justify-center">
        <div className="users-data flex items-center justify-normal">
          <div className="test">
            <PieChart width={300} height={300} >
              <Tooltip />
              <Pie
                    data={data}
                    dataKey="students"
                    outerRadius={250}
                    innerRadius={150}
                    fill="red"
                    label={({ name, user }) =>
                        `${name}: ${user}`
                    }
                />
            </PieChart>
          </div>
        </div>
      </div>
      <div className="middle-panel bg-[#2d2d34] rounded-sm"></div>
      <div className="last-panel bg-[#2d2d34] rounded-sm"></div>
    </div>
  )
}

export default AdminPage
