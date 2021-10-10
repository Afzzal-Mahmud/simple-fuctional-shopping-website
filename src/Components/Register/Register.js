import React from "react";
import { Link } from "react-router-dom";

function Register() {
    return(
        <div style={{textAlign:'center'}}>
            <h2>Register or Google SignIn</h2>
             <form>
                    <label htmlFor="name">Name</label>
                    <input type="text" /><br />
                    <label htmlFor="email">E-mail</label>
                    <input type="email" /><br />
                    <label htmlFor="password">Password</label>
                    <input type="password" /><br />
                    <label htmlFor="password">Repet-password</label>
                    <input type="password" /><br />
                    <button>Register</button>
                </form>
                <h2>------------already log in ? -------------</h2>
                <button><Link to='/login'>Log_In</Link></button>
        </div>
    )
}
export default Register;