import React from 'react';
import Login from './Views/Login';
import "./App.css";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Firebase from './functions/loginActions';

function App() {


  const [signedIn, setAuthStatus] = React.useState(false);
  const [userFirebase, setUserInfo] = React.useState({});

  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      
      setUserInfo(user);

      /* this is what i used to collect but then i realize, that it was better to collect all for later usage.

      const uid = user.uid;
      const photoUrl = user.photoURL;
      const email = user.email;

      */

      if(!signedIn) setAuthStatus(true);
    } else {
      setAuthStatus(false);
    }
  });


  return <>

<div className="title">
<h4>Todo App With Firebase Login And FireStore - Welcome {signedIn ? userFirebase.email:"Guest"}</h4>
{signedIn ? <img src={userFirebase.photoURL} />:''}
<button onClick={Firebase.Logout}>Logout</button>
</div>
{signedIn ? "Welcome ;D":<Login/>}


  </>
}

export default App