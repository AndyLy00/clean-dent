import React from 'react';
import "../styles/Footer.css";
import logo from "../resources/images/MainPage/Logo.png";


function Footer() {
    return (
        <>
            <div className="container">
                <div className="footer">
                    <div>
                    <img alt="/" className="logo footer_logo" src={logo}/>
                    </div>
                    <div className="copyright">Copyright © {new Date().getFullYear()} CleanDent</div>
                </div>
            </div>
        </>
    );
}

export default Footer;