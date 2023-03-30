import React from 'react';
import "../styles/Navbar.css";
import logo from '../resources/images/MainPage/Logo.png';

function Navbar() {
    return (
        <>
            <div className="container">
                <div className="navbar">
                    <div className="navbar_left">
                        <a href="#home">
                        <img alt="/" className="logo" src={logo}/>
                        </a>
                    </div>

                    <div className="navbar_right">
                        <a href="#about" className="navbar_element"> Despre </a>
                        <a href="#team" className="navbar_element"> Echipa</a>
                        <a href="#gallery" className="navbar_element"> Galerie </a>
                        <a href="#contact" className="navbar_element"> Contacte </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;