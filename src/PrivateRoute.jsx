import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import loading from './assets/cad74d565a8d1c60dfb386633afb6b62_w200.gif';
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({ children }) => {
    const { isLoading, user } = useContext(AuthContext);
    const location = useLocation();

    if (isLoading) {
        return <div className='min-h-screen'>
            <div className="flex justify-center items-center min-h-screen">
                <img src={loading} className='rounded-full' alt="" />
            </div>
        </div>
    }

    if (!isLoading && user) {
        return children
    } else {
        return <Navigate state={location.pathname} to={"/login"} />
    }

};

export default PrivateRoute;