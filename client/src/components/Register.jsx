import React, { useState } from 'react'

const Register = () => {
  const[Username,setUsername]=useState('');
  const[password,setPassword]=useState('');
  return (
    <div className='bg-blue-50 h-screen flex items-center'>
        <form className='w-64 mx-auto mb-12'>
            <input type="text" placeholder='Enter Username' className='block w-full rounded-sm p-2 mb-2 border'/>
            <input type='password' placeholder='Enter Password' className='block w-full rounded-sm p-2 mb-2 border'/>
            <button className='bg-blue-500 text-white block w-full'>Register</button>
        </form>
    </div>
  )
}

export default Register