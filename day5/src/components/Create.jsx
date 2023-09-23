import React from 'react'
import "../css/Landing.css"
import Header from '../Header/Header'
import Sidebar from '../SideBar/SideBar'
import Footer from '../Header/Footer'

export default function Create() {
    const [openSidebarToggle, setOpenSidebarToggle] = React.useState(false)

    const OpenSidebar = () => {
      setOpenSidebarToggle(!openSidebarToggle)
    }
  return (
    <div>

    <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
    <div className='lan'>Create</div>
    <Footer/>
    </div>
  )
}
