import { initializeApp } from "firebase/app"
import { getFirestore, doc, getDoc, setDoc} from "firebase/firestore"
import { getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'



const firebaseConfig = {
    apiKey: "AIzaSyDhBc1XK_yyYqt2Umv2YYI2nKYTZe7uOYI",
    authDomain: "bookworld-547fd.firebaseapp.com",
    projectId: "bookworld-547fd",
    storageBucket: "bookworld-547fd.appspot.com",
    messagingSenderId: "148669481820",
    appId: "1:148669481820:web:5ddeb01023e1bc8d377799",
    measurementId: "G-1R13GCD21T"
  };

initializeApp(firebaseConfig);
export const firestore = getFirestore();

export const CreateUserProfileDocument = async (userAuth, additionalData) => {
if (!userAuth) return

// const userRef = firestore.doc(`users/${userAuth.uid}`)
// const documentSnapshot = userRef.get()
const userRef = doc(firestore, `users/${userAuth.uid}`)
const documentSnapshot = await getDoc(userRef)

  if (!documentSnapshot.exists()) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userRef, {
        createdAt,
        displayName,
        email,
        ...additionalData
      });
    } catch(error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
}



export const auth = getAuth()

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ params: 'select_account' });
export const signInWithGoogle = () => signInWithPopup(auth, provider).catch((error) => console.log(error));
  