import React, { useState } from 'react';
import "./Login.css";
import {FirebaseLogin, FirebaseRegister} from '../functions/loginActions';

function Login() {
    const [isRegister, setIsRegister] = useState(true);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = e.target.elements.email.value;
        const password = e.target.elements.password.value;

        if (isRegister) {
            await FirebaseRegister(user, password);
        } else {
           // await loginUserWithEmailAndPassword(user, password);
           await FirebaseLogin(user,password);
        }
        e.target.reset();
    }

    return (
        <div className="loginComponent">
            <h2>{isRegister ? "Register" : "Sign In"}</h2>
            <form onSubmit={handleSubmit}>
                <div className="FormFormat">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" />
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" />
                    <button type="submit">Let's go!</button>
                    <button className="googleButton" type="submit">Log in With Google</button>
                </div>
                <div className="captionRegister" onClick={() => setIsRegister(!isRegister)}>
                    {isRegister ? "Already a Member? Sign In" : "Not a Member? Register"}
                </div>
            </form>
        </div>
    );
}

export default Login;