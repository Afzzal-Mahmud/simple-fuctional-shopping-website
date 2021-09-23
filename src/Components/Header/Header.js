import React from "react";
import logo from "../../Images/logo.png";
import "./Header.css";

function Header() {
    return (
        <div style={{backgroundColor:"#ffdca7"}}>
            <div className="header-div container">
                <img className="logo" src={logo} alt="shop-logo" />
                <nav>
                    <ul className="flex">
                        <li><a href="./Home">Home</a></li>
                        <li><a href="./Home">About</a></li>
                        <li><a href="./Home">Services</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}
export default Header;