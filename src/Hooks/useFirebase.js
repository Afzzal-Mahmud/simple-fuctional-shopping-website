import { useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut  } from "firebase/auth";
import { useEffect } from "react/cjs/react.development";
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
        signInWithPopup(auth,googleProvider)
        .then(result => {
            console.log(result.user)
            setUser(result.user)
        }).catch(err => {
            setError(err.message)
        })
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
        logOut,
        error,
        signInUsigingGoogle,
    }

}

export default useFirebase;