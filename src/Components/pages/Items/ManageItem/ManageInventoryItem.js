import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';
import './ManageInventoryItem.css'

const ManageInventoryItem = ({ item , handleDelete }) => {


    const { name, price, supplierName, img, description, _id } = item

    const [user] = useAuthState(auth)

    const navigate = useNavigate()
    const handleManageItem = (id) => {
        if (!user) {
            navigate('/signIn')
        }
        navigate(`/inventory/${_id}`)

    }
    return (
        <div className=''>

            <div className='d-flex justify-content-between align-items-center manage-inventory'>
                <img className='' src={img} alt="" />
                <div>
                    <h3>Name: {name}</h3>
                    <h3>Supplier Company: {supplierName}</h3>
                    <h4> price: ${price}</h4>
                    <button onClick={() => handleManageItem(_id)} >manage Item</button>

                </div>
                <div>
                    <button onClick={()=>handleDelete(_id)}>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default ManageInventoryItem;