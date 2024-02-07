import React from 'react'
import {getAuth} from '../firebase/auth';

function Register() {
    async function checkCredentials(e){
        e.preventDefault();
        
    }
  return (
    <form onSubmit={checkCredentials}>
        <label htmlFor='email'>
            Email
        </label>
        <input type="email" />

        <label htmlFor="password">
            Password
        </label>
        <input type="password" />
    </form>
  )
}

export default Register