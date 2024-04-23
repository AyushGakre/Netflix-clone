import React from 'react'
import Image from 'next/image'
import logo from "@/app/images/logo.png";
const Navbar = () => {
  return (
    <nav className=' text-white py-4 px-4'>
        <div className='flex flex-row gap-5'>
        <Image src={logo} alt="logo" className=" h-7 w-24"></Image>
        <div className=' cursor-pointer'>Home</div>
        <div className=' cursor-pointer'>Film</div>
        <div className=' cursor-pointer'>Series</div>
        <div className=' cursor-pointer'>New & popular</div>
        <div className=' cursor-pointer'>My list</div>
        
        </div>
    </nav>
  )
}

export default Navbar