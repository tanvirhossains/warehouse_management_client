import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {


    const [user, loading, error] = useAuthState(auth);

const handleSignOut = () =>{
    signOut(auth)
}

    return (
        <div>
            <CustomLink to='/home'>Home</CustomLink>
            <CustomLink to='/blogs'>Blogs</CustomLink>

            {
                user ? <div> <CustomLink onClick={handleSignOut} to='/'>Sign out</CustomLink>
                    <CustomLink to='/addItem'> Add item</CustomLink>
                <CustomLink to='/manageItem'>Manage Item</CustomLink>

                </div>
                : 
                <CustomLink to='/signin'>Sign In</CustomLink>
            }


        </div>
    );
};

export default Header;