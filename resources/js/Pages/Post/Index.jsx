import React from "react";

//layouts
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

//components
import  Card from "@/Components/Card";


//
import { Head } from '@inertiajs/react';

const Index = ({ auth, posts }) => {

    console.log(posts);

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Feed" />

         <div className="container mx-auto pt-28 mb-28">

         <div className=" px-4 sm:px-0">
                    {posts.map((post) => (
                       <>
                        <div key={post.id} className=" bg-white dark:bg-gray-800  rounded-lg drop-shadow-md">
                         <Card  chirp={post} />

                       </div>
                       <hr className="border-t border-gray-300 dark:border-gray-700 my-6"/>

                       
                       </>
                       
                    ))}
                </div>

         </div>
        </AuthenticatedLayout>
    );
};

export default Index;
