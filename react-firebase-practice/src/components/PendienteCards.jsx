import React from 'react'

function PendienteCards({pendiente}) {
  return (
    <div className='flex flex-col'>

<div className='flex flex-row gap-3'>
    <h3>Priority</h3>
    <p>{pendiente.priority}</p>
</div>
<div className='flex flex-row gap-3'>
    <h3>Description</h3>
    <p>{pendiente.description}</p>
</div>
<div className='flex flex-row gap-3'>
    <h3>Contact</h3>
    <p>{pendiente.contact}</p>
</div>

    </div>
  )
}

export default PendienteCards