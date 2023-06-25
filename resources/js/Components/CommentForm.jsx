import React from "react";


//components
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";

//
import { useForm } from "@inertiajs/react";


const CommentForm = ({ postId }) => {


    const { data, setData, post, processing, reset, errors } = useForm({
        content: '',
        post_id : postId,
    });
 
    const submit = (e) => {
        e.preventDefault();
        post(route('comment.store'), { onSuccess: () => reset() });
    };

    console.log(postId);

    return (
        <>
            <div className=" border border-zinc-600 rounded-lg py-5 px-6 shadow-lg dark:shadow-orange-400">
                <p className=" text-lg dark:text-zinc-200 font-semibold uppercase mb-2">
                    Add comment
                </p>
                <div>
                    <form onSubmit={submit}>
                        <textarea
                            className=" w-full dark:bg-gray-900 rounded-md dark:text-white mb-4"
                            value={data.content}
                            onChange={(e) => setData("content", e.target.value)}
                            rows="1"
                        ></textarea>
                        <InputError message={errors.conent} className="mt-2" />

                        <input type="hidden" name="post_id" value={ postId }/>

                        <div className=" flex justify-end">
                            <PrimaryButton
                                className="bg-blue-700 hover:bg-blue-500 text-black dark:bg-sky-500 dark:hover:bg-blue-400 dark:text-white"
                                disabled={processing}
                            >
                                Add
                            </PrimaryButton>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default CommentForm;
