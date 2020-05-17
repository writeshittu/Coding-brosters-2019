import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components_container/NavBar';
import ControlledCarousel from './Components_container/Carousel';
import Cardlists from './Components_container/Cardlist';
// import Home from './Components_container/Home';
import Gallery from './Components_container/Gallery';
import SpecialOffer from './Components_container/SpecialOffer';
import Login from './Components_container/Login';
import Footer from './Components_container/FooterComponents/Footer';
import AboutUs from './Components_container/AboutUs';
import React, { Fragment,  lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import FindPage from './components/Findpage/FindPage';
import SpecialOffer from './components/SpecialOffer/SpecialOffer';
import GalleryPage from './components/Gallery Page/GalleryPage'
import AboutPage from './About Page/AboutPage';
import NavBar from '../src/Components_container/NavBar'
import Footer from './Components_container/FooterComponents/Footer'

const  Home = lazy(()=> import('./Components_container/Home'));
const  LoginPage = lazy(()=> import('./components/login/LoginPage'));
const SignUpPage = lazy(()=> import('./components/Register/SignUpPage'));

  render(){
    return(
      <React.Fragment>
        <NavBar />
          <Router>
          <Switch>
            <div exact path="/">
              <ControlledCarousel />
              <Cardlists />
            </div>
            {/* <Route  component={Home}/> */}
            <Route path="/gallery" component={Gallery} />
            <Route path="/specialoffer" component={SpecialOffer} />
            <Route path="/login" component={Login} />
            <Route path="/aboutus" component={AboutUs} />
          </Switch>
        </Router>
        <Footer />
      </React.Fragment>
    )
  }
}
const App = () => {
    return ( 
        <Fragment>
             <Suspense fallback={<div className="spinner"><h3>Loading...</h3></div>} >
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
            </Suspense>
        </Fragment>

     );
}
 
export default App;