import React from 'react';
import Navbar from '../components/Navbar';

const Added = () => {

    return (
        <div>
            <Navbar />
            <div className="">
                <div className="relative flex items-center justify-center w-full h-[400px] text-center bg-center bg-cover bg-[url('https://i.postimg.cc/2jbDXdzP/tyje-15.jpg')] ">
                    <div className="absolute top-0 bottom-0 left-0 right-0 bg-sky-900 opacity-80"></div>
                    <div className="z-10 px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <h2 className="mb-6 text-4xl font-medium leading-10 tracking-tight text-gray-50 md:text-6xl">
                                Achieve your goal
                            </h2>
                            <p className="mb-6 tracking-wide text-gray-300 sm:mt-5 sm:text-md sm:max-w-xl sm:mx-auto md:mt-5">
                                Success is most important part of life and it is determination of having achieved and
                                accomplished
                                aim with
                                lots of failure
                                enthusiam.
                            </p>
                            <div className="justify-center sm:flex">
                                <div className="">
                                    <a href="#"
                                        className="flex items-center justify-center w-full px-8 py-3 text-gray-100 bg-blue-600 rounded-md shadow hover:bg-blue-500 ">
                                        Get started</a>
                                </div>
                                <div className="mt-3 sm:mt-0 sm:ml-3">
                                    <a href="#"
                                        className="flex items-center justify-center w-full px-8 py-3 text-blue-600 bg-gray-100 rounded-md shadow hover:text-gray-100 hover:bg-blue-500 ">
                                        Learn More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Added;