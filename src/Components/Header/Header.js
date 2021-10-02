import React from "react";
import logo from "../../Images/logo.png";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
    return (
        <div style={{ backgroundColor: "#ffdca7" }}>
            <div className="header-div container">
                <img className="logo" src={logo} alt="shop-logo" />
                <nav>
                    <ul className="flex">
                        <li><Link to="/hero">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/review">Review</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}
export default Header;