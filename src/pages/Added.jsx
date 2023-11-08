import { useContext, useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import { AiFillEdit } from 'react-icons/ai';
import { AuthContext } from '../AuthProvider';
import axios from 'axios';
import chefImg from '../assets/chef-animation.gif';

const Added = () => {
    const { user } = useContext(AuthContext);
    const fetchUrl = `http://localhost:5000/foods/added/v1?email=${user.email}`;
    const [addedFood, setAddedFood] = useState([]);
    console.log(addedFood);

    const handleUpdate = (_id) => {
        console.log(_id);
    };

    useEffect(() => {
        axios.get(fetchUrl, { withCredentials: true }).then(res => setAddedFood(res.data)).catch(err => console.log(err));
    }, [fetchUrl]);

    if (addedFood.length == 0) {

        return (
            <div className="">
                <div className="bg-center bg-cover bg-[url('https://i.ibb.co/RpmMbxb/pexels-vidal-balielo-jr-10949542.jpg')]">
                    <div className="bg-sky-900 opacity-90">
                        <Navbar />
                        <div className="relative flex items-center justify-center w-full h-[400px] text-center  ">
                            <div className="absolute top-0 bottom-0 left-0 right-0 bg-sky-900 opacity-60"></div>
                            <div className="z-10 px-4 sm:px-6 lg:px-8">
                                <div className="text-center">
                                    <h2 className="mb-6 text-4xl font-medium leading-10 tracking-tight text-gray-50 md:text-6xl" data-aos="zoom-out">
                                        Eat good food and stay healthy.
                                    </h2>
                                    <p className="mb-6 tracking-wide text-gray-300 sm:mt-5 sm:text-md sm:max-w-xl sm:mx-auto md:mt-5">
                                        "Food is not just nourishment for the body; it's nourishment for the soul."
                                    </p>
                                    <div className="justify-center sm:flex">
                                        <div className="">
                                            <Link to={"/foods"}><a
                                                className="flex items-center justify-center w-full px-8 py-3 text-gray-100 bg-red-600 rounded-md shadow hover:bg-red-500 ">
                                                View All Foods</a></Link>
                                        </div>
                                        <div className="mt-3 sm:mt-0 sm:ml-3">
                                            <Link to={"/add-food"}><a href="#"
                                                className="flex items-center justify-center w-full px-8 py-3 text-blue-600 bg-gray-100 rounded-md shadow hover:text-gray-100 hover:bg-blue-500 ">
                                                Add Food</a></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="">

                    </div>
                    <div className="min-h-screen">
                        <div className="hidden md:flex justify-center mt-20">
                            <img className='w-[20%] mr-4' src={chefImg} alt="" />
                        </div>
                        <p className='text-center text-3xl mt-20 md:mt-3 font-mono'>You haven't added any food yet</p>
                        <div className="flex justify-center">
                            <Link to={"/add-food"} className='bg-red-500 hover:bg-red-600 px-3 py-2 mt-7 text-white font-semibold'> Add Now</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div>
            <div className="bg-center bg-cover bg-[url('https://i.ibb.co/RpmMbxb/pexels-vidal-balielo-jr-10949542.jpg')]">
                <div className="bg-sky-900 opacity-90">
                    <Navbar />
                    <div className="relative flex items-center justify-center w-full h-[400px] text-center  ">
                        <div className="absolute top-0 bottom-0 left-0 right-0 bg-sky-900 opacity-60"></div>
                        <div className="z-10 px-4 sm:px-6 lg:px-8">
                            <div className="text-center">
                                <h2 className="mb-6 text-4xl font-medium leading-10 tracking-tight text-gray-50 md:text-6xl">
                                    Eat good food and stay healthy.
                                </h2>
                                <p className="mb-6 tracking-wide text-gray-300 sm:mt-5 sm:text-md sm:max-w-xl sm:mx-auto md:mt-5">
                                    "Food is not just nourishment for the body; it's nourishment for the soul."
                                </p>
                                <div className="justify-center sm:flex">
                                    <div className="">
                                        <Link to={"/foods"}><a
                                            className="flex items-center justify-center w-full px-8 py-3 text-gray-100 bg-red-600 rounded-md shadow hover:bg-red-500 ">
                                            View All Foods</a></Link>
                                    </div>
                                    <div className="mt-3 sm:mt-0 sm:ml-3">
                                        <Link to={"/add-food"}><a href="#"
                                            className="flex items-center justify-center w-full px-8 py-3 text-blue-600 bg-gray-100 rounded-md shadow hover:text-gray-100 hover:bg-blue-500 ">
                                            Add Food</a></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* xxxxx */}

            <div className="">
                <section className="py-24 bg-gray-100 font-poppins">
                    <div className=" py-6 mx-auto max-w-7xl lg:py-4 md:px-6">
                        <div>
                            {/* <h2 className="mb-8 text-4xl font-bold ml-3 md:ml-0">Your Cart</h2> */}
                            <h2 className="mb-8 text-3xl font-mono ml-3 md:ml-0"><span className='text-red-600'>{user.displayName}'s </span>Foods</h2>
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
                                            <h2 className="font-bold text-gray-500"> Category:</h2>
                                        </div>
                                        <div className="w-auto px-4 text-right md:w-1/6 lg:w-2/12">
                                            <h2 className="font-bold text-gray-500"> Action</h2>
                                        </div>
                                    </div>

                                    {/* xxxxxxxxxxx */}

                                    {addedFood.map(food => <div key={food._id} className="py-4 mb-8 border-t border-b border-gray-200">
                                        <div className="flex items-center mb-6 -mx-4 md:mb-8">
                                            <div className="w-full px-4 mb-6 md:w-4/6 lg:w-6/12 md:mb-0">
                                                <div className="flex flex-wrap items-center -mx-4">
                                                    <div className="w-full px-4 mb-3 md:w-1/3">
                                                        <div className="w-full h-96 md:h-24 md:w-24 mr-3">
                                                            <img src={food.food_img_url} alt="" className="object-cover w-full h-full" />
                                                        </div>
                                                    </div>
                                                    <div className="w-2/3 px-4 pr-4">
                                                        <h2 className="mb-2 text-xl font-bold">{food.food_name}</h2>
                                                        <p className="text-gray-500">{food.email}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="hidden px-4 lg:block lg:w-2/12">
                                                <p className="text-lg font-bold text-blue-500">$ {food.price}</p>
                                                {/* <span className="text-xs text-gray-500 line-through">$1500</span> */}
                                            </div>
                                            <div className="w-auto px-4 md:w-1/6 lg:w-2/12">
                                                <div className="inline-flex items-center px-4 font-semibold text-gray-500 ">
                                                    <p className="text-lg font-bold text-blue-500">{food.quantity}</p>

                                                </div>
                                            </div>
                                            <div className="w-auto px-4 text-right md:w-1/6 lg:w-2/12">
                                                <p className="text-lg font-bold text-blue-500">{food.food_category}</p>
                                            </div>
                                            <div className="w-auto px-4 text-right md:w-1/6 lg:w-2/12">
                                                <Link to={`/food/update/${food._id}`}> <button onClick={() => handleUpdate(food._id)}><AiFillEdit title='Edit' className='text-2xl ml-7 text-red-500 hover:text-red-600' /></button></Link>
                                            </div>
                                        </div>
                                    </div>)}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Added;