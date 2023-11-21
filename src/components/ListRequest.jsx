'use client'
import { showDB } from "@/lib/appwrite"
import { useEffect,useState } from "react";

const ListRequest = () => {
const [data,setData] = useState();
const getData= async () =>{
  const data1 = await showDB();
  return (data1.documents)

}
useEffect(() => {
  
  demo()
}, [])
  const demo =async () =>{
    const res = await getData();
    console.log(res)    
  }

  return (
    
    <>
  {/* component */}
  <section className="container px-4 mx-auto ">
    <div className="flex flex-col">
      <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div className="overflow-hidden border border-gray-200  md:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200 ">
              <thead className="bg-gray-50">
                <tr>
                  
                  <th
                    scope="col"
                    className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 text-gray-400"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 text-gray-400"
                  >
                    Mobile
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 text-gray-400"
                  >
                    Address
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 text-gray-400"
                  >
                    Pincode
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 text-gray-400"
                  >
                    Quantity
                  </th>
                  <th scope="col" className="relative py-3.5 px-4">
                    <span className="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 divide-gray-700 bg-gray-900">

               
                <tr>
                  <td className="px-4 py-4 text-sm font-medium text-gray-700 text-gray-200 whitespace-nowrap">
                    <div className="inline-flex items-center gap-x-3">
                      
                      <span>Amit</span>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-500 text-gray-300 whitespace-nowrap">
                    8809886409
                  </td>
                  <td className="px-4 py-4 text-sm font-medium text-gray-700 text-gray-200 whitespace-nowrap">
                    <div className="inline-flex items-center gap-x-3">
                      
                      <span>Jamshedpur</span>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-sm font-medium text-gray-700 text-gray-200 whitespace-nowrap">
                    <div className="inline-flex items-center gap-x-3">
                      
                      <span>832304</span>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-sm font-medium text-gray-700 text-gray-200 whitespace-nowrap">
                    <div className="inline-flex items-center gap-x-3">
                      
                      <span>Rice </span>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-sm whitespace-nowrap">
                    <div className="flex items-center gap-x-6">
                      <button className="text-gray-500 transition-colors duration-200 hover:text-indigo-500 text-gray-300 hover:text-indigo-500 focus:outline-none">
                        Approve
                      </button>
                      <button className="text-blue-500 transition-colors duration-200 hover:text-indigo-500 focus:outline-none">
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div className="flex items-center justify-between mt-6">
      <a
        href="#"
        className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 bg-gray-900 text-gray-200 border-gray-700 hover:bg-gray-800"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-5 h-5 rtl:-scale-x-100"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
          />
        </svg>
        <span>previous</span>
      </a>
      <div className="items-center hidden md:flex gap-x-3">
        <a
          href="#"
          className="px-2 py-1 text-sm text-blue-500 rounded-md bg-gray-800 bg-blue-100/60"
        >
          1
        </a>
        <a
          href="#"
          className="px-2 py-1 text-sm text-gray-500 rounded-md hover:bg-gray-800 text-gray-300 hover:bg-gray-100"
        >
          2
        </a>
        <a
          href="#"
          className="px-2 py-1 text-sm text-gray-500 rounded-md hover:bg-gray-800 text-gray-300 hover:bg-gray-100"
        >
          3
        </a>
        <a
          href="#"
          className="px-2 py-1 text-sm text-gray-500 rounded-md hover:bg-gray-800 text-gray-300 hover:bg-gray-100"
        >
          ...
        </a>
        <a
          href="#"
          className="px-2 py-1 text-sm text-gray-500 rounded-md hover:bg-gray-800 text-gray-300 hover:bg-gray-100"
        >
          12
        </a>
        <a
          href="#"
          className="px-2 py-1 text-sm text-gray-500 rounded-md hover:bg-gray-800 text-gray-300 hover:bg-gray-100"
        >
          13
        </a>
        <a
          href="#"
          className="px-2 py-1 text-sm text-gray-500 rounded-md hover:bg-gray-800 text-gray-300 hover:bg-gray-100"
        >
          14
        </a>
      </div>
      <a
        href="#"
        className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 bg-gray-900 text-gray-200 border-gray-700 hover:bg-gray-800"
      >
        <span>Next</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-5 h-5 rtl:-scale-x-100"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          />
        </svg>
      </a>
    </div>
  </section>
</>

  )
}

export default ListRequest
