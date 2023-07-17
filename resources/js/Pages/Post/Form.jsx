import React, { useEffect, useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import { useForm, Head } from "@inertiajs/react";

export default function Index({ auth }) {
    const [disable, setDisable] = useState(false);
    const [counter, setCounter] = useState(300);

    const { data, setData, post, processing, reset, errors } = useForm({
        message: "",
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("posts.store"), { onSuccess: () => reset() });
    };

    //disable btn if user types more than 255 words
    useEffect(() => {
        data.message.length > 300 ? setDisable(true) : setDisable(false);
        setCounter(300 - data.message.length);
    }, [data.message]);

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Post" />

            <div className=" pt-28">
                <div className="max-w-2xl mx-auto p-5 sm:p-7 lg:p-9 ">
                    <form onSubmit={submit}>
                        <textarea
                            value={data.message}
                            placeholder="What's on your mind?"
                            rows={`5`}
                            className="block w-full mb-2 dark:bg-gray-900 dark:text-white border-gray-300 dark:border-gray-500 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-40 rounded-md shadow-sm shadow-zinc-300"
                            onChange={(e) => setData("message", e.target.value)}
                        ></textarea>
                        <InputError message={errors.message} className="mt-2" />
                        <div className=" flex justify-between items-center">
                            <PrimaryButton
                                className=" bg-sky-500 dark:bg-sky-700 dark:text-white dark:focus:bg-sky-600 dark:hover:bg-sky-600"
                                disabled={processing || disable}
                            >
                                {processing && (
                                    <span class="btnLoader mr-2 dark:before:border-white dark:after:border-gray-900/90"></span>
                                )}{" "}
                                Post
                            </PrimaryButton>

                            <p
                                className={` dark:text-white text-slate-900/90 border ${
                                    counter < 0
                                        ? "border-red-500 bg-red-400"
                                        : "border-blue-500 bg-blue-400"
                                } h-9 min-h-9 max-h-9 w-9 min-w-9 max-w-9 flex justify-center items-center p-3 rounded-full shadow-sm`}
                            >
                                {counter}
                            </p>
                        </div>
                    </form>
                </div>

                <div className=" text-sm text-zinc-600 container mx-auto text-center pt-10 px-3">
                    Tip : Platform made to share your thought without holding
                    back..
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
