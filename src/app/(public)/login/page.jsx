// src/components/Login.js
'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import { loginUserAccoutn } from '@/lib/appwrite';
import { useRouter } from 'next/navigation';
import { useUser } from '@/context/AuthContext';
function Login() {
    const router = useRouter();
    const { setIsAuth } = useUser();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await loginUserAccoutn(formData.email, formData.password);
            if (res) {
                // setUser(formData.name, formData.email)
                setIsAuth(true);
                router.push('/dash')
            }
        } catch (error) {
            console.log('somethign went wrong in login', error)
        }
        // console.log('Form data submitted:', formData);
    };

    return (
        <div className="min-h-screen flex items-center justify-center text-black pt-28 ">
            <div className="bg-white p-8 rounded  sm:w-96 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
                <h2 className="text-3xl font-semibold text-center mb-6">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                            Email
                        </label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            className="w-full border rounded-lg px-3 py-2 "
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="w-full border
                            rounded-lg px-3 py-2"
                            placeholder="Enter your password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white rounded-lg py-2 px-4 hover:bg-blue-600 focus:outline-none focus:bg-blue-600 w-full"
                    >
                        Login
                    </button>
                </form>
                <div className="mt-4 text-center">
                    <Link href="/forgetpass" className="text-blue-500 hover:underline">
                        Forgot Password?
                    </Link>
                </div>
                <div className="mt-4 text-center">
                    <p className="text-gray-600">
                        Don&rsquo;t have an account?{' '}
                        <Link href="/signup" className="text-blue-500 hover:underline">
                            Register
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;
