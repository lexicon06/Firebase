import { db } from "../firebase/credenciales";
import { collection, addDoc } from "firebase/firestore"; //so firebase create its own id

export default async function crearPendiente(data) {
  const collectionRef = collection(db, "pendientes"); //or path
  const pendienteId = await addDoc(collectionRef, data)
    .then((data) => {
      console.log(data);
    })
    .catch((e) => {
      console.log(`Something went wrong ${e}`);
    })
    .finally(() => {
      console.log(`Promise complete`);
    });

    console.log(`pendiente: ${pendienteId}`);
}
