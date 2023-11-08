import { BsFacebook, BsInstagram } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import { Link, Outlet } from "react-router-dom";

const Root = () => {

    return (
        <div className="">
            {/* navbar */}
            {/* Outlet */}
            <div className=""><Outlet /></div>

            {/* footer */}

            <div className="mt-10 mb-7 w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 md:space-x-20 space-y-10 md:space-y-0 overflow-hidden">
                <div className="">
                    <a className="text-3xl font-bold" data-aos="fade-right">Crave<span className="font-serif text-[#E32106]">Crafter.</span></a>
                    <p className="mt-3 mr-4 opacity-75">Our platform streamlines operations, enhances customer experiences, and empowers chefs and restaurateurs with data-driven insights. Discover the future of restaurant management and dining excellence at CuisineCraft – where culinary expertise meets cutting-edge technology.</p>
                    <div className="mt-10 text-xl flex gap-3">
                        <Link><BsFacebook className="hover:text-red-600 transition-all scale-110" /></Link>
                        <Link> <BsInstagram className="hover:text-red-600 transition-all scale-110" /></Link>
                        <Link><RiTwitterXFill className="hover:text-red-600 transition-all scale-110" /></Link>
                    </div>
                </div>
                <div className="">
                    <h1 className="text-2xl font-mono mb-3">Open Hours</h1>
                    <div className="flex justify-around items-center font-light">
                        <p>Monday - </p>
                        <p>9:00 - 24:00</p>
                    </div>
                    <div className="flex justify-around items-center font-light">
                        <p>Tuesday - </p>
                        <p>9:00 - 24:00</p>
                    </div>
                    <div className="flex justify-around items-center font-light">
                        <p>Wednesday - </p>
                        <p>9:00 - 24:00</p>
                    </div>
                    <div className="flex justify-around items-center font-light">
                        <p>Thursday - </p>
                        <p>9:00 - 24:00</p>
                    </div>
                    <div className="flex justify-around items-center font-light">
                        <p>Friday - </p>
                        <p>9:00 - 02:00</p>
                    </div>
                    <div className="flex justify-around items-center font-light">
                        <p>Saturday - </p>
                        <p>9:00 - 02:00</p>
                    </div>
                    <div className="flex justify-around items-center font-light">
                        <p>Sunday - </p>
                        <p>Closed</p>
                    </div>
                </div>
                <div className="" data-aos="fade-left">
                    <h1 className="text-2xl">Newsletter</h1>
                    <p className="opacity-75">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <form>
                        <input className='p-2 w-full border rounded-sm my-3' type="email" name="" id="" placeholder='Email Address' required />
                        <button type='submit' className="btn mt-5 ml-3 bg-[#F34949] px-7 hover:bg-[#F34949] w-full text-white rounded-full">Subscribe</button>
                    </form>
                </div>
            </div>
            <footer className="text-center mb-5">&copy; Copyright 2023. All Right Reserved. Developed by <a href="https://github.com/mdnazmul42726"><span className="text-red-500 hover:underline">Sheikh Mohammad Nazmul H.</span></a> </footer>
        </div>
    );
};

export default Root;