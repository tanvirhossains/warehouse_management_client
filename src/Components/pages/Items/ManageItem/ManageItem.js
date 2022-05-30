import React from 'react';
import UseItem from '../../Hooks/UseItems/UseItem';
import Item from '../Item/Item';
import ManageInventoryItem from './ManageInventoryItem';

const ManageItem = () => {
    const [items] = UseItem()
    return (
        <div>
            <h1>Manage item</h1>

            <div className=' item-inf'>
                {
                    items.map(item => <ManageInventoryItem
                        item={item}></ManageInventoryItem>
                    )
                }


            </div>
        </div>
    );
};

export default ManageItem;