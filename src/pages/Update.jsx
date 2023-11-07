import { useContext, useState } from 'react';
import img from '../assets/rijKyMB7T.gif';
import Navbar from '../components/Navbar';
import { AuthContext } from '../AuthProvider';
import Swal from 'sweetalert2';
import { useLoaderData } from 'react-router-dom';
import axios from 'axios';

function Update() {
    const { user } = useContext(AuthContext);
    const loadedFood = useLoaderData();

    const handleAddFood = (event) => {
        event.preventDefault();
        const form = event.target;
        const food_name = form.foodName.value;
        const food_img_url = form.foodImg.value;
        const food_category = form.category.value;
        const quantityString = form.quantity.value;
        const quantity = parseInt(quantityString);
        const origin = form.origin.value;
        const priceString = form.price.value;
        const price = parseFloat(priceString);
        const description = form.description.value;
        const updatedFood = { food_category, food_img_url, food_name, quantity, origin, description, price };

        if (!price) {
            Swal.fire({
                title: 'Invalid price!',
                text: "Can't give anything without a number in the price field. Because it will be difficult to calculate the price later",
                icon: 'error'
            })
            return
        }
        if (!quantity) {
            Swal.fire({
                title: 'Invalid quantity!',
                text: "Can't give anything without a number in the quantity field. Because it will be difficult to calculate the price later",
                icon: 'error'
            })
            return
        }

        axios.patch(`http://localhost:5000/food/update/${loadedFood._id}`, updatedFood).then(res => {
            console.log(res.data);
            if (res.data.modifiedCount > 0) {
                Swal.fire({
                    title: 'Updated successfully',
                    icon: 'success'
                })

            }

            if (res.data.matchedCount > 0 && res.data.modifiedCount === 0) {
                Swal.fire({
                    title: 'You have not changed any values.',
                    icon: 'info'
                });
            }
        }).catch(err => console.log(err));
    };


    return (
        <div className="">
            <Navbar />
            <section className="py-16 bg-gray-100">
                <div className=" text-center md:text-left md:ml-[70px] mb-3">
                    <h2 className='text-xl font-mono '>Hi, <span className='text-red-600'>{user.displayName}</span> </h2>
                    <p className='font-mono'>Update your food info now!</p>
                </div>
                <div className="max-w-6xl px-4 mx-auto">
                    <div className="p-8 px-4 bg-white">
                        <div className="grid grid-cols-1 lg:grid-cols-[30%,1fr] gap-6">
                            <div>
                                <img src={img} className='w-[80%]' alt="" />
                            </div>
                            <div>
                                <form onSubmit={handleAddFood}>
                                    <div className="md:px-4 mb-6 w-full">
                                        <label className="block mb-2 text-sm font-medium">Food Name</label>
                                        <input
                                            className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded"
                                            type="text"
                                            name="foodName"
                                            placeholder="Enter Food name"
                                            required
                                            defaultValue={loadedFood.food_name}
                                        />
                                    </div>
                                    <div className="md:px-4 mb-6 w-full">
                                        <label className="block mb-2 text-sm font-medium">Food Image</label>
                                        <input
                                            className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded"
                                            type="text"
                                            name="foodImg"
                                            placeholder="Enter a name"
                                            required
                                            defaultValue={loadedFood.food_img_url}
                                        />
                                    </div>
                                    <div className="md:flex w-full">
                                        <div className="px-4 mb-6 md:w-1/2">
                                            <label className="block mb-2 text-sm font-medium">Food Category</label>
                                            <input
                                                className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded"
                                                type="text"
                                                name="category"
                                                placeholder="Enter food Category"
                                                defaultValue={loadedFood.food_category}
                                            />
                                        </div>
                                        <div className="md:px-4 mb-6 md:w-1/2">
                                            <label className="block mb-2 text-sm font-medium">Quantity </label>
                                            <input
                                                className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded"
                                                type="number"
                                                name="quantity"
                                                placeholder=" Enter Available Quantity"
                                                defaultValue={loadedFood.quantity}
                                            />
                                        </div>
                                    </div>
                                    <div className="md:flex w-full">
                                        <div className="md:px-4 mb-6 md:w-1/2">
                                            <label className="block mb-2 text-sm font-medium">Food Origin</label>
                                            <input
                                                className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded"
                                                type="text"
                                                name="origin"
                                                placeholder="Enter Food Origin"
                                                defaultValue={loadedFood.origin}
                                            />
                                        </div>
                                        <div className="md:px-4 mb-6 md:w-1/2">
                                            <label className="block mb-2 text-sm font-medium"> Price</label>
                                            <input
                                                className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded"
                                                type="text"
                                                name="price"
                                                placeholder="Enter Food Price"
                                                defaultValue={loadedFood.price}
                                            />
                                        </div>
                                    </div>
                                    <div className="md:px-4 mb-6 w-full">
                                        <label className="block mb-2 text-sm font-medium">Short Description</label>
                                        <textarea className='block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded' name="description" id="" defaultValue={loadedFood.description} cols="30" rows="7"></textarea>
                                    </div>
                                    <div className="md:px-4">
                                        <div className="flex">
                                            <button type="submit" className="inline-block px-6 py-2.5 bg-red-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-600 hover:shadow-lg">
                                                Add Food
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Update;
