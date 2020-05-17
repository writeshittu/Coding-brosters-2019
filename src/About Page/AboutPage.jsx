import React, { Fragment } from 'react'
import AboutUs from './AboutUs'
import rectangle from '../utils/img/Rectangle 3.png';
// import '../assets/main.css';


const AboutPage = () => {
    return ( 
        <Fragment>
            <div className="mt-5">
            <h2 className="text-center sm:text-sm lg:text-5xl font-normal">About Us</h2>
            </div>
            <AboutUs pics={rectangle} />
        </Fragment>
     );
}
 
export default AboutPage;