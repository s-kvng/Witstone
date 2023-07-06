import React from 'react';

//icons
import { FaHome , FaPlus} from 'react-icons/fa';
// import { FaSearch } from 'react-icons/fa';
// import { MdHome, MdAdd } from 'react-icons/md';

//link
import { Link } from '@inertiajs/react';

const Footer = () => {
  return (
    <footer className=" bg-gradient-to-t from-gray-100 to-gray-300 dark:bg-gradient-to-bl dark:from-gray-800 dark:to-gray-900 dark:text-white fixed bottom-0 left-0 right-0 opacity-98 z-40">
        <div className='flex justify-center align-items-center md:gap-24 gap-14 py-2'>
            <div className='flex flex-col gap-y-1 align-items-center text-center'>
                <Link href={route('posts.index')}><div className=" bg-zinc-100 dark:bg-gray-950 rounded-full p-4 dark:shadow-sm dark:shadow-gray-400 shadow-lg "><FaHome size={34} className='text-sky-700'/></div></Link>
                <p className='text-sm uppercase'>Main</p>
            </div>
            <div className='flex flex-col gap-y-1 align-items-center  text-center'>
                <Link href={route('posts.create')}><div className=" bg-zinc-100 dark:bg-gray-950   rounded-full py-[22px] px-0 flex justify-center align-items-center dark:shadow-sm dark:shadow-gray-400 shadow-lg"><FaPlus size={22} className=' text-sky-700 '/></div></Link>
                <p className='text-sm uppercase'>New Post</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer