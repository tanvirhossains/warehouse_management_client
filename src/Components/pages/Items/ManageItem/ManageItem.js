import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import UseItem from '../../Hooks/UseItems/UseItem';
import ManageInventoryItem from './ManageInventoryItem';
import './ManageItem.css'

const ManageItem = () => {
    const [items, setItems] = UseItem()
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = output => {

        const item = {
            name: output.mobile,
            description: output.description,
            supplierName: output.supplier,
            type: output.type,
            price: parseInt(output.price),
            quantity: parseInt(output.quantity),
            batteryType: output.battery,
            charging: output.charging,
            camera: output.camera,
            img: output.imgUrl
        }

        fetch(`https://immense-anchorage-72136.herokuapp.com/product`, {
            method: 'POST',
            headers: {
                "Content-type": 'application/json'
            },
            body: JSON.stringify(item)
        })
            .then(res => res.json())
            .then(value => {
                if (value.success) {
                    toast.success(`you Add a product to the database `)
                }
            })

        console.log(output)

    }



    const handleDelete = id => {
        const proceed = window.confirm('are you sure , do you want to delete')
        if (proceed) {

            fetch(`https://immense-anchorage-72136.herokuapp.com/product/${id}`, {
                method: 'delete',
            })
                .then(res => res.json())
                .then(data => {

                    const exist = items.filter(product => product._id !== id)
                    setItems(exist)
                    toast.success('item deleted!!!')
                })

        }

    }


    return (
        <div>
            <h1>Manage item</h1>
            <div className=''>
                {
                    items.map(item => <ManageInventoryItem
                        item={item}
                        handleDelete={handleDelete}></ManageInventoryItem>)
                }
            </div>
            <div className='input-form'>
                <h1 className='text-center text-primary'>Add New item</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className='label'>
                        <span className='font-bold '>Mobile Name</span>
                    </label>
                    <input type="text" placeholder="Mobile Name " name='mobile'
                        {...register("mobile", {
                            required: true,
                        })} />
                    {errors.mobile?.type === 'required' && <p>Please give Your mobile Name !!</p>}
                    <label className='label'>
                        <span className='font-bold '>supplier</span>
                    </label>
                    <input type="text" placeholder="supplier of Product" name='supplier'
                        {...register("supplier", {
                            required: true,

                        })} />
                    {errors.supplier?.type === 'required' && <p >Please give product supplier Name!!</p>}
                    <label className='label'>
                        <span className='font-bold '>Quantity</span>
                    </label>
                    <input type="number" placeholder="quantity of Product (number)" name='quantity'
                        {...register("quantity", {
                            required: true
                        })} />
                    {errors.quantity?.type === 'required' && <p >Please give Your quantity !!</p>}
                    <label className='label'>
                        <span className='font-bold '>price</span>
                    </label>
                    <input type="number" placeholder="price of Product (number)" name='price'
                        {...register("price", {
                            required: true
                        })} />
                    {errors.price?.type === 'required' && <p >Please give product price !!</p>}
                    <label className='label'>
                        <span className='font-bold '>charging</span>
                    </label>
                    <input type="text" placeholder="charging of Product (number)" name='charging'
                        {...register("charging", {
                            required: true
                        })} />
                    {errors.charging?.type === 'required' && <p >Please give charging capacity !!</p>}
                    <label className='label'>
                        <span className='font-bold '>battery</span>
                    </label>
                    <input type="text" placeholder="battery of Product (number)" name='battery'
                        {...register("battery", {
                            required: true
                        })} />
                    {errors.battery?.type === 'required' && <p >Please give battery capacity !!</p>}
                    <label className='label'>
                        <span className='font-bold '>Type of Mobile</span>
                    </label>
                    <input type="text" placeholder="official or unOfficial" name='type'
                        {...register("type", {
                            required: true
                        })} />
                    {errors.type?.type === 'required' && <p >Please give type of your mobile !!</p>}
                    <label className='label'>
                        <span className='font-bold '>camera</span>
                    </label>
                    <input type="text" placeholder="camera of Product (number)" name='camera'
                        {...register("camera", {
                            required: true
                        })} />
                    {errors.camera?.type === 'required' && <p >Please give camera capacity !!</p>}
                    <label className='label'>
                        <span className='font-bold '>Description </span>
                    </label>
                    <textarea placeholder="Bio"
                        {...register("description", {
                            required: true,
                        })} />
                    {errors.description?.type === 'required' && <p >Please give Your Product Description </p>} <br />
                    <label className='label'>  Image Url using ImageBB </label>
                    <input type="text" placeholder="image url " name='ingUrl ' class="input input-bordered w-full max-w-xs"
                        {...register("imgUrl", {
                            required: true,
                        })} />
                    {errors.imgUrl?.type === 'required' && <p >Please give accurate url</p>} <br />

                    <input type="submit" className='btn btn-primary' value='Add Item' />
                </form>
            </div>
        </div>
    );
};

export default ManageItem;