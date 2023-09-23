import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import 
 {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify}
 from 'react-icons/bs'
 import { GrNotes } from 'react-icons/gr'
 import { selectUser } from '../components/redux/UserSlice'
import "../css/Header.css"
import { useSelector } from 'react-redux'
import { logout } from '../components/redux/UserSlice'
import { useUser } from '../components/context/userContext'
function Header({OpenSidebar}) {
  // const user = useSelector(state=>state.user.user);
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
  }

  return (
    <div className='head'>
        
    

        <Link to="" className='fhead'>Home</Link>
        <Link to="" className='fhead'>About us</Link>
         <div className='title2'>RESUME BULIDER</div>
   
        <div className='header-left'>
            {/* <BsSearch  className='icon'/> */}
        </div>
        <div className='header-right'>
         {user.username}
            {/* <BsFillBellFill className='icon'/> */}
            {/* <BsFillEnvelopeFill className='icon'/> */}
            <button onClick={handleClick}>

            <BsPersonCircle   />
            </button>
            {open &&
            <div className='dropdown'>
              <ul>
                <button onClick={handleLogout}>

                <li>LOGOUT</li>
                </button>
              </ul>
            </div>
            }
        </div>
    </div>
  )
}

export default Header