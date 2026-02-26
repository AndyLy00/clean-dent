import logo from '../../assets/images/MainPage/Logo.png';
import './Header.scss';
import {Button, Modal} from "react-bootstrap";
import {useState} from "react";

const Header = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false);
    };
    const handleShow = (service) => {
        setShow(true);
    };
    const scrollToSection = (id) => {
        const element = document.getElementById(id);

        if (!element) return;

        const headerOffset = 64;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });

        handleClose();
    };

    return (
        <header className="header">
            <nav className="navbar">
                <div className="navbar--left">
                    <a href="">
                        <img alt="/" className="logo" src={logo}/>
                    </a>
                </div>

                <div className="navbar--right">
                    <a href="#about" className="navbar__element"> Despre noi</a>
                    <a href="#team" className="navbar__element"> Echipa</a>
                    <a href="#gallery" className="navbar__element"> Galerie </a>
                    <Button href="#contact" className="navbar__element"> Contactează-ne </Button>
                </div>

                <div className="navbar--mobile" onClick={() => handleShow()}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         className="bi bi-list" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                    </svg>
                </div>

                    <Modal show={show} onHide={handleClose} className="header__modal">
                        <Modal.Header closeButton></Modal.Header>
                        <Modal.Body>
                            <div className="header__modal-container">
                                <div onClick={() => scrollToSection('about')} className="navbar__element"> Despre noi</div>
                                <div onClick={() => scrollToSection('team')} className="navbar__element"> Echipa</div>
                                <div onClick={() => scrollToSection('gallery')} className="navbar__element"> Galerie </div>
                                <Button onClick={() => scrollToSection('contact')} className="navbar__element"> Contactează-ne </Button>
                            </div>
                        </Modal.Body>
                    </Modal>

            </nav>
        </header>
    );
};

export default Header;

// <div className={`header`}>
//     <div className={`container`}>
//         <div className={`row`}>
//             <div className={`col header__logo`}>
//                 <a href="#home">
//                     <img alt="Logo" className="logo" src={logo}/>
//                 </a>
//             </div>
//             <div className={`col header__links`}>
//                 <a href="#about" className="navbar__element"> Despre </a>
//                 <a href="#team" className="navbar__element"> Echipa</a>
//                 <a href="#gallery" className="navbar__element"> Galerie </a>
//             </div>
//             <div className={`col header__buttons`}>
//                 <a href="#contact" className="navbar__element"> Contacte </a>
//             </div>
//         </div>
//     </div>
// </div>