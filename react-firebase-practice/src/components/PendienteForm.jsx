import React from "react";
import crearPendiente from "../functions/crearPendiente";

function PendienteForm({ refreshAllPendientes }) {
  async function submitHandler(e) {
    e.preventDefault();
    console.log("submit");
    const priority = e.target.priority.value;
    const description = e.target.description.value;
    const contact = e.target.contact.value;
    const data = { priority, description, contact };

    await crearPendiente(data);

    e.target.priority.value = "";
    e.target.description.value = "";
    e.target.contact.value = "";

    refreshAllPendientes();
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen bg-gray-200">
        <form
          onSubmit={submitHandler}
          className="p-10 bg-white rounded shadow-md w-1/3"
        >
          <div className="flex flex-col space-y-4">
            <label className="flex flex-col">
              Prioridad
              <select
                id="priority"
                className="mt-1 p-2 border border-gray-300 rounded"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </label>
            <label className="flex flex-col">
              Descripción
              <input
                id="description"
                type="text"
                className="mt-1 p-2 border border-gray-300 rounded"
              />
            </label>
            <label className="flex flex-col">
              Contacto
              <input
                id="contact"
                type="email"
                className="mt-1 p-2 border border-gray-300 rounded"
              />
            </label>
            <button className="mt-4 py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700">
              Add
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default PendienteForm;
