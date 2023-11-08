import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "./firebase.init";
import axios from "axios";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState([]);

    // Create a password-based account
    const registerUserWithEmailAndPassword = (email, password) => {
        setIsLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // Sign in a user with an email address and password
    const logInWithEmailAndPassword = (email, passsword) => {
        setIsLoading(true)
        return signInWithEmailAndPassword(auth, email, passsword);
    };

    // Authenticate Using Google
    const googleProvider = new GoogleAuthProvider();
    const popupSignInWithGoogle = () => {
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider);
    };

    // Authenticate Using github
    const githubProvider = new GithubAuthProvider();
    const popupSignInWithGithub = () => {
        setIsLoading(true);
        return signInWithPopup(auth, githubProvider);
    };

    const logOut = () => {
        return signOut(auth)
    };

    // Set an authentication state observer and get user data

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                const loggedInUser = { email: currentUser.email };
                axios.post('https://crave-crafter-server.vercel.app/jwt', loggedInUser, { withCredentials: true }).then(res => {
                    console.log(res.data);
                }).catch(err => console.log(err));
            }
            setUser(currentUser)
            setIsLoading(false)
        });
        return () => unsubscribe();
    }, [])

    const authentication = { registerUserWithEmailAndPassword, logInWithEmailAndPassword, popupSignInWithGithub, popupSignInWithGoogle, logOut, isLoading, user }

    return <AuthContext.Provider value={authentication}>{children}</AuthContext.Provider>
};

export default AuthProvider;