import React, { useState } from 'react'
import "../css/Landing.css"
import Header from '../Header/Header'
import Sidebar from '../SideBar/SideBar'
import Footer from '../Header/Footer'
import "../css/Create.css"
import { TemplateDate } from './TemplateData'
import { Link } from 'react-router-dom'

export default function Create() {
    const [openSidebarToggle, setOpenSidebarToggle] = React.useState(false)
  const[post,setPost]=useState([]);
  
    const OpenSidebar = () => {
      setOpenSidebarToggle(!openSidebarToggle)
    }
  return (
    <div>

    <div className='bgrd'>

<Header openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
    <div className='lan'>
      <div className='lantitle'>
      <div className='csec1'style={{fontSize:"40px"}}>
        CHOOSE YOUR<pre> </pre><h4>RESUME TEMPLATE</h4>
        {/* <br></br> */}
      </div>
<div className='imgtemp'>
        {TemplateDate.map((item, index)=>
        {
          return(
            <>
            <Link to="/form" style={{position:"relative",width:"30%" }}>

              <img className="imgs"src={item.Image} alt='img'/>
            </Link>
              </>
          )
        })}
        </div>
    </div>
        

        
        </div>
    </div>
        <div style={{position:"relative",fontSize:"15px",left:"-70%",width:"170%"}}>

    <Footer/>
        </div>
          </div>
  )
}
