import React from 'react';




const Gallery = ({ pics}) => {
    return ( 
        <div>
           <div className="container xl:flex justify-around md:m-20 justify-between">
                <div className="xl:mr-10 xl:flex-shrink-0">
                    <img  className="md:w-full sm:object-cover  transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110" src={pics} alt="alpha beach"/>
                   
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
              
            </div>      
                
            </div>

        </div>
     );
}
 
export default Gallery;