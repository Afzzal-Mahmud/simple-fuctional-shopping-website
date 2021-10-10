import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../Context/useAuth";

function LogIn() {
    const {signInUsigingGoogle} =useAuth()
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
        <button onClick={signInUsigingGoogle}>Google Sign In</button>
        <button><Link to='/register'>go and register</Link> </button>
        </div>
    )
}
export default LogIn;