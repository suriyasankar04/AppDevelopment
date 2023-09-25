import React, { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import UserList from './admin/users'
import FeedbackList from './admin/feedback'
import { IoStatsChartSharp } from "react-icons/io5";
import { HiMusicNote } from "react-icons/hi";
import { FiUsers, FiSettings } from "react-icons/fi";
import { SiDatacamp, Si1001Tracklists } from "react-icons/si";
// import Logo from "../assets/logo.png";
import "../css/AdminDashboard.css"
import Metrics from './admin/Metric';
import AdminDashboard from './admin/AdminDashboard';
import Templates from './admin/templates';

export default function AdminSide() {
  const [selectedOption, setSelectedOption] = useState("Dashboard"); // Initialize with the default option

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

let content = null;
 
    switch (selectedOption) {
      case 'Dashboard':
        content = <Metrics />;
        break;
      case 'Home':
        return <div>{navigate('/home')}</div>;
        break;
      case 'User':
       content = <UserList />;
       break;
      case 'Template':
       content = <Templates />;
       break;
      case 'Feedback' :
        content= <FeedbackList/>
        break;
      default:
        return null;
    }
  
  return (
    <div>

    <div className='dashboard'>
    <div className="sidebar">
      <div className="upper_container">
        <div className="brand">
          {/* <img src={Logo} alt="" /> */}
        </div>
        <div className="links">
          <ul>
            <li className="">
              <IoStatsChartSharp onClick={()=>handleOptionSelect("Dashboard")} />
              <Link to=""onClick={()=>handleOptionSelect("Dashboard")}>OVERVIEW</Link>
            </li>
            <li>
              <SiDatacamp onClick={()=>handleOptionSelect("User")}/>
              <Link to=""onClick={()=>handleOptionSelect("User")}>USER</Link>
            </li>
            <li>
              <Si1001Tracklists onClick={()=>handleOptionSelect("Template")}/>
              <Link to=""onClick={()=>handleOptionSelect("Template")}>TEMPLATES</Link>
            </li>
            <li>
              <HiMusicNote onClick={()=>handleOptionSelect("Feedback")}/>
              <Link to=""onClick={()=>handleOptionSelect("Feedback")}>FEEDBACK</Link>
            </li>
        
          </ul>
        </div>
      </div>
    </div>
      
      
    
      {content}
    </div>
    
    </div>
  )
}
