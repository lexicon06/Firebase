import React from 'react'
import crearPendiente from "../functions/crearPendiente";

function PendienteForm() {

async function submitHandler(e){

    e.preventDefault();
    console.log('submit');
    const priority = e.target.priority.value;
    const description = e.target.description.value;
    const contact = e.target.contact.value;
    const data = { priority, description, contact };

    await crearPendiente(data);

    e.target.priority.value = "";
    e.target.description.value = "";
    e.target.contact.value = "";
    
}

  return <>
  <div>
    <form onSubmit={submitHandler}>
     <div className='flex flex-col'>
     <label>
            Prioridad
            <select id="priority">
            <option className='border border-black rounded' value="1">1</option>
            <option className='border border-black rounded' value="2">2</option>
            <option className='border border-black rounded' value="3">3</option>
            </select>
        </label>
        <label>
            Descripción
            <input className='border border-black rounded' id="description" type="text" />
        </label>
        <label>
            Contacto
            <input className='border border-black rounded' id="contact" type="email" />
        </label>
        <button className='border border-black rounded'>Add</button>
        </div>
    </form>
     </div>
  </>

}

export default PendienteForm