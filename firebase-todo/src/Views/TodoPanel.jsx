import React from 'react'
import Firestore from "../functions/databaseActions";

function TodoPanel({userFirebase}) {
    async function formHandler(e){
        e.preventDefault();
        const data = e.target.elements.todo.value;
        await Firestore.Create({item: data, user:userFirebase.email});
        e.target.reset();
    }
  return <>
    <div>TodoPanel</div>
    <form onSubmit={formHandler}>
        <label htmlFor="todo"></label><input type="text" id="todo"/>
        <button type="submit">Add</button>
    </form>
  </>
}

export default TodoPanel