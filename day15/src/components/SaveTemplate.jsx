import React from 'react'
import { showTemplate } from './Service/Api';
import  { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Temp1 from './Template/temp1';
import { useNavigate } from 'react-router-dom';
export default function SaveTemplate() {

  const[game,setGame]= useState([]);
  const navigate = useNavigate();
  // const[id,setId]=useState([]);
  const {id} = useParams();
  useEffect(()=>{
    showTemplate(id).then((res)=>{
      setGame(res.data); 
      
   
        },[])
        
      }
      )
      const handleEdit = () =>{
        navigate( `/temp/edit/1`)
      }
  return (
 <div>
  <button style={{width:"30px",height:"30px"}}onClick={handleEdit}>EDIT</button>
        <div class="container">
<div class="signup-content">
<div class="signup-img">
  <Temp1 formData={game} />
  </div>
  </div>
  </div>
</div>
    
  )
}
