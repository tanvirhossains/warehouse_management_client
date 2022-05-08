import React, { useEffect, useState } from 'react';

const UseItem = () => {

    const [items, setItems] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setItems(data))

    }, [])
    return [items, setItems]
};

export default UseItem;