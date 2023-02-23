import React, { useState } from 'react'
import './style.css';

const login = () => {
  const [name, setName]= useState;
  const [email, setEmail]= useState;
  const [password, setPassword]= useState;
  return (
    <div className='login'>
        <form className='login_form'>
        <h1>Login here</h1>
        <input 
        type='name' 
        placeholder='Name' 
        value={name} 
        onChange= {(e) => setName(e.target.value)} 
        />
        <input 
        type='email' 
        placeholder='Email' 
        value={email} 
        onChange= {(e) => setEmail(e.target.value)}/>
        <input 
        type='password' 
        placeholder='Password' 
        value={password} 
        onChange= {(e) => setPassword(e.target.value)}/>
        </form>
    </div>
  )
}

export default login;