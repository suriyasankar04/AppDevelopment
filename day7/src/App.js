import * as React from 'react';
import Login from './components/Login';
import {Link,Routes,BrowserRouter,Route, Navigate} from "react-router-dom";
import Signuppage from './components/Signup';
import Header from './Header/Header';
import Sidebar from './SideBar/SideBar';
import Home from './components/home';
import Landing from './components/Landing';
import Create from './components/Create';
import { UserProvider, useUser } from './components/context/userContext';
import { Provider } from 'react-redux';
import  store from './components/redux/Store';
import "../src/css/App.css"
import UserList from './components/admin/users';
import FeedbackList from './components/admin/feedback';
import Metrics from './components/admin/Metric';
import AdminSide from './components/AdminSide';
import AdminDashboard from './components/admin/AdminDashboard';
import Templates from './components/admin/templates';
import AdminLogin from './components/admin/AdminLogin';
import TermsandCondition from './components/TermsandCondition';
import PrivacyPolicy from './components/PrivacyPolicy';
import Form from './components/Forms/PersonalInfo';
import PersonalInfo from './components/Forms/PersonalInfo';
import Temp1 from './components/Template/temp1';

function App() {

  const PrivateRoute =({children})=>{
    const{isUserLoggedIn} = useUser();
    console.log(isUserLoggedIn)
    return isUserLoggedIn ? children: <Navigate to="/" replace/>
  }
  const PrivateRoutes =({children})=>{
    const{isUserLoggedIn} = useUser();
    return isUserLoggedIn ? children: <Navigate to="/Adminlogin" replace/>
  }

  return (
    <div>
     
     <UserProvider>
<BrowserRouter>
      <Routes>
     <Route exact path="/" element={
     
     <Login />
     
     } />
     <Route  path="/oct" element={<Signuppage/>}/>
     <Route  path="/home" element={
      <PrivateRoute>

     <Home/>
       </PrivateRoute> 
     }/>
     <Route  path="/landing" element={
      <PrivateRoute>

        <Landing/>
       </PrivateRoute>
     }/>
     <Route path='/create' element={
      <PrivateRoute>

     <Create/>
       </PrivateRoute>
     }/>
     <Route path="/Admin" element={
      <PrivateRoutes>

        <AdminSide/>
      </PrivateRoutes>
     }/>
     <Route path="/Adminlogin" element={<AdminLogin/>}/>

     <Route path="/admin/users" element={
      <PrivateRoutes>

        <UserList/>
      </PrivateRoutes>
     }/>
     <Route path="/admin/template" element={
      <PrivateRoutes>

        <Templates/>
      </PrivateRoutes>
     }/>
        <Route path="/admin/feedbacks" element={
          <PrivateRoutes>

            <FeedbackList/>
          </PrivateRoutes>
        } />
      <Route path='/termsandcondi'element={<TermsandCondition/>}/>
      <Route path='/privacy'element={<PrivacyPolicy/>}/>
      <Route path='/form'element={<PersonalInfo/>}/>
      <Route path='/temp1'element={<Temp1/>}/>
      </Routes>
</BrowserRouter>
     </UserProvider>
    
     
   
     
    </div>
  );
}
// // import React from 'react';
// //  import './App.css';
// // import { BrowserRouter as Router, Route, Switch, NavLink, Routes } from 'react-router-dom';

// // function Dashboard() {
// //   return (
// //     <div>
// //       {/* Add your dashboard content here */}
// //       <p>Welcome to the Resume Builder Dashboard!</p>
// //     </div>
// //   );
// // }

// // function CreateResume() {
// //   return (
// //     <div>
// //       {/* Add content for creating a resume */}
// //       <p>Create Resume Page</p>
// //     </div>
// //   );
// // }

// // function ManageResumes() {
// //   return (
// //     <div>
// //       {/* Add content for managing resumes */}
// //       <p>Manage Resumes Page</p>
// //     </div>
// //   );
// // }

// // function App() {
// //   return (
// //     <Router>
// //       <div className="App">
// //         <header className="App-header">
// //           <h1>Resume Builder Dashboard</h1>
// //         </header>
// //         <div className="App-content">
// //           <aside className="sidebar">
// //             <nav>
// //               <ul>
// //                 <li>
// //                   <NavLink to="/" exact activeClassName="active">Dashboard</NavLink>
// //                 </li>
// //                 <li>
// //                   <NavLink to="/create-resume" activeClassName="active">Create Resume</NavLink>
// //                 </li>
// //                 <li>
// //                   <NavLink to="/manage-resumes" activeClassName="active">Manage Resumes</NavLink>
// //                 </li>
// //               </ul>
// //             </nav>
// //           </aside>
// //           <div className="main-content">
// //             <Routes>
// //               <Route path="/" exact component={Dashboard} />
// //               <Route path="/create-resume" component={CreateResume} />
// //               <Route path="/manage-resumes" component={ManageResumes} />
// //             </Routes>
// //           </div>
// //         </div>
// //       </div>
// //     </Router>
// //   );
// // }




//  export default App;
// import React, { useState } from 'react';
// import UserList from './components/admin/users';
// import FeedbackList from './components/admin/feedback';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';


// function App() {
//   const [currentPage, setCurrentPage] = useState('home');

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };

//   let content = null;

//   switch (currentPage) {
//     case 'home':
//       content = <UserList />;
//       break;
//     case 'about':
//       content = <FeedbackList />;
//       break;
//     default:
//       content = <div>Page not found</div>;
//   }

//   return (
//     <div className="App">
//       <BrowserRouter>
//       <div className="sidebar">
//         <button onClick={() => handlePageChange('home')}>Home</button>
//         <button onClick={() => handlePageChange('about')}>About</button>
//       </div>
//       <div className="content">{content}</div>
//       <Routes>
//       <Route path="/admin/users" element={
      

//          <UserList/>

//       }/>
//       <Route path="/admin/feed" element={
      

//          <FeedbackList/>

//       }/>
//       </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

export default App;
