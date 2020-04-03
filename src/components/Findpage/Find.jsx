import React,{Fragment} from 'react';



const Find = ({title, pics}) => {
    return (    
        <Fragment>
             <div className="text-center m-6 text-5xl mt-10 font-medium">{title} </div>
             <div>
                 
             </div>
           <div className="flex justify-around m-12 md:flex justify-between ">
                <div className="mr-10 md:flex-shrink-0">
                    <img  className="w-full" src={pics} alt="alpha beach"/>
                    <button className="m-8">More Pictures</button>
                    <button className="m-8">Reviews</button>
            </div>
            <div className="mt-4 md:mt-0 md:ml-6">
                <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Ullam, quod nulla? Quidem minima eius, perspiciatis eveniet error
                 atque vero accusantium voluptate ullam optio dolore eum, quo omnis, delectus molestiae voluptatibus.</p>
                 <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Ullam, quod nulla? Quidem minima eius, perspiciatis eveniet error
                 atque vero accusantium voluptate ullam optio dolore eum, quo omnis, delectus molestiae voluptatibus.</p>
                 <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Ullam, quod nulla? Quidem minima eius, perspiciatis eveniet error
                 atque vero accusantium voluptate ullam optio dolore eum, quo omnis, delectus molestiae voluptatibus.</p>
                 <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Ullam, quod nulla? Quidem minima eius, perspiciatis eveniet error
                 atque vero accusantium voluptate ullam optio dolore eum, quo omnis, delectus molestiae voluptatibus.</p>
            </div>          
            </div>
            <div className=" flex justify-center border-b border-black mb-20 p-20">
                <button className="bg-green-300 hover:bg-green-700 text-white font-semibold hover:text-white py-1 px-4 border border-white hover:border-transparent rounded  mr-32" >Make a Reservation</button>
                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mr-32">Directions</button>
                <button className="bg-green-300 hover:bg-green-700 text-white font-semibold hover:text-white py-1 px-4 border border-white hover:border-transparent rounded">Book a ride</button>
        </div>

        </Fragment>
     );
}
 
export default Find;