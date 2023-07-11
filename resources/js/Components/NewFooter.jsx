import React from "react";

import { FaHome } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

//link
import { Link } from "@inertiajs/react";

const NewFooter = () => {
    return (
        <footer className="   dark:bg-[#050505] dark:text-white border-2 dark:border-slate-100 border-gray-600 fixed bottom-2 w-[50%] translate-x-1/2 opacity-98 z-40 rounded-full">
            <div className="flex justify-center items-center align-items-center md:gap-24 gap-10 py-[2px]">
                <div className="flex flex-col align-items-center justify-center items-center  gap-y-[2px] mt-[1px]">
                    <Link
                        className="  w-full flex justify-center pb-[1px]"
                        href={route("posts.index")}
                    >
                        <div className=" ">
                            <FaHome size={18} className="dark:text-gray-100 text-black" />
                        </div>
                    </Link>
                    <p className="text-[12px] uppercase">Main</p>
                </div>
                <div className="flex flex-col items-center justify-center ">
                    <Link
                        className="  w-full text-center py-0"
                        href={route("posts.create")}
                    >
                        <div className="circle-icon">
                            <FontAwesomeIcon icon={faPlus} beatFade size="xs" />
                        </div>
                    </Link>
                    <p className="text-[12px] uppercase py-0">New Post</p>
                </div>
            </div>
        </footer>
    );
};

export default NewFooter;
