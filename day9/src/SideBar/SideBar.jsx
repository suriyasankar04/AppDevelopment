import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'
 import * as FaIcons from "react-icons/fa"
 import * as AiIcons from "react-icons/ai";
 import{GrNotes} from 'react-icons/gr'

import "../css/SideBar.css"
function Sidebar({openSidebarToggle, OpenSidebar}) {
    const[Sidebar,setSidebar] = useState(false);
    const showSider = () => setSidebar(!Sidebar);
  return (
   

     
        
    <aside id={Sidebar? "sidebar":"side"} className= "sidebar-responsive">


  
        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <Link to="">
                    <AiIcons.AiOutlineClose className='icon' onClick={showSider}/>
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/landing">
                    <BsGrid1X2Fill className='icon' onClick={openSidebarToggle}/>Home
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/create">
                    <BsFillArchiveFill className='icon' onClick={OpenSidebar}/>Templates
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="">
                    <BsFillGrid3X3GapFill className='icon'onClick={OpenSidebar}/>Cover
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                <BsListCheck className='icon'onClick={OpenSidebar}/>  Saved Templates
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                <BsPeopleFill className='icon'onClick={OpenSidebar}/>
                   Profile
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillGearFill className='icon'/> Help and Support
                </a>
            </li>
        </ul>

    </aside>
   
        
  )
}

export default Sidebar