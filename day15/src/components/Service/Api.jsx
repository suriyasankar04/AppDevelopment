import axios from 'axios'
import React from 'react'


    const url ="http://localhost:8181"
    let jwtToken = localStorage.getItem('token')
    const authheader = `Bearer ${jwtToken}`;
    console.log(jwtToken)
    const headers = {
      'Authorization': 'Bearer '+localStorage.getItem('token'),
      'Content-Type': 'application/json',
    };
    //Authentication
     export const loginform=(data)=>axios.post(`${url}/api/v1/auth/authenticate`,data);
     export const register=(data)=>axios.post(`${url}/api/v1/auth/register`,data);

    //Template
    export const saveTemplate=(data)=>axios.post(`${url}/api/v1/temp/register`,data,{headers});
    export const getTemplate = ()=>axios.get(`${url}/api/v1/save/get`,headers);
    export const getTemplateById =(id)=>axios.get(`${url}/api/v1/temp/get/${id}`,headers);//@PathVariable
    // const getTemplateById =(id)=>axios.get(`${url}/api/v1/temp/get/${id}`,headers)//@RequestMapping
    export const updateTemplate=(id,data)=>axios.get(`${url}/api/v1/temp/edit/${id}`,data,headers);
    export const deleteTemplate=(id)=>axios.delete(`${url}/api/v1/temp/delete/${id}`,headers);

    //saveTemplate
    export const postTemplate=(data)=>axios.post(`${url}/api/v1/save/post`,data,{headers});
    export const showTemplate = (id)=>axios.get(`${url}/api/v1/save/get/${id}`,headers);

