import React from "react";
import logOut from "../functions/logout";
import loginWithEmailPassword from "../functions/loginWithEmailPassword";
import registerUser from "../functions/registerUser";
import loginWithGoogle from "../functions/loginWithGoogle";

function Login() {
  const [isLogginIn, setIsLoggingIn] = React.useState(false);

  async function submitHandler(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(`used email ${email}`);
    console.log(`used password ${password}`);
    //to do check password length before using auth shouldn't be less than 6 characters

    if (isLogginIn) {
      await loginWithEmailPassword(email, password);
    } else {
      await registerUser(email, password);
    }


  }

  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center">
        <div className="border border-slate-700 p-10 border rounded-xl">
          <h1 className="text-3xl font-bold mb-4">
            {isLogginIn ? "Inicia sesión" : "Regístrate"}
          </h1>

          <form className="flex flex-col" onSubmit={submitHandler}>
            <label htmlFor="email">Email</label>
            <input
              className="border border-slate-700"
              type="email"
              id="email"
            />
            <label htmlFor="password">Password</label>
            <input
              className="border border-slate-700"
              type="password"
              id="password"
            />
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outine my-4"
              type="submit"
            >
              {isLogginIn ? "Acceder" : "Regístrate"}
            </button>
          </form>
         <div className="flex flex-col">
         <button className="bg-green-500 text-white p-4 rounded font-semibold" onClick={loginWithGoogle}>Accede con Google</button>
          <button
            className="underline mt-4"
            onClick={() => setIsLoggingIn(!isLogginIn)}
          >
            {isLogginIn
              ? "¿No tienes cuenta? Crea una"
              : "¿Ya tienes cuenta? Accede"}
          </button>
         </div>
        </div>
      </div>
    </>
  );
}

export default Login;
