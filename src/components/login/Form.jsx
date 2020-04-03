import React from 'react';




const Form = ({label,type, placeholder}) => {
    return ( 
        <div>
             
              <div className="w-full mb-6 ">
                <label className="block text-gray-700 text-sm font-bold mb-2" for={label}>
                   {label}
                 </label>
                  <input className="shadow appearance-none  w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="username" type={type} placeholder={placeholder} />
             </div>
            
        </div>
     );
}
 
export default Form;