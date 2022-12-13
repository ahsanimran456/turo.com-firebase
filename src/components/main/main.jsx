import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SearchOutlined } from '@ant-design/icons';
import jeep from '../assests/images/jeep.jpg'
import lambo from '../assests/images/lambo.jpg'
import merca from '../assests/images/merca.jpg'
import porch from '../assests/images/porch.jpg'
import nissan from '../assests/images/nissan.jpg'
import toyota from '../assests/images/toyota.jpg'
import sbaro from '../assests/images/sbaro.jpg'
import tesla from '../assests/images/tesla.jpg'
import ford from '../assests/images/ford.jpg'
import bmw from '../assests/images/bmw.jpg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Titleimg() {
    return (
        <div className="main">
            <div className="titleimg">
                <div className="container absoluteheader">
                    <div className="row">
                        <div className="col-md-4 col-sm-12 first ">
                            <div className='text'>
                                <span>Where</span>
                            </div>
                            <div className="div-input">
                                <input type="text" placeholder='City, airport, addressor hotel' />
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-12 sceond">
                            <div className='text'>
                                <span className='text1' >From</span>
                            </div>
                            <div className="date-time">
                                <div>
                                    <span className='date'>11/19/2022</span>
                                </div>
                                <div>
                                    <span>
                                        <span className='time'>10:00 AM</span>

                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-12 third">
                            <div className='text'>
                                <span className='text1' >Until</span>
                            </div>
                            <div className="date-time">
                                <div>
                                    <span className='date'>11/24/2022</span>
                                </div>
                                <div>
                                    <span>
                                        <span className='time'>10:00 AM</span>

                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-1 col-sm-12 searchbar ">
                            <div className='search'>
                                <span> <SearchOutlined /></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
function HeadingSlider() {
    return (
        <section>
            <div className="Findyourdevice">
                <h4>
                    Find your drive
                </h4>
                <div>
                    <p>
                        Explore the world's largest car sharing marketplace
                    </p>
                    <div className="shadow"></div>
                </div>
            </div>
        </section>
    )
}

function Carslider() {
    const data = [
        {
            img: jeep,
            description: 'Jeep'
        },
        {
            img: bmw,
            description: 'BMW'
        },
        {
            img: merca,
            description: 'Mercedes-Benz'
        },
        {
            img: ford,
            description: 'Ford'
        },
        {
            img: lambo,
            description: 'Lamborghini'
        },
        {
            img: nissan,
            description: 'Nissan'
        },
        {
            img: porch,
            description: 'Porsche'
        },
        {
            img: sbaro,
            description: 'Subaru'
        },
        {
            img: tesla,
            description: 'Tesla'
        },
        {
            img: toyota,
            description: 'Toyota'
        },
    ]
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="container">
            <div className="carsliders">
                <h4>Browse by make</h4>
                <Slider {...settings}>
                    {data.map((items, i) =>
                        <div className="eachcard">
                            <div className="card_img">
                                <img src={items.img} alt="" />
                            </div>
                            <div className="cardtitle" key={i}>{items.description}</div>
                        </div>
                    )}
                </Slider>
            </div>
        </div>
    )
}





export { Titleimg, HeadingSlider, Carslider, }