import React from "react";
import logOut from "../functions/logout";
import Navbar from "../components/Navbar";
import PendienteForm from "../components/PendienteForm";

function Home({ user }) {
  return (
    <>
      <div className="w-screen h-screen flex flex-col">
        <Navbar user={user} />
        <PendienteForm />
      </div>

      <div className="flex justify-center items-center">
        <div className="p-10">
          <h1 className="my-4 text-2xl font-bold text-center">LogOut Panel</h1>

          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={logOut}
          >
            Log Out
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
