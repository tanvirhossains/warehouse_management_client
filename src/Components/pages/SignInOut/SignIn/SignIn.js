import React, { useRef } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';
import './SignIn.css'


const SignIn = () => {

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const emailRef = useRef('')
    const passwordRef = useRef('')

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';


    const handleSubmitForm = event => {
        event.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value
        signInWithEmailAndPassword(email, password)
    }
    let errorMessege
    if (error) {
        errorMessege = <p>Error: {error?.message}</p>
    }

    
    if (user) {
        navigate(from, { replace: true })
    }

    return (
        <div className='signIn-containe'>
            <h1 className='text-center'>sign in </h1>
            <form onClick={handleSubmitForm} action="" className='w-50 mx-auto'>
                <input type="email" ref={emailRef} name="email" id="" required />
                <br />
                <input type="password" ref={passwordRef} name="password" id="" required />
                <br /> 
                <p className='text-danger'> {errorMessege}</p>
                <input type="button" value="Sing in" />
                <p>Are you new? <Link to='/signUp'> Sign Up</Link></p>
               
                <a href="">Forget Password?</a>
            </form>
        </div>
    );
};

export default SignIn;