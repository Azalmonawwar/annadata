// src/components/Login.js
'use client'
import { forgetPass } from '@/lib/appwrite';
import Link from 'next/link';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

function ForgotPass() {
    const [formData, setFormData] = useState({
        email: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await forgetPass(email);
            console.log(response);
            if (response) {
                setFormData({ email: '' })
            }
            toast.success('Password reset link sent to your email');
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center text-black pt-28 ">
            <div className="bg-white p-8 rounded  sm:w-96 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
                <h2 className="text-3xl font-semibold text-center mb-6">Forgot Password</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-gray-700 font-semibold mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full border  rounded-lg px-3 py-2 "
                            placeholder="Enter your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white rounded-lg py-2 px-4 hover:bg-blue-600 focus:outline-none focus:bg-blue-600 w-full"
                    >
                        Submit
                    </button>
                </form>
                <div className="mt-4 text-center">
                    <Link href="/login" className="text-blue-500 hover:underline">
                        Click Here to Login
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

export default ForgotPass;
