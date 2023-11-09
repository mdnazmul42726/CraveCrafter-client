import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Team from "../components/Team";

const Teamp = () => {

    useEffect(() => {
        document.title = 'CraveCrafter | Team'
    }, []);
    return (
        <div>
            <div className="">
                <Navbar/>
            </div>
            <Team />
        </div>
    );
};

export default Teamp;