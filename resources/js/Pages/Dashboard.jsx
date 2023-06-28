//layouts
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

//
import { Head } from '@inertiajs/react';
import { Link } from '@inertiajs/react';

//
import { FaQuestionCircle } from 'react-icons/fa';


export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            // header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Dashboard</h2>}
        >
            <Head title="Channel" />

            <div className=" pt-20 sm:pt-28">
                <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-10 ">
                   <Link href={route('policy')}>
                   <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm rounded-lg flex gap-5 p-5 items-center">
                        <div><FaQuestionCircle size={30} className='text-red-500'/></div>
                        <div className=" text-gray-900 dark:text-gray-100">
                            <h1 className='text-xl font-bold uppercase'>Policies</h1>
                            <p className='text-gray-500'>Security, Terms & Conditions </p>
                        </div>
                    </div>
                   </Link>
                </div>
              
                <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pb-10">
                <Link href={route('posts.index')}>
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm rounded-lg flex gap-5 p-5 items-center">
                    <div><FaQuestionCircle size={30} className='text-red-500'/></div>
                        <div className=" text-gray-900 dark:text-gray-100">
                            <h1 className='text-xl font-bold uppercase'>Questions</h1>
                            <p className='text-gray-500'>Ask</p>
                        </div>

                    </div>
                    </Link>
                </div>

                <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
                <Link href={route('posts.index')}>
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm rounded-lg flex gap-5 p-5 items-center">
                    <div><FaQuestionCircle size={30} className='text-red-500'/></div>
                        <div className=" text-gray-900 dark:text-gray-100">
                            <h1 className='text-xl font-bold uppercase'>Contribution</h1>
                            <p className='text-gray-500'>Want to sponser? , Want to Donate?</p>
                        </div>

                    </div>
                    </Link>
                </div>
                
            </div>
        </AuthenticatedLayout>
    );
}
