import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";


export let getItems = async (userId) => {
    try{
        const items = [];
        const response = await firestore()
          .collection('users')
          .doc(userId)
          .collection('items')
          .get();
    
        response.forEach(r => {
          items.push({ id: r.id, ...r.data() });
        });
    
        return items;
    }
    catch(error){
        console.log(error.message);
    }
}

export let addItem = async () => {
    try{
       const item = await firestore()
      .collection('users')
      .doc(userId)
      .collection('items')
      .add(item);

      return item.id;
    }
    catch(error){
        console.log(error.message);
    }
}
