import React from 'react'
import {useNavigate} from 'react-router-dom';

const Login = () => {
    const navigate= useNavigate()
  return (
    <div className='Biglogin'>
        <div className='Smalllogin'>
            <h1>User Login</h1>
            <input type='text' placeholder='Name'/>
            <input type='password' placeholder='Password'/>
           <button onClick={()=>navigate("/Home")}>Login</button>

        </div>
      
    </div>
  )
}

export default Login
