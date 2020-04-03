import React from 'react';
import { Link } from 'react-router-dom';

const DontHaveAccount = () => {
    return ( 
        <div className="text-center mb-4">
            <span>Dont have an account?  </span>
             
            <Link to="/register"  className="text-green-400"> Sign Up</Link>
        </div>
     );
}
 
export default DontHaveAccount;