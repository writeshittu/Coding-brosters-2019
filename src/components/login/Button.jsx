import React from 'react';


const Button = ({label}) => {
    return ( 
        <div>
            <button className="w-full bg-blue-500 hover:bg-indigo-900 text-white font-bold py-2 px-4 rounded">
                     {label}
            </button>
        </div>
     );
}
 
export default Button;