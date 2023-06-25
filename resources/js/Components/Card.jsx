import React, { useState } from "react";

//components
import InputError from "./InputError";
import Dropdown from "./Dropdown";
import PrimaryButton from "./PrimaryButton";

//inertiajs react component
import { useForm, usePage } from "@inertiajs/react";
import { Link } from "@inertiajs/react";

//icons
import { IoMdHeart } from "react-icons/io";

//packages
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

const Card = ({ chirp }) => {
    const { auth } = usePage().props;

    const [editing, setEditing] = useState(false);
    // const [ likes , setLikes ] = useState(chirp.likesCount);

    const { data, setData, patch, clearErrors, reset, errors } = useForm({
        message: chirp.message,
    });

    const submit = (e) => {
        e.preventDefault();
        patch(route("posts.update", chirp.id), {
            onSuccess: () => setEditing(false),
        });
    };

    console.log(chirp);

 

    return (
        <div className="p-6 flex space-x-2 ">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-500 -scale-x-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
            </svg>
            <div className="flex-1">
                <div className="flex justify-between items-center">
                    <div>
                        <span className="dark:text-white">
                            {chirp.user.name}
                        </span>
                        <small className="ml-2 text-sm dark:text-gray-400 text-zinc-500">
                            {dayjs(chirp.created_at).fromNow()}
                        </small>
                    </div>

                    {chirp.user.id === auth.user.id && (
                        <Dropdown>
                            <Dropdown.Trigger>
                                <button>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4 text-gray-400"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                    </svg>
                                </button>
                            </Dropdown.Trigger>
                            <Dropdown.Content>
                                <button
                                    className="block w-full px-4 py-2 text-left text-sm leading-5 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 focus:bg-gray-100 transition duration-150 ease-in-out"
                                    onClick={() => setEditing(true)}
                                >
                                    Edit
                                </button>
                                <Dropdown.Link
                                    as="button"
                                    href={route("posts.destroy", chirp.id)}
                                    method="delete"
                                >
                                    Delete
                                </Dropdown.Link>
                            </Dropdown.Content>
                        </Dropdown>
                    )}
                </div>
                {editing ? (
                    <form onSubmit={submit}>
                        <textarea
                            value={data.message}
                            onChange={(e) => setData("message", e.target.value)}
                            className="mt-4 w-full text-gray-900 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                        ></textarea>
                        <InputError message={errors.message} className="mt-2" />

                        <div className="space-x-2">
                            <PrimaryButton className="mt-4">Save</PrimaryButton>
                            <button
                                className="mt-4"
                                onClick={() => {
                                    setEditing(false);
                                    reset();
                                    clearErrors();
                                }}
                            >
                                cancel
                            </button>
                        </div>
                    </form>
                ) : (
                    <p className=" mt-4 mb-3 text-lg dark:text-gray-300">
                        <Link href={ route('posts.show', chirp.id)}>
                        {chirp.message}
                        
                        <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4 text-gray-400"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                    </svg>
                        </Link>
                    </p>
                )}

                <div className=" flex gap-x-5">
                    <p className="flex align-items-center">
                        <Link
                            as="button"
                            href={route("posts.like", chirp.id)}
                            method="post"
                        >
                            {chirp.liked ? (
                                <span>
                                    {" "}
                                    <IoMdHeart
                                        size={20}
                                        className=" text-sky-600"
                                    />
                                </span>
                            ) : (
                                <span>
                                    {" "}
                                    <IoMdHeart size={20} className="" />
                                </span>
                            )}
                        </Link>
                        <span className=" dark:text-zinc-400 text-zinc-600">
                            {chirp.likesCount}
                        </span>
                    </p>
                    <p className="flex align-items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-gray-600 -scale-x-100"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                            />
                        </svg>
                        <span className="dark:text-zinc-400 text-zinc-600">
                            {chirp.commentCount}
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Card;
