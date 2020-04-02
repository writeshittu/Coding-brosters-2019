import React from'react';


let style = {
    marginRight :"25px",
    borderRadius :"5px"
 }
class SearchField extends React.Component {
    constructor (){
        super();
        this.state ={
            input: '' 
        }
    this.onChangeInput = this.onChangeInput.bind(this);
    this.onButtonFind = this.onButtonFind.bind(this);
    }
    onChangeInput = (event)=>{
        this.setState ({input : event.target.value})
    }
    onButtonFind = (event)=>{
        this.setState();
        event.preventDefault();
       
    }
  render(){  
return(
    <div>
        <form onSubmit={this.onButtonFind}>
            <select className="pa1 w-20-ns input-reset ba" value={this.state.value} onChange={this.handleChange} style= {style}>
                <option value="City">City</option>
                <option value="Abuja">Abuja</option>
                <option value="Ibadan">Ibadan</option>
                <option value="Lagos">Lagos</option>
                <option value="Port Hacourt">Port Hacourt</option>
            </select>
            <select className="pa1 w-20-ns input-reset ba" style= {style} value={this.state.value} onChange={this.handleChange}>
                <option value="Area">Area</option>
                <option value="badagry">Badagry</option>
                <option value="Ibeju Lekki">Ibeju Lekki</option>
                <option value="Ikeja">Ikeja</option>
                <option value="Ikoyi">Ikoyi</option>
                <option value="Lagos Island">Lagos Island</option>
                <option value="Victorial Islans">Victorial Island</option>
            </select>
            <select className="pa1 w-20-ns input-reset ba" style= {style} value={this.state.value} onChange={this.handleChange}>
                <option value="Types of Activities">Types of Activities</option>
                <option value="Arcade">Arcade</option>
                <option value="Archery">Archery</option>
                <option value="Arts and culture">Arts and culture</option>
                <option value="Bowlings">Bowlings</option>
                <option value="Casino">Casino</option>
                <option value="Clubs">Clubs</option>
                <option value="Horse Riding">Horse Riding</option>
                <option value="Kayakings">Kayakings</option>
                <option value="Kart Racing">Kart Racing</option>
                <option value="Museum">Museum</option>
                <option value="Parks">Parks</option>
                <option value="Spa and Wellness">Spa and Wellness</option>
                <option value="Restaurants">Restaurants/Eatries</option>
                <option value="Shopping">Shopping</option>
                <option value="Swimming">Swimming</option>
                <option value="Virtual Reality">Virtual Reality</option>
                <option value="Fiat">Zoo</option>
            </select>
            <input className="pa1 w-10-ns input-reset ba" type = "button" name="find" value="Find" style= {style} />
        </form>
</div>
);
  }
}
export default SearchField;

