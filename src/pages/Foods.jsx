import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";
import noImg from '../assets/chef-cooking.gif';

const Foods = () => {
    // const [loadedFoods, setLoadedFood] = useState([]);
    // const loadedFoods = useLoaderData();

    const [foods, setFoods] = useState([]);
    console.log(foods);
    const [itemParPage, setItemParPage] = useState(9);
    const [currentPage, setCurrentPage] = useState(0);

    const totalItems = foods.length;
    const numberOfPage = Math.ceil(totalItems / itemParPage);
    const pages = [...Array(numberOfPage).keys()];
    console.log(pages);

    const handleItemPerPage = (event) => {
        const itemParPage = parseInt(event.target.value);
        setItemParPage(itemParPage);
        setCurrentPage(0);
    };

    const handlePrevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1)
        }
    };

    const handleNextPage = () => {
        if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1)
        }
    };

    const handleSearch = (event) => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        console.log(title);
        const fetchUrl = `http://localhost:5000/search/v1?title=${title}`;
        axios.get(fetchUrl, { withCredentials: true }).then(res => setFoods(res.data)).catch(err => console.log(err));
    };

    useEffect(() => {
        axios.get(`http://localhost:5000/foods/v1?page=${currentPage}&size=${itemParPage}`).then(res => setFoods(res.data)).catch(err => console.log(err));
        document.title = 'All Foods'
    }, [currentPage, itemParPage]);

    if (foods.length < 1) {
        return (
            <div className="bg-[#FCFEFC]">
                <div className="relative overflow-hidden mb-20 bg-[url('https://i.ibb.co/qk5FpNF/pexels-valeria-boltneva-1639563-1.jpg')] bg-center bg-cover">
                    <Navbar />
                    <div className="relative flex items-center justify-center w-full text-center ">
                        <div className="mx-4">
                            <div className="z-10 max-w-3xl p-6  md:p-16 opacity-80">
                                <div className="text-center">
                                    <h2 className="mb-6 text-4xl font-medium leading-10 tracking-tight text-gray-50 md:text-5xl overflow-hidden" data-aos="zoom-out">
                                        Food is not just eating energy. It's an experience!
                                    </h2>
                                    <p className="mb-6 tracking-wide text-gray-300 sm:mt-5 sm:text-md sm:max-w-xl sm:mx-auto md:mt-5">
                                        Cooking is all about people. Food is maybe the only universal thing that really has the power to bring everyone together. No matter what culture, everywhere around the world, people get together to eat. - Guy Fieri
                                    </p>
                                    <form className="flex flex-wrap justify-center" onSubmit={handleSearch}>
                                        <input className="w-full py-3 pl-4 mb-2 text-sm md:mb-0 md:w-1/2" required name="title" type="text" placeholder="Food Name" />
                                        <button type="submit" className="w-full px-6 py-3 text-sm font-semibold text-white bg-red-500 rounded md:w-auto md:ml-2 hover:bg-red-600">Search</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:min-h-screen mb-10 md:mb-0">
                    <div className="flex justify-center">
                        <img src={noImg} className="w-[16%]" alt="" />
                    </div>
                    <h1 className="text-3xl text-center text-red-600 mr-4">No Food Found!</h1>
                </div>
            </div>
        );
    }

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
                                <form className="flex flex-wrap justify-center" onSubmit={handleSearch}>
                                    <input className="w-full py-3 pl-4 mb-2 text-sm md:mb-0 md:w-1/2" name="title" type="text" placeholder="Food Name" />
                                    <button className="w-full px-6 py-3 text-sm font-semibold text-white bg-red-500 rounded md:w-auto md:ml-2 hover:bg-red-600">Search</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {foods?.map(food => <div key={food._id} className="mx-auto mt-11 w-80 transform overflow-hidden rounded-md shadow-md duration-300 hover:scale-105 hover:shadow-lg">
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
            {/* <p className="text-center">Current Page: {currentPage}</p> */}
            <div className="flex justify-center gap-3">

                <button onClick={handlePrevPage}
                    className="relative inline-flex items-center px-2 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-100">
                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                        fill="currentColor" aria-hidden="true">
                        <path
                            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        ></path>
                    </svg>
                </button>
                {pages?.map(page => <div key={page} className={currentPage == page ? "bg-red-600 border text-white rounded-md border-gray-300" : "bg-gray-100 border text-gray-500 rounded-md border-gray-300"} onClick={() => setCurrentPage(page)}>
                    <button className="px-4 py-2" >{page}</button>
                </div>)}
                <select name="" className="" id="" onChange={handleItemPerPage}>
                    <option value="10">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                </select>
                <button onClick={handleNextPage}
                    className="relative inline-flex items-center px-2 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-100">
                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                        fill="currentColor" aria-hidden="true">
                        <path
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        ></path>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Foods;