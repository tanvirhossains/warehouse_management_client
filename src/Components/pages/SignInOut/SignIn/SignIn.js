import React from 'react';
import './SignIn.css'

const SignIn = () => {
    return (
        <div className='signIn-container'>
            <h1 className='text-center'>sign in </h1>
            <form action="" className='text-center'>
                <input type="email" name="email" id="" required/>
                <br />
                <input type="password" name="password" id="" required/>
                <br />
                <input type="button" value="Sing in" />

            </form>
        </div>
    );
};

export default SignIn;