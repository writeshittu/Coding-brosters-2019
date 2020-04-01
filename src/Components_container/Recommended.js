import React from 'react';



let Recommended = () =>{
    let backgroundImageStyle = {
        backgroundImage:"url(https://res.cloudinary.com/undercover/image/upload/v1585046950/RecreationalApp/cities%20views/bckgrd-image_euhxn9.svg)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"
       
    }
    return(
        <div className="container-fluid mt-sm-3">
            <h2 className="tc ma3 pa2" >Recommended</h2>
            <div className="row ma2 pa2 tc">
                <div className= "col-sm-5 pointer grow"><img src= "https://res.cloudinary.com/undercover/image/upload/v1585046959/RecreationalApp/cities%20views/Nikeart_gallery_pxksz8.svg" alt='nike art gallery' /> </div>
                <div className= "col-sm-6 ma2 pa2">
                    <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, quam modi quisquam eligendi non quia quaerat iusto perferendis 
                            earum quasi corrupti ullam sequi perspiciatis totam optio commodi qui at et quis ut! Accusamus obcaecati doloremque similique, placeat culpa tempore eum.
                            eligendi non quia quaerat iusto perferendis earum quasi corrupti ullam sequi perspiciatis totam optio commodi qui at et quis ut! Accusamus obcaecati doloremque similique, placeat 
                    </p>
                </div>
                
            </div>
            <div className="row ma2 pa2 tc">
                <div  className= "col-sm-5 pointer grow"><img src= "https://res.cloudinary.com/undercover/image/upload/v1585046968/RecreationalApp/cities%20views/Zumarock_fymjnc.svg" alt='Zuma Rock'/></div>   
                    <div className= "col-sm-6 ma2 pa2">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, quam modi quisquam eligendi non quia quaerat iusto perferendis 
                        earum quasi corrupti ullam sequi perspiciatis totam optio commodi qui at et quis ut! Accusamus obcaecati doloremque similique, placeat culpa tempore.
                    </p> 
                    <p>
                        eligendi non quia quaerat iusto perferendis earum quasi corrupti ullam sequi perspiciatis totam optio commodi qui at et quis ut! Accusamus obcaecati doloremque similique, placeat
                    </p>
                    </div>
            </div>
            <div className="tc" ><button className=" pa2 br3 blue" > Explore more</button></div>
            <hr className=" bb bw1 f--black-9 ma5"/>
            <div style ={backgroundImageStyle} className="row ">
                <div className="col-2"></div>
                <div className="ma5 h5 pa2 o-80 bg-navy col-sm-8 f2" ><p className="tc white pa3">"Over 300 places of fun why sit at home and get bored?"</p></div>
            </div>
        </div>
    );
} 

 export default Recommended;
