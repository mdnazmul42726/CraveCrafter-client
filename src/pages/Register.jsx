import { Link } from 'react-router-dom';
import img from '../assets/1547c11ae29089c573614ed932e8cf4a.jpg'
import { FaFacebook, FaGithub, FaGoogle, FaTwitter } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider';
import toast, { Toaster } from 'react-hot-toast';
import { updateProfile } from 'firebase/auth';
import { auth } from '../firebase.init';

const Register = () => {
    const { registerUserWithEmailAndPassword, user , popupSignInWithGithub, popupSignInWithGoogle} = useContext(AuthContext);
    console.log(user);

    const handleRegister = (event) => {
        event.preventDefault();
        const toastId = toast.loading('working...');

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        registerUserWithEmailAndPassword(email, password).then(result => {
            console.log(result.user)

            updateProfile(auth.currentUser, { displayName: name })
            toast.success('Account created.', { id: toastId })
        }).catch(err => {
            console.log(err);
            toast.error(err.code, { id: toastId });
        });
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
                    <div className="mr-20 w-1/2 hidden md:flex">
                        <img src={img} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleRegister}>
                            <h1 className="text-3xl font-bold">Register</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="name" name='name' placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="Password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-5">
                                <button className="btn bg-[#F34949] px-7 hover:bg-red-600 text-white rounded-md">Register</button>
                            </div>
                        </form>
                        <h3 className='text-center'>Or Sign Up with</h3>
                        <div className="flex justify-center gap-3 text-xl mt-3 mb-4">
                            {/* <FaFacebook className='text-sky-700 cursor-pointer' /> */}
                            <FaGithub className='text-sky-800 cursor-pointer' onClick={ ()=> handleSocialLogin(popupSignInWithGithub)} />
                            <FaGoogle className='text-red-600 cursor-pointer' onClick={()=> handleSocialLogin(popupSignInWithGoogle)} />
                        </div>
                        <p className='mb-5 text-center'>Already have an account? <Link className='text-red-500 font-bold' to={"/login"}>Login</Link></p>
                    </div>
                </div>
            </div>
            <div><Toaster /></div>
        </div>
    );
};

export default Register;