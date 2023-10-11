import React, { useState } from 'react'
import '../../css/temp1.css'
import { Document } from '@react-pdf/renderer'
export default function Temp1({formData}) {
	
	
  return (
    <div>
		<Document>

        <div class="resume-main">
	<div class="left-box">
		<br></br>
		<div class="profile">
			<img src="image/profile.jpg"/>
		</div>
		<div class="content-box">
		<h2></h2>
		
		<hr class="hr1"/>
		<p class="p1"> </p>

		<h3>Language:</h3>
		<p class="p2">{formData.language1}</p>
		<div id="progress"></div>
		<p class="p2">{formData.language2}</p>
		<div id="progress1"></div>

		<br></br><br></br>
		<h2>My Skills</h2>
		<hr class="hr1"/>
		<br></br>
		<div class="col-div-6"><p class="p2">{formData.skill1}</p></div>
		<div class="col-div-6">
			<i class="fa fa-circle circle"></i>
			<i class="fa fa-circle circle"></i>
			<i class="fa fa-circle circle"></i>
			<i class="fa fa-circle circle1"></i>
			<i class="fa fa-circle circle1"></i>
		</div>
			<div class="clearfix"></div>
		<div class="col-div-6"><p class="p2">{formData.skill2}</p></div>
		<div class="col-div-6">
			<i class="fa fa-circle circle"></i>
			<i class="fa fa-circle circle"></i>
			<i class="fa fa-circle circle"></i>
			<i class="fa fa-circle circle"></i>
			<i class="fa fa-circle circle1"></i>
		</div>
			<div class="clearfix"></div>
		<div class="col-div-6"><p class="p2">{formData.skill3}</p></div>
		<div class="col-div-6">
			<i class="fa fa-circle circle"></i>
			<i class="fa fa-circle circle"></i>
			<i class="fa fa-circle circle"></i>
			<i class="fa fa-circle circle1"></i>
			<i class="fa fa-circle circle1"></i>
		</div>
			<div class="clearfix"></div>
		<div class="col-div-6"><p class="p2">JAVASCRIPT</p></div>
		<div class="col-div-6">
			<i class="fa fa-circle circle"></i>
			<i class="fa fa-circle circle"></i>
			<i class="fa fa-circle circle1"></i>
			<i class="fa fa-circle circle1"></i>
			<i class="fa fa-circle circle1"></i>
		</div>

			<div class="clearfix"></div>
			<br></br>
			<h2>interests</h2>
			<hr class="hr1"/>
			<br></br>
			<div class="col-div-3 col3">
				{/* <i class="fa fa-futbol-o in"></i> */}
				<span class="inp">Sports</span>
			</div>
			<div class="col-div-3 col3">
				{/* <i class="fa fa-futbol-o in"></i> */}
				<span class="inp">Drive</span>
			</div>
			<div class="col-div-3 col3">
				{/* <i class="fa fa-futbol-o in"></i> */}
				<span class="inp">Sports</span>
			</div>
			<div class="col-div-3 col3">
				{/* <i class="fa fa-futbol-o in"></i> */}
				<span class="inp">Sports</span>
			</div>
		</div>
	</div>

	<div class="right-box">
		<h1>
			{formData.firstname}<br></br>{formData.lastname}
			<span></span>
		</h1>
		<p class="p3">{formData.roles}</p>

		<br></br>
		<h2 class="heading">Work Experience</h2>
		<hr class="hr2"/>
		<br/>
		<div class="col-div-4">
			<p class="p5">{formData.date1}</p>
			<span class="span1">{formData.job1}</span>
		</div>
		<div class="col-div-8">
			<p class="p5">{formData.job1}</p>
			<span class="span1">{formData.des1}</span>
		</div>
		<div class="clearfix"></div>
		<br></br>
		<div class="col-div-4">
			<p class="p5">{formData.date2}</p>
			<span class="span1">{formData.job2}</span>
		</div>
		<div class="col-div-8">
			<p class="p5">{formData.job2}</p>
			<span class="span1">{formData.des2}</span>
		</div>
		<div class="clearfix"></div>
		<br></br>
		<div class="col-div-4">
			<p class="p5">{formData.date3}</p>
			<span class="span1">{formData.job3}</span>
		</div>
		<div class="col-div-8">
			<p class="p5">{formData.job3}</p>
			<span class="span1">{formData.des3}</span>
		</div>
		<div class="clearfix"></div>

		<br></br>
		<h2 class="heading">My Education</h2>
		<hr class="hr2"/>
		<br></br>
		{/* <div class="col-div-4">
			<p class="p5">2015-2016</p>
			<span class="span1">Company Name</span>
		</div>
		<div class="col-div-8">
			<p class="p5">Web Designer</p>
			<span class="span1">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
		</div>
		<div class="clearfix"></div>
		<br></br>
		<div class="col-div-4">
			<p class="p5">2015-2016</p>
			<span class="span1">Company Name</span>
		</div>
		<div class="col-div-8">
			<p class="p5">Web Designer</p>
			<span class="span1">Lorem Ipsum is simply dummy text of the .</span>
		</div>
		
		<div class="clearfix"></div> */}
		{formData.education}
	</div>
	<div class="clearfix"></div>

</div>
		</Document>
    </div>
  )
}
