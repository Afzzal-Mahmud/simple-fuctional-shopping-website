import { useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut  } from "firebase/auth";
import { useEffect } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

/* initialize authentication on firebase*/
initializeAuthentication()

function useFirebase() {
    const [user,setUser] = useState({});
    const [error,setError] = useState('')

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider()

    /* google signIn mathod */

    const signInUsigingGoogle = () =>{
       return signInWithPopup(auth,googleProvider);
        
    }
    /* user logOut mathod */
    const logOut = () =>{
        signOut(auth)
        .then(() =>{
            setUser({})
         })
    }
    /* 
    On Auth-state change thats mean the user is logIn or not 
    We find this on manneg User onAuthChange .this mathod is call observer
    */
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
            }else{
                setUser({})
            } 
          });
    },[])

    return{
        user,
        setUser,
        logOut,
        error,
        setError,
        signInUsigingGoogle,
    }

}

export default useFirebase;