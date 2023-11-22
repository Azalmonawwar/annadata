'use client'
import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";

const Footer = () => {
  const [formData, setFormData] = useState({
    email: ''
});

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
};


const handleSubmit = async (e) => {
  e.preventDefault();

  try {
      const response = await fetch('/api/subscribe', {
          method: 'POST',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
              email: formData.email
          })
      })

      // Set the status based on the response from the API route
      if (response.status === 200) {
          setFormData({
              email: ''
          })
          toast.success(`Subscribe Successfull.`)
          // console.log("Successfull");
      } else if (response.status===400){
        toast.error("Already Registor");
      }
    } catch (error) {
      console.log(error)
      toast.error("Something went Wrong",error)
  }
 
}
  return (
    <footer className={`bg-gray-900 ` }>
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <h1 className="max-w-lg text-xl font-semibold tracking-tight text-white xl:text-2xl">Subscribe our newsletter to get updates.</h1>

            <div className="mx-auto mt-6 flex flex-col space-y-3 md:flex-row md:space-y-0">
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="rounded-md border px-4 py-2 focus:border-blue-400 focus:outline-none focus:ring-blue-300 focus:ring-opacity-40 border-gray-600 bg-gray-900 text-gray-300 "
                placeholder="Email Address"
              />

              <button onClick={handleSubmit}
                className="w-full transform rounded-lg bg-gray-800 px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-80 md:mx-4 md:w-auto"
              >
                Subscribe
              </button>
            </div>
          </div>

          <div>
            <p className="font-semibold text-white">Quick Links</p>

            <div className="mt-5 flex flex-col items-start space-y-2">
              <a href="/" className="transition-colors duration-300 text-gray-300 hover:underline hover:text-gray-400">
                Home
              </a>
              <a href="/contact" className="transition-colors duration-300 text-gray-300 hover:underline hover:text-gray-400">
                Who We Are
              </a>
              <a href="/about" className="transition-colors duration-300 text-gray-300 hover:underline hover:text-gray-400">
                Our Philosophy
              </a>
            </div>
          </div>

          <div>
            <p className="font-semibold text-white">Top Links</p>

            <div className="mt-5 flex flex-col items-start space-y-2">
            <a href="/#register" className="transition-colors duration-300 text-gray-300 hover:underline hover:text-gray-400">
                Donate Food
              </a>
              <a href="/#Donate" className="transition-colors duration-300 text-gray-300 hover:underline hover:text-gray-400">
                Donate Fund
              </a>
              <a href="/#feedback" className="transition-colors duration-300 text-gray-300 hover:underline hover:text-gray-400">
                Feedback
              </a>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-200 dark:border-gray-700 md:my-8" />

        <div className="flex items-center justify-between">
          <a href="#">
            {/* <img className="h-7 w-auto" src="./logo.png" alt="" /> */}
            <Image className="" src="/logo.png" alt="logo" width="100" height="100"/>
          </a>


        </div>
      </div>
    </footer>
  );
};

export default Footer;
