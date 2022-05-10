import React from 'react';
import {useParams} from "react-router-dom"

const Inventory = () => {


    const {itemId} = useParams()
    // const { img, name, firstRelease, price, ratings, quantity, batteryType, charging, camera } = itemDetail

    return (
        <div>
            <h1>inventory{itemId}</h1>

            <h1>ok</h1>
        </div>
    );
};

export default Inventory;