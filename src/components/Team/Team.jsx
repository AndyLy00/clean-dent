import './Team.scss';
import Slider from "react-slick";
import team1 from '/src/assets/images/Team/team1.JPG';
import team2 from '/src/assets/images/Team/team2.JPG';
import team3 from '/src/assets/images/Team/team3.JPG';
import team4 from '/src/assets/images/Team/team4.JPG';
import team5 from '/src/assets/images/Team/team5.JPG';
import team6 from '/src/assets/images/Team/team6.JPG';


const Team = () => {
    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        accessibility: true,
        arrows: false,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3
                }
            }
        ]
    };
    const emptyImage = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"

    return (
        <div className="team" id="team">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2 className="h1">Echipa noastră</h2>
                        <h3 className="h5">Îngrijire dentară realizată de oameni care pun pacientul pe primul loc</h3>
                    </div>
                </div>
                <div className="row team__slider">
                    <div className="col col-12">
                        <Slider {...settings}>
                            <div className="slider-element">
                                <div className="team-member">
                                    <img className="team-member__image" alt="" src={team1}/>
                                    <div className="team-member__data">
                                        <div className="team-member__name">Team Member Name</div>
                                        <div className="team-member__job">Team Member Job</div>
                                    </div>
                                </div>
                            </div>
                            <div className="slider-element">
                                <div className="team-member">
                                    <img className="team-member__image" alt="" src={team2}/>
                                    <div className="team-member__data">
                                        <div className="team-member__name">Team Member Name</div>
                                        <div className="team-member__job">Team Member Job</div>
                                    </div>
                                </div>
                            </div>
                            <div className="slider-element">
                                <div className="team-member">
                                    <img className="team-member__image" alt="" src={team3}/>
                                    <div className="team-member__data">
                                        <div className="team-member__name">Team Member Name</div>
                                        <div className="team-member__job">Team Member Job</div>
                                    </div>
                                </div>
                            </div>
                            <div className="slider-element">
                                <div className="team-member">
                                    <img className="team-member__image" alt="" src={team4}/>
                                    <div className="team-member__data">
                                        <div className="team-member__name">Team Member Name</div>
                                        <div className="team-member__job">Team Member Job</div>
                                    </div>
                                </div>
                            </div>
                            <div className="slider-element">
                                <div className="team-member">
                                    <img className="team-member__image" alt="" src={team5}/>
                                    <div className="team-member__data">
                                        <div className="team-member__name">Team Member Name</div>
                                        <div className="team-member__job">Team Member Job</div>
                                    </div>
                                </div>
                            </div>
                            <div className="slider-element">
                                <div className="team-member">
                                    <img className="team-member__image" alt="" src={team6}/>
                                    <div className="team-member__data">
                                        <div className="team-member__name">Team Member Name</div>
                                        <div className="team-member__job">Team Member Job</div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;