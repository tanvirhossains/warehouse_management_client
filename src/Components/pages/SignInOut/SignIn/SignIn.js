import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './SignIn.css'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import auth from '../../../../_firebase-init';


const SignIn = () => {

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const emailRef = useRef('')
    const passwordRef = useRef('')


    const handleSubmiltForm = event => {
        event.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value
        signInWithEmailAndPassword(email, password)
    }


    return (
        <div onSubmit={handleSubmiltForm} className='signIn-container'>
            <h1 className='text-center'>sign in </h1>
            <form action="" className='text-center'>
                <input type="email" ref={emailRef} name="email" id="" required />
                <br />
                <input type="password" ref={passwordRef} name="password" id="" required />
                <br />
                <input type="button" value="Sing in" />
                <p>Are you new? <Link to='/signUp'> Sign Up</Link></p>
                <a href="">Forget Password?</a>
            </form>
        </div>
    );
};

export default SignIn;