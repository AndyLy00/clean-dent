import React from 'react';
import personal from '../resources/images/MainPage/Personal.png';
import waves from '../resources/images/MainPage/Waves2.png';
import "../styles/MainPage.css"

function MainPage() {
    return (
        <>
            <div className="container">
                <div className="slogan">
                    <div className="slogan_title">Clean Dent -</div>
                    <div className="slogan_text">Generatorul Fericirii Tale</div>
                </div>
                <div className="main_page">
                    <div className="main_page_left">
                        <div className="main_page_title_block">
                            <div className="main_page_title_shadow"></div>
                            <div className="main_page_title">Bun venit </div>
                        </div>
                        <div className="main_page_text"> Conceptul clinicii “CleanDent”, presupune oferirea tratamentelor pentru fiecare membru al familiei de la copii și până la cei mai vârstnici. Te așteptam sa faci cunoștința cu echipa noastră ca să te convingi ca generam cele mai frumoase și sclipitoare zâmbete.</div>
                        <a href="#contact" className="main_page_button"> Contactați-ne </a>
                    </div>


                    <div className="main_page_right">
                        <img className="main_page_image" alt="#" src={personal}/>
                    </div>
                    <img className="waves" alt="#" src={waves}/>
                </div>

            </div>
        </>
    );
}

export default MainPage;