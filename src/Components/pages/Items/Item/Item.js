import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';
import './Item.css'

const Item = ({ item }) => {
    const { name, price, supplierName, img, description, } = item
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate()

    const handleManageItem = () => {

        if (!user) {
            navigate('/signIn')
        }

    }


    return (
        <div className='tem-info'>

            <div className=' '>
                <img className='w-100' src={img} alt="" />
                <div>
                    <h3>Name: {name}</h3>
                    <h3>Supplier Company: {supplierName}</h3>
                    <h4> price: ${price}</h4>
                    <button onClick={handleManageItem} >manage Item</button>

                </div>
            </div>
        </div>
    );
};

export default Item;