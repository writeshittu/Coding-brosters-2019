import React from'react';
import 'tachyons'
import Recommended from './Recommended';

let Cardlists = () =>{
    let styles = {
                fontFamily : "Garamond",
                
            }
    return (<div className='container-fluid mt-5'>
                <h3 className="tc mt-5 ">Most Visited Places</h3>
                <div style = {styles} className="row ma3 ">
                    <div  className= "col-sm-4 tc">
                        <img className="grow bw-2 pointer" src ='https://res.cloudinary.com/undercover/image/upload/v1584917558/RecreationalApp/cities%20views/palms.lag_qhzlyp.svg' alt="view" />
                        <p className="pa2 ma2 ">Whispering Palms, Lagos</p>
                    </div>
                    <div className="col-sm-4 tc">
                        <img className= "grow bw-2 pointer" src ='https://res.cloudinary.com/undercover/image/upload/v1584918077/RecreationalApp/cities%20views/bj_frg52h.svg' alt="view" />
                        <p className=" pa2 ma2">ShopRite, Abuja</p>
                    </div>
                    <div className="col-sm-4 tc">
                        <img className= "grow bw-2 pointer" src ='https://res.cloudinary.com/undercover/image/upload/v1584917638/RecreationalApp/cities%20views/Rectangle_8PP_yyapbr.svg' alt="view" />
                        <p className= "pa2 ma2"> Peace Park, Port Hacourt</p>
                    </div>
                </div>
                <div style = {styles} className="row ma3">
                    <div className="col-sm-4 tc" >
                        <img className="grow pointer" src ='https://res.cloudinary.com/undercover/image/upload/v1584917569/RecreationalApp/cities%20views/Rectangle_10Ib_1_ulwybz.svg' alt="view" />
                        <p className=" pa2 ma2">Agodi Gardens, Ibadan</p>
                    </div>
                    <div className="col-sm-4 tc bw-2">
                        <img className= "grow pointer" src ='https://res.cloudinary.com/undercover/image/upload/v1584917531/RecreationalApp/cities%20views/Rectangle_12Omu_uh8thr.svg' alt="view" />
                        <p className= "pa2 ma2">Omu Resort, Lagos</p>
                    </div>
                    <div className= "col-sm-4 tc bw-2">
                        <img className= "grow pointer" src ='https://res.cloudinary.com/undercover/image/upload/v1584917525/RecreationalApp/cities%20views/abj_cmpubm.svg' alt="view" />
                        <p className= "ma2">Dunes Express Cafe, Abuja</p>
                    </div>
                   
            </div>
            <hr className=" bb bw1 b--black-10" />
           <Recommended/>

       </div>
    );
}

export default Cardlists;