import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';
import Loading from '../../Shared/Loading';


const SignUp = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [updateProfile, updating, uError] = useUpdateProfile(auth);
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const navigate = useNavigate()
    let errMessage


    const handleSubmit = event => {
        event.preventDefault()

        const name = event.target.name.value
        const email = event.target.email.value
        const password = event.target.password.value
        createUserWithEmailAndPassword(email, password)
        
        console.log(email, password)
    }
    if (loading) {
        return <Loading></Loading>
    }
    if (error) {
        errMessage = <p>Error: {error.message}</p>
    }
    if (user) {
        navigate('/')
    }

    return (
        <div className='signIn-container card w-50 mx-auto'>
            <h1 className='text-center'>sign Up </h1>
            <form onSubmit={handleSubmit} action="" className=''>
                <label htmlFor="">
                    <span className='fs-3 fw-bold'> Name</span>
                </label><br />
                <input type="text"   placeholder='name' name="name" id="" required /><br />
                <label htmlFor="">
                    <span className='fs-3 fw-bold'> Email</span>
                </label><br />
                <input type="email" placeholder='email' name="email" id="" required /><br />
                <label htmlFor="">
                    <span className='fs-3 fw-bold'>Password</span>
                </label><br />
                <input type="password"  placeholder='password' name="password" id="" required />
                <br />
                <p className='text-danger'> {errMessage}</p>
                <input type="submit" value="Sing in" />
                <p>Are you new? <Link to='/signIn'> Sign In</Link></p>

                {/* <a href="">Forget Password?</a> */}
                <button onClick={() => signInWithGoogle()}>Sign In with Google</button>
            </form>


        </div>
    );
};

export default SignUp;