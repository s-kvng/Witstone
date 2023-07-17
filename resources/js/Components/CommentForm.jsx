import React, { useEffect, useState } from "react";

//components
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";

import { useForm } from "@inertiajs/react";

const CommentForm = ({ postId }) => {
    const [disable, setDisable] = useState(true);

    const { data, setData, post, processing, reset, errors } = useForm({
        content: "",
        post_id: postId,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("comment.store"), { onSuccess: () => reset() });
    };

    const handleChange = (e) => {
        setData("content", e.target.value);
    };

    //check the number of words in the comment box
    useEffect(() => {
        data.content.length > 0 && data.content.length < 60
            ? setDisable(false)
            : setDisable(true);
    }, [data.content]);

    return (
        <>
            <div className=" border-t-[1px] border-zinc-400  sm:border sm:border-zinc-600 sm:rounded-lg py-5 px-6 sm:shadow-md sm:dark:shadow-gray-300">
                <p className="hidden sm:block text-lg dark:text-zinc-200 font-semibold uppercase mb-2">
                    Add comment
                </p>
                <div>
                    <form onSubmit={submit}>
                        <textarea
                            className=" w-full dark:bg-gray-900 sm:placeholder:text-transparent rounded-full 
                            dark:text-white mb-4 shadow-sm sm:shadow-none dark:shadow-white shadow-zinc-600"
                            value={data.content}
                            placeholder="Comment..."
                            onChange={handleChange}
                            rows="1"
                        ></textarea>
                        <InputError message={errors.conent} className="mt-2" />

                        <input type="hidden" name="post_id" value={postId} />

                        <div className=" flex justify-end">
                            <PrimaryButton
                                className="bg-blue-700 hover:bg-blue-500 text-black dark:bg-sky-500 dark:hover:bg-blue-400 dark:text-white dark:hover:text-zinc-200"
                                disabled={processing || disable}
                            >
                                {processing && (
                                    <span class="btnLoader mr-2 dark:before:border-white dark:after:border-gray-900/90"></span>
                                )}{" "}
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
