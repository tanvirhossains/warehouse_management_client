import React, { useEffect, useState } from 'react';

const UseItem = () => {

    const [items, setItems] = useState([])
    useEffect(() => {
        fetch('https://immense-anchorage-72136.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setItems(data))

    }, [])
    return [items, setItems]
};

export default UseItem;