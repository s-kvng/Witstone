import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import { useForm, Head } from '@inertiajs/react';
 
export default function Index({ auth }) {
    const { data, setData, post, processing, reset, errors } = useForm({
        message: '',
    });
 
    const submit = (e) => {
        e.preventDefault();
        post(route('posts.store'), { onSuccess: () => reset() });
    };
 
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Chirps" />
 
            <div className=' pt-28'>

            <div className="max-w-2xl mx-auto p-5 sm:p-7 lg:p-9 ">
                <form onSubmit={submit}>
                    <textarea
                        value={data.message}
                        placeholder="What's on your mind?"
                        rows={`5`}
                        className="block w-full dark:bg-gray-900 dark:text-white border-gray-300 dark:border-gray-500 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-40 rounded-md shadow-sm shadow-zinc-300"
                        onChange={e => setData('message', e.target.value)}
                    ></textarea>
                    <InputError message={errors.message} className="mt-2" />
                    <PrimaryButton className="mt-4 bg-sky-500 dark:bg-sky-700 dark:text-white dark:focus:bg-sky-600 dark:hover:bg-sky-600" disabled={processing}>Post</PrimaryButton>
                </form>
            </div>

            <div className=" text-sm text-zinc-600 container mx-auto text-center pt-10 px-3">
                Tip : Platform made to share your thought without holding back..
            </div>

            </div>
        </AuthenticatedLayout>
    );
}