import { useEffect } from "react";
import Book from "../components/Book";
import Navbar from "../components/Navbar";


const BookP = () => {

    useEffect(() => {
        document.title = 'CraveCrafter | Reservation'
    }, []);
    
    return (
        <div>
            <Navbar />
            <Book />
        </div>
    );
};

export default BookP;