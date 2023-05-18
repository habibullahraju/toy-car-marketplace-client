import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';

const auth = getAuth(app);
export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);



    const handleRegister = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const handleLogin = (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const handleLogOut = ()=>{
        return signOut(auth)
    }
    const handleGoogleSignIn = ()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }



    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser);
            setLoading(false);
        })
        return ()=>{
            unsubscribe();
        }
    },[])

    const authInfo = {
        user,
        handleRegister,
        handleLogin,
        handleLogOut,
        handleGoogleSignIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;