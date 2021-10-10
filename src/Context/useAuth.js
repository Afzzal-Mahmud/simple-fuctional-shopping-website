import { useContext } from "react";
import { AuthContext } from "./useContext";

/* 
must be use the Context name not 
the function name outside of the context .you made mistake on this 
*/
function useAuth() {
    return useContext(AuthContext)
}

export default useAuth;