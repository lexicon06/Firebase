import React from 'react'
import Firestore from "../functions/databaseActions";

async function deleteElement(id){

    await Firestore.Delete(id);
    document.getElementById("deleteModal").close();

}

function DeleteElement({ id }) {
    return (
        <dialog id="deleteModal">
            <h1>Are you sure you want to delete?</h1>
            <button onClick={
                (e) => {
                e.preventDefault();
                deleteElement(id);
            }}>Yes</button>
            <button onClick={
                (e) => {
                    e.preventDefault();
                    document.getElementById("deleteModal").close();
                }
            }>No</button>
        </dialog>
    )
}

export default DeleteElement