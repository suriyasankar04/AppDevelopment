import React from 'react'
import Header from '../Header/Header'
import Sidebar from '../SideBar/SideBar'
import "../css/Landing.css"
import Footer from '../Header/Footer'
export default function Home() {
    const [openSidebarToggle, setOpenSidebarToggle] = React.useState(false)

    const OpenSidebar = () => {
      setOpenSidebarToggle(!openSidebarToggle)
    }
  return (
    <div className='bgrd'>
<Header openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
    <div className='lan'>HOME</div>
   
    <Footer/>
    </div>
  )
}
