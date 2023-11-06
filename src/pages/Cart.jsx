import { useState } from 'react';
import Navbar from '../components/Navbar';
import { AiFillDelete } from 'react-icons/ai';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';
import chefImg from '../assets/chef-animation.gif';

function Cart() {
    const LoadedOrders = useLoaderData();
    const [orders, setOrders] = useState(LoadedOrders);

    const handleDeleteIem = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:5000/orders/delete/v1/${_id}`).then(res => {

                    if (res.data.deletedCount) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                    }
                    const remaining = orders.filter(order => order._id !== _id);
                    setOrders(remaining);
                }).catch(err => console.log(err))
            }
        });
    }

    if (orders.length < 1) {
        return (
            <div className="">
                <div className="">
                    <Navbar />
                </div>
                <div className="min-h-screen">
                    <div className="hidden md:flex justify-center mt-20">
                        <img className='w-[20%] mr-4' src={chefImg} alt="" />
                    </div>
                    <p className='text-center text-3xl mt-20 md:mt-3 font-mono'>You have not ordered any food!</p>
                    <div className="flex justify-center">
                        <Link to={"/foods"} className='bg-red-500 hover:bg-red-600 px-3 py-2 mt-7 text-white font-semibold'> Order Now</Link>
                    </div>
                </div>
            </div>
        )

    } else {
        return (
            <div className="">
                <Navbar />
                <section className="py-24 bg-gray-100 font-poppins">
                    <div className=" py-6 mx-auto max-w-7xl lg:py-4 md:px-6">
                        <div>
                            <h2 className="mb-8 text-4xl font-bold ml-3 md:ml-0">Your Cart</h2>
                            <div className="md:flex">
                                <div className="px-20 mb-8 border w-full">
                                    <div className=" items-center hidden mb-6 -mx-4 md:flex md:mb-8">
                                        <div className="w-full px-4 mb-6 md:w-4/6 lg:w-6/12 md:mb-0">
                                            <h2 className="font-bold text-gray-500">Product name</h2>
                                        </div>
                                        <div className="hidden px-4 lg:block lg:w-2/12">
                                            <h2 className="font-bold text-gray-500">Price</h2>
                                        </div>
                                        <div className="w-auto px-4 md:w-1/6 lg:w-2/12">
                                            <h2 className="font-bold text-gray-500">Quantity</h2>
                                        </div>
                                        <div className="w-auto px-4 text-right md:w-1/6 lg:w-2/12">
                                            <h2 className="font-bold text-gray-500"> Shipping</h2>
                                        </div>
                                        <div className="w-auto px-4 text-right md:w-1/6 lg:w-2/12">
                                            <h2 className="font-bold text-gray-500"> Action</h2>
                                        </div>
                                    </div>

                                    {/* xxxxxxxxxxx */}
                                    {orders.map(order => <div key={order._id} className="py-4 mb-8 border-t border-b border-gray-200">
                                        <div className="flex items-center mb-6 -mx-4 md:mb-8">
                                            <div className="w-full px-4 mb-6 md:w-4/6 lg:w-6/12 md:mb-0">
                                                <div className="flex flex-wrap items-center -mx-4">
                                                    <div className="w-full px-4 mb-3 md:w-1/3">
                                                        <div className="w-full h-96 md:h-24 md:w-24 mr-3">
                                                            <img src="https://i.postimg.cc/kGjz3dpD/pexels-cottonbro-3296434.jpg" alt="" className="object-cover w-full h-full" />
                                                        </div>
                                                    </div>
                                                    <div className="w-2/3 px-4 pr-4">
                                                        <h2 className="mb-2 text-xl font-bold">{order.foodName}</h2>
                                                        <p className="text-gray-500">Picture frame</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="hidden px-4 lg:block lg:w-2/12">
                                                <p className="text-lg font-bold text-blue-500">${order.foodPrice}</p>
                                                {/* <span className="text-xs text-gray-500 line-through">$1500</span> */}
                                            </div>
                                            <div className="w-auto px-4 md:w-1/6 lg:w-2/12">
                                                <div className="inline-flex items-center px-4 font-semibold text-gray-500 ">
                                                    <p className="text-lg font-bold text-blue-500">{order.itemQuntity}</p>

                                                </div>
                                            </div>
                                            <div className="w-auto px-4 text-right md:w-1/6 lg:w-2/12">
                                                <p className="text-lg font-bold text-blue-500">Free</p>
                                            </div>
                                            <div className="w-auto px-4 text-right md:w-1/6 lg:w-2/12">
                                                <button onClick={() => handleDeleteIem(order._id)}><AiFillDelete className='text-2xl ml-7 text-red-500 hover:text-red-600' /></button>
                                            </div>
                                        </div>
                                    </div>)}
                                </div>
                                {/* <div className="md:w-1/4  px-4 mb-4 lg:w-1/2">
                                    <div className="p-6 border border-blue-100 bg-gray-50 md:p-8">
                                        <h2 className="mb-8 text-3xl font-bold text-gray-700">Order Summary</h2>
                                        <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-300">
                                            <span className="text-gray-700">Subtotal</span>
                                            <span className="text-xl font-bold text-gray-700">$100</span>
                                        </div>
                                        <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-300">
                                            <span className="text-gray-700">Discount</span>
                                            <span className="text-xl font-bold text-gray-700">$0</span>
                                        </div>
                                        <div className="flex items-center justify-between pb-4 mb-4">
                                            <span className="text-gray-700">Shipping</span>
                                            <span className="text-xl font-bold text-gray-700">Free</span>
                                        </div>
                                        <div className="flex items-center justify-between pb-4 mb-4">
                                            <span className="text-gray-700">Order Total</span>
                                            <span className="text-xl font-bold text-gray-700">$99.00</span>
                                        </div>
                                        <h2 className="text-lg text-gray-500">We offer:</h2>
                                        <div className="flex items-center gap-2 mb-4">
                                            <a href="#">
                                                <img src="https://i.postimg.cc/g22HQHx0/70599-visa-curved-icon.png" alt="" className="object-cover h-16 w-26" />
                                            </a>
                                            <a href="#">
                                                <img src="https://i.postimg.cc/HW38JkkG/38602-mastercard-curved-icon.png" alt="" className="object-cover h-16 w-26" />
                                            </a>
                                            <a href="#">
                                                <img src="https://i.postimg.cc/HL57j0V3/38605-paypal-straight-icon.png" alt="" className="object-cover h-16 w-26" />
                                            </a>
                                        </div>
                                        <div className="flex flex-wrap justify-between">
                                            <div className="w-full md:px-4 mb-4">
                                                <span className="text-gray-700 font-bold pb-4">Apply Coupon</span>
                                                <div className="flex items-center gap-4 mt-4">
                                                    <input type="text" className="w-full px-8 py-2 font-normal placeholder-gray-400 border lg:flex-1" placeholder="x304k45" required />
                                                    <button className="inline-block px-8 py-2 font-bold text-center text-gray-100 bg-red-500 rounded-md lg:w-32 hover:bg-red-600">Apply</button>
                                                </div>
                                            </div>
    
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <button className="block w-full py-4 font-bold text-center text-gray-100 uppercase bg-red-500 rounded-md hover-bg-blue-600">Checkout</button>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Cart;
