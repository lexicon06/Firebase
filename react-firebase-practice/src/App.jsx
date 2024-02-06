import { useState } from 'react'
import './styles/tailwind.css'
import Home from './views/Home'
import Login from './views/Login'
import { auth } from './firebase/credenciales';
import { onAuthStateChanged } from 'firebase/auth';

function App() {
  const [user, setUser] = useState(null);
  onAuthStateChanged(auth, firebaseUser =>{
    if(firebaseUser){

      setUser(firebaseUser);

    }else{

      setUser(null);
    }
  })
  return user ? <Home user={user}/>:<Login/>;
}

export default App
