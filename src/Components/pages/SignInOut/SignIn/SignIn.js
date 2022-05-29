import React, { useRef } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';
import Loading from '../../Shared/Loading';
import './SignIn.css'


const SignIn = () => {

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    

    const [signInWithGoogle, gUser, gLoading, gurror] = useSignInWithGoogle(auth);
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
    let errorMessage

    if (loading) {
        return <Loading></Loading>
    }
    if (error) {
        errorMessage = <p>Error: {error?.message}</p>
    }


    if (user) {
        navigate(from, { replace: true })
    }

    return (
        <div className='signIn-container card w-50 mx-auto'>
            <h1 className='text-center'>sign in </h1>
            <form onSubmit={handleSubmitForm} action="" className=''>
                <label htmlFor="">
                    <span className='fs-3 fw-bold'> Email</span>
                </label><br />
                <input type="email" ref={emailRef} name="email" id="" required /><br />
                <label htmlFor="">
                    <span className='fs-3 fw-bold'>Password</span>
                </label><br />  
                <input type="password" ref={passwordRef} name="password" id="" required />
                <br />
                <p className='text-danger'> {errorMessage}</p>
                <input type="submit" value="Sing in" />
                <p>Are you new? <Link to='/signUp'> Sign Up</Link></p>

                <a href="">Forget Password?</a>     <button onClick={() => signInWithGoogle()}>Sign In Google</button>
            </form>


        </div>
    );
};

export default SignIn;