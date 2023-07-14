import React, { useEffect } from "react";

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Card from "@/Components/Card";

import { Head } from "@inertiajs/react";

const Index = ({ auth, posts }) => {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Feed" />

            <div className="container mx-auto pt-20 mb-28 scroll-container scroll-smooth">
                <div className=" px-4 sm:px-0  ">
                    {posts.map((post) => (
                        <div
                            key={post.id}
                            className=" bg-white dark:bg-gray-800  rounded-lg drop-shadow-md my-8 "
                        >
                            <Card chirp={post} />
                        </div>
                    ))}
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
