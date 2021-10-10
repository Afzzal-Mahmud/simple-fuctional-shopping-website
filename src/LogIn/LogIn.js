import React from "react";
import { Link } from "react-router-dom";

function LogIn() {
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
        <button><Link to='/register'>go and register</Link> </button>
        </div>
    )
}
export default LogIn;