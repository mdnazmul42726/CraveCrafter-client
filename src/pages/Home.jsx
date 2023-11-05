import { BsGooglePlay, BsDoorOpen } from 'react-icons/bs';
import { AiFillApple, AiFillLinkedin } from 'react-icons/ai';
import { GoRocket } from 'react-icons/go';
import { BiLeaf } from 'react-icons/bi';
import { BsFacebook } from 'react-icons/bs';
import { RiTwitterXFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
// import { FaXTwitter } from 'react-icons/fa';

const Home = () => {

    return (
        <div className="">
            <div className="w-11/12 mx-auto">
                {/* hero */}
                <div className="w-full block lg:flex">
                    {/* text */}
                    <div className="lg:w-1/2">
                        <h1 className="text-5xl mt-7 md:mt-10 lg:mt-20 font-mono">We Love <br />Delicious Foods!</h1>
                        <p className="mt-3 mr-4">Our platform streamlines operations, enhances customer experiences, and empowers chefs and restaurateurs with data-driven insights. Discover the future of restaurant management and dining excellence at CuisineCraft – where culinary expertise meets cutting-edge technology.</p>
                        <div className="mt-10 flex items-center gap-7">
                            <button className="btn bg-[#F34949] px-7 hover:bg-[#F34949] hover:scale-105 text-white rounded-full">Explore Menu</button>
                            <button className='hidden md:flex font-bold hover:text-red-600'><BsGooglePlay className='text-2xl hover:scale-110 transition-all hover:text-sky-400 mt-1 mr-2' /> <AiFillApple className='text-3xl hover:scale-110 transition-all hover:text-sky-300 mr-2' /><span className='mt-1'>Download App</span></button>
                        </div>
                        <div className="flex justify-center gap-10 mt-20 md:mr-10 lg:mr-16">
                            <div className=" flex hover:scale-105 transition-all hover:text-red-500 flex-col place-items-center border-r pr-10">
                                <GoRocket className='text-4xl font-light' />
                                <p>Fast Delivery</p>
                            </div>
                            <div className=" flex hover:scale-105 transition-all hover:text-red-500 flex-col place-items-center">
                                <BiLeaf className='text-4xl' />
                                <p>Fresh Food</p>
                            </div>
                            <div className=" flex hover:scale-105 transition-all hover:text-red-500 flex-col border-l pl-10 place-items-center">
                                <BsDoorOpen className='text-4xl' />
                                <p>24/7 Open</p>
                            </div>
                        </div>
                    </div>
                    {/* img */}
                    <div className="md:w-1/2 hidden lg:block">
                        <div className="h-[540px] carousel carousel-vertical">
                            <div className="carousel-item h-full">
                                <img src="https://i.ibb.co/2nWM6cf/hero-1.jpg" />
                            </div>
                            <div className="carousel-item h-full">
                                <img src="https://i.ibb.co/d78QkGt/hero-2.jpg" />
                            </div>
                            <div className="carousel-item h-full">
                                <img src="https://i.ibb.co/2sCWyVN/hero-3.jpg" />
                            </div>
                            <div className="carousel-item h-full">
                                <img src="https://i.ibb.co/2nWM6cf/hero-1.jpg" />
                            </div>
                            <div className="carousel-item h-full">
                                <img src="https://i.ibb.co/d78QkGt/hero-2.jpg" />
                            </div>
                            <div className="carousel-item h-full">
                                <img src="https://i.ibb.co/2sCWyVN/hero-3.jpg" />
                            </div>
                            <div className="carousel-item h-full">
                                <img src="https://i.ibb.co/2nWM6cf/hero-1.jpg" />
                            </div>
                            <div className="carousel-item h-full">
                                <img src="https://i.ibb.co/d78QkGt/hero-2.jpg" />
                            </div>
                            <div className="carousel-item h-full">
                                <img src="https://i.ibb.co/2sCWyVN/hero-3.jpg" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* About */}
                <div className="flex flex-col md:flex-row gap-5 mt-20 md:mt-20 lg:mt-36">
                    <div className="md:w-1/2">
                        <img className='md:w-[90%]' src="https://i.ibb.co/d78QkGt/hero-2.jpg" alt="" />
                    </div>
                    <div className="md:w-1/2">
                        <p className='text-red-500'>About</p>
                        <h1 className='text-3xl font-bold '>Welcome to Crave<span className='text-red-500 font-serif'>Crafter.</span></h1>
                        <p className='mt-10'>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                        <p className='text-2xl font-mono mt-10 mb-4'>Special Recipe</p>
                        <div className="flex gap-5">
                            <div className=" cursor-pointer hover:scale-105 transition-all">
                                <img className='w-[80%]' src="https://i.ibb.co/2nWM6cf/hero-1.jpg" alt="" />
                                <p className='mt-1 font-mono text-red-500'>Australian Organic Beef</p>
                            </div>
                            <div className="cursor-pointer hover:scale-105 transition-all">
                                <img className='w-[80%]' src="https://i.ibb.co/2nWM6cf/hero-1.jpg" alt="" />
                                <p className='mt-1 font-mono text-red-500'>Australian Organic Beef</p>
                            </div>
                            <div className="cursor-pointer hover:scale-105 transition-all">
                                <img className='w-[80%]' src="https://i.ibb.co/2nWM6cf/hero-1.jpg" alt="" />
                                <p className='mt-1 font-mono text-red-500'>Australian Organic Beef</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* spisalist */}
            <div className="bg-[#F7F8F9] mt-40">
                <div className="text-center pt-36 pb-20">
                    <p className='text-red-500'>Specialties</p>
                    <h1 className='text-3xl font-bold '> Special Dishes</h1>
                </div>
                {/* section 1 */}
                <div className="flex flex-col md:flex-row justify-between w-11/12 mx-auto">
                    <div className="">
                        <div className="flex"><h1 className='text-5xl font-bold'>01.</h1><p className='mt-5 ml-2 font-bold'>________________</p></div>
                        <div className="ml-5 md:ml-20 mt-5">
                            <h2 className='text-3xl font-mono text-red-500'>Beef</h2>
                            <h3 className='text-2xl font-mono '>Steak Sauce</h3>
                            <p className='mt-10 opacity-75'>Navigating Culinary Success Through Technology. <br /> Revolutionize your restaurant with our <br /> comprehensive management solutions, boosting efficiency, <br /> elevating flavors, and delivering <br />unforgettable dining experiences. <br /> Join us on a journey where the art of cooking <br /> meets data-driven innovation.</p>
                            <h1 className='text-3xl font-sans mt-5'>$15.00</h1>
                            <button className="btn mt-5 ml-3 bg-[#F34949] px-7 hover:bg-[#F34949] hover:scale-105 text-white rounded-full">Book A Table</button>
                        </div>
                    </div>
                    <div className="mt-10 md:mt-0">
                        <img src="https://i.ibb.co/MGCNLn8/steak.jpg" alt="" />
                    </div>
                </div>
                {/* section2 */}
                <div className=" mt-20 pb-36">
                    <div className="flex flex-col md:flex-row justify-between w-11/12 mx-auto">

                        <div className="">
                            <img src="https://i.ibb.co/PZZrXd9/salmon-zucchini.jpg" alt="" />
                        </div>
                        <div className="mt-10 md:mt-0">
                            <div className="flex"><h1 className='text-5xl font-bold'>02.</h1><p className='mt-5 ml-2 font-bold'>________________</p></div>
                            <div className="ml-5 md:ml-20 mt-5">
                                <h2 className='text-3xl font-mono text-red-500'>Salmon</h2>
                                <h3 className='text-2xl font-mono '>Zucchini</h3>
                                <p className='mt-10 opacity-75'>Navigating Culinary Success Through Technology. <br /> Revolutionize your restaurant with our <br /> comprehensive management solutions, boosting efficiency, <br /> elevating flavors, and delivering <br />unforgettable dining experiences. <br /> Join us on a journey where the art of cooking <br /> meets data-driven innovation.</p>
                                <h1 className='text-3xl font-sans mt-5'>$12.00</h1>
                                <button className="btn mt-5 ml-3 bg-[#F34949] px-7 hover:bg-[#F34949] hover:scale-105 text-white rounded-full">Book A Table</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* our top selling foods card */}
            <div className="my-36">
                <h1 className='text-3xl font-bold text-center'>Pop Selling Foods</h1>
                <div className="grid grid-cols-1 md:grid-cols-3">
                    <div className="mx-auto mt-11 w-80 transform overflow-hidden rounded-md shadow-md duration-300 hover:scale-105 hover:shadow-lg">
                        <img className="h-48 w-full object-cover object-center" src="https://i.ibb.co/PZZrXd9/salmon-zucchini.jpg" alt="Product Image" />
                        <div className="p-4">
                            <h2 className="mb-2 text-lg font-medium">Product Name</h2>
                            <p className="text-base"><span className='font-semibold'>Category:</span> xxx</p>
                            <p className=" text-base"><span className='font-semibold'>Orders:</span> 001</p>
                            <div className="flex items-center">
                                <p className="mr-2 text-2xl font-semibold">$20.00</p>
                                <button className='ml-auto text-base font-medium bg-red-500 hover:bg-red-600 px-4 rounded-sm text-white py-2'>Details</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <button className=' text-base font-medium bg-red-500 hover:bg-red-600 px-4 rounded-sm text-white py-2'>See All</button>
                </div>
            </div>
            {/* meet the tram */}
            <div className="  ">
                <div className="container max-w-7xl px-4">
                    <div className="flex flex-wrap justify-center text-center mb-24">
                        <div className="w-full lg:w-6/12 px-4">
                            <h1 className="text-gray-900 text-4xl font-bold mb-8">
                                Meet the Team
                            </h1>
                            <p className="text-gray-700 text-lg font-light">
                                With over 100 years of combined experience, we've got a well-seasoned team at the helm.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-wrap">
                        <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                            <div className="flex flex-col">
                                <a href="#" className="mx-auto">
                                    <img className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                                        src="https://i.ibb.co/tMmZvyv/chef-1.jpg" />
                                </a>
                                <div className="text-center mt-6">
                                    <h1 className="text-gray-900 text-xl font-bold mb-1">
                                        Aaron Patel
                                    </h1>
                                    <div className="text-gray-700 font-light mb-2">
                                        Founder CEO
                                    </div>
                                    <div className="flex items-center justify-center opacity-50 hover:opacity-100
                                transition-opacity duration-300">

                                        <Link className="flex rounded-full h-20 w-8">
                                            <i className="mdi mdi-linkedin text-indigo-500 mx-auto mt-2"><BsFacebook className='text-xl' /></i> </Link>

                                        <Link className="flex rounded-full h-20 w-8">
                                            <i className="mdi mdi-twitter text-blue-300 mx-auto mt-2"><AiFillLinkedin className='text-xl' /></i>
                                        </Link>
                                        <Link className="flex rounded-full  h-20 w-8">
                                            <i className="mdi mdi-instagram  mx-auto mt-2 text-black"><RiTwitterXFill className='text-xl' /></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                            <div className="flex flex-col">

                                <a href="#" className="mx-auto">
                                    <img className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                                        src="https://i.ibb.co/xYs5Khv/chef-2.jpg" />
                                </a>
                                <div className="text-center mt-6">

                                    <h1 className="text-gray-900 text-xl font-bold mb-1">
                                        Daniel Tebas
                                    </h1>
                                    <div className="text-gray-700 font-light mb-2">
                                        Chef
                                    </div>
                                    <div className="flex items-center justify-center opacity-50 hover:opacity-100
                                transition-opacity duration-300">

                                        <Link className="flex rounded-full h-20 w-8">
                                            <i className="mdi mdi-linkedin text-indigo-500 mx-auto mt-2"><BsFacebook className='text-xl' /></i> </Link>

                                        <Link className="flex rounded-full h-20 w-8">
                                            <i className="mdi mdi-twitter text-blue-300 mx-auto mt-2"><AiFillLinkedin className='text-xl' /></i>
                                        </Link>
                                        <Link className="flex rounded-full  h-20 w-8">
                                            <i className="mdi mdi-instagram  mx-auto mt-2 text-black"><RiTwitterXFill className='text-xl' /></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                            <div className="flex flex-col">

                                <a href="#" className="mx-auto">
                                    <img className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                                        src="https://i.ibb.co/VvKJkqK/pexels-2102934.jpg" />
                                </a>
                                <div className="text-center mt-6">
                                    <h1 className="text-gray-900 text-xl font-bold mb-1">
                                        Jon Snow
                                    </h1>
                                    <div className="text-gray-700 font-light mb-2">
                                        Chef
                                    </div>
                                    <div className="flex items-center justify-center opacity-50 hover:opacity-100
                                transition-opacity duration-300">
                                        <Link className="flex rounded-full h-20 w-8">
                                            <i className="mdi mdi-linkedin text-indigo-500 mx-auto mt-2"><BsFacebook className='text-xl' /></i> </Link>

                                        <Link className="flex rounded-full h-20 w-8">
                                            <i className="mdi mdi-twitter text-blue-300 mx-auto mt-2"><AiFillLinkedin className='text-xl' /></i>
                                        </Link>
                                        <Link className="flex rounded-full  h-20 w-8">
                                            <i className="mdi mdi-instagram  mx-auto mt-2 text-black"><RiTwitterXFill className='text-xl' /></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                            <div className="flex flex-col">
                                <a href="#" className="mx-auto">
                                    <img className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                                        src="https://i.ibb.co/0yFkH24/chef-3.jpg" />
                                </a>
                                <div className="text-center mt-6">
                                    <h1 className="text-gray-900 text-xl font-bold mb-1">
                                        Patel Ex
                                    </h1>
                                    <div className="text-gray-700 font-light mb-2">
                                        Chef
                                    </div>
                                    <div className="flex items-center justify-center opacity-50 hover:opacity-100
                                transition-opacity duration-300">
                                        <Link className="flex rounded-full h-20 w-8">
                                            <i className="mdi mdi-linkedin text-indigo-500 mx-auto mt-2"><BsFacebook className='text-xl' /></i> </Link>

                                        <Link className="flex rounded-full h-20 w-8">
                                            <i className="mdi mdi-twitter text-blue-300 mx-auto mt-2"><AiFillLinkedin className='text-xl' /></i>
                                        </Link>
                                        <Link className="flex rounded-full  h-20 w-8">
                                            <i className="mdi mdi-instagram  mx-auto mt-2 text-black"><RiTwitterXFill className='text-xl' /></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* 1 */}

        </div>
    );
};

export default Home;