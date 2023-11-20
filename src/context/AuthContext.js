'use client'
import { getCurrentUser } from '@/lib/appwrite'
import { createContext, useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
export const intialUser = {
    name: '',
    email: '',
}

const intialState = {
    user: intialUser,
    isLoading:false,
    isAuth: false,
    setIsAuth: () => { },
    setUser: () => { },
    setIsLoading: () => { },
}


const AuthContext = createContext(intialState);

const AuthContextProvider = ({ children }) => {
    const router = useRouter();

    const [user, setUser] = useState({
        name: '',
        email: '',
    })
    const [isAuth, setIsAuth] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    async function checkAuth() {
        setIsLoading(true);
        const res = await getCurrentUser();
        
        if (res) {
            setIsAuth(true);
            setIsLoading(false);
            setUser({ name: res.name, email: res.email });
            router.push('/dash');

        }
    }

    useEffect(() => {
        checkAuth();
        
        console.log(isAuth);
    }, [])
    
    return (
        <AuthContext.Provider value={{ user, isAuth, isLoading, setIsAuth, setUser, setIsLoading }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider

export const useUser = () => useContext(AuthContext)