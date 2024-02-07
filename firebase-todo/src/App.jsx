import React from 'react';
import Login from './Views/Login';
import "./App.css";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function App() {


  const [signedIn, setAuthStatus] = React.useState(false);

  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      
      const uid = user.uid;
      console.log("user signed in..id", uid);
      setAuthStatus(true);
    } else {
      // User is signed out
      // ...
      console.log("user not signed in log out maybe");
      setAuthStatus(false);
    }
  });


  return <>

<div className="title">
<h4>Todo App With Firebase Login And FireStore - Welcome {signedIn ? "User":"Guest"}</h4>
</div>
<Login/>


  </>
}

export default App