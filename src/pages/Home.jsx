import { BsGooglePlay, BsDoorOpen } from 'react-icons/bs';
import { AiFillApple, AiFillLinkedin } from 'react-icons/ai';
import { GoRocket } from 'react-icons/go';
import { BiLeaf } from 'react-icons/bi';
import { BsFacebook } from 'react-icons/bs';
import { RiTwitterXFill } from 'react-icons/ri';
import { Link, useLoaderData } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useEffect } from 'react';
// import { FaXTwitter } from 'react-icons/fa';

const Home = () => {
    const topProducts = useLoaderData();
    console.log(topProducts);

    useEffect(() => {
        document.title = 'CraveCrafter | Home'
    }, [])

    return (
        <div className="mb-36 overflow-hidden">
            <div className="">
                {/* <div className=" md:min-h-screen"></div> */}
                {/* hero */}
                <div className="">
                    <div className="w-full text-white bg-[url('https://i.ibb.co/xC9mPGv/pexels-mikhail-nilov-8093877.jpg')] bg-cover ">
                        <Navbar />
                        {/* text */}
                        <div className="lg:w-1/2 overflow-hidden ml-10 pb-10" data-aos="fade-right">
                            <h1 className="text-5xl mt-7 md:mt-10 lg:mt-20 font-mono">We Love <br />Delicious Foods!</h1>
                            <p className="mt-3 mr-4">Our platform streamlines operations, enhances customer experiences, and empowers chefs and restaurateurs with data-driven insights. Discover the future of restaurant management and dining excellence at CuisineCraft – where culinary expertise meets cutting-edge technology.</p>
                            <div className="mt-10 flex items-center gap-7">
                                <Link to={'/foods'}><button className="btn bg-[#F34949] px-7 hover:bg-[#F34949] hover:scale-105 text-white rounded-full">Explore Menu</button></Link>
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
                        {/* <div className="md:w-1/2 hidden lg:block">
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
                    </div> */}
                    </div>
                </div>
                {/* About */}
                <div className="flex flex-col md:flex-row w-11/12 mx-auto gap-5 mt-20 md:mt-20 lg:mt-36" >
                    <div className="md:w-1/2">
                        <img className='md:w-[90%]' src="https://i.ibb.co/d78QkGt/hero-2.jpg" alt="" />
                    </div>
                    <div className="md:w-1/2 overflow-hidden" data-aos="fade-left">
                        <p className='text-red-500'>About</p>
                        <h1 className='text-3xl font-bold '>Welcome to Crave<span className='text-red-500 font-serif'>Crafter.</span></h1>
                        <p className='mt-10'>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word and and the Little Blind Text should turn around and return to its own, safe country. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
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
            <div className="bg-[#F7F8F9] mt-40" data-aos="fade-up">
                <div className="text-center pt-36 pb-20">
                    <p className='text-red-500'>Specialties</p>
                    <h1 className='text-3xl font-bold '> Special Dishes</h1>
                </div>
                {/* section 1 */}
                <div className="flex flex-col md:flex-row justify-between w-11/12 mx-auto">
                    <div className="" data-aos="fade-right">
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
                        <div className="mt-10 md:mt-0" data-aos="fade-left">
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
            <div className="my-36" data-aos="zoom-out">
                <h1 className='text-4xl font-bold text-center'>Top Selling Foods</h1>
                <div className="grid grid-cols-1 md:grid-cols-3">
                    {topProducts.map(product => <div key={product._id} className="mx-auto mt-11 w-80 transform overflow-hidden rounded-md shadow-md duration-300 hover:scale-105 hover:shadow-lg">
                        <img className="h-48 w-full object-cover object-center" src={product.food_img_url} alt="Product Image" />
                        <div className="p-4">
                            <h2 className="mb-2 text-lg font-medium">{product.food_name}</h2>
                            <p className="text-base"><span className='font-semibold'>Category: </span>{product.food_category}</p>
                            {/* <p className=" text-base"><span className='font-semibold'>Orders: </span>{product.order}</p> */}
                            <div className="flex items-center">
                                <p className="mr-2 text-2xl font-semibold">${product.price}</p>
                                <Link className='ml-auto text-base font-medium bg-red-500 hover:bg-red-600 px-4 rounded-sm text-white py-2' to={`/top-food/${product._id}`}><button>Details</button></Link>
                            </div>
                        </div>
                    </div>)}
                </div>
                <div className="flex justify-center mb-10 mt-20">
                    <Link to={"/foods"}><button className=' text-base font-medium bg-red-500 hover:bg-red-600 px-4 rounded-sm text-white py-2'>See All</button></Link>
                </div>
            </div>
            {/* meet the tram */}
            <div className="mt-20 " data-aos="zoom-in">
                <div className="container max-w-7xl px-4">
                    <div className="flex flex-wrap justify-center text-center mb-24">
                        <div className="w-full lg:w-6/12 px-4">
                            <h1 className="text-gray-900 text-4xl font-bold mb-8">
                                Meet the Team
                            </h1>
                            <p className="text-gray-700 text-lg font-light">
                                With over 100 years of combined experience, we ve got a well-seasoned team at the helm.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-wrap">
                        <div className="w-full md:w-6/12 lg:w-3/12 hover:scale-105 duration-300 mb-6 px-6 sm:px-6 lg:px-4">
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
                        <div className="w-full md:w-6/12 lg:w-3/12 mb-6 hover:scale-105 duration-300 px-6 sm:px-6 lg:px-4">
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
                        <div className="w-full md:w-6/12 lg:w-3/12 hover:scale-105 duration-300 mb-6 px-6 sm:px-6 lg:px-4">
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
                        <div className="w-full md:w-6/12 lg:w-3/12 hover:scale-105 duration-300 mb-6 px-6 sm:px-6 lg:px-4">
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
            {/* <!-- component -->
            <style>@import url('https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css')</style> */}

            {/* testominial */}
            <div className="min-w-screen min-h-screen bg-gray-50 flex items-center justify-center" data-aos="zoom-in">
                <div className="w-full bg-white border-t border-b border-gray-200 px-5 py-16 md:py-24 text-gray-800">
                    <div className="w-full max-w-6xl mx-auto">
                        <div className="text-center max-w-xl mx-auto">
                            <h1 className="text-6xl md:text-7xl font-bold mb-5 text-gray-600">What people <br />are saying.</h1>
                            <h3 className="text-xl mb-5 font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                            <div className="text-center mb-10">
                                <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
                                <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                                <span className="inline-block w-40 h-1 rounded-full bg-indigo-500"></span>
                                <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                                <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
                            </div>
                        </div>
                        <div className="-mx-3 md:flex items-start">
                            <div className="px-3 md:w-1/3">
                                <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                                    <div className="w-full flex mb-4 items-center">
                                        <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                            <img src="https://i.pravatar.cc/100?img=1" alt="" />
                                        </div>
                                        <div className="flex-grow pl-3">
                                            <h6 className="font-bold text-sm uppercase text-gray-600">Kenzie Edgar.</h6>
                                        </div>
                                    </div>
                                    <div className="w-full">
                                        <p className="text-sm leading-tight"><span className="text-lg leading-none italic font-bold text-gray-400 mr-1"></span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sunt ratione dolor exercitationem minima quas itaque saepe quasi architecto vel! Accusantium, vero sint recusandae cum tempora nemo commodi soluta deleniti.<span className="text-lg leading-none italic font-bold text-gray-400 ml-1"></span></p>
                                    </div>
                                </div>
                                <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                                    <div className="w-full flex mb-4 items-center">
                                        <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                            <img src="https://i.pravatar.cc/100?img=2" alt="" />
                                        </div>
                                        <div className="flex-grow pl-3">
                                            <h6 className="font-bold text-sm uppercase text-gray-600">Stevie Tifft.</h6>
                                        </div>
                                    </div>
                                    <div className="w-full">
                                        <p className="text-sm leading-tight"><span className="text-lg leading-none italic font-bold text-gray-400 mr-1"></span>Lorem ipsum, dolor sit amet, consectetur adipisicing elit. Dolore quod necessitatibus, labore sapiente, est, dignissimos ullam error ipsam sint quam tempora vel.<span className="text-lg leading-none italic font-bold text-gray-400 ml-1"></span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="px-3 md:w-1/3">
                                <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                                    <div className="w-full flex mb-4 items-center">
                                        <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                            <img src="https://i.pravatar.cc/100?img=3" alt="" />
                                        </div>
                                        <div className="flex-grow pl-3">
                                            <h6 className="font-bold text-sm uppercase text-gray-600">Tommie Ewart.</h6>
                                        </div>
                                    </div>
                                    <div className="w-full">
                                        <p className="text-sm leading-tight"><span className="text-lg leading-none italic font-bold text-gray-400 mr-1"></span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, obcaecati ullam excepturi dicta error deleniti sequi.<span className="text-lg leading-none italic font-bold text-gray-400 ml-1"></span></p>
                                    </div>
                                </div>
                                <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                                    <div className="w-full flex mb-4 items-center">
                                        <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                            <img src="https://i.pravatar.cc/100?img=4" alt="" />
                                        </div>
                                        <div className="flex-grow pl-3">
                                            <h6 className="font-bold text-sm uppercase text-gray-600">Charlie Howse.</h6>
                                        </div>
                                    </div>
                                    <div className="w-full">
                                        <p className="text-sm leading-tight"><span className="text-lg leading-none italic font-bold text-gray-400 mr-1"></span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto inventore voluptatum nostrum atque, corrupti, vitae esse id accusamus dignissimos neque reprehenderit natus, hic sequi itaque dicta nisi voluptatem! Culpa, iusto.<span className="text-lg leading-none italic font-bold text-gray-400 ml-1"></span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="px-3 md:w-1/3">
                                <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                                    <div className="w-full flex mb-4 items-center">
                                        <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                            <img src="https://i.pravatar.cc/100?img=5" alt="" />
                                        </div>
                                        <div className="flex-grow pl-3">
                                            <h6 className="font-bold text-sm uppercase text-gray-600">Nevada Herbertson.</h6>
                                        </div>
                                    </div>
                                    <div className="w-full">
                                        <p className="text-sm leading-tight"><span className="text-lg leading-none italic font-bold text-gray-400 mr-1"></span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, voluptatem porro obcaecati dicta, quibusdam sunt ipsum, laboriosam nostrum facere exercitationem pariatur deserunt tempora molestiae assumenda nesciunt alias eius? Illo, autem!<span className="text-lg leading-none italic font-bold text-gray-400 ml-1"></span></p>
                                    </div>
                                </div>
                                <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                                    <div className="w-full flex mb-4 items-center">
                                        <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                            <img src="https://i.pravatar.cc/100?img=6" alt="" />
                                        </div>
                                        <div className="flex-grow pl-3">
                                            <h6 className="font-bold text-sm uppercase text-gray-600">Kris Stanton.</h6>
                                        </div>
                                    </div>
                                    <div className="w-full">
                                        <p className="text-sm leading-tight"><span className="text-lg leading-none italic font-bold text-gray-400 mr-1"></span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem iusto, explicabo, cupiditate quas totam!<span className="text-lg leading-none italic font-bold text-gray-400 ml-1"></span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
                <div>
                    <a title="Buy me a beer" href="https://www.buymeacoffee.com/mdnazmul42726" className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12">
                        <img className="object-cover object-center w-full h-full rounded-full" src="https://i.pinimg.com/originals/60/fd/e8/60fde811b6be57094e0abc69d9c2622a.jpg" alt="Buy me a beer" />
                    </a>
                </div>
            </div>
            {/* Book */}

            <div className="bg-[url('https://i.ibb.co/0J5pyT5/reservation-bg.jpg')] md:min-h-screen">
                <div className="w-full md:w-96 h-[500px] bg-white md:ml-10 ">
                    <p className='text-red-500 text-center pt-10 font-mono'>Reservation</p>
                    <h1 className='text-3xl text-center font-sans'>Book Now</h1>
                    <form className='p-10'>
                        <input className='p-2 w-full border rounded-sm mb-3' type="text" name="" id="" placeholder='Name' required />
                        <input className='p-2 w-full border rounded-sm mb-3' type="text" name="" id="" placeholder='Email' required />
                        <input className='p-2 w-full border rounded-sm' type="text" name="" id="" placeholder='Phone' required />
                        <div className="flex mt-3 gap-3">
                            <input className='p-2 w-full border rounded-sm' type="date" name="" id="" placeholder='Date' required />
                            <input className='p-2 w-full border rounded-sm' type="time" name="" id="" placeholder='Time' required />
                        </div>
                        <select className='p-2 w-full border rounded-sm mt-3' name="" id="" required>
                            <option value="N/A">Person</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">5</option>
                            <option value="6">6</option>
                        </select>
                        <div className="flex justify-center">
                            <button type='submit' className="btn mt-5 ml-3 bg-[#F34949] px-7 hover:bg-[#F34949] hover:scale-105 text-white rounded-full">Book A Table</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Home;