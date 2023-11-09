import { AiFillLinkedin } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Team = () => {

    return (
        <div>
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
        </div>
    );
};

export default Team;