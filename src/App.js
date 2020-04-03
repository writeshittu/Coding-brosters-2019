import React, { Fragment } from 'react';
import LandingPage from './components/landingPage/LandingPage';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import FindPage from './components/Findpage/FindPage';
import SpecialOffer from './components/SpecialOffer/SpecialOffer';
import GalleryPage from './components/Gallery Page/GalleryPage'
import AboutPage from './About Page/AboutPage';
import LoginPage from './components/login/LoginPage';
import Home from './Components_container/Home'
import NavBar from '../src/Components_container/NavBar'
import Footer from './Components_container/FooterComponents/Footer'
import SignUpPage from './components/Register/SignUpPage';



const App = () => {
    return ( 
        <Fragment>
                <NavBar />
            <Router>
                <Switch>
                <Route path="/" exact component={Home} />
                <Route path='/find' exact component={FindPage} />
                <Route path='/special-offer' exact component={SpecialOffer} />
                <Route path='/gallery' exact component={GalleryPage} />
                <Route path='/about-us' exact component={AboutPage} />
                <Route path='/login' exact component={LoginPage}  />
                <Route path='/register' exact component={SignUpPage} />
                </Switch>
            </Router>
                <Footer />
        </Fragment>

     );
}
 
export default App;