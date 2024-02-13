import React from 'react';
import Firestore from "../functions/databaseActions";

function EditElement({ prop }) {



    async function editIt(e) {
        e.preventDefault();

        const name = e.target.name.value;
        const item = e.target.item.value;
        const id = e.target.id.value;

        let updates = {};

        if (name !== prop.user) {
            updates.name = name;
        }
        if (item !== prop.item) {
            updates.item = item;
        }

        if (Object.keys(updates).length > 0) {
            await Firestore.Update(id, updates);
        }

        alert(`Received ${name}, ${item}, ${id}`);
    }

    return (
        <dialog id="modalEditarPendiente">
            <form onSubmit={editIt}>
                <div className="div">
                    <label htmlFor="name">User: </label>
                    <input type="text" defaultValue={prop?.user} id="name" />
                </div>
                <div className="div">
                    <label htmlFor="item">Item: </label>
                    <input type="text" defaultValue={prop?.item} id="item" />
                </div>
                <div className="div">
                    <label htmlFor="id">Id: </label>
                    <input type="text" defaultValue={prop?.id} id="id" />
                </div>
                <button type="submit">Apply</button>
            </form>
        </dialog>
    )
}

export default EditElement
