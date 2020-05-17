import React,{Fragment} from 'react';



const Find = ({title, pics}) => {
    return (    
        <Fragment>
             <div className="text-center md:text-5xl sm:text-sm font-normal">{title} </div>
           
           <div className="container md:flex justify-around md:m-12 justify-between ">
                <div className="md:mr-10 md:flex-shrink-0 sm:block">
                    <img  className="md:w-full sm:object-cover transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110" src={pics} alt="alpha beach"/>
                    <button className="m-8">More Pictures</button>
                    <button className="m-8">Reviews</button>
            </div>
            <div className="mt-0 ml-6">
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
            <div className="md:flex justify-center sm:block sm:text-center mx-auto border-b border-black md:mb-20 md:p-20">
                <button className="bg-green-300 hover:bg-green-700 sm:mb-4 text-white font-semibold hover:text-white py-1 px-4 border border-white hover:border-transparent rounded  mr-32" >Make a Reservation</button>
                <button className="bg-transparent hover:bg-blue-500  sm:mb-4  text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mr-32">Directions</button>
                <button className="bg-green-300 hover:bg-green-700  text-white font-semibold hover:text-white py-1 px-4 border border-white hover:border-transparent rounded">Book a ride</button>
        </div>

        </Fragment>
     );
}
 
export default Find;