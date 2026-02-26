import './Hero.scss';
import tooth from '../../assets/images/MainPage/tooth.png';
import {Button} from "react-bootstrap";

const Hero = () => {

    return (
        <div className="hero" id="home">
            <div className="container">
                <div className="hero__text">
                    <h1 className="hero__title">Clean Dent</h1>
                    <h2 className="hero__subtitle">Generatorul Fericirii Tale</h2>
                    <h5>Conceptul clinicii “CleanDent”, presupune oferirea tratamentelor pentru fiecare membru al familiei de la copii și până la cei mai vârstnici. Te așteptam sa faci cunoștința cu echipa noastră ca să te convingi ca generam cele mai frumoase și sclipitoare zâmbete.</h5>
                    <div className="hero__buttons">
                        <Button href="#contact" type="primary" className="hero__btn">Contactează-ne</Button>
                        {/*<Button type="outline-primary" className="hero__btn btn-outline-primary">Serviciile Noastre</Button>*/}
                    </div>
                </div>
                <div className="hero__images">
                    <img className="hero__blob" src={tooth} alt="blob"/>
                </div>
            </div>
        </div>
    );
};

export default Hero;