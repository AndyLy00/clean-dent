import './Contact.scss';

const Contact = () => {

    return (
        <div className="contact" id="contact">
            <div className="container contact__container">
                <div className="row">
                    <div className="col">
                        <h2 className="h1">Contacte</h2>
                        <h3 className="h5">Programează-te rapid și ușor</h3>
                    </div>
                </div>
                <div className="row g-3 contact__info">
                    <div className="contact__networks col-12 col-sm-6">
                        <div className="contact__element phone">
                            <div className="contact__icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                     className="bi bi-telephone-fill" viewBox="0 0 16 16">
                                    <path d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
                                </svg>
                            </div>
                            069557888
                        </div>

                        <div className="contact__element mail">
                            <div className="contact__icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                     className="bi bi-envelope-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/>
                                </svg>
                            </div>
                            clean.dent2021@gmail.com
                        </div>
                        <div className="contact__element facebook">
                            <div className="contact__icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                     className="bi bi-facebook" viewBox="0 0 16 16">
                                    <path
                                        d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                                </svg>
                            </div>
                            <a className="link"
                               href="https://www.facebook.com/profile.php?id=100071804420847">https://www.facebook.com/profile.php?id=100071804420847</a>
                        </div>
                        <div className="contact__element location">
                            <div className="contact__icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                     className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
                                </svg>
                            </div>
                            Bulevardul Decebal 72/2, Chișinău
                        </div>
                    </div>
                    <div className="contact__program col-12 col-sm-6">
                        <div className="working__title"> Program de lucru:</div>
                        <div className="working__hours">
                            <div className="working__first-column">
                                <div className="day">Luni-Vineri:</div>
                                <div className="day">Sâmbătă:</div>
                                <div className="day">Duminică:</div>
                            </div>
                            <div className="working__second-column">
                                <div className="time">9:00 AM - 7:00 PM</div>
                                <div className="time">9:00 AM - 2:00 PM</div>
                                <div className="time">-------------------</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2721.3037725067065!2d28.856799980158282!3d46.99500803811993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97fab46767143%3A0x7e6f4d55bf10f5e7!2sClean%20Dent!5e0!3m2!1sen!2s!4v1671701217775!5m2!1sen!2s"
                    width="100%" height="400" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="container">
                <div className="footer">© 2026 Copyright: CleanDent</div>
            </div>
        </div>
    );
};

export default Contact;