import React from "react";
import { useState } from "react";

function Login() {
  const [isLogginIn, setIsLoggingIn] = useState(false);
  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center">
        <div className="border border-slate-700 p-10 border rounded">
          <h1 className="text-3xl font-bold">
            {isLogginIn ? "Inicia sesión" : "Regístrate"}
          </h1>

          <form className="flex flex-col">
            <label htmlFor="username">Username</label>
            <input className="border border-slate-700" type="text" id="username" />
            <label htmlFor="password">Password</label>
            <input className="border border-slate-700" type="password" id="password" />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outine my-4" type="submit">
              {isLogginIn ? "Acceder" : "Regístrate"}
            </button>
          </form>
          <button onClick={() => setIsLoggingIn(!isLogginIn)}>
            {isLogginIn
              ? "¿No tienes cuenta? Crea una"
              : "¿Ya tienes cuenta? Accede"}
          </button>
        </div>
      </div>
    </>
  );
}

export default Login;
