import React from 'react'
import { GoSearch } from "react-icons/go";
import { useState } from 'react';
import { FaUserCircle } from "react-icons/fa";

const Topnav = () => {
    const [query,setQuery] = useState('');


  return (
    <div className='w-full h-[10vh] relative flex items-center'>
        <div className='h-[10vh] w-full flex items-center ml-[20%]'>
        <GoSearch className='text-3xl text-zinc-400 '/>
        <input value={query} onChange={(e)=>setQuery(e.target.value)} type="text" placeholder='Whats on your mind' className='w-[50%] mx-10 p-5 text-xl outline-none border-none bg-transparent text-white' />
        <FaUserCircle className='text-4xl ml-auto ' color='blue'></FaUserCircle>
        </div>
    </div>
  )
}

export default Topnav