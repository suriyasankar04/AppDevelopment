import React from 'react'
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'
 import 
 { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';
import Header from '../Header/Header';
import Sidebar from '../SideBar/SideBar';
import Footer from '../Header/Footer';

function Home() {


    const data = [
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
     

      const [openSidebarToggle, setOpenSidebarToggle] = React.useState(false)

      const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle)
      }
  return (
    <div>
<Header OpenSidebar={OpenSidebar}/>
    <div className='lan'>home</div>
   
<Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
<Footer/>
                  </div>
  )
}

export default Home