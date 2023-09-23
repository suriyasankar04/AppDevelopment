import React from 'react';
import AdminDashboard from './AdminDashboard';
import AdminSide from '../AdminSide';
import "../../css/Metric.css"

export default function UserList() {
  // Fetch user data from the backend API or use a mock data array
  const users = [
    { id: 1, name: 'Admin User', email: 'admin@example.com' },
    // Add more user data here
  ];

  return (
    
      <div className='metric'>
    <div className='dashboard'>
        <AdminSide/>
      <h2>
      <div class="card">
  {/* <span>User List</span> */}
  <div class="card__container">
  <h2>User List</h2>
      <table>
        <thead>
          <tr className='element'>
            <th>UserName</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr className='element'>
            <td>Akram</td>
            <td>akram@gmail.com</td>
            
          </tr>
          <tr className='element'>
            <td>Jason</td>
            <td>Jason.gmail.com</td>
           
          </tr>
          <tr className='element'>
            <td>Dave</td>
            <td>Dave@gmail.com</td>
          
          </tr>
          <tr className='element'>
            <td>Tom</td>
            <td>Tom@gmail.com</td>
           
          </tr>
          <tr className='element'>
            <td>Stark</td>
            <td>Stark@gmail.com</td>
            
          </tr>
        </tbody>
      </table>
  </div>
</div>

      </h2>
    </div>
        </div>
  );
}


