import React, { useEffect } from "react";
import logOut from "../functions/logout";
import Navbar from "../components/Navbar";
import PendienteForm from "../components/PendienteForm";
import getAllPendientes from "../functions/leerAllPendientes";
import { setPersistence } from "firebase/auth";
import PendienteCards from "../components/PendienteCards";

function Home({ user }) {
  const [AllPendiente, setAllPendientes] = React.useState(null);

  function refreshAllPendientes(){
    getAllPendientes()
    .then(pendientes => {
      setAllPendientes(pendientes);
      console.log(AllPendiente);
    })
    .catch(err =>{
      console.log(`Something went wrong ${e}`);
    });
  }

  useEffect(()=>{
    refreshAllPendientes()
  }, []);

  return (
    <>
        {AllPendiente != null &&
          AllPendiente.map(pendiente => <PendienteCards pendiente={pendiente}/>)
        }

      <div className="w-screen h-screen flex flex-col">
        <Navbar user={user} />
        <PendienteForm refreshAllPendientes={refreshAllPendientes} />
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
