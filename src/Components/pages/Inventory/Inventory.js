import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom"
import './Inventory.css'
const Inventory = () => {

    const { itemId } = useParams()
    const [item, setItem] = useState({})
    const [quantity, setQuantity] = useState()

    useEffect(() => {
        const url = `http://localhost:4000/product/${itemId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [itemId])


    // const requestOptions = {
    //     method: 'PUT',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ title: 'React PUT Request Example' })
    // };
    // fetch(`http://localhost:4000/product/${itemId}`, requestOptions)
    //     .then(response => response.json())
    //     .then(data => this.setQuantity({ postId: data.id }));


    // const handleDelivered = () => {

    // }


    const handleAddQuantity = event => {
        event.preventDefault();
        const number = event.target.number.value;


        const updatedUser = { number };
        // const newQuantity = updatedUser + name

        // send data to the server
        const url = `http://localhost:4000/product/${itemId}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json' 
            },
            body: JSON.stringify(updatedUser)
        })
            .then(res => res.json())
            .then(number => {

                console.log('success', number);
                alert('updated')
            })
    }



    return (
        <div className='container detail-container '>
            <img className='w-100' src={item.img} alt="" />
            <h1 className='text-dark'>Name : {item.name}</h1>
            <h3>Supplier : {item.supplierName}</h3>
            <h4>Price :£ {item.price} </h4>
            <p>Description : {item.description}</p>
            <h3>Ratings : {item.retings}</h3>
            <h4>Camera : {item.camera}</h4>
            <h4>Quantity : {item.quantity}</h4>
            <h4>Battery Type : {item.betteryType}</h4>
            <h4>Charging : {item.charging}</h4>

            <form onClick={handleAddQuantity}>
                <input type="number" name="number" id="" placeholder='Add mobile quantity' />
                <input type="button" value="Add mobile" />
            </form>
            <button className='btn btn-primary m-2'>Delivered</button>
        </div>
    );
};

export default Inventory;