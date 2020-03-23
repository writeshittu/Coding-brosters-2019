import React from 'react';


let Newsletter = () =>{
    return(
        <div className ="container-fluid mt2">
            <div className ="row ma3 pa3">
               <div  className ="col-sm-3 f4 white"> <img className="mw2" src ="images/newsletter 2 1.svg" alt ="icon" /> <span>NEWSLETTER</span></div>
               <div className="col-7"> <input className="input-reset ba w-70 fl bg-white pa3 br2-ns br--left-ns" text="email" placeholder="Your Email Address" name="email-address" value="" id="email-address" /> </div>
               <div className="col-2"> <input  className="button-reset fl pv3 tc ba bg-animate bg-green hover-bg-light-green white pointer" text="Submit" name="submit" value="Subscribe" id="submit" /> </div>
            </div>
            <hr className=" bb bw1 b--black-10" />
        </div>
    );
}

export default Newsletter;