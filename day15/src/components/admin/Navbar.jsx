import React, { useState } from "react";
import avatar from "../../css/log.jpeg";

import { selectUser } from "../redux/UserSlice";
import { useSelector } from "react-redux";
import { useUser } from "../context/userContext";
function Navbar() {
    const user=useSelector(selectUser);
    const username=user.user && user.user.username?user.user.username:'Guest';
    const[open,setOpen] = useState(false);
    const {logout:userlogout}=useUser();
    const handleClick =()=>{
  setOpen(!open)
    }
    const handleLogout =()=>{
  userlogout();
    }
  return (
    <div className="navbar">
      <h1>Overview</h1>
      <div className="info">
        <h4>{user.username}</h4>
        <div className="avatar">
        <button onClick={handleClick}>
<img src={avatar} alt=""  />

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
    </div>
  );
}

export default Navbar;