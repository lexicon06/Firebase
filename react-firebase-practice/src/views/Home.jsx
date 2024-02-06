import React from 'react'
import logOut from '../functions/logout';

function Home() {
  return (
    <div className='flex justify-center items-center'>

     <div className='p-40'>

      <h1 className="my-4">LogOut Panel</h1>

     <button className='bg-slate-200 p-2 border rounded-xl' onClick={logOut}>Log Out</button>

     </div>
    </div>
  )
}

export default Home