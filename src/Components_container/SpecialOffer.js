import React from "react";

const SpecialOffer =()=>{
    return(
        <div>
           <div className="container">
                <h4 className="tc pv4 navy">Special Offers</h4>
                <div  className="row justify-around shadow">
                    <div className="col-sm-8 ph3 mv5">
                        <h4 className="navy tc-m">Zuma Restaurant</h4>
                        <p> 
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, quam modi quisquam eligendi non 
                            quia quaerat iusto perferendis earum quasi corrupti ullam sequi perspiciatis totam optio 
                            commodi qui at et quis ut! Accusamus obcaecati doloremque similique, placeat culpa tempore eum.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, quam modi quisquam eligendi non quia 
                            quaerat iusto perferendis earum quasi corrupti ullam sequi perspiciatis totam optio 
                            commodi qui at et quis ut! Accusamus obcaecati doloremque similique, placeat culpa tempore eum.
                        </p>
                    </div>
                    <img className="col-sm-3" alt="Zuma Restaurant" src="https://res.cloudinary.com/undercover/image/upload/v1585698916/RecreationalApp/cities%20views/Zuma_Restaurant_xfxrxj.svg" />
                </div>
            
            <div  className="row shadow justify-around mt5">
                <div className="col-sm-8 ph3 mv5">
                    <h4 className="navy tc-m">Omu Resort</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, quam modi quisquam eligendi non 
                        quia quaerat iusto perferendis earum quasi corrupti ullam sequi perspiciatis totam optio 
                        commodi qui at et quis ut! Accusamus obcaecati doloremque similique, placeat culpa tempore eum.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, quam modi quisquam eligendi non quia 
                        quaerat iusto perferendis earum quasi corrupti ullam sequi perspiciatis totam optio 
                        commodi qui at et quis ut! Accusamus obcaecati doloremque similique, placeat culpa tempore eum.
                    </p>
                </div>
              <img className="col-sm-3" alt="Omu resort" src="https://res.cloudinary.com/undercover/image/upload/v1585698959/RecreationalApp/cities%20views/Omu_resort_swsmhp.svg" />
            </div>
        </div>
            <div className="tc mv4"><button className="pa2 br3 hover-bg-light-green">See More v</button></div>
        </div>
    )
}

export default SpecialOffer;