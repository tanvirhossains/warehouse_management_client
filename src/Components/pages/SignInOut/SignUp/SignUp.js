import React from 'react';
import { Link } from 'react-router-dom';





const SignUp = () => {
    return (
        <div className='signIn-container'>
            <h1 className='text-center'>sign Up </h1>
            <form  className='text-center'>
                <input type="email" name="email" id="" required />
                <br />
                <input type="password" name="password" id="" required />
                <br />
                <input type="button" value="Sing up" />
                <p>Are you new? <Link to='/signUp'> Sign Up</Link></p>
                <a href="">Forget Password?</a>
            </form>
        </div>
    );
};

export default SignUp;