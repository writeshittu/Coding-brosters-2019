import React from 'react'
import Form from '../login/Form';
import Button from '../login/Button'


const SignUp = () => {
    return ( 
        <div className="bg-auto sm:bg-cover custom-css">
           <div className="w-6/12 bg-white shadow-md rounded  px-8 py-6  mb-28 ">
                <form className='ml-10 mr-10'>
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