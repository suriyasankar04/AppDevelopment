

import React, { useEffect } from 'react'
import { ReactDOM , useState} from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import '../css/Login.css'
import { useDispatch } from 'react-redux';
import Popup from './popup/Popup';
import { login } from './redux/UserSlice';
import { loginform } from './Service/Api';
import { useUser } from './context/userContext';
export default function Login() {
    const dispatch = useDispatch();
    const {id} = useParams();
  
    const { login: userLogin} = useUser();
    
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [isPopupVisible, setPopupVisible] = useState(false);
    const [message, setMessage] = useState({
        type: '',
        content: '',
        url: '',
        btn: ''
    });



    const eventHandler = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const showMessage = (type, content, url = '', btn = 'Got it') => {
      setMessage({ type, content, url, btn });
      setPopupVisible(true);
  };
  const handlePaste = (e) => {
    e.preventDefault();
    showMessage('error', 'Restricted action');
};

const handleGotItClick = () => {
    if (message.url) {
        navigate(message.url);
    }
    setPopupVisible(false);
};

  

const submitLoginForm = async(e) => {
  e.preventDefault();
  const formValues = Object.values(formData);
  if (!formValues.some((value) => !value)) {
    const res =  await loginform(formData)
    console.log(res.data);
    localStorage.setItem('token',res.data.token)
                        //  .catch((err)=>console.log(err));
    if(res.status=='200'){
localStorage.setItem('username',formData.email);
      showMessage('success', 'Login successful!', '/landing');
      userLogin();
      dispatch(login({username:formData.email}));
    }
    else{
      <div>WRONG PASSWORD</div>
    }
      // navigate('/dashboard')
  } else {
      showMessage('error', 'Please fill in all fields');
  }
 
};

        
        return (
      <div>
        <div className='title'>RESUME BULIDER</div>
       <img  className="loim" src="https://www.resumebuilder.com/wp-content/themes/resumebuilder/assets/images/desktop-with-resume-.svg"></img>
        {/* {isSubmitted ? <div> <Link to ="/home" style={{top:"40px" ,left:"80px"}} >click here👉</Link> </div> : renderForm} */}
        <div className='image-con'>
        <div className="login-box10">
           <h2>LOGIN</h2>
        <form onSubmit={submitLoginForm} >
          <div className="user-box10">
            
            <input type="text" name="email" id='username' placeholder='Username'value={formData.email} onChange={eventHandler} required />
            {/* {renderErrorMessage("uname")} */}
    
            <input type="password" name="password" id='password'placeholder='Password' value={formData.password} onChange={eventHandler}required />
            {/* {renderErrorMessage("pass")} */}

          </div>
          <button  className='submit1' 
          /*onClick={handleSubmit}*/>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Submit
      </button>
    
        </form>
        <div className="dont">
          Dont have an Account?
        </div>
          <div className='s'>
          <Link to ="/oct" className='sign' >SIGNUP</Link>
          </div>
      </div>
            </div>
            {isPopupVisible && <Popup message={message} togglePopup={() => setPopupVisible(false)} handleGotItClick={handleGotItClick} />}

        </div>
            
     
    );
    
  }
  
