import React from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../Context/useAuth";

function LogIn() {
    const {signInUsigingGoogle,setUser,setError} =useAuth();
    const location = useLocation()
    const history = useHistory()
    const redirectUrl = location.state?.from || '/hero';
    console.log('from',location?.state?.from)

    function hendleGoogleLogIn() {
        signInUsigingGoogle()
        .then(result => {
            console.log(result.user)
            setUser(result.user)
            history.push(redirectUrl)

        }).catch(err => {
            setError(err.message)
            console.log(err.message)
        })
    }
    return (
        <div style={{ textAlign: "center" }}>

                <form>
                    <h1>Create Account</h1>

                    <label>
                        Email:
                        <input
                            name="email"
                            type="email"
                            required />
                    </label>

                    <label>
                        Password:
                        <input
                            name="password"
                            type="password"
                            required />
                    </label>
                    <button>Submit</button>
                </form>
        <h2>---------new to this website----------</h2>
        <button onClick={hendleGoogleLogIn}>Google Sign In</button>
        <button><Link to='/register'>go and register</Link> </button>
        </div>
    )
}
export default LogIn;