import React from 'react'
import Firestore from "../functions/databaseActions";

function TodoPanel({userFirebase}) {

    const [todos, setTodos] = React.useState([]);
    const [update, setUpdate] = React.useState(false);

    React.useEffect(() => {
        async function fetchData() {
            const data = await Firestore.Read(userFirebase.email);
            setTodos(data);
        }
        fetchData();
    }, [update]);


    async function formHandler(e){
        e.preventDefault();
        const data = e.target.elements.todo.value;
        await Firestore.Create({item: data, user:userFirebase.email});
        e.target.reset();
    }
  return <>
    <div className="addContainer">
    <div>TodoPanel</div>
    <form onSubmit={formHandler}>
        <label htmlFor="todo"></label><input type="text" id="todo"/>
        <button type="submit" onClick={()=>{
            setUpdate(!update);
        }}>Add</button>
    </form>
    </div>
    <div className="dbContainer">
    {todos.map((todo, index) => (
        <div key={index}>
            User: {todo.user}, Item: {todo.item}
        </div>
    ))}
</div>

  </>
}

export default TodoPanel