import React from 'react';
import "../styles/About.css";

import pr1 from "../resources/images/Procedures/1.jpg";
import pr2 from "../resources/images/Procedures/2.jpg";
import pr3 from "../resources/images/Procedures/3.jpg";
import pr4 from "../resources/images/Procedures/4.jpg";
import pr5 from "../resources/images/Procedures/5.jpg";
import pr6 from "../resources/images/Procedures/6.jpg";
import pr7 from "../resources/images/Procedures/7.jpg";
import pr8 from "../resources/images/Procedures/8.jpg";

import about from '../resources/images/About/about-image copy.jpg';
import {faTooth} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Image} from "antd";

function About() {
    const tooth = <FontAwesomeIcon icon={faTooth}/>
    return (
        <>
            <div className="container">
                <div className="main_title">Cine suntem noi?</div>
                <div className="about_block">
                    <div className="about_left">
                        <img className="about_image" alt="#" src={about}/>
                    </div>
                    <div className="about_right">
                        <div className="about_subtitle">
                            <div className="main_page_title_shadow about_right_shadow"></div>
                            <div className="main_page_title about_right_title">CleanDent</div>
                        </div>
                        <div className="about_elements">
                            <div className="about_element_title">Misiunea noastră:</div>
                            <p className="about_element_text paragraph">De a reflecta frumusețea interioară a fiecărei
                                persoane printr-un zâmbet fabulos</p>
                            <div className="about_element_title"> Valorile noastre:</div>
                            <p className="about_element_text paragraph">Grijă, Splendoare, Acuratețe...</p>
                            <div className="about_element_title">Serviciile de care dispunem:</div>
                            <p className="about_element_text paragraph">
                                <div className="service"><i className="tooth">{tooth}</i> Protezare dentară</div>
                                {/*<div className="service"> <i className="tooth">{tooth}</i>   Tratamentul cariei dentare</div>*/}
                                <div className="service"><i className="tooth">{tooth}</i> Curățare dentară</div>
                                {/*<div className="service"> <i className="tooth">{tooth}</i>   Tratamentul durerei acute</div>*/}
                                <div className="service"><i className="tooth">{tooth}</i> Înalbirea dinților</div>
                                <div className="service"><i className="tooth">{tooth}</i> Restaurări dentare</div>
                                <div className="service"><i className="tooth">{tooth}</i> Ortodonție</div>
                                <div className="service"><i className="tooth">{tooth}</i> Stomatologie pediatrică</div>
                                <div className="service"><i className="tooth">{tooth}</i> Implantologie</div>
                                <div className="service"><i className="tooth">{tooth}</i> Imagistică dentară</div>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="space"></div>
                {/*Proceduri*/}

                <div className="procedure">
                    <div className="procedure_for_text">
                        <div className="procedure_text">Protezarea dentară are loc printr-un dispozitiv personalizat
                            după dantura pacientului, care constă din suport și dinți artificiali. Se pot distinge două
                            tipuri de protezare dentară: Protezarea dentară fixă - posibilă atunci când există dinți
                            înconjurători care să servească drept suport pentru puntea dentară.
                        </div>
                    </div>
                    <div className="procedure_for_image">
                        <Image className="procedure_image" alt="#" src={pr1}/>
                    </div>
                </div>

                <div className="procedure">
                    <div className="procedure_for_image">
                        <Image className="procedure_image" alt="#" src={pr2}/>
                    </div>
                    <div className="procedure_for_text">
                        <div className="procedure_text">Curățarea dinților sau detartrajul este o denumire tehnică
                            acordată pentru înlăturarea acumulărilor plăcii și depunerilor de piatră de pe dinți și
                            pentru lustruirea acestora. Rezultatul acestei proceduri – dinți îngrijiți și curați.
                        </div>
                    </div>
                </div>

                <div className="procedure">
                    <div className="procedure_for_text">
                        <div className="procedure_text">Albirea este procesul de deschidere a culorii dinților. Albirea
                            este adesea dorită atunci când dinții se îngălbenesc în timp din mai multe motive și poate
                            fi realizată prin modificarea culorii intrinseci sau extrinseci a smalțului dinților.
                        </div>
                    </div>
                    <div className="procedure_for_image">
                        <Image className="procedure_image" alt="#" src={pr3}/>
                    </div>
                </div>

                <div className="procedure">
                    <div className="procedure_for_image">
                        <Image className="procedure_image" alt="#" src={pr4}/>
                    </div>
                    <div className="procedure_for_text">
                        <div className="procedure_text">Restaurările dentare pot fi de 2 tipuri: restaurări directe,
                            care se execută la cabinetul stomatologic și restaurări indirecte, care se realizează în
                            laboratorul dentar pe baza amprentelor dentare a pacientului ( inlay, onlay, fațete dentare,
                            coroane dentare).
                        </div>
                    </div>
                </div>

                <div className="procedure">
                    <div className="procedure_for_text">
                        <div className="procedure_text">Ortodonția reprezintă o ramură a medicinei dentare care
                            presupune corectarea anomaliilor dentomaxilare prin parcurgerea unui tratament ortodontic.
                            Riscul cel mai mare la care dantura este expusă atunci când se confruntă cu astfel de
                            anomalii, sunt cariile dentare.
                        </div>
                    </div>
                    <div className="procedure_for_image">
                        <Image className="procedure_image" alt="#" src={pr5}/>
                    </div>
                </div>

                <div className="procedure">
                    <div className="procedure_for_image">
                        <Image className="procedure_image" alt="#" src={pr6}/>
                    </div>
                    <div className="procedure_for_text">
                        <div className="procedure_text">Stomatologia pediatrica numită și pedodonție se ocupă cu
                            prevenirea și tratarea afecțiunior dinților de lapte și a dinților permanenți tineri.
                            Medicul pedodont poate depista anomaliile dento-maxilare, iar rezolvarea acestora va fi
                            realizată de medicul ortodont.
                        </div>
                    </div>
                </div>

                <div className="procedure">
                    <div className="procedure_for_text">
                        <div className="procedure_text">Implantologia este o ramură a stomatologiei ce studiază
                            protezarea edentației (lipsei dinților) cu ajutorul implanturilor dentare. Implantul dentar
                            este un șurub din titan, ce va fi inserat în os, în locul dinților lipsă.
                        </div>
                    </div>
                    <div className="procedure_for_image">
                        <Image className="procedure_image" alt="#" src={pr7}/>
                    </div>
                </div>

                <div className="procedure">
                    <div className="procedure_for_image">
                        <Image className="procedure_image" alt="#" src={pr8}/>
                    </div>
                    <div className="procedure_for_text">
                        <div className="procedure_text">Radiologia şi imagistica medicală este o ramură a medicinei care
                            se ocupă cu studiul teoretic şi aplicaţiile practice ale radiaţiilor ionizante
                            ultrasunetelor, fenomenelor demrezonanţă magnetică, etc.
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default About;