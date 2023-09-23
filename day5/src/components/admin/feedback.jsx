import React from 'react';
import AdminDashboard from './AdminDashboard';
import AdminSide from '../AdminSide';
import "../../css/Metric.css"

export default function FeedbackList(){
  // Fetch feedback data from the backend API or use a mock data array
  const feedbacks = [
    { id: 1, message: 'Great website!', userId: 1 },
    // Add more feedback data here
  ];

  return(
    <div className='metric'>

    <div className='dashboard'>
        <AdminSide/>    
      <h2>
      <div class="card__container">
  <h2>Feedback List</h2>
      <table>
        <thead>
          <tr className='element'>
            <th>Name</th>
            
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          <tr className='element'>
            <td>Akram</td>
            
            <td>GREAT WEBSITE</td>
          </tr>
          <tr className='element'>
            <td>Jason</td>
            
            <td>NICE IDEA</td>
          </tr>
          <tr className='element'>
            <td>Dave</td>
           
            <td>A VERY USERFRIENDLY WEBSITE</td>
          </tr>
          <tr className='element'>
            <td>Tom</td>
            
            <td>VERY FEW TEMPLATES</td>
          </tr>
          <tr className='element'>
            <td>Stark</td>
            
            <td>ADD MORE TEMPLATES</td>
          </tr>
        </tbody>
      </table>
  </div>

        </h2>
    </div>
        </div>
  );
}


