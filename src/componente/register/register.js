import React, { useState } from "react"
import "./register.css"
//import {useState} from "react"


const Register = () => {
    
    const [ user, setUser] = useState({
        name:"",
        email:"",
        password:"",
        reEnterPassword:""

    })

    const handlechange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }


    return (
         <div className="register"> 
         {console.log("user", user)}
        <h1>employe Register</h1>
         <input type="text" name="name" value={user.name} placeholder=" your name" onChange={ handlechange }></input>
        <input type="text" name="email" value={user.email} placeholder=" your email" onChange={ handlechange }></input>
        <input type="password" name=" password" value={user.password} placeholder="enter your password" onChange={ handlechange }></input>
        <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter password" onChange={ handlechange }></input>
        <div className="button">Register</div>
        <div>or</div>
        <div className="button">Login</div>
        </div>
    )
}

export default Register