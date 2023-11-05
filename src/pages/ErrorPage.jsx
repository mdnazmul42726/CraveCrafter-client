import { Link } from "react-router-dom";

const ErrorPage = () => {

    return (
        <div>
            <section className=" md:h-screen font-poppins ">
                <div className="flex items-center h-screen">
                    <div className="justify-center max-w-6xl  px-4 mx-auto text-center ">
                        <div className="w-full p-8 bg-white rounded-md">
                            <h1
                                className="inline-block mb-5 font-bold text-7xl xl:text-9xl lg:text-9xl">
                                404
                            </h1>
                            <h2 className="mb-4 text-2xl font-semibold lg:text-4xl dark:text-gray-400">
                                Oops! Something wents wrong!</h2>
                            <p className="mb-5 text-xs text-gray-600 dark:text-gray-400">
                                Sorry! we are unable to find the page that you are looking for...
                            </p>
                            <div className="flex flex-wrap items-center justify-center">
                                <Link to={"/"}><button
                                    className="px-4 py-3 mb-8 mr-0 text-base font-medium text-gray-100 uppercase bg-red-600 rounded-md hover:bg-red-800 lg:mb-0 lg:mr-4 md:w-auto">
                                    Back to home
                                </button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ErrorPage;