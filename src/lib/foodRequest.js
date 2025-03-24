import { collection, getDocs } from "firebase/firestore"; 
import {db} from '../firebase/firebaseServer'

export const getFood = async () => {

    const querySnapshot = await getDocs(collection(db, "meals"));

    const data = querySnapshot.docs.map((doc)=>({
      id:doc.id,
      ...doc.data(),
    }))
    return data
    
    // querySnapshot.forEach((doc) => {
    //   console.log(`${doc.id} => ${doc.data().name}`);
    // });

}