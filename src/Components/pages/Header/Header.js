import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div>
            <CustomLink to='/home'>Home</CustomLink>
            <CustomLink to='/blogs'>Blogs</CustomLink>
            <CustomLink to='/signin'>Sign In</CustomLink>
            
        </div>
    );
};

export default Header;