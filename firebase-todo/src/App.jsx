import React from 'react';
import Login from './Views/Login';
import "./App.css";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Firebase from './functions/loginActions';
import TodoPanel from './Views/TodoPanel';

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
{userSignedIn ? <img src={userFirebase.photoURL ?? "https://www.gstatic.com/mobilesdk/160503_mobilesdk/logo/2x/firebase_28dp.png"} />:''}
<button onClick={Firebase.Logout}>Logout</button>
</div>
{userSignedIn ? <TodoPanel user={userFirebase}/>:<Login/>}


  </>
}

export default App