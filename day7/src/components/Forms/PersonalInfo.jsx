import React, { useState } from 'react'
import "../../css/Form.css"
import Temp1 from '../Template/temp1';
import { useNavigate } from 'react-router-dom';
import { PDFDownloadLink } from '@react-pdf/renderer';
export default function PersonalInfo() {
    const [formData, setFormData] = useState([]);
    const navigate = useNavigate();
  // const [isCheck, setIsCheck] = useState(false);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    // alert(`Name: ${formData.name}, Email: ${formData.email}, Message: ${formData.message}`
    <PDFDownloadLink document={<Temp1 />} fileName="example.pdf">
    {({ blob, url, loading, error }) =>
      loading ? 'Loading document...' : 'Download now!'
    }
  </PDFDownloadLink>
  

};
  return (
    <div>
        <div class="main">
<div class="container">
<div class="signup-content">
<div class="signup-img">
  <Temp1 formData={formData} />
<img src="images/signup-img.jpg" alt/>
</div>
<div class="signup-form">
<form method="POST" class="register-form" id="register-form">
<h2>PERSONAL INFO</h2>
<div class="form-row">
<div class="form-group">
<label for="name">Name :</label>
<input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required />
</div>
<div class="form-group">
<label for="father_name">Father Name :</label>
<input type="text" name="father_name" id="father_name" value={formData.father_name} onChange={handleChange}required />
</div>
</div>
<div class="form-group">
<label for="address">Address :</label>
<input type="text" name="address" id="address" value={formData.address} onChange={handleChange}required />
</div>
<div class="form-radio">
<label for="gender" class="radio-label">Gender :</label>
<div class="form-radio-item">
<input type="radio" name="gender" id="male" checked/>
<label for="male">Male</label>
<span class="check"></span>
</div>
<div class="form-radio-item">
<input type="radio" name="gender" id="female"/>
<label for="female">Female</label>
<span class="check"></span>
</div>
</div>
<div class="form-row">
<div class="form-group">
<label for="state">State :</label>
<div class="form-select">
<select name="state" id="state" value={formData.state} onChange={handleChange}>
<option value></option>
<option value="America">America</option>
<option value="English">English</option>
</select>
<span class="select-icon"><i class="zmdi zmdi-chevron-down"></i></span>
</div>
</div>
<div class="form-group">
<label for="city">City :</label>
<div class="form-select">
<select name="city" id="city" value={formData.city} onChange={handleChange}>
<option value></option>
<option value="losangeles">Los Angeles</option>
<option value="washington">Washington</option>
</select>
<span class="select-icon"><i class="zmdi zmdi-chevron-down"></i></span>
</div>
</div>
</div>
<div class="form-group">
<label for="birth_date">DOB :</label>
<input type="text" name="birth_date" id="birth_date" value={formData.birth_date} onChange={handleChange}/>
</div>
<div class="form-group">
<label for="pincode">Pincode :</label>
<input type="text" name="pincode" id="pincode" value={formData.pincode} onChange={handleChange}/>
</div>
<div class="form-group">
<label for="course">Course :</label>
<div class="form-select">
<select name="course" id="course" value={formData.course} onChange={handleChange}>
<option value></option>
<option value="computer">Computer Operator & Pragramming Assistant</option>
<option value="desiger">Designer</option>
<option value="marketing">Marketing</option>
</select>
<span class="select-icon"><i class="zmdi zmdi-chevron-down"></i></span>
</div>
</div>
<div class="form-group">
<label for="email">Email ID :</label>
<input type="email" name="email" id="email" value={formData.email} onChange={handleChange}/>
</div>
<div class="form-submit">
<input type="submit" value="Reset All" class="submit" name="reset" id="reset" />
<input type="submit" value="Next" class="submit" name="submit" id="submit" onClick={handleSubmit}/>
</div>
</form>
</div>
</div>
</div>
</div>
    </div>
  )
}


