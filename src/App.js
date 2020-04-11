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