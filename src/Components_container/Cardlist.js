import React from 'react';
import { cardListData,recommendedPlaces } from "./cardlist-data";
import 'tachyons'
 

let Cardlists = () => {
    let styles = {
        fontFamily: "Garamond",}
        let backgroundImageStyle = {
        backgroundImage: "url(https://res.cloudinary.com/undercover/image/upload/v1585046950/RecreationalApp/cities%20views/bckgrd-image_euhxn9.svg)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"
    }

    return (<div className='container-fluid mt-5'>
        <h3 className="tc mt-5 ">Most Visited Places</h3>

        <div style={styles} className="row ma3" >

            {
                cardListData.map((data) =>
                    <div className="col-sm-4 tc" key={data.id}>
                        <img className="bw-2 grow pointer" src={data.imageSrc} alt="resortparkimage" width="350px" />
                        <p className="pa2 ">{data.locationName}</p>
                    </div>)
            }
        </div>
        <hr className="bb bw1 b--black-10" />
        <div>
        <h2 className="tc ma3 pa2" >Recommended</h2>
            {
                recommendedPlaces.map((data)=>
                    <div className="row ma2 pa2 tc">
                        <div className= "col-sm-5 pointer grow">
                            <img src = {data.imageSrc} alt="olumorock" />
                        </div>
                        <p className= "col-sm-6 ma2 pa2">{data.description}</p>
                    </div>
                )
            }
        </div>
        <div className="tc" ><button className=" pa2 br3 blue" > Explore more</button></div>

        <hr className="bb bw1 b--black-10" />
        
        <div style={backgroundImageStyle} className="row ">
                <div className="ma5 h5 o-80 bg-navy col f3 tc white pa5-l">"Over 300 places of fun why sit at home and get bored?"</div>
            </div>
    </div>
    );
}

export default Cardlists;