import React from 'react'
import Form from '../login/Form';
import Button from '../login/Button'


const SignUp = () => {
    return ( 
        <div className="sm:bg-auto md:bg-cover bg-center custom-css">
           <div className="md:w-6/12 sm:w-auto bg-white shadow-md rounded sm:-mt-4 px-8 py-6 ">
                <form className='md:mx-10'>
                    <h2 className="text-center mb-6">Create your account</h2>
                        <Form label={'Fisrtname'} type={'text'} placeholder={''} />
                        <Form label={'Lastname'} type={'text'} placeholder={''} />
                         <Form label={'Phone Number'} type={'tel'} placeholder={''} />
                         <Form label={'Password'} type={'password'} placeholder={''} />
                         <Form label={'Confirm Password'} type={'password'} placeholder={''} />

                         <Button  label={'Create Account'} />

                            <p className="text-center mt-2">or</p>
           
           
                        <Button label={'Sign Up with Google'}/>

            </form>
            </div>
            
        </div>
     );
}
 
export default SignUp;