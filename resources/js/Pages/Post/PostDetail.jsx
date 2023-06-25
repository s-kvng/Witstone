import React from "react";

//layouts
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

//components
import DetailCard from "@/Components/DetailCard";
import CommentForm from "@/Components/CommentForm";

//
import { Head } from "@inertiajs/react";

//components
import CommentCard from "@/Components/CommentCard";

const Index = ({ auth, post }) => {

  

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Post" />

            <div className="container mx-auto pt-28 mb-28">
                <div className=" px-4 sm:px-0">
                    <DetailCard chirp={post} />

                    <div className=" mb-4 dark:text-white py-2 ">
                        {post.comments.length > 0 ? (
                            <ul>
                                {post.comments.map((comment) => (
                                    <CommentCard comment={comment}/>
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
