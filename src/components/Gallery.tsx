import React from 'react';
import "../styles/Gallery.css";
import img1 from '../resources/images/Gallery/img1.jpg';
import img2 from '../resources/images/Gallery/img2.jpg';
import img3 from '../resources/images/Gallery/img3.jpg';
import img4 from '../resources/images/Gallery/img4.jpg';
import img5 from '../resources/images/Gallery/img5.jpg';
import img6 from '../resources/images/Gallery/img6.jpg';
import {Image} from "antd";

function Gallery() {
    return (
        <>
            <div className="container">
                <div className="gallery">
                    <div className="main_title"> Galerie </div>

                    <div className="Gallery_elements">
                        <div className="first_raw">
                            <Image alt="/" className="gallery_image" src={img1}></Image>
                            <Image alt="/" className="gallery_image" src={img2}></Image>
                            <Image alt="/" className="gallery_image" src={img3}></Image>
                        </div>

                        <div className="second_raw">
                            <Image alt="/" className="gallery_image" src={img4}></Image>
                            <Image alt="/" className="gallery_image" src={img5}></Image>
                            <Image alt="/" className="gallery_image" src={img6}></Image>
                        </div>

                        {/*<div className="third_raw">*/}
                        {/*    <img alt="/" className="gallery_image"></img>*/}
                        {/*    <img alt="/" className="gallery_image"></img>*/}
                        {/*    <img alt="/" className="gallery_image"></img>*/}
                        {/*</div>*/}

                    </div>
                </div>
            </div>
        </>
    );
}

export default Gallery;