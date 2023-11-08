import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider";

const Blog = () => {
    const blogs = useLoaderData();
    const { user } = useContext(AuthContext);

    return (
        <div className="pb40" >
            <Navbar />
            <section className="flex items-center justify-center bg-gray-100 lg:h-screen" data-aos="fade-left">
                <div className="px-4 py-20 mx-auto max-w-7xl">
                    <div className="flex flex-wrap items-center gap-8 lg:flex-nowrap">
                        <div className="w-full lg:w-1/2">
                            <div className="relative">
                                <h1 className="absolute -top-14 left-0 text-[120px] font-bold opacity-5 md:block hidden">
                                    BLOGS
                                </h1>
                                <h1 className="text-5xl font-bold"> Our <span className="text-red-600"> Blogs
                                </span> </h1>
                                <div className="flex w-24 mt-1 mb-6 overflow-hidden rounded md:mb-14">
                                    <div className="flex-1 h-2 bg-blue-200">
                                    </div>
                                    <div className="flex-1 h-2 bg-blue-400">
                                    </div>
                                    <div className="flex-1 h-2 bg-blue-600">
                                    </div>
                                </div>
                            </div>
                            <p className="mb-4 text-base text-gray-500 lg:mb-16">
                                "Reading is a journey through time and imagination. It's a window to worlds unknown, a source of knowledge, and a lifelong friend."
                            </p>
                        </div>

                        {/* 1 */}
                        {blogs.slice(0, 1).map(blog => <div key={blog._id} className="hidden md:flex">
                            <div className="bg-white rounded-lg shadow-md ">
                                <a href="#" className=""><img src={blog.img}
                                    alt="" className="object-cover w-full h-64 rounded-t-lg" /></a>
                                <div className="p-5">
                                    <a href="#" className="">
                                        <h2 className="mb-2 text-xl font-bold tracking-tight text-gray-700">{blog.blogPost?.title}</h2>
                                    </a>
                                    <p className="mb-3 font-normal text-gray-700">{blog.blogPost?.content[0]?.text}</p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center ">
                                            <img src={blog?.AImg} alt=""
                                                className="object-cover object-right w-8 h-8 rounded-full" />
                                            <div className="ml-2">
                                                <h2 className="text-lg font-semibold text-gray-700"> {blog.blogPost?.author}
                                                </h2>
                                                <span className="text-sm text-gray-500">{blog.blogPost?.datePublished}</span>
                                            </div>
                                        </div>
                                        <Link to={`/blog/${blog._id}`}><a
                                            className="px-3 py-2 text-xs text-gray-200 bg-red-500 rounded-full  hover:bg-red-600 hover:text-gray-100">
                                            View Details</a></Link>
                                    </div>
                                </div>
                            </div>
                        </div>)}

                    </div>
                </div>
            </section>
            {/*  */}
            <div className="mt-20" data-aos="fade-dowon">
                <div className=" text-center md:text-left md:ml-[70px] mb-5">
                    <h2 className='text-xl font-mono '>Hi, <span className='text-red-600'>{user?.displayName}</span> </h2>
                    <p className='font-mono'>Read our popular blogs!</p>
                </div>
            </div>
            {/* card */}
            <div className="grid md:grid-cols-2 gap-6 lg:grid-cols-3 mt-2 mx-2 md:mx-5 lg:mx-10" data-aos="fade-up">
                {blogs.map(blog => <div key={blog._id} className="mb-0 overflow-hidden bg-white rounded shadow ">
                    <div className="relative overflow-hidden h-72">
                        <span className="absolute px-3 py-1 text-xs text-white bg-blue-500 rounded bottom-3 right-3">
                            {/* Gadgets */}
                        </span>
                        <img className="object-cover w-full h-full transition-all hover:scale-110"
                            src={blog.img} alt="" />
                    </div>
                    <div className="relative z-20 p-8 -mt-16 ">
                        <div className="flex items-center">
                            <img className="object-cover w-20 h-20 mb-4 border-4 border-white rounded-full "
                                src={blog?.AImg}
                                alt="" />
                            <div className="flex flex-col items-center ml-2">
                                <span
                                    className="block mt-3 mb-2 text-xs font-semibold text-blue-700 uppercase">
                                    {blog.blogPost?.author} • {blog.blogPost?.datePublished}
                                </span>
                            </div>
                        </div>
                        <h2 className="mb-3 text-2xl font-bold leading-9 text-blue-800">
                            {blog.blogPost?.title}
                        </h2>
                        <p className="mb-4 text-base leading-7 text-gray-400">
                            {blog.blogPost?.content[0]?.text}
                        </p>
                        <a className="flex items-center text-sm font-semibold" href="#">
                            <Link to={`/blog/${blog._id}`}>   <div className="flex items-center px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600">
                                More Details
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor"
                                    className="ml-1" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd"
                                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                                    </path>
                                </svg>
                            </div></Link>
                        </a>
                    </div>
                </div>)}
            </div>
            <div className="mb-40"></div>
        </div >
    );
};

export default Blog;