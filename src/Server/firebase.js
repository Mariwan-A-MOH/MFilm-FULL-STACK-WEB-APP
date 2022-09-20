import { initializeApp } from "firebase/app";
import {
  collection,
  getFirestore,
  doc,
  getDoc,
  addDoc,
  setDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const Config = "your-Firebase-Conf-Obj-Here";
const app = initializeApp(Config);
export const db = getFirestore(app);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const SignWithGoogle = () => {
  signInWithPopup(auth, provider);
};

export const UserDocument = async (userData) => {
  const { email, photoURL, uid, displayName } = userData;

  const photo =
    photoURL ||
    "https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg";
  const name = displayName || email.slice(0, email.indexOf("@"));

  const ColRef = collection(db, "users");
  const DocRef = doc(ColRef, uid);

  const snapCheck = await getDoc(DocRef);
  if (!snapCheck.exists()) {
    const date = new Date();
    try {
      await setDoc(DocRef, { email, name, date, photo });
    } catch (e) {
      alert("there is a data", e);
    }
  } else {
    return DocRef;
  }
  return DocRef;
};

const Data_Obj = {};
const Data_Normalize = (key, rest) => {
  Data_Obj[key] = rest;
};
const Data_Item = (catigory, key, items) => {
  Data_Obj[catigory][key] = items;
};

export const GetDataFb = async () => {
  const items = [];
  const ref = query(collection(db, "Data"), where("title", "==", "movies"));
  const sub_col_ref = collection(db, "Data/movies/items");
  const All_Docs_Array = await getDocs(ref);

  All_Docs_Array.forEach((doc) => {
    Data_Normalize(doc.id, { ...doc.data() });
  });

  const All_items = await getDocs(sub_col_ref);
  All_items.forEach((item) => {
    items.push(item.data());
  });

  Data_Item("movies", "items", items);
  const Data = await Finish_Data();

  return Data;
};

async function Finish_Data() {
  const items = [];
  const ref = query(collection(db, "Data"), where("title", "==", "series"));
  const All_Doc = await getDocs(ref);
  All_Doc.forEach(async (doc) => {
    Data_Normalize(doc.id, { ...doc.data() });
  });
  const sub_col_ref = collection(db, "Data/series/items");
  const All_Items = await getDocs(sub_col_ref);
  All_Items.forEach((item) => {
    items.push(item.data());
  });

  await Data_Item("series", "items", items);

  return Data_Obj;
}

export async function AddItemToDb(
  name,
  image_item,
  image,
  description,
  catigory
) {
  if (catigory) {
    const SubCol_Ref = collection(db, `Data/${catigory}/items`);
    const Doc_Ref = doc(SubCol_Ref);
    try {
      await setDoc(Doc_Ref, {
        id: Doc_Ref.id,
        name,
        image_item,
        image,
        description,
      });

      alert("succsed");
    } catch (e) {
      // console.log(e);
    }
  } else {
    // console.log("chosse catigory");
  }
}
