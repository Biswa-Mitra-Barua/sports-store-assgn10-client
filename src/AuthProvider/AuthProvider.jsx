import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, onAuthStateChanged, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.init";
import { GoogleAuthProvider } from "firebase/auth";
export const authContext = createContext();

const AuthProvider = ({ routes }) => {
    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const handleRegister = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const handleLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const handleGoogleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    }
    const manageProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }
    const handleLogout = () => {
        return signOut(auth);
    }

    const authInfo = {
        handleLogout, 
        handleGoogleLogin, 
        handleLogin, 
        handleRegister, 
        user, 
        setUser, 
        manageProfile, 
        loading
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
            }
            else {
                setUser(null)
            }
            setLoading(false)
        })
        return () => {
            unSubscribe();
        }
    }, [])

    return (
        <div>
            <authContext.Provider value={authInfo}>
                {
                    routes
                }
            </authContext.Provider>
        </div>
    );
};

export default AuthProvider;