import React, { Fragment } from 'react'


const Special = ({pics, title,alt}) => {
    return ( <Fragment>
      
              
            <div className="sm:shadow-md md:shadow-lg lg:shadow-xl xl:shadow-2xl sm:m-6 md:m-8 lg:m-10 xl:m-40 ">
            <div className="flex justify-between sm:m-2 md:m-4 lg:m-6 sm:p-2 md:p-4 lg:p-8 xl:p-10 md:flex">
      <div className="mt-4 mr-16 sm:mr-10 md:mt-0 md:ml-6">
         <div className="uppercase tracking-wide text-sm text-indigo-600  my-4 font-bold">{title} </div>
         <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quos 
        tempora eum? Praesentium, nulla nemo tempore esse sapiente adipisci ipsum ut dolor! Saepe, 
        officiis amet ullam ab ipsum neque quisquam!</p>
        <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quos 
        tempora eum? Praesentium, nulla nemo tempore esse sapiente adipisci ipsum ut dolor! Saepe, 
        officiis amet ullam ab ipsum neque quisquam!</p>
        
    </div>
            <div className="md:flex-shrink-0">
                  <img className="md:w-56" src={pics} alt={alt} />
            </div>
       </div>
        </div>
        
        </Fragment>
    )
}
 
export default Special;