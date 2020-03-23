import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components_container/NavBar';
import ControlledCarousel from './Components_container/Carousel';
import Cardlists from './Components_container/Cardlist';
import Footer from './Components_container/FooterComponents/Footer';

class App extends React.Component {
  // constructor(props){
  //   super(props);
  //   let state = {
  //     SearchField : ''
  //   }
  // }

  render(){
    return(
      <div>
        <NavBar/>
        <ControlledCarousel/>
        <Cardlists/>
        <Footer/>
      </div>
    )
  }
}

export default App;
