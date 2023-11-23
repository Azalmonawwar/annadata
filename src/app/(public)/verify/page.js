'use client'
import { useEffect } from "react"
import toast from "react-hot-toast"
const page = () => {
    useEffect(()=>{
        toast.success("Email Verifed.")
    })
  return (
    <div className="text-center my-20 py-20">
      <h1 className="text-6xl">Email Verified</h1>
    </div>
  )
}

export default page
