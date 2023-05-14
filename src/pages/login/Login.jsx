import React, { useState } from 'react'
import './Login.scss';
import {useNavigate} from 'react-router-dom';

const Login = () => {

  const navigate = useNavigate();

  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [error, seterror] = useState(null);
  const handleSubmit = async (e)=>{
    e.preventDefault();

     
  }

  return (
    <div className='login'>
      <form onSubmit={handleSubmit} >
          <h1>Sign In</h1>
            <label htmlFor="Username">Username</label>
          <input type="text"  name='username' placeholder='Username' min={1} onChange={e => setusername(e.target.value)} />
          <label htmlFor="password">Password</label>
          <input type="password"  name='password' min={1} onChange={e => setpassword(e.target.value)} />
          <button type='submit'>Log In</button>
          
      </form>
    </div>
  )
}

export default Login;