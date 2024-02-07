import React, { useState } from 'react';
import "./Login.css";
import Firebase from '../functions/loginActions';

function Login() {
    const [Registration, setRegistration] = useState(true);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = e.target.elements.email.value;
        const password = e.target.elements.password.value;

        if (Registration) {
            await Firebase.Register(user, password);
        } else {
           // await loginUserWithEmailAndPassword(user, password);
           await Firebase.Login(user,password);
        }
        e.target.reset();
    }

    return (
        <div className="loginComponent">
            <h2>{Registration ? "Register" : "Sign In"}</h2>
            <form onSubmit={handleSubmit}>
                <div className="FormFormat">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" />
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" />
                    <button type="submit">Let's go!</button>
                    <button className="googleButton" onClick={Firebase.GoogleLogin}>Log in With Google</button>
                </div>
                <div className="captionRegister" onClick={() => setRegistration(!Registration)}>
                    {Registration ? "Already a Member? Sign In" : "Not a Member? Register"}
                </div>
            </form>
        </div>
    );
}

export default Login;