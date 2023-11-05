import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../assets/050270aa95e1685d73bfc48562c784b5.jpg'
import { FaFacebook, FaGithub, FaGoogle, FaTwitter } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider';

const Login = () => {
    const { logInWithEmailAndPassword, popupSignInWithGithub, popupSignInWithGoogle, isLoading, user } = useContext(AuthContext);

    const handleSignIn = (evant) => {
        evant.preventDefault();
        const form = evant.target;
        const email = form.email.value;
        const password = form.password.value;

        logInWithEmailAndPassword(email, password).then(result => console.log(result.user)).catch(err => console.log(err))
    };

    const handleSocialLogin = (media) => {
        media().then(result => {
            console.log(result.user);
        }).catch(err => console.log(err))
    }

    return (
        <div>
            <Navbar />
            <div className="hero min-h-screen mt-20">
                <div className="hero-content -mt-52 flex-col lg:flex-row">
                    <div className="mr-20 hidden md:flex">
                        <img src={img} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleSignIn}>
                            <h1 className="text-3xl font-bold">Login</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-2">
                                <button className="btn bg-[#F34949] px-7 hover:bg-red-600 text-white rounded-md">Login</button>
                            </div>
                        </form>
                        <h3 className='text-center'>Or Sign in with</h3>
                        <div className="flex justify-center gap-3 text-xl mt-3 mb-4">
                            {/* <FaFacebook className='text-sky-700 cursor-pointer' /> */}
                            <FaGithub className='text-sky-800 cursor-pointer' onClick={() => handleSocialLogin(popupSignInWithGithub)} />
                            <FaGoogle className='text-red-600 cursor-pointer' onClick={() => handleSocialLogin(popupSignInWithGoogle)} />
                        </div>
                        <p className='mb-5 text-center'>Don't have an account? <Link className='text-red-500 font-bold' to={"/register"}>Register</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;