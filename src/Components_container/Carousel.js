import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import SearchField from './SearchField';




let ControlledCarousel = () =>{
   
    return <Carousel>
       
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://res.cloudinary.com/undercover/image/upload/v1584886568/RecreationalApp/Carousel1_wixuu7.png"
            alt="First slide"
            />
            <Carousel.Caption>
            <h3>Wanna Have Fun?</h3>
            <p>why not check out popular recreation centres near you</p>
            <SearchField/>
            </Carousel.Caption>

        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://res.cloudinary.com/undercover/image/upload/v1584886575/RecreationalApp/Carousel2_tiazgv.png"
            alt="Third slide"
            />

            <Carousel.Caption>
            <h3>Wanna have Fun?</h3>
            <p>why not check out popular recreation centres near you</p>
            <SearchField/>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img style = {{backgroundRepeat:'no-repeat' }}
            className="d-block w-100"
            src="https://res.cloudinary.com/undercover/image/upload/v1584886581/RecreationalApp/Carousel3_qez93u.png"
            alt="Third slide"
            />

            <Carousel.Caption>
            <h3>Wanna have Fun?</h3>
            <p>why not check out popular recreation centres near you.</p>
            <SearchField/>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
}
  export default ControlledCarousel;