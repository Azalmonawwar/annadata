'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

function Registration() {
    const [formData, setFormData] = useState({
        name: '',
        gender: '', // Change to select
        address: '',
        pincode: '',
        contact: '',
        email: '',
        password: '',
        // password_1:''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await fetch('/api/user/signup', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name:formData.name,
                gender:formData.gender,
                address:formData.address,
                pincode:formData.pincode,
                contact:formData.contact,
                email:formData.email,
                password:formData.password
            })
          })
    
          // Set the status based on the response from the API route
          if (response.status === 200) {
            setFormData({
                name:'',
                gender:'',
                address:'',
                pincode:'',
                contact:'',
                email:'',
                password:'',
                password_1:''
            })
            toast.success(`${formData.name} You have successfully Registerd please verify your email.`)
          } else {
            toast.error("Something went Wrong")
          }
        } catch (e) {
          console.log(e)
        }
    
      }

    const genderOptions = ['Male', 'Female', 'Other'];


    return (
        <div className=" min-h-screen flex items-center justify-center py-40 pb-15 ">
            <div className="bg-white p-8 rounded  w-[90%] shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
                <h2 className="text-3xl font-semibold text-center mb-6">Registration</h2>
                <form onSubmit={handleSubmit}>
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                               Full Name 
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full border-2 border-gray-300 rounded-lg px-3 py-2 focus:ring focus:ring-blue-400"
                                placeholder="Enter your name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="gender" className="block text-gray-700 font-semibold mb-2">
                                Gender
                            </label>
                            <select
                                id="gender"
                                name="gender"
                                className="w-full border-2 border-gray-300 rounded-lg px-3 py-2 focus:ring focus:ring-blue-400"
                                value={formData.gender}
                                onChange={handleChange}
                                required
                            >
                                <option value="" disabled>
                                    Select Gender
                                </option>
                                {genderOptions.map((option, index) => (
                                    <option key={index} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                                Address
                            </label>
                            <input
                                type="text"
                                id="address"
                                name="address"
                                className="w-full border-2 border-gray-300 rounded-lg px-3 py-2 focus:ring focus:ring-blue-400"
                                placeholder="Enter your Address"
                                value={formData.address}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                                Pincode
                            </label>
                            <input
                                type="number"
                                id="pincode"
                                name="pincode"
                                className="w-full border-2 border-gray-300 rounded-lg px-3 py-2 focus:ring focus:ring-blue-400"
                                placeholder="Enter your area Pincode"
                                value={formData.pincode}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="contact" className="block text-gray-700 font-semibold mb-2">
                                Contact Number
                            </label>
                            <input
                                type="number"
                                id="contact"
                                name="contact"
                                className="w-full border-2 border-gray-300 rounded-lg px-3 py-2 focus:ring focus:ring-blue-400"
                                placeholder="Enter your contact number"
                                value={formData.contact}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                             Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full border-2 border-gray-300 rounded-lg px-3 py-2 focus:ring focus:ring-blue-400"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="w-full border-2 border-gray-300 rounded-lg px-3 py-2 focus:ring focus:ring-blue-400"
                                placeholder="Enter your Password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                id="password_1"
                                name="password_1"
                                className="w-full border-2 border-gray-300 rounded-lg px-3 py-2 focus:ring focus:ring-blue-400"
                                placeholder="Enter your Password"
                                value={formData.password_1}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                    <button
                        type='submit'
                        className="bg-blue-500 text-white rounded-lg py-2 px-4 hover:bg-blue-600 focus:outline-none focus:bg-blue-600 w-[50%] mt-4 "
                    >
                        Register
                    </button>
                    </div>
                </form>
                <div className="mt-4 text-center">
                    <p className="text-gray-600">
                        Already have an account?{' '}
                        <Link href="/login" className="text-blue-500 hover:underline">
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Registration;
