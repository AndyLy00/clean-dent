import './Gallery.scss';
import gallery1 from "../../assets/images/Gallery/gallery1.JPG";
import gallery2 from "../../assets/images/Gallery/gallery2.JPG";
import gallery3 from "../../assets/images/Gallery/gallery3.JPG";
import {Button} from "react-bootstrap";

const Gallery = () => {

    return (
        <div className="gallery" id="gallery">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2 className="h1">Galerie</h2>
                        <h3 className="h5">Oameni, zâmbete și grijă în fiecare detaliu</h3>
                    </div>
                </div>
                <div className="row g-3 gallery__elements">
                    <div alt="/" className="gallery__image col-12 col-md-6 col-lg-4 col-xl-3" src={gallery1}>
                        <img alt="/" src={gallery1} />
                    </div>
                    <div alt="/" className="gallery__image col-12 col-md-6 col-lg-4 col-xl-3" src={gallery2}>
                        <img alt="/" src={gallery2} />
                    </div>
                    <div alt="/" className="gallery__image col-12 col-md-6 col-lg-4 col-xl-3" src={gallery3}>
                        <img alt="/" src={gallery3} />
                    </div>
                </div>
                {/*<Button> Vezi mai mult </Button>*/}
            </div>
        </div>
    );
};

export default Gallery;