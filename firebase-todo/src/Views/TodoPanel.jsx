import React from 'react'
import Firestore from "../functions/databaseActions";
import EditElement from './EditElement';
import DeleteElement from './DeleteElement';

function TodoPanel({ userFirebase }) {

    const [todos, setTodos] = React.useState([]);
    const [update, setUpdate] = React.useState(false);
    const [data, setData] = React.useState({});
    const [delEl, setDel] = React.useState('');

    React.useEffect(() => {
        async function fetchData() {
            const data = await Firestore.Read(userFirebase.email);
            setTodos(data);
        }
        fetchData();
    }, [update]);

    async function formHandler(e) {
        e.preventDefault();
        const data = e.target.todo.value;
        await Firestore.Create({ item: data, user: userFirebase.email });
        e.target.reset();
        setUpdate(!update); // Set update state here
    }

    function MostrarModal() {

        const modal = document.getElementById("modalEditarPendiente");
        modal.showModal();
    }

    function deleteHandler(arg){
  
        document.getElementById("deleteModal").showModal();
        setDel(arg);
        
    }

    return (
        <>
            <div className="addContainer">
                <div>TodoPanel</div>
                <form onSubmit={formHandler}>
                    <label htmlFor="todo"></label>
                    <input type="text" id="todo" />
                    <button type="submit">Add</button>
                </form>
            </div>
            <div className="dbContainer">

                <EditElement prop={data} />
                <DeleteElement id={delEl} />


                <form action="">

                    {todos.map((todo, index) => (
                        <>

                            <div style={{ display: 'flex', flexFlow: 'row nowrap' }} ><label htmlFor='user'></label><input type="text" value={todo.data.user}></input>
                                <label htmlFor='item'></label><input type="text" value={todo.data.item}></input> <button onClick={(e) => {
                                    e.preventDefault();
                                    todo.data.id = todo.fsid;
                                    setData(todo.data);
                                    MostrarModal();
                                }}>Edit</button>
                                <button onClick={(e)=>{
                                    e.preventDefault();
                                    deleteHandler(todo.fsid);
                                }}>Delete</button>
                            </div>
                        </>
                    ))}
                </form>
            </div>
        </>
    )
}

export default TodoPanel
