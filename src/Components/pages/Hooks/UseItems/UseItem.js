import React, { useEffect, useState } from 'react';

const UseItem = () => {

    const [items, setItems] = useState([])
    useEffect(() => {
        fetch('http://localhost:4000/product')
            .then(res => res.json())
            .then(data => setItems(data))

    }, [])
    return [items, setItems]
};

export default UseItem;