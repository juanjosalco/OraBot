import {React, useEffect, useState} from "react";
import axios from "axios";

function AxiosService() {
    const[data,setData]=useState([])
    useEffect(()=>{
        //POST
        /*const token = "";
        axios.post('http://localhost:8080/login', {
        data:{
          username: 'miusuario',
          password: 'micontraseña'
        }
        })
        .then(res => setData(res.data.data))
        .catch(function (error){
          if(error.response){
            console.log(error.response.data)
            console.log(error.response.status)
            console.log(error.response.headers)
          }
        });*/

        //POST
        const token = "";
        axios.post('http://localhost:8080/signUp', {
        data:{
            email: "TestManagerEmailXX",
            rawPassword: "TestManagerPasswordXX",
            teamId: 1,
            firstname: "Mike",
            lastname: "Wazowski",
            phonenumber: "5555555555",
            role: "Manager"
        }
        })
        .then(res => setData(res.data.data))
        .catch(function (error){
          if(error.response){
            console.log(error.response.data)
            console.log(error.response.status)
            console.log(error.response.headers)
          }
        });

        //POST
        /*axios.post('https://reqres.in/api/users?page=2', {
            "name": "Yousaf",
            "job": "Developer"
        })
        .then(res=> console.log(res))
        .catch(err=> console.log(err))*/

        //PUT
        /*axios.put('https://reqres.in/api/users/2')
        .then(res=> console.log(res))
        .catch(err=> console.log(err))*/

        //DELETE
        /*axios.delete('https://reqres.in/api/users/2')
        .then(res=> console.log(res))
        .catch(err=> console.log(err))*/

    }, [])
  
    return (
    <div>
      <h1>Hola Mundo</h1>
      {
        //GET
        data.map((d,i) => {
            return <p key = {i}> {d.email} </p>
        })

        //POST

        //PUT

      }
    </div>
  );
}

export default AxiosService;