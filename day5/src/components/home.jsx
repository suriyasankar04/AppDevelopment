import React from 'react'
import Header from '../Header/Header'
import Sidebar from '../SideBar/SideBar'
import "../css/Landing.css"
import Footer from '../Header/Footer'
export default function Landing() {
    const [openSidebarToggle, setOpenSidebarToggle] = React.useState(false)

    const OpenSidebar = () => {
      setOpenSidebarToggle(!openSidebarToggle)
    }
  return (
    <div>
<Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
    <div className='lan'>Landing</div>
    <Footer/>
    </div>
  )
}
