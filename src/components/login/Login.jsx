import React from 'react';
import Form from './Form'
import RememberMe from './RememberMe';
import Button from './Button';
import DontHaveAccount from './DontHaveAccount';
import google from '../../utils/img/google.png'





const Login = () => {
    return ( 
        <div className="bg-auto sm:bg-cover custom-css">
           <div className="w-6/12 bg-white shadow-md rounded mx-10 -mt-6  px-8 pt-6 pb-8 ">
           <form className='ml-10 mr-10'>
           <h2 className="text-center mb-6">Welcome back</h2>
            <Form label={'Username'} 
              type={'email'}
              placeholder={'Sam@example.com'}
            />
             
             <Form label={'Password'} 
              type={'password'}
              placeholder={'minimum of 6 characters'}
            />
            <RememberMe />
            <Button  label={'Log in'} />
            <DontHaveAccount />

            <p className="text-center mb-4">or</p>

           
           
            <Button label={'Login with Google'}/>
         
        </form>
        </div>

        
    
             
             

       
      </div>
        
     );
}
 
export default Login;