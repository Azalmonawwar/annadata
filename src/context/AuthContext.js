'use client'
import { getCurrentUser } from '@/lib/appwrite'
import { createContext, useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
export const intialUser = {
    id: '',
    name: '',
    gender: '',
    address: '',
    pincode: '',
    contact: '',
    email: ''
}

const intialState = {
    user: intialUser,
    isLoading: false,
    isAuth: false,
    setIsAuth: () => { },
    setUser: () => { },
    setIsLoading: () => { },
    checkAuth: async () => false
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
        try {
            const currentAccount = await getCurrentUser();
            if (currentAccount) {
                setUser({
                    id: currentAccount.$id,
                    name: currentAccount.name,
                    gender: currentAccount.gender,
                    address: currentAccount.address,
                    pincode: currentAccount.pincode,
                    contact: currentAccount.contact,
                    email: currentAccount.email,
                });

                setIsAuth(true);
                return true;
            }

            return false;
        } catch (error) {
            console.error(error);
            return false;
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        const cookieFallback = localStorage.getItem("cookieFallback");
        if (
            cookieFallback === "[]" ||
            cookieFallback === null ||
            cookieFallback === undefined
        ) {
            router.push("/login");
        }
        checkAuth().then((data) => {
            if (data) {
                router.push("/dash");
            }
        });
    }, [isAuth])

    return (
        <AuthContext.Provider value={{ user, isAuth, isLoading, setIsAuth, setUser, setIsLoading, checkAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider

export const useUser = () => useContext(AuthContext)