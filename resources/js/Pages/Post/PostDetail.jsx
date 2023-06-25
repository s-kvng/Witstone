import React from "react";

//layouts
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

//components
import Card from "@/Components/Card";
import CommentForm from "@/Components/CommentForm";

//
import { Head } from "@inertiajs/react";

const Index = ({ auth, post }) => {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Post" />

            <div className="container mx-auto pt-28 mb-28">
                <div className=" px-4 sm:px-0">
                    <Card chirp={post} />

                    <div className=" mb-4 dark:text-white py-2 ">
                        {post.comments.length > 0 ? (
                            <ul>
                                {post.comments.map((comment) => (
                                    <li key={comment.id} className=" border-t-[1px] border-gray-500 px-10">
                                        <p>{comment.content}</p>
                                        <p className=" text-gray-600">Comment by: <span>{comment.user.name}</span></p>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>No comments yet.</p>
                        )}
                    </div>

                    <CommentForm postId={post.id} />
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
