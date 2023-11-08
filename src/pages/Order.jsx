import { useLoaderData } from 'react-router-dom';
import img from '../assets/QGTB.gif';
import Navbar from '../components/Navbar';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider';
import Swal from 'sweetalert2';
import axios from 'axios';

const Order = () => {
    const selectedFood = useLoaderData();
    // console.log(selectedFood);
    const { user } = useContext(AuthContext);
    const [price, setPrice] = useState(selectedFood.price);
    const [quantity, setQuantity] = useState(1);

    const handleQuantityNagetive = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
            setPrice(price - selectedFood.price)
        }
    };

    const handleQuantityPositive = () => {
        if (quantity < selectedFood.quantity) {
            setQuantity(quantity + 1);
            setPrice(price + selectedFood.price);

        } else {
            // Swal.fire('Out of stock!')
            Swal.fire({
                title: 'Out Of stock!',
                icon: 'error',
                text: 'We will make a stack of items available as soon as possible',

            });
        }
    };

    const handleOrder = (event) => {
        event.preventDefault();
        const form = event.target;
        const buyerName = user.displayName;
        const buyerEmail = user.email
        const foodName = selectedFood.food_name;
        const foodImg = selectedFood.food_img_url;
        const foodPrice = price
        const itemQuntity = quantity
        const date = form.date.value;
        const isDelivered = false

        const orderData = { buyerName, buyerEmail, foodName, foodPrice, isDelivered, date, itemQuntity, foodImg }

        if (selectedFood.addedBy == user.displayName) {
            Swal.fire({
                title: "You can't buy your own added food!",
                icon: 'error'
            });

        } else if (selectedFood.quantity <= 0) {
            Swal.fire({
                title: "Out of Stock!",
                text: 'We will make a stack of items available as soon as possible',
                icon: 'error'
            });

        } else {
            axios.post('http://localhost:5000/food/order/v1', orderData).then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        title: 'Order placed',
                        text: 'The order has been accepted successfully, you can view and manage all your orders on the my order page',
                        icon: 'success'
                    });

                    const newCuantity = { quantity: selectedFood.quantity - quantity };

                    axios.patch(`http://localhost:5000/quantity/v1/${selectedFood._id}`, newCuantity).then(res => {
                        
                    }).catch(err => console.log(err));
                }
            }).catch(err => console.log(err))
        }
    };

    useEffect(() => {
        document.title = 'Checkout'
    }, []);

    return (
        <div>
            <Navbar />
            <section className="py-16 bg-gray-100 overflow-hidden" data-aos="fade-left">
                <div className=" text-center md:text-left md:ml-[70px] mb-3">
                    <h2 className='text-xl font-mono '>Hi, <span className='text-red-600'>{user.displayName}</span> </h2>
                    <p className='font-mono'>Make Your First Order Now!</p>
                </div>
                <div className="max-w-6xl px-4 mx-auto ">
                    <div className="p-8 px-4 bg-white">
                        <div className="grid grid-cols-1 lg:grid-cols-[30%,1fr] gap-6">
                            <div className='hidden md:block'>
                                <p className="px-4 mt-1 text-sm text-gray-600 ">
                                    <img src={img} className='w-[180%]' alt="" />
                                </p>
                            </div>
                            <div>
                                <form onSubmit={handleOrder}>
                                    <div className="px-4 mb-6">
                                        <label className="block mb-2 text-sm font-medium"> Customer Name</label>
                                        <input
                                            className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded "
                                            type="text" name="customerName" placeholder="Enter a name" readOnly disabled defaultValue={user.displayName} />
                                    </div>
                                    <div className="px-4 mb-6">
                                        <label className="block mb-2 text-sm font-medium"> Customer Email</label>
                                        <input
                                            className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded "
                                            type="text" name="customerEmail" placeholder="Enter a name" readOnly disabled defaultValue={user.email} />
                                    </div>
                                    <div className="px-4 mb-6">
                                        <label className="block mb-2 text-sm font-medium"> Food Name</label>
                                        <input
                                            className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded "
                                            type="text" name="foodName" defaultValue={selectedFood.food_name} readOnly disabled placeholder="Enter a name" />
                                    </div>
                                    <div className="flex flex-wrap items-center">
                                        <div className="w-full px-4 mb-6 lg:w-2/4">
                                            <label className="block mb-2 text-sm font-medium "> Quantity</label>
                                            <div className="relative">
                                                <div
                                                    className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                                    <p className='text-xl font-semibold'>{quantity}</p>
                                                </div>
                                                <div className="flex">
                                                    <span className='btn bg-red-500 text-white font-bold hover:bg-red-600 mr-3' onClick={handleQuantityNagetive}>-</span>
                                                    <span className='btn bg-red-500 text-white font-bold hover:bg-red-600' onClick={handleQuantityPositive}>+</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full px-4 mb-6 lg:w-2/4">
                                            <label className="block mb-2 text-sm font-medium ">
                                                Date</label>
                                            <div className="relative">
                                                <div
                                                    className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                                    <svg className="w-5 h-5 text-gray-500 " fill="currentColor"
                                                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd"
                                                            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                                            clip-rule="evenodd"></path>
                                                    </svg>
                                                </div>
                                                <input type="date"
                                                    className="border  rounded text-gray-900 sm:text-sm block w-full pl-10 p-2.5 "
                                                    placeholder="Select date" name='date' required />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex mb-3 px-4 md:justify-end mt-5">
                                        <div className="">
                                            <p className='text-xl'>Price: ${price}</p>

                                        </div>
                                    </div>

                                    <div className="px-4">
                                        <div className="flex ">
                                            <button type="submit"
                                                className="inline-block px-6 w-full py-2.5 bg-red-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-600 hover:shadow-lg ">Order</button>
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
};

export default Order;