import React from 'react'
import Firestore from "../functions/databaseActions";

async function deleteElement(id, refresh){

    await Firestore.Delete(id);
    document.getElementById("deleteModal").close();
    refresh();

}

function DeleteElement({ id, refresh }) {
    return (
        <dialog id="deleteModal">
            <h1>Are you sure you want to delete?</h1>
            <button onClick={
                (e) => {
                deleteElement(id, refresh);
            }}>Yes</button>
            <button onClick={
                (e) => {
                    document.getElementById("deleteModal").close();
                }
            }>No</button>
        </dialog>
    )
}

export default DeleteElement