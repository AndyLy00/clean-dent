import React from 'react';
import "../styles/Team.css";
import Slider from "react-slick";
import specialist1 from '../resources/images/Team/specialist1.jpg';
import specialist2 from '../resources/images/Team/specialist2.jpg';
import specialist3 from '../resources/images/Team/specialist3.jpg';
import {faChevronRight, faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Team() {
    const right = <FontAwesomeIcon icon={faChevronRight}/>
    const left = <FontAwesomeIcon icon={faChevronLeft}/>
    let settings = {
        accessibility: true,
        prevArrow: <div className="arrow">{left}</div>,
        nextArrow: <div className="arrow">{right}</div>,
        text: false,
        dots: false,
        infinite: true,
        arrows: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 3000,

    };
    return (
        <>
            <div className="container">

                <div className="main_title"> Echipa noastră</div>
                <div>
                    <Slider className="specialist_list" {...settings}>
                        <div>
                            <div className="specialist">
                                <img alt="/" className="specialist_icon" src={specialist1}></img>
                                <div className="specialist_name"> Veaceslav Calpac</div>
                                <div className="specialist_job"> Job</div>
                                <div className="specialist_text"> -------------------- ------------------
                                    ------------------
                                    ---------------------- --------------------
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="specialist">
                                <img alt="/" className="specialist_icon" src={specialist2}></img>
                                <div className="specialist_name"> Natalia Găvoaza</div>
                                <div className="specialist_job"> Medic-stomatolog</div>
                                <div className="specialist_text"> -------------------- ------------------
                                    ------------------
                                    ---------------------- --------------------
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="specialist">
                                <img alt="/" className="specialist_icon" src={specialist3}></img>
                                <div className="specialist_name"> Elena Tofanciuc</div>
                                <div className="specialist_job"> Medic-stomatolog</div>
                                <div className="specialist_text"> -------------------- ------------------
                                    ------------------
                                    ---------------------- --------------------
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="specialist">
                                <img alt="/" className="specialist_icon"></img>
                                <div className="specialist_name"> Name</div>
                                <div className="specialist_job"> Job</div>
                                <div className="specialist_text"> -------------------- ------------------
                                    ------------------
                                    ---------------------- --------------------
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="specialist">
                                <img alt="/" className="specialist_icon"></img>
                                <div className="specialist_name"> Name</div>
                                <div className="specialist_job"> Job</div>
                                <div className="specialist_text"> -------------------- ------------------
                                    ------------------
                                    ---------------------- --------------------
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="specialist">
                                <img alt="/" className="specialist_icon"></img>
                                <div className="specialist_name"> Name</div>
                                <div className="specialist_job"> Job</div>
                                <div className="specialist_text"> -------------------- ------------------
                                    ------------------
                                    ---------------------- --------------------
                                </div>
                            </div>
                        </div>


                        {/*<div className="specialist_list">*/}

                            {/*<div className="specialist_left"> {left} </div>*/}









                            {/*<div className="specialist_right"> {right} </div>*/}

                        {/*</div>*/}
                    </Slider>
                </div>
            </div>
        </>
    );
}

export default Team;