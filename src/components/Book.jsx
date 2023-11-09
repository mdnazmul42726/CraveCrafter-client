
const Book = () => {
    return (
        <div>
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

export default Book;