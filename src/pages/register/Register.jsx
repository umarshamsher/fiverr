import React, { useState } from 'react'
// import upload from '../../../../api/utils/upload';
// import newRequest from '../../../../api/utils/newRequest';
import {useNavigate} from 'react-router-dom';
import './Register.scss';

const Register = () => {

  const [file, setfile] = useState(null);
  const [user, setuser] = useState({
    username:"",
    email:"",
    password:"",
    img:"",
    country:"",
    isSeller:"",
    desc:"",
  });



  const handleChange = (e)=>{
    e.preventDefault();
    setuser((pre)=>{
      return {...pre, [e.target.name]: e.target.value};
    })};

    const handleSeller = (e)=>{
      setuser((pre)=>{
        return {...pre, isSeller: e.target.checked};
      })};

      const navigate = useNavigate();

      const handleSubmit = async (e)=>{
        e.preventDefault();

        // const url = await upload(file);
         
        // try {
          
        //   await newRequest.post("/auth/register", {
        //     ...user,
        //     img:url
        //   })
        //   // navigate("/");
        // } catch (error) {
        //   console.log(error)
        // }
      }
  return (
    <div className='register'>
      <form onSubmit={handleSubmit}> 
      <div className="left">
        <h1>Create a new account</h1>
        
          <label htmlFor="username">Username</label>
          <input type="text" name='username' placeholder='username' min={1} onChange={handleChange} />
          <label htmlFor="username">Email</label>
          <input type="email" name='email' placeholder='Email' min={1} onChange={handleChange}  />
          <label htmlFor="username">Password</label>
          <input type="password" name='password' placeholder='password' min={1} onChange={handleChange}  />
          <label htmlFor="username">Profile Picture</label>
          <input type="file" name='img' placeholder='Profile' min={1} onChange={(e)=> setfile(e.target.files[0])} />
          <label htmlFor="username">Country</label>
          <input type="text" name='country' placeholder='usa' min={1} onChange={handleChange}  />
          <button type='submit ' >Register</button>
      </div>
      <div className="right">
        <h1>I want to become a seller</h1>
        <div className="toggle">
          <label htmlFor="">Active the seller account</label>
          <input type="checkbox" onChange={handleSeller}/>
        
          </div>
          <label htmlFor="">Phone Number</label>
          <input type="number" placeholder="03417057609" name='phone' onChange={handleChange}  />
          <label htmlFor="">Description</label>
          <textarea name="desc" id="desc" cols="30" rows="6" placeholder='A short description of your work' onChange={handleChange} ></textarea>
       
        
      </div>
      </form>

    </div>
  )
}

export default Register