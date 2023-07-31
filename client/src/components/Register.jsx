import React, { useState } from 'react'
import axios from 'axios';

const Register = () => {

  const[username,setUsername]=useState('');
  const[password,setPassword]=useState('');

  async function submitHandler(e){
    e.preventDefault();
    await axios.post('/register',{username,password});
  }
  
  return (
    <div className='bg-blue-50 h-screen flex items-center'>
        <form className='w-64 mx-auto mb-12' onSubmit={submitHandler}>
            <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder='Enter Username' className='block w-full rounded-sm p-2 mb-2 border'/>
            <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter Password' className='block w-full rounded-sm p-2 mb-2 border'/>
            <button className='bg-blue-500 text-white block w-full'>Register</button>
        </form>
    </div>
  )
}

export default Register