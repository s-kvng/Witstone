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
            <div className=" border-t-[1px] border-zinc-400  sm:border sm:border-zinc-600 sm:rounded-lg py-5 px-6 sm:shadow-lg sm:dark:shadow-orange-400">
                <p className="hidden sm:block text-lg dark:text-zinc-200 font-semibold uppercase mb-2">
                    Add comment
                </p>
                <div>
                    <form onSubmit={submit}>
                        <textarea
                            className=" w-full dark:bg-gray-900 rounded-md dark:text-white mb-4 shadow-sm sm:shadow-none dark:shadow-white shadow-zinc-600"
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
