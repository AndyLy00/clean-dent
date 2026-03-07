import './Team.scss';
import Slider from 'react-slick';
import team1 from '/src/assets/images/Team/team1.JPG';
import team2 from '/src/assets/images/Team/team2.JPG';
import team3 from '/src/assets/images/Team/team3.JPG';
import team4 from '/src/assets/images/Team/team4.JPG';
import team5 from '/src/assets/images/Team/team5.JPG';
import team6 from '/src/assets/images/Team/team6.JPG';

const teamMembers = [
    { image: team1, name: 'Team Member Name', job: 'Team Member Job' },
    { image: team2, name: 'Team Member Name', job: 'Team Member Job' },
    { image: team3, name: 'Team Member Name', job: 'Team Member Job' },
    { image: team4, name: 'Team Member Name', job: 'Team Member Job' },
    { image: team5, name: 'Team Member Name', job: 'Team Member Job' },
    { image: team6, name: 'Team Member Name', job: 'Team Member Job' }
];

const Team = () => {
    const settings = {
        dots: false,
        infinite: teamMembers.length > 4,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        accessibility: true,
        arrows: false,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 3000,
        adaptiveHeight: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };

    return (
        <div className="team" id="team">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2 className="h1">Echipa noastră</h2>
                        <h3 className="h5">
                            Îngrijire dentară realizată de oameni care pun pacientul pe primul loc
                        </h3>
                    </div>
                </div>

                <div className="row team__slider">
                    <div className="col-12">
                        <Slider {...settings}>
                            {teamMembers.map((member, index) => (
                                <div className="slider-element" key={index}>
                                    <div className="team-member">
                                        <img
                                            className="team-member__image"
                                            alt={member.name}
                                            src={member.image}
                                        />
                                        <div className="team-member__data">
                                            <div className="team-member__name">{member.name}</div>
                                            <div className="team-member__job">{member.job}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;