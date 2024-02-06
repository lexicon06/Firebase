import { db } from "../firebase/credenciales";
import { collection, getDocs } from "firebase/firestore"; //if we wanted 1 we use getDoc

export default async function getAllPendientes() {
  try {
    const collectionRef = collection(db, "pendientes");
    // getDocs puede lo mismo recibir una query  o una collection
    const docsCifrados = await getDocs(collectionRef);

    const docus = docsCifrados.docs.map(d => d.data());

    return docus;
  } catch (e) {
    console.log(`something went wrong ${e}`);
  }
}
