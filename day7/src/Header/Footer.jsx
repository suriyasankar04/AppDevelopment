import React from 'react'
import "../css/footer.css"
import { Link } from 'react-router-dom'
export default function () {
  return (
    <div className='foot'>
        <div className='fadmin'>
            <Link to="/privacy" className=''>PRIVACY POLICY</Link>
            <Link to="/termsandcondi" className=''>TERMS AND CONDITION</Link>
            <Link to="/Adminlogin" className="" >ADMIN</Link>
        </div>
    </div>
  )
}
