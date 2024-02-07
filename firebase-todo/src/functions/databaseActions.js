import { db } from "../firebase/credentials";
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore";


async function addTodoElement(data){
    try {
        const collectionRef = collection(db, "todo");
        const todoId = await addDoc(collectionRef, data);
        return todoId;
    } catch (error) {
        console.error("Error adding document: ", error);
    }
}

async function getTodoElements(){
    try {
        const collectionRef = collection(db, "todo");
        const snapshot = await getDocs(collectionRef);
        return snapshot.docs.map(doc => doc.data());
    } catch (error) {
        console.error("Error getting documents: ", error);
    }
}

async function updateTodoElement(id, data){
    try {
        const docRef = doc(db, "todo", id);
        await updateDoc(docRef, data);
    } catch (error) {
        console.error("Error updating document: ", error);
    }
}


async function deleteTodoElement(id){
    try {
        const docRef = doc(db, "todo", id);
        await deleteDoc(docRef);
    } catch (error) {
        console.error("Error deleting document: ", error);
    }
}


export default { 
    Create: addTodoElement,
    Read: getTodoElements,
    Update: updateTodoElement,
    Delete: deleteTodoElement
};