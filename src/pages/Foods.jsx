import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../components/Navbar";

const Foods = () => {
    const foods = useLoaderData();

    return (
        <div className="">
            <div className="relative overflow-hidden mb-20 bg-[url('https://i.ibb.co/qk5FpNF/pexels-valeria-boltneva-1639563-1.jpg')] bg-center bg-cover">
                <Navbar />
                <div className="relative flex items-center justify-center w-full text-center ">
                    <div className="mx-4">
                        <div className="z-10 max-w-3xl p-6  md:p-16 opacity-80">
                            <div className="text-center">
                                <h2 className="mb-6 text-4xl font-medium leading-10 tracking-tight text-gray-50 md:text-5xl">
                                    Food is not just eating energy. It's an experience!
                                </h2>
                                <p className="mb-6 tracking-wide text-gray-300 sm:mt-5 sm:text-md sm:max-w-xl sm:mx-auto md:mt-5">
                                    Cooking is all about people. Food is maybe the only universal thing that really has the power to bring everyone together. No matter what culture, everywhere around the world, people get together to eat. - Guy Fieri
                                </p>
                                <form className="flex flex-wrap justify-center">
                                    <input className="w-full py-3 pl-4 mb-2 text-sm md:mb-0 md:w-1/2" type="text" placeholder="Food Name" />
                                    <button className="w-full px-6 py-3 text-sm font-semibold text-white bg-red-500 rounded md:w-auto md:ml-2 hover:bg-red-600">Search</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mb-40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {foods.map(food => <div key={food._id} className="mx-auto mt-11 w-80 transform overflow-hidden rounded-md shadow-md duration-300 hover:scale-105 hover:shadow-lg">
                    <img className="h-48 w-full object-cover object-center" src={food.food_img_url} alt="Product Image" />
                    <div className="p-4">
                        <h2 className="mb-2 text-lg font-medium">{food.food_name}</h2>
                        <p className="text-base"><span className='font-semibold'>Category:</span> {food.food_category}</p>
                        <p className="text-base"><span className='font-semibold'>Quantity:</span> {food.quantity}</p>
                        <div className="flex items-center">
                            <p className="mr-2 text-2xl font-semibold">$ {food.price}</p>
                            <Link to={`/food/${food._id}`} className='ml-auto text-base font-medium bg-red-500 hover:bg-red-600 px-4 rounded-sm text-white py-2'><button>Details</button></Link>
                        </div>
                    </div>
                </div>)}
            </div>
        </div>
    );
};

export default Foods;