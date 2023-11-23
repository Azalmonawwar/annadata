'use client'

import NavDash from '@/components/NavDash'
import Sidebar from '@/components/Sidebar'
import { useUser } from '@/context/AuthContext'
import { useEffect } from 'react'
import { useState } from 'react'
import Loader from '../loading'

const Profile = () => {

  const {user, isLoading}=useUser();
  console.log(user.email);
  const [data, setData] = useState({});
  const getData = async () => {
    try {
      const response = await fetch('/api/user', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            email:user?.email
        })
      })
      setData(response.user)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getData();
  }, [user])
  
  if(isLoading){
    return <Loader/>
  } else {
    

  
  return (
    <div className="min-h-screen bg-gray-50/50">
    <Sidebar/>
  <div className="p-4 xl:ml-80">
    <NavDash/>
    <div className="bg-gray-100">
    <h2 className="text-black mt-3 text-center text-3xl md:text-5xl font-extrabold">Profile</h2>
  <div className="container mx-auto my-5 p-5">
    <div className="no-wrap md:-mx-2 md:flex">
      {/* Left Side */}
      {/* Right Side */}
      <div className="mx-2 h-64 w-full ">
        {/* Profile tab */}
        {/* About Section */}
        <div className="rounded-sm bg-white p-3 shadow-sm">
          <div className="text-gray-700">
            <div className="grid text-sm md:grid-cols-2">
              <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold"> Name</div>
                <div className="px-4 py-2">{data?.name}</div>
              </div>  
              <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">Gender</div>
                <div className="px-4 py-2">{data?.gender}</div>
              </div>
              <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">Address</div>
                <div className="px-4 py-2">(data?.address)</div>
              </div>
              <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">Pin Code</div>
                <div className="px-4 py-2">{data?.pincode}</div>
              </div>
              <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">Contact No.</div>
                <div className="px-4 py-2">+91 {data?.contact}</div>
              </div>
              
              <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">Email.</div>
                <div className="px-4 py-2">
                  <a className="text-blue-800" href="mailto:jane@example.com">
                    {data?.email}
                  </a>
                </div>
              </div>
              
              
            </div>
          </div>
          <button className="focus:shadow-outline hover:shadow-xs my-4 block w-full rounded-lg p-3 text-sm font-semibold text-blue-800 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none">
            Request for Changes
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
      </div>
    
  )
}
}
export default Profile
