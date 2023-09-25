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

import "../css/Dashboard.css"
import { useNavigate } from 'react-router-dom';
export default function Landing() {


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
      const navigate = useNavigate();
     const handlehome = () =>{
      navigate("/home")
     }

      const [openSidebarToggle, setOpenSidebarToggle] = React.useState(false)

      const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle)
      }
  return (
    <div className='bgrd'>
<Header openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
    <div className='lan'>

    <div className='lantitle'>
    <div className='sec1'>

    <h3>The Best Online Resume Builder</h3>
    <p style={{fontSize:"40px",width:"900px"}}>Create your resume easily with our free builder and professional templates.</p>
    <button class="btn-53" onClick={handlehome}>
  <div class="original">START</div>
  <div class="letters">
    
    <span>S</span>
    <span>T</span>
    <span>A</span>
    <span>R</span>
    <span>T</span>
    
  </div>
</button>
    
   </div>
   <div className='sec2'>
<div >
    <h4 style={{fontSize:"25px",width:"900px"}}>PROFESSTIONAL TEMPLATE</h4>
    <p style={{fontSize:"20px",width:"900px"}}>Choose professional, elegant, creative, or modern resume templates. Zety's resume maker offers 18 templates. You can easily change colors and adapt the layout to any resume format you choose: functional, reverse-chronological, or combination.
    </p>
</div>
    <img className='image' style={{top:"-150px"}}src={"https://s.tmimgcdn.com/scr/800x500/179300/resume-template-of-lawyer-complete-professional-cv-resume_179351-2-original.jpg"}></img>
   </div>
    </div>
   
    </div>
    
  
{/* <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/> */}
   
<Footer/>
                  </div>
  )
}

