import React, { Fragment } from 'react'


const Special = ({pics, title,alt}) => {
    return ( <Fragment>
      
              
            <div className="container mb-4 shadow sm:shadow-md xl:shadow-2xl md:m-16 xl:m-20  transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110">
            <div className="md:flex justify-between md:m-6 lg:wrap sm:p-10">
      <div className="md:mt-4 md:mr-16 md:mt-0 md:ml-6">
         <div className="uppercase tracking-wide text-sm text-indigo-600 sm:pt-4  my-4 font-bold sm:mt-2">{title} </div>
         <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quos 
        tempora eum? Praesentium, nulla nemo tempore esse sapiente adipisci ipsum ut dolor! Saepe, 
        officiis amet ullam ab ipsum neque quisquam!</p>
        <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quos 
        tempora eum? Praesentium, nulla nemo tempore esse sapiente adipisci ipsum ut dolor! Saepe, 
        officiis amet ullam ab ipsum neque quisquam!</p>
        
    </div>
            <div className="md:flex-shrink-0">
                  <img className="sm:object-cover md:w-full object-cover" src={pics} alt={alt} />
            </div>
       </div>
        </div>
        
        </Fragment>
    )
}
 
export default Special;