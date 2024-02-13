import React from 'react'

function DeleteElement({ id }) {
    return (
        <dialog id="deleteModal">
            <h1>Are you sure you want to delete?</h1>
            <button onClick={
                (e) => {
                e.preventDefault();
                alert(`Deleted ${id}`);
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