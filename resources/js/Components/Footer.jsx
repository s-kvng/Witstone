import React from 'react';

//icons
import { FaHome , FaPlus} from 'react-icons/fa';
// import { FaSearch } from 'react-icons/fa';
// import { MdHome, MdAdd } from 'react-icons/md';

//link
import { Link } from '@inertiajs/react';

const Footer = () => {
  return (
    <footer className=" bg-white dark:bg-gray-900 dark:text-white fixed bottom-0 left-0 right-0 opacity-95">
        <div className='flex justify-center align-items-center md:gap-24 gap-14 py-2'>
            <div className='flex flex-col gap-y-1 align-items-center text-center'>
                <Link href={route('posts.index')}><div className=" border border-zinc-400 rounded-full p-4"><FaHome size={34}/></div></Link>
                <p className='text-sm uppercase'>Main</p>
            </div>
            <div className='flex flex-col gap-y-1 align-items-center  text-center'>
                <Link href={route('posts.create')}><div className=" border border-zinc-400 rounded-full py-5 px-0 flex justify-center align-items-center"><FaPlus size={22}/></div></Link>
                <p className='text-sm uppercase'>New Post</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer