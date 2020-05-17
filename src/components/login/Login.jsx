import React from 'react';
import Form from './Form'
import RememberMe from './RememberMe';
import Button from './Button';
import DontHaveAccount from './DontHaveAccount';
import '../../assets/main.css';





const Login = () => {
    return ( 
        <div className="sm:bg-auto md:bg-cover bg-center custom-css">
           <div className="md:w-6/12 sm:w-auto bg-white shadow-md rounded sm:-mt-10 px-8 py-6 ">
           <form className='md:ml-10 md:mr-10'>
           <h2 className="text-center sm:text-sm md:text-normal mb-6">Welcome back</h2>
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

            <p className="text-center mb-2">or</p>

           
           
            <Button label={'Login with Google'}/>
         
        </form>
        </div>

        
    
             
             

       
      </div>
        
     );
}
 
export default Login;