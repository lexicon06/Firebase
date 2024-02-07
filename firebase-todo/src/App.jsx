import React from 'react';
import Login from './Views/Login';
import "./App.css";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Firebase from './functions/loginActions';

function App() {


  const [userSignedIn, setUserAuthStatus] = React.useState(false);
  const [userFirebase, setUserInfo] = React.useState({});

  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      
      setUserInfo(user);

      if(!userSignedIn) setUserAuthStatus(true);
    } else {
      setUserAuthStatus(false);
    }
  });


  return <>

<div className="title">
<h4>Todo App With Firebase Login And FireStore - Welcome {userSignedIn ? userFirebase.email:"Guest"}</h4>
{userSignedIn ? <img src={userFirebase.photoURL} />:''}
<button onClick={Firebase.Logout}>Logout</button>
</div>
{userSignedIn ? "Welcome ;D":<Login/>}


  </>
}

export default App