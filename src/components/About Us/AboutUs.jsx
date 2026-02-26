import './AboutUs.scss';
import service1 from '/src/assets/images/Services/service1.png';
import service2 from '/src/assets/images/Services/service2.png';
import service3 from '/src/assets/images/Services/service3.png';
import service4 from '/src/assets/images/Services/service4.png';
import service5 from '/src/assets/images/Services/service5.png';
import service6 from '/src/assets/images/Services/service6.png';
import service7 from '/src/assets/images/Services/service7.png';
import service8 from '/src/assets/images/Services/service8.png';
import nr1 from '/src/assets/images/Services/nr1.png';
import nr2 from '/src/assets/images/Services/nr2.png';
import nr3 from '/src/assets/images/Services/nr3.png';
import nr4 from '/src/assets/images/Services/nr4.png';
import nr5 from '/src/assets/images/Services/nr5.png';
import nr6 from '/src/assets/images/Services/nr6.png';
import nr7 from '/src/assets/images/Services/nr7.png';
import nr8 from '/src/assets/images/Services/nr8.png';
import {Modal} from "react-bootstrap";
import {useState} from "react";

const AboutUs = () => {
    const [show, setShow] = useState(false);
    const [currentService, setCurrentService] = useState(null);
    const handleClose = () => {
        setShow(false);
        setCurrentService(null);
    };
    const handleShow = (service) => {
        setCurrentService(service);
        setShow(true);
    };

    const services = [
        {
            id: 'service1',
            name: 'Protezare dentară',
            image: service1,
            info: 'Protezarea dentară are loc printr-un dispozitiv personalizat după dantura pacientului, care constă din suport și dinți artificiali. Se pot distinge două tipuri de protezare dentară: Protezarea dentară fixă - posibilă atunci când există dinți înconjurători care să servească drept suport pentru puntea dentară.',
            modalImage: nr1,
        },
        {
            id: 'service2',
            name: 'Curățare dentară',
            image: service2,
            info: 'Curățarea dinților sau detartrajul este o denumire tehnică acordată pentru înlăturarea acumulărilor plăcii și depunerilor de piatră de pe dinți și pentru lustruirea acestora. Rezultatul acestei proceduri – dinți îngrijiți și curați.',
            modalImage: nr2,
        },
        {
            id: 'service3',
            name: 'Înalbirea dinților',
            image: service3,
            info: 'Albirea este procesul de deschidere a culorii dinților. Albirea este adesea dorită atunci când dinții se îngălbenesc în timp din mai multe motive și poate fi realizată prin modificarea culorii intrinseci sau extrinseci a smalțului dinților.',
            modalImage: nr3,
        },
        {
            id: 'service4',
            name: 'Restaurări dentare',
            image: service4,
            info: 'Restaurările dentare pot fi de 2 tipuri: restaurări directe, care se execută la cabinetul stomatologic și restaurări indirecte, care se realizează în laboratorul dentar pe baza amprentelor dentare a pacientului ( inlay, onlay, fațete dentare, coroane dentare).',
            modalImage: nr4,
        },
        {
            id: 'service5',
            name: 'Ortodonție',
            image: service5,
            info: 'Ortodonția reprezintă o ramură a medicinei dentare care presupune corectarea anomaliilor dentomaxilare prin parcurgerea unui tratament ortodontic. Riscul cel mai mare la care dantura este expusă atunci când se confruntă cu astfel de anomalii, sunt cariile dentare.',
            modalImage: nr5,
        },
        {
            id: 'service6',
            name: 'Stomatologie pediatrică',
            image: service6,
            info: 'Stomatologia pediatrica numită și pedodonție se ocupă cu prevenirea și tratarea afecțiunior dinților de lapte și a dinților permanenți tineri. Medicul pedodont poate depista anomaliile dento-maxilare, iar rezolvarea acestora va fi realizată de medicul ortodont.',
            modalImage: nr6,
        },
        {
            id: 'service7',
            name: 'Implantologie',
            image: service7,
            info: 'Implantologia este o ramură a stomatologiei ce studiază protezarea edentației (lipsei dinților) cu ajutorul implanturilor dentare. Implantul dentar este un șurub din titan, ce va fi inserat în os, în locul dinților lipsă.',
            modalImage: nr7,
        },
        {
            id: 'service8',
            name: 'Imagistică dentară',
            image: service8,
            info: 'Radiologia şi imagistica medicală este o ramură a medicinei care se ocupă cu studiul teoretic şi aplicaţiile practice ale radiaţiilor ionizante ultrasunetelor, fenomenelor demrezonanţă magnetică, etc.',
            modalImage: nr8,
        }
    ]

    return (
        <div className="about-us" id="about">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2 className="h1">Despre noi</h2>
                        <h3 className="h5">Noi lucrăm pentru a reflecta frumusețea interioară a fiecărei persoane printr-un zâmbet fabulos</h3>
                    </div>
                </div>
                <div className="row about-us__services g-3">
                    {services.map((service) => (
                        <div className="col col-lg-3" key={service.id}>
                            <div className="service" onClick={() => handleShow(service)}>
                                <img className="sevice__image" alt={service.name} src={service.image}/>
                                <div className="service__name">{service.name}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {currentService && (
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{currentService.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="service__modal">
                            <div>{currentService.info}</div>
                            <img alt={currentService.name} src={currentService.modalImage}/>
                        </div>
                    </Modal.Body>
                </Modal>
            )}
        </div>
    );
};

export default AboutUs;