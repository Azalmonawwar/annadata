'use client'
import { deleteData, showDB } from "@/lib/appwrite"
import { useEffect,useState } from "react";

const ListRequest = () => {
const [data,setData] = useState([]);
const getData= async () =>{
  const data1 = await showDB();
  return (data1.documents.reverse())

}
useEffect(() => {
  
  demo()
  
}, [data])
  const demo =async () =>{
    const res = await getData();    
    setData(res)
  }

  const deleteRow = async (id) =>{
    const mes = confirm("Are You sure to delete ?")
    if(mes){
      const res = await deleteData(id)
    }
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

               {
                data.map((elem)=>{
                  return(
                    <tr>
                  <td className="px-4 py-4 text-sm font-medium text-gray-700 text-gray-200 whitespace-nowrap">
                    <div className="inline-flex items-center gap-x-3">
                      
                      <span>{elem.name}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-500 text-gray-300 whitespace-nowrap">
                    {elem.mobile}
                  </td>
                  <td className="px-4 py-4 text-sm font-medium text-gray-700 text-gray-200 whitespace-nowrap">
                    <div className="inline-flex items-center gap-x-3">
                      
                      <span>{elem.address}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-sm font-medium text-gray-700 text-gray-200 whitespace-nowrap">
                    <div className="inline-flex items-center gap-x-3">
                      
                      <span>{elem.pin_code}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-sm font-medium text-gray-700 text-gray-200 whitespace-nowrap">
                    <div className="inline-flex items-center gap-x-3">
                      
                      <span>{elem.quantity} </span>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-sm whitespace-nowrap">
                    <div className="flex items-center gap-x-6">
                      <button onClick={()=>deleteRow(elem.$id)} className="text-blue-500 transition-colors duration-200 hover:text-indigo-500 hover:text-indigo-500 focus:outline-none">
                        Completed
                      </button>
                      
                    </div>
                  </td>
                </tr>
                  )
                })
               }
                
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

  </section>
</>

  )
}

export default ListRequest
