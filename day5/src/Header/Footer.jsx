import React from 'react'
import "../css/footer.css"
import { Link } from 'react-router-dom'
export default function () {
  return (
    <div className='foot'>
        <div className=''>
            <Link to="" className='fadmin'>PRIVACY POLICY</Link>
            <Link to="" className='fadmin'>TERMS AND CONDITION</Link>
            <Link to="/Adminlogin" className="fadmin" >ADMIN</Link>
        </div>
    </div>
  )
}
