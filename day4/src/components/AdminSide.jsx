import React from 'react'
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

export default function AdminSide() {
  return (
    <div>

    <div>


    <div className="sidebar">
      <div className="upper_container">
        <div className="brand">
          {/* <img src={Logo} alt="" /> */}
        </div>
        <div className="links">
          <ul>
            <li className="active">
              <IoStatsChartSharp />
              <Link to="/Admin">Overview</Link>
            </li>
            <li>
              <SiDatacamp />
              <Link to="/admin/users">User</Link>
            </li>
            <li>
              <Si1001Tracklists />
              <Link to="/admin/template">Templates</Link>
            </li>
            <li>
              <HiMusicNote />
              <Link to="/admin/feedbacks">FeedBack</Link>
            </li>
        
          </ul>
        </div>
      </div>
      <div className="lower__container">
        <div className="music__container">
          {/* <Player /> */}
        </div>
      </div>
    </div>
    
    </div>
    
    </div>
  )
}
