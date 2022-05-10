import React from 'react';
import UseItem from '../../Hooks/UseItems/UseItem';
// import Inventory from '../../Inventory/Inventory';
import Item from '../Item/Item';

const Items = () => {
    const [items, setItems] = UseItem()


    return (
        <div className='dk'>
            <h1 className='text-center'>Items</h1>
            <div className=' item-info'>
                {
                    items.map(item =>
                      
                            <Item
                                item={item}></Item>
                          

                    )
                }


            </div>

        </div>
    );
};

export default Items;