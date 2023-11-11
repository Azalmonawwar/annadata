import React from 'react';

const Donate = () => {
  return (
    <div id='Donate' className="flex flex-col items-center justify-center min-h-screen p-10 text-gray-700 bg-gray-100 md:p-20 ">
      <h2 className="text-black text-3xl md:text-5xl font-extrabold">Donate and Support Us</h2>

      {/* Component Start */}
      <div className="flex flex-wrap items-center justify-center w-full max-w-4xl mt-8 ">
        <div className="flex flex-col flex-grow mt-8 overflow-hidden bg-white rounded-lg shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)]">
          <div className="flex flex-col items-center p-10 bg-pink-200">
            <span className="font-semibold">Padawan</span>
            <div className="flex items-center">
              <span className="text-3xl">&#8377;</span>
              <span className="text-5xl font-bold">100</span>
            </div>
          </div>
          <div className="p-10">
            <ul>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 text-green-600 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="ml-2">Lightsaber</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 text-green-600 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="ml-2">Robe</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 text-green-600 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="ml-2">Insurance</span>
              </li>
            </ul>
          </div>
          <div className="flex px-10 pb-10 justfy-center">
            <button className="flex items-center justify-center w-full h-12 px-6 text-sm uppercase bg-gray-200 hover:bg-blue-800 hover:text-white rounded-lg">
              Donate now
            </button>
          </div>
        </div>

        {/* Tile 2 */}
        <div className="flex flex-col flex-grow mt-8 overflow-hidden transform bg-white rounded-lg md:scale-110 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] mb-10">
          <div className="flex flex-col items-center p-10 bg-green-200 ">
            <span className="font-semibold">Jedi Knight</span>
            <div className="flex items-center">
              <span className="text-3xl">&#8377;</span>
              <span className="text-5xl font-bold">1-2000</span>
            </div>
          </div>
          <div className="p-10">
            <ul>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 text-green-600 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="ml-2 italic">Padawan +</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 text-green-600 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="ml-2">Solo missions</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 text-green-600 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="ml-2">Utility belt</span>
              </li>
            </ul>
          </div>
          <div className="flex px-10 pb-10 justfy-center">
            <button className="flex items-center justify-center w-full h-12 px-6 text-sm uppercase bg-gray-200 rounded-lg hover:bg-blue-800 hover:text-white">
              Donate now
            </button>
          </div>
        </div>

        {/* Tile 3 */}
        <div className="flex flex-col flex-grow overflow-hidden bg-white rounded-lg mt-19 shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)]">
          <div className="flex flex-col items-center p-10 bg-blue-200 ">
            <span className="font-semibold">Jedi Master</span>
            <div className="flex items-center">
              <span className="text-3xl">&#8377;</span>
              <span className="text-5xl font-bold">2000</span>
            </div>
          </div>
          <div className="p-10">
            <ul>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 text-green-600 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="ml-2 italic">Jedi Knight +</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 text-green-600 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="ml-2">Sit on council</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 text-green-600 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                 <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="ml-2">Stock options</span>
              </li>
            </ul>
          </div>
          <div className="flex px-10 pb-10 justfy-center">
            <button className="flex items-center justify-center w-full h-12 px-6 text-sm uppercase bg-gray-200 rounded-lg hover:bg-blue-800 hover:text-white">
              Donate now
            </button>
          </div>
        </div>
      </div>
      {/* Component End */}
      <hr class="w-48 h-1 mt-20 mx-auto bg-black border-0 rounded "/>
    </div>
    
  );
};

export default Donate;
