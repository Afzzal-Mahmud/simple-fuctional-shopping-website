import React from "react";
import logo from "../../Images/logo.png";
import { Link } from "react-router-dom";
import "./Header.css";
import useAuth from "../../Context/useAuth";

function Header() {
    const {user,logOut} = useAuth()
    return (
        <div style={{ backgroundColor: "#ffdca7" }}>
            <div className="header-div container">
                <img className="logo" src={logo} alt="shop-logo" />
                <nav>
                    <ul className="flex">
                        <li><Link to="/hero">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/review">Review</Link></li>

                        {user.displayName && 
                        <li><button>{user.displayName}</button></li>
                        }

                        {/* conditional rendaring */}

                        {user.displayName ? 
                        <button onClick={logOut}>LogOut</button> 
                           : <li><Link to="/login">LogIn</Link></li>
                        }

                    </ul>
                </nav>
            </div>
        </div>
    )
}
export default Header;