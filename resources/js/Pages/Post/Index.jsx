import React from "react";

//layouts
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

//components
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import  Card from "@/Components/Card";


//
import { Head } from '@inertiajs/react';

const Index = ({ auth, posts }) => {


    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Feed" />

         <div className="container mx-auto pt-28">

         <div className=" px-4 sm:px-0">
                    {posts.map((post) => (
                       <>
                        <div className=" bg-white dark:bg-gray-800  rounded-lg drop-shadow-md">
                         <Card key={post.id} chirp={post} />

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
