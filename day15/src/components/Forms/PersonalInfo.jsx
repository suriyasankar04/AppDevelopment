import React, { useState } from 'react'
import "../../css/Form.css"
import Temp1 from '../Template/temp1';
import { useNavigate } from 'react-router-dom';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { getTemplate, postTemplate, saveTemplate } from '../Service/Api';
export default function PersonalInfo() {
    const [formData, setFormData] = useState([]);
    const [data, setData] = useState([]);
    const navigate = useNavigate();
  // const [isCheck, setIsCheck] = useState(false);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    // alert(`Name: ${formData.name}, Email: ${formData.email}, Message: ${formData.message}`
    // const username = localStorage.getItem('username',formData.email);
    const username = localStorage.setItem('username',formData.email);
    localStorage.setItem('tid',1);
    const tempnum =  localStorage.getItem('tid');
    const datas = { tid: "1", ...formData };
    await saveTemplate(formData);
    await postTemplate(datas);

    await getTemplate().then((res)=>{setData(res.data)});
    console.log(data);
    navigate(`/save/${tempnum}`);
  

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
<label for="name">FIRST NAME:</label>
<input type="text" name="firstname" id="name" value={formData.firstname} onChange={handleChange} required />
</div>
<div class="form-group">
<label for="father_name">LAST NAME:</label>
<input type="text" name="lastname" id="father_name" value={formData.lastname} onChange={handleChange}required />
</div>
</div>
<div class="form-group">
<label for="address">ROLE:</label>
<input type="text" name="roles" id="address" value={formData.roles} onChange={handleChange}required />
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
<label for="state">LANGUAGE 1:</label>
<div class="form-select">
<select name="language1" id="state" value={formData.language1} onChange={handleChange}>
<option value></option>
<option value="Tamil">Tamil</option>
<option value="English">English</option>
</select>
<span class="select-icon"><i class="zmdi zmdi-chevron-down"></i></span>
</div>
</div>
<div class="form-group">
<label for="city">LANGUAGE 2:</label>
<div class="form-select">
<select name="language2" id="city" value={formData.language2} onChange={handleChange}>
<option value></option>
<option value="Tamil">Tamil</option>
<option value="English">English</option>
</select>
<span class="select-icon"><i class="zmdi zmdi-chevron-down"></i></span>
</div>
</div>
</div>
<div className='form-row'>
<div class="form-group">
<label for="birth_date">SKILLS1:</label>
<input type="text" name="skill1" id="birth_date" value={formData.skill1} onChange={handleChange}/>
</div>

<div class="form-group">
<label for="birth_date">SKILLS2:</label>
<input type="text" name="skill2" id="birth_date" value={formData.skill2} onChange={handleChange}/>
</div>

<div class="form-group">
<label for="birth_date">SKILLS2:</label>
<input type="text" name="skill3" id="birth_date" value={formData.skill3} onChange={handleChange}/>
</div>

</div>
<div class="form-row">
<div class="form-group">
<label for="pincode">Date1</label>
<input type="text" name="date1" id="pincode" value={formData.date1} onChange={handleChange}/>
</div>
<div class="form-group">
<label for="pincode">Date2</label>
<input type="text" name="date2" id="pincode" value={formData.date2} onChange={handleChange}/>
</div>
<div class="form-group">
<label for="pincode">Date3</label>
<input type="text" name="date3" id="pincode" value={formData.date3} onChange={handleChange}/>
</div>
</div>
<div className='form-row'>

<div class="form-group">
<label for="email">descrption 1:</label>
<input type="email" name="des1" id="email" value={formData.des1} onChange={handleChange}/>
</div>
<div class="form-group">
<label for="email">descrption 2:</label>
<input type="email" name="des2" id="email" value={formData.des2} onChange={handleChange}/>
</div>
<div class="form-group">
<label for="email">descrption 3:</label>
<input type="email" name="des3" id="email" value={formData.des3} onChange={handleChange}/>
</div>
</div>
<div className='form-row'>
<div class="form-group">
<label for="course">ROLE1</label>
<div class="form-select">
<select name="job1" id="course" value={formData.job1} onChange={handleChange}>
<option value></option>
<option value="computer">Computer Operator & Pragramming Assistant</option>
<option value="desiger">Designer</option>
<option value="marketing">Marketing</option>
</select>
<span class="select-icon"><i class="zmdi zmdi-chevron-down"></i></span>
</div>
</div>
<div class="form-group">
<label for="course">ROLE2</label>
<div class="form-select">
<select name="job2" id="course" value={formData.job2} onChange={handleChange}>
<option value></option>
<option value="computer">Computer Operator & Pragramming Assistant</option>
<option value="desiger">Designer</option>
<option value="marketing">Marketing</option>
</select>
<span class="select-icon"><i class="zmdi zmdi-chevron-down"></i></span>
</div>
</div>
<div class="form-group">
<label for="course">ROLE3</label>
<div class="form-select">
<select name="job3" id="course" value={formData.job3} onChange={handleChange}>
<option value></option>
<option value="computer">Computer Operator & Pragramming Assistant</option>
<option value="desiger">Designer</option>
<option value="marketing">Marketing</option>
</select>
<span class="select-icon"><i class="zmdi zmdi-chevron-down"></i></span>
</div>
</div>
</div>
<div class="form-group">
<label for="email">Education</label>
<input type="text" name="education" id="email" value={formData.education} onChange={handleChange}/>
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


