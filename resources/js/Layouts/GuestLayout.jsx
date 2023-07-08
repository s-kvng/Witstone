import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

// bg-[url('/img/bg_img.jpeg')]

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-8 sm:pt-0 bg-[#050505]">
            
                <Link href="/" className=' absolute top-0 left-0 right-0 flex justify-center'>
                    <ApplicationLogo className=" w-80 h-80 sm:h-72 fill-current text-gray-500 object-cover" />
                </Link>
            

            <div className="w-full sm:max-w-md  px-6 py-1 overflow-hidden sm:rounded-lg z-50">
                {children}
            </div>
        </div>
    );
}
