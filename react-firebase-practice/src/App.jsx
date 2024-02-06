import { useState } from 'react'
import './styles/tailwind.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='underline'>Hola gente</h1>
    </>
  )
}

export default App
