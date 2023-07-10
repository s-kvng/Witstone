import React from 'react'

import { FaHome , FaPlus} from 'react-icons/fa';
// import { FaSearch } from 'react-icons/fa';
import { MdHome, MdAdd } from 'react-icons/md';

//link
import { Link } from '@inertiajs/react';

const NewFooter = () => {
  return (
    <footer className="   dark:bg-[#050505] dark:text-white border border-slate-100  fixed bottom-2 w-[50%] translate-x-1/2 opacity-98 z-40">
    <div className='flex justify-center align-items-center md:gap-24 gap-14 py-2'>
        <div className='flex flex-col align-items-center justify-center items-center '>
            <Link href={route('posts.index')}><div className=" "><FaHome size={17} className='text-sky-700'/></div></Link>
            <p className='text-[12px] uppercase'>Main</p>
        </div>
        <div className='flex flex-col gap-y-1 align-items-center  text-center'>
            <Link href={route('posts.create')}><div className="text-blue-500"><i class="fas fa-plus-circle text-red-500"></i></div></Link>
            <p className='text-sm uppercase'>New Post</p>
        </div>
    </div>
</footer>
  )
}

export default NewFooter