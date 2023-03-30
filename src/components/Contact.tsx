import React from 'react';
import "../styles/Contact.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPhoneVolume, faEnvelope, faLocationDot} from '@fortawesome/free-solid-svg-icons';
import {faSquareFacebook} from '@fortawesome/free-brands-svg-icons';


function Contact() {
    const phone = <FontAwesomeIcon icon={faPhoneVolume}/>
    const mail = <FontAwesomeIcon icon={faEnvelope}/>
    const location = <FontAwesomeIcon icon={faLocationDot}/>
    const facebook = <FontAwesomeIcon icon={faSquareFacebook}/>
    // const {} = useLoadScript({googleMapsApiKey: ""});

    return (
        <>
            <div className="container">
                <div className="main_title"> Contacte </div>

                <div className="contact">
                    <div>
                        <div className="contact_left_shadow"></div>
                        <div className="contact_left">

                            <div className="contact_element phone"><i className="contact_icon">{phone}</i> 069557888
                            </div>
                            <div className="contact_element mail"><i
                                className="contact_icon">{mail}</i> clean.dent2021@gmail.com
                            </div>
                            <div className="contact_element facebook" ><i
                                className="contact_icon">{facebook}</i> <a className="link" href="https://www.facebook.com/profile.php?id=100071804420847">https://www.facebook.com/profile.php?id=100071804420847</a>
                            </div>
                            <div className="contact_element location"><i
                                className="contact_icon">{location}</i> Bulevardul Decebal 72/2, Chișinău
                            </div>
                            <div className="working_title"> Program de lucru:</div>
                            <div className="working_hours">
                                <div className="first_column">
                                    <div className="day">Luni-Vineri:</div>
                                    <div className="day">Sâmbătă:</div>
                                    <div className="day">Duminică:</div>
                                </div>
                                <div className="second_column">
                                    <div className="time">9:00 AM - 7:00 PM</div>
                                    <div className="time">9:00 AM - 2:00 PM</div>
                                    <div className="time">-------------------</div>
                                </div>

                            </div>
                        </div>

                    </div>
                    <div className="contact_right">
                        <div className="map">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2721.3037725067065!2d28.856799980158282!3d46.99500803811993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97fab46767143%3A0x7e6f4d55bf10f5e7!2sClean%20Dent!5e0!3m2!1sen!2s!4v1671701217775!5m2!1sen!2s"
                                width="430" height="430" loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;