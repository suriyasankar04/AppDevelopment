import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'
import 
 {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify}
 from 'react-icons/bs'
 import { GrNotes } from 'react-icons/gr'
 import { selectUser } from '../components/redux/UserSlice'
import "../css/Header.css"
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../components/redux/UserSlice'
import { useUser } from '../components/context/userContext'
import * as FaIcons from "react-icons/fa"
import { useParams } from 'react-router-dom'
import * as AiIcons from "react-icons/ai";
import "../css/SideBar.css"
import { useNavigate } from 'react-router-dom'
function Header({openSidebarToggle,OpenSidebar}) {
  // const user = useSelector(state=>state.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {id} = useParams();
  const user=useSelector(selectUser);
  const username=user.user && user.user.username?user.user.username:'Guest';
  console.log(user.username);
  const[open,setOpen] = useState(false);
  const {logout:userlogout}=useUser();
  const handleClick =()=>{
setOpen(!open)
  }
  const handleLogout =()=>{
userlogout();
dispatch(logout({username:null}))
navigate("/");

  }
  const tempnum =  localStorage.getItem('tid');
  const temp =async(e)=>{

    data = await getTemplate();
    
  }
const[Sidebar,setSidebar] = useState(false);
    const showSider = () => setSidebar(!Sidebar);
  return (
    <>
      <div className='logname'>

      <button className="icons" onClick={handleClick}>

      <BsPersonCircle   />
      <div className='username'>

   {user.username}
      </div>
      </button>

            {/* <BsFillBellFill className='icon'/> */}
            {/* <BsFillEnvelopeFill className='icon'/> */}
            {open &&
            <div className='dropdown'>
                <button onClick={handleLogout}>
                LOGOUT
                </button>
              
            </div>
            }
            </div>
    <div className='head'>
    

        <Link to="" className='fhead'>Home</Link>
        <Link to="" className='fhead'>About us</Link>
         <Link to="/landing"className='title2'>RESUME FUSION</Link>
   
         {/* <div className='sidebar-title'>
        <FaIcons.FaBars onClick={showSider}/>
      </div> */}
        <div className='header-right'>
              <FaIcons.FaBars onClick={showSider} />
            <aside id={Sidebar? "sidebar":"side"} className= "sidebar-responsive">
    {/* <li className='close_icon'>
        <Link to="">
        <AiIcons.AiOutlineClose className='icon' onClick={showSider} />
        </Link>
      </li> */}


  
<ul className='sidebar-list'>
    <li className='sidebar-list-item'>
        <Link to="/home">
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
        <Link to={`/save/${tempnum}`}>
        <BsListCheck className='icon'onClick={OpenSidebar}/>  Saved Templates
        </Link>
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

        </div>
    </div>
      </>
  )
}

export default Header