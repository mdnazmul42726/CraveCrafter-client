import { useEffect } from 'react';
import Navbar from '../components/Navbar';

const About = () => {

    useEffect(() => {
        document.title = 'CraveCrafter | About'
    }, []);

    return (
        <div>
            <Navbar />
            <div className="pb-20">
                <div className="flex flex-col md:flex-row w-11/12 mx-auto gap-5 mt-10 mb-20 md:mt-20 lg:mt-36" >
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
        </div>
    );
};

export default About;