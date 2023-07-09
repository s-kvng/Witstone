import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";
import Loader from "react-loaders";
import { useState , useEffect } from "react";
// bg-[url('/img/bg_img.jpeg')]

export default function Guest({ children }) {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulating the loading time
        const timeout = setTimeout(() => {
          setIsLoading(false);
        }, 2000);
    
        return () => {
          clearTimeout(timeout);
        };
      }, []);
    return (
        <>

            {isLoading ? (
                
                <div className=" h-screen bg-black flex justify-center items-center transition-all ease-in-out duration-200">
                    <div className="loader">
                    </div>
                </div>

                    
            ) : (
                <div className="min-h-screen flex flex-col sm:justify-center items-center pt-8 sm:pt-0 bg-[#050505]">
                <Link
                    href="/"
                    className=" absolute top-0 left-0 right-0 flex justify-center"
                >
                    <ApplicationLogo className=" w-80 h-80 sm:h-72 fill-current text-gray-500 object-cover" />
                </Link>

                <div className="w-full sm:max-w-md  px-6 py-1 overflow-hidden sm:rounded-lg z-50">
                    {children}
                </div>
            </div>
            )}
            
            
        </>
    );
}
