import React from 'react'
import { FiTv } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { FaFire } from "react-icons/fa";
import { IoPeople } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { BiSolidPurchaseTag } from "react-icons/bi";

const Sidenav = () => {
  return (
    <div className='w-[18%] h-screen border-r-2 border-zinc-400 p-3 bg-gray-900 shadow-lg shadow-red-500 fixed'>
        <h1 className='flex gap-3 mx-auto font-bold text-2xl items-center text-center ml-8'><FaPhoneAlt className='text-blue-500'/>
        <span className='text-white'>MobileMania</span></h1>
        
        <nav className=' flex gap-3 flex-col text-zinc-400 text-xl'>
            <h1 className='font-semibold text-white text-xl mt-4 p-4'>New Feeds</h1>
            <Link className='hover:bg-blue-500 p-5 transition-all flex items-center gap-2 duration-300 rounded-lg hover:text-white'>
            <FaFire className='text-yellow-400'/>Trending</Link>
            <Link className='hover:bg-blue-500 flex items-center p-5 gap-2 transition-all duration-300 rounded-lg hover:text-white'>
            <IoPeople className='text-purple-500'/>Popular</Link>
            <Link className='hover:bg-blue-500 p-5 flex gap-2 items-center transition-all duration-300 rounded-lg hover:text-white'>
            <FaShoppingCart className='text-red-600'/>Cart</Link>
            <Link className='hover:bg-blue-500 p-5 transition-all duration-300 flex items-center gap-2 rounded-lg hover:text-white'>
            <BiSolidPurchaseTag className='text-green-500'></BiSolidPurchaseTag>Buyed</Link>
            <hr className='border-none h-[1px] bg-zinc-400'/>
            <h1 className='font-semibold text-white text-xl mb-3 p-4'>Information</h1>
            <Link className='hover:bg-blue-500 pl-5  flex gap-2 items-center transition-all duration-300 rounded-lg hover:text-white'>
            About</Link>
            <Link className='hover:bg-blue-500 pl-5 transition-all duration-300 flex items-center gap-2 rounded-lg hover:text-white'>
            Contact Us</Link>
        </nav>
    </div>
  )
}

export default Sidenav