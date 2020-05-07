import React from 'react';
import { FaEnvelope } from 'react-icons/fa';


class Newsletter extends React.Component {
    constructor(props) {
        super(props)
        this.state ={
            email : "",
        }
        this.onFieldChange = this.onFieldChange.bind(this)
        this.onSubscribe = this.onSubscribe.bind(this)
        

    }
    onFieldChange= (event) =>{
        this.setState({email: event.target.value})
    };

    onSubscribe (event){
        event.preventDefault();
        
    };

    render() {
        return (
            <div className="container-fluid pab0 bg-navy">
                <div className="row mt3 pa3">
                    <div className="col-sm-3 f4 white"> <FaEnvelope size ="50px"  /> <span>NEWSLETTER</span></div>
                    <div className="col-7"> <input className="input-reset ba w-70-l fl bg-white pa3 br2-ns br--left-ns" text="email" placeholder="Your Email Address" name="email" id="email-address" onChange={this.onFieldChange} /> </div>
                    <button
                        className="col  fl w-100 pa3 input-reset ba bg-green hover-bg-light-green white pointer" id="submit" onClick={this.onSubscribe}>SUBSCRIBE </button>
                    {/* className="col button-reset fl w-100 pa3 ba bg-green hover-bg-light-green white pointer"  id="submit" onClick={onButtonFind}>SUBSCRIBE </button> */}
                </div>
                <hr className=" bb bw1 b--black-10" />
            </div>
        );
    }
}

export default Newsletter;