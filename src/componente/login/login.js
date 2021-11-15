import React, {useState} from "react"
import "./login.css"
import { Link } from 'react-router-dom';

const Login = () => {
    const [ user, setUser] = useState( {
        email:"",
        password:""
    })

    const handlechange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    return (
        <div className="login">
        	{console.log(user)}
       		<h1>Login</h1>
        	<input type="text" name="email" value={user.email} onChange={handlechange} placeholder="Enter your email"></input>
        	<input type="password" name="password" value={user.password} onChange={handlechange}placeholder="Enter your password"></input>
        	<div className="button">
				<Link to='/login'>Login</Link>
			</div>
        	<div>or</div>
        	<div className="button">
				<Link to='/register'>Register</Link>
			</div>
        </div>
    )
}

export default Login
