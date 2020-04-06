import React from 'react';


const Newsletter = ({onChangeInput,onButtonFind}) =>{
    return(
        <div className ="container-fluid pab0 bg-navy">
            <div className ="row mt3 pa3">
               <div  className ="col-sm-3 f4 white"> <img className="mw2  dn-m" src ="https://res.cloudinary.com/undercover/image/upload/v1585046954/RecreationalApp/cities%20views/newsletter_2_1_mbatps.svg" alt ="icon" /> <span>NEWSLETTER</span></div>
               <div className="md:flex col-7"> <input className="input-reset ba w-70-l fl bg-white pa3 br2-ns br--left-ns" text="email" placeholder="Your Email Address" name="email-address" id="email-address" onChange={onChangeInput} /> </div>
               <button className=" col-2 button-reset fl w-100 pa3 ba bg-green hover-bg-light-green white pointer"  id="submit" onClick={onButtonFind}>SUBSCRIBE </button>
            </div>
            <hr className=" bb bw1 b--black-10" />
        </div>
    );
}

export default Newsletter;