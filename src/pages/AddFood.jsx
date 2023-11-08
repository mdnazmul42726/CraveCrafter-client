import { useContext, useEffect } from 'react';
import img from '../assets/rijKyMB7T.gif';
import Navbar from '../components/Navbar';
import { AuthContext } from '../AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';

function AddFood() {
    const { user } = useContext(AuthContext);

    const handleAddFood = (event) => {
        event.preventDefault();
        const form = event.target;
        const food_name = form.foodName.value;
        const food_img_url = form.foodImg.value;
        const food_category = form.category.value;
        const quantityString = form.quantity.value;
        const quantity = parseInt(quantityString);
        const origin = form.origin.value;
        const addedBy = user.displayName;
        const email = user.email;
        const priceString = form.price.value;
        const price = parseFloat(priceString);
        // const price = form.price.value;
        const description = form.description.value;
        const newFood = { food_category, food_img_url, food_name, quantity, origin, description, addedBy, email, price };

        if (!price) {
            Swal.fire({
                title: 'Invalid price!',
                text: "Can't give anything without a number in the price field. Because it will be difficult to calculate the price later",
                icon: 'error'
            })
            return
        }
        if (!quantity) {
            Swal.fire({
                title: 'Invalid quantity!',
                text: "Can't give anything without a number in the quantity field. Because it will be difficult to calculate the price later",
                icon: 'error'
            })
            return
        }

        axios.post('http://localhost:5000/add-food', newFood).then(res => {
            if (res.data.insertedId) {
                Swal.fire({
                    title: 'Food added successfully',
                    text: 'Now your added food can be seen on all food page',
                    icon: 'success'
                });

                form.reset();
            }
        }).catch(err => console.log(err));
    };

    useEffect(() => {
        document.title = 'Add Food'
    }, []);

    return (
        <div className="">
            <Navbar />
            <section className="py-16 overflow-hidden bg-gray-100" data-aos="fade-left">
                <div className=" text-center md:text-left md:ml-[70px] mb-3">
                    <h2 className='text-xl font-mono '>Hi, <span className='text-red-600'>{user.displayName}</span> </h2>
                    <p className='font-mono'>Add your own food item now!</p>
                </div>
                <div className="max-w-6xl px-4 mx-auto">
                    <div className="p-8 px-4 bg-white">
                        <div className="grid grid-cols-1 lg:grid-cols-[30%,1fr] gap-6">
                            <div>
                                <img src={img} className='w-[80%]' alt="" />
                            </div>
                            <div>
                                <form onSubmit={handleAddFood}>
                                    <div className="md:px-4 mb-6 w-full">
                                        <label className="block mb-2 text-sm font-medium">Food Name</label>
                                        <input
                                            className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded"
                                            type="text"
                                            name="foodName"
                                            placeholder="Enter Food name"
                                            required
                                        />
                                    </div>
                                    <div className="md:px-4 mb-6 w-full">
                                        <label className="block mb-2 text-sm font-medium">Food Image</label>
                                        <input
                                            className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded"
                                            type="text"
                                            name="foodImg"
                                            placeholder="Enter a name"
                                            required
                                        />
                                    </div>
                                    <div className="md:flex w-full">
                                        <div className="px-4 mb-6 md:w-1/2">
                                            <label className="block mb-2 text-sm font-medium">Food Category</label>
                                            <input
                                                className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded"
                                                type="text"
                                                name="category"
                                                placeholder="Enter food Category"
                                            />
                                        </div>
                                        <div className="md:px-4 mb-6 md:w-1/2">
                                            <label className="block mb-2 text-sm font-medium">Quantity </label>
                                            <input
                                                className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded"
                                                type="number"
                                                name="quantity"
                                                placeholder=" Enter Available Quantity"
                                            />
                                        </div>
                                    </div>
                                    <div className="md:flex w-full">
                                        <div className="md:px-4 mb-6 md:w-1/2">
                                            <label className="block mb-2 text-sm font-medium">Food Origin</label>
                                            <input
                                                className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded"
                                                type="text"
                                                name="origin"
                                                placeholder="Enter Food Origin"
                                            />
                                        </div>
                                        <div className="md:px-4 mb-6 md:w-1/2">
                                            <label className="block mb-2 text-sm font-medium"> Price</label>
                                            <input
                                                className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded"
                                                type="text"
                                                name="price"
                                                placeholder="Enter Food Price"
                                            />
                                        </div>
                                    </div>
                                    <div className="md:px-4 mb-6 w-full">
                                        <label className="block mb-2 text-sm font-medium">Short Description</label>
                                        <textarea className='block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded' name="description" id="" cols="30" rows="7"></textarea>
                                    </div>
                                    <div className="md:px-4">
                                        <div className="flex">
                                            <button type="submit" className="inline-block px-6 py-2.5 bg-red-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-600 hover:shadow-lg">
                                                Add Food
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AddFood;
