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

class App extends React.Component {

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

export default App;
