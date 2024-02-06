import { useState } from 'react'
import './styles/tailwind.css'
import Home from './views/Home'
import Login from './views/Login'

function App() {
  const [user, setUser] = useState(null);
  return user ? <Home user={user}/>:<Login/>;
}

export default App
