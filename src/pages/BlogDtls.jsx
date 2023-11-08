import { useLoaderData } from "react-router-dom";
import Navbar from "../components/Navbar";


function BlogPost() {
    const data = useLoaderData();
    const content = data?.blogPost?.content;
    console.log(content);

    return (
        <div className="">
            <Navbar />
            <div className="md:px-10 px-4 py-6 mx-auto bg-gray-50 pb-40" data-aos="fade-left">
                {/* Author and Categories */}
                <div className="max-w-6xl md:px-10 py-6 mx-auto  ">
                    {/* <div className="md:flex hidden items-center justify-start mt-4 mb-4">
                    <a href="#" className="px-2 py-1 font-bold bg-red-400 text-white rounded-lg hover:bg-gray-500 mr-4">Django</a>
                    <a href="#" className="px-2 py-1 font-bold bg-red-400 text-white rounded-lg hover-bg-gray-500 mr-4">Python</a>
                    <a href="#" className="px-2 py-1 font-bold bg-red-400 text-white rounded-lg hover-bg-gray-500">Web Development</a>
                </div> */}

                    {/* Post Heading */}
                    <div className="mt-2">
                        <a className=" text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-purple-500 hover:underline">{data.blogPost?.title}</a>

                        {/* Post Views */}
                        {/* <div className="flex justify-start items-center mt-2">
                        <p className="text-sm text-green-500 font-bold bg-gray-100 rounded-full py-2 px-2 hover:text-red-500">3000</p>
                        <p className="text-sm text-gray-400 font-bold ml-5">Views</p>
                    </div> */}

                        {/* Author Avatar and Name */}
                        <div className="font-light text-gray-600">
                            <a href="#" className="flex items-center mt-6 mb-6">
                                <img src={data?.AImg} alt="Author Avatar" className="hidden object-cover w-14 h-14 mx-4 rounded-full sm:block" />
                                <h1 className="font-bold text-gray-700 hover:underline">By <span className="text-red-600">{data.blogPost?.author}</span> </h1>
                            </a>
                        </div>
                    </div>

                    {/* Post Content */}
                    <div className="max-w-4xl mx-auto text-xl lg:text-xxl text-gray-700 mt-4 rounded bg-gray-100">
                        {/* Content Body */}
                        <div>
                            <div className="mt-2 p-6 mb-7">
                                <h2 className="font-bold text-red-500">{content[0]?.sectionTitle}</h2>
                                <p className="mt-2 ml-5 md:ml-7 lg:ml-10">{content[0]?.text}</p>
                            </div>
                            <div className=" p-6 mb-7">
                                <h2 className="font-bold text-red-500">{content[1]?.sectionTitle}</h2>
                                <p className="mt-2 ml-5 md:ml-7 lg:ml-10">{content[1]?.text}</p>
                            </div>
                            <div className="mt-1 p-6 mb-7">
                                <h2 className="font-bold text-red-500">{content[2]?.sectionTitle}</h2>
                                <p className="mt-2 ml-5 md:ml-7 lg:ml-10">{content[2]?.text}</p>
                            </div>
                            <div className="mt-2 p-6 mb-7">
                                <h2 className="font-bold text-red-500">{content[3]?.sectionTitle}</h2>
                                <p className="mt-2 ml-5 md:ml-7 lg:ml-10">{content[3]?.text}</p>
                            </div>
                            <div className="mt-2 p-6 mb-7">
                                <h2 className="font-bold text-red-500">{content[4]?.sectionTitle}</h2>
                                <p className="mt-2 ml-5 md:ml-7 lg:ml-10">{content[4]?.text}</p>
                            </div>
                            <div className="mt-2 p-6 mb-7">
                                <h2 className="font-bold text-red-500">{content[5]?.sectionTitle}</h2>
                                <p className="mt-2 ml-5 md:ml-7 lg:ml-10">{content[5]?.text}</p>
                            </div>
                            <div className="mt-2 p-6 mb-7">
                                <h2 className="font-bold text-red-500">{content[6]?.sectionTitle}</h2>
                                <p className="mt-2 ml-5 md:ml-7 lg:ml-10">{content[6]?.text}</p>
                            </div>
                            <div className="mt-2 p-6 mb-7">
                                <h2 className="font-bold text-red-500">{content[7]?.sectionTitle}</h2>
                                <p className="mt-2 ml-5 md:ml-7 lg:ml-10">{content[7]?.text}</p>
                            </div>
                            <div className="mt-2 p-6 mb-7">
                                <h2 className="font-bold text-red-500">{content[8]?.sectionTitle}</h2>
                                <p className="mt-2 ml-5 md:ml-7 lg:ml-10">{content[8]?.text}</p>
                            </div>
                            <div className="mt-2 p-6 mb-7">
                                <h2 className="font-bold text-red-500">{content[9]?.sectionTitle}</h2>
                                <p className="mt-2 ml-5 md:ml-7 lg:ml-10">{content[9]?.text}</p>
                            </div>
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogPost;
