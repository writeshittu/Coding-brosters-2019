import React, {Component} from 'react';
import Cardlist from './Cardlist';
import Searchbox from './Searchbox';
import Scroll from './Scroll';
import  './index.css';



class App extends Component  {
    constructor (){
        super()
        this.state = {
            robots:[],
            searchfield: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=> response.json())
            .then(users =>{ this.setState({robots:users})});
    }


    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value}) 
    }
    render () {
        const filteredRobots =this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        if (this.state.robots.length === 0) {
            return <h1>Loading...<em>Checking your connection</em></h1>
        } else {
            return  (
                <div className ='tc'>
                    <h1>Robofriends</h1>
                     <div >
                     <Searchbox searchChange ={this.onSearchChange}/>
                     <Scroll>
                     <Cardlist robots={filteredRobots}/>
                     </Scroll>
                     
                 </div>
                </div>
             )
         }  
        }
        
}

export default App;