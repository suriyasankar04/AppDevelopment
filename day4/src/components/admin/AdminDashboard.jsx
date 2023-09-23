import React from 'react'
import "../../css/AdminDashboard.css"
import AdminSide from '../AdminSide'
import Metrics from './Metric'
import TargetAudience from './TargeetAudience'
export default function AdminDashboard() {
  return (
    <div className='dashboard'>
<AdminSide/>
<Metrics/>
{/* <TargetAudience /> */}
    </div>
  )
}
