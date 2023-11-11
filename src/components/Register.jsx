
const RegistrationForm = () => {
  return (
    <section id='register' className="min-h-screen bg-blue-700 from-blue-600 via-blue-800 to-blue-900 dark:from-gray-700 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto flex min-h-screen flex-col px-6 py-12">
        <div className="flex-1 lg:-mx-6 lg:flex lg:items-start md:items-center">
          <div className="text-white lg:ml-[120px] lg:mt-[100px]  lg:w-1/2">
            <h1 className="text-3xl font-semibold lg:text-5xl">Get a Request for Donate</h1>

            <p className="mt-6 max-w-xl">Ask us everything and we would love to hear from you</p>

            <div className="mt-6 space-y-8 md:mt-8">
              <p className="-mx-2 flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="mx-2 h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>

                <span className="mx-2 w-85 truncate text-white">14, Mango, Jamshedpur, Jharkhand 832304 </span>
              </p>

              <p className="-mx-2 flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="mx-2 h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l-1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>

                <span className="mx-2 w-72 truncate text-white">+91-7892202101</span>
              </p>

              <p className="-mx-2 flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="mx-2 h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>

                <span className="mx-2 w-72 truncate text-white">contact@annadata.com</span>
              </p>
            </div>
          </div>

          <div className="mt-8 lg:mx-6 lg:w-1/2">
            <div className="mx-auto w-full overflow-hidden rounded-xl bg-white px-8 py-10 shadow-2xl dark:bg-white lg:max-w-xl">
              <h1 className="text-2xl font-medium text-black">Extra Food Pick Up Request</h1>

              <form className="mt-6">
                <div className="flex-1">
                  <label className="mb-2 block text-sm text-black">Full Name</label>
                  <input type="text" placeholder="John Doe" className="mt-2 block w-full rounded-md border border-gray-400  bg-white px-5 py-3 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 " />
                </div>

                <div className="mt-6 flex-1">
                  <label className="mb-2 block text-sm text-black">Mobile Number</label>
                  <input type="text" placeholder="Mobile" className="mt-2 block w-full rounded-md border border-gray-400  bg-white px-5 py-3 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" />
                </div>

                <div className="mt-6 flex-1">
                  <label className="mb-2 block text-sm text-black">Address</label>
                  <input type="text" placeholder="Full Address" className="mt-2 block w-full rounded-md border border-gray-400  bg-white px-5 py-3 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" />
                </div>

                <div className="mt-6 flex-1">
                  <label className="mb-2 block text-sm text-black">Pin Code</label>
                  <input type="number" placeholder="Pin Code"className="mt-2 block w-full rounded-md border border-gray-400  bg-white px-5 py-3 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" />
                </div>

                <div className="mt-6 w-full">
                  <label className="mb-2 block text-sm text">Explain Quantity</label>
                  <textarea className="mt-2 block w-full rounded-md border border-gray-400  bg-white px-5 py-3 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 md:h-25" placeholder="Food Name and Quantity"></textarea>
                </div>

                <button className="mt-6 w-full transform rounded-md bg-blue-600 px-6 py-3 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-300 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;
