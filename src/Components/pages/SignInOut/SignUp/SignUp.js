import React, { useRef } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../../firebase.init';


const SignUp = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);


    const emailRef = useRef('')
    const passwordRef = useRef('')


    const handleEmail = event => {
        console.log(event.target.value)
    }

    const handleSubmit = event => {
          event.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value
        createUserWithEmailAndPassword(email, password)
        console.log(email, password)
    }


    return (
        <div className='signIn-container'>
            <h1 className='text-center'>sign Up </h1>
            <form onClick={handleSubmit} className='text-center' >
                <input  ref={emailRef} type="email" name="email" required />
                <br />
                <input type="password" ref={passwordRef} name="password" required />
                <br />
                <input type="button"  value="Sing up" />
                <p>Have an account? <Link to='/signIn'> Sign In</Link></p>

            </form>
        </div>
    );
};

export default SignUp;