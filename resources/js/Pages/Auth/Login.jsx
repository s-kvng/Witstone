import { useEffect, useState } from "react";
import Checkbox from "@/Components/Checkbox";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';





export default function Login({ status, canResetPassword }) {
    const [showPassword, setShowPassword] = useState(false);

    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
      };



    return (
       <>
             <GuestLayout>
            <Head title="Log in || Beta" />

            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}

            <form onSubmit={submit} className="mt-[30vh] pt-7 sm:mt-[15vh] ">
                <div className="">
                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={data.email}
                        className="mt-1 block w-full te"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData("email", e.target.value)}
                    />

                    <InputError message={errors.email} className="mt-2" />
                   
                </div>

                <div className="mt-7 relative">
                    <TextInput
                        id="password"
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        placeholder="Password"
                        value={data.password}
                        className="mt-1 block w-full  "
                        autoComplete="current-password"
                        onChange={(e) => setData("password", e.target.value)}
                    />

                    <InputError message={errors.password} className="mt-2" />
                    <div className="absolute top-2 right-6 text-dark dark:text-gray-300 cursor-pointer" onClick={handleTogglePassword} >{showPassword ? <FaEyeSlash size={24} /> : <FaEye size={24} />}</div>
                </div>

                <div className="block mt-4 mb-3 sm:mb-0">
                    <label className="flex items-center">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onChange={(e) =>
                                setData("remember", e.target.checked)
                            }
                        />
                        <span className="ml-2 text-sm text-gray-300 dark:text-gray-400">
                            Remember me
                        </span>
                    </label>
                </div>

                {/* links & button */}
                <div className="flex flex-col-reverse items-center justify-center mt-4">
                    {canResetPassword && (
                        <Link
                            href={route("password.request")}
                            className="py-4 underline text-sm text-blue-600 dark:text-blue-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                        >
                            Forgot your password?
                        </Link>
                    )}

                    <PrimaryButton className="ml-4 !px-6 !rounded-full bg-sky-400 hover:bg-sky-300"  disabled={processing}>
                        Log in
                    </PrimaryButton>

                   
                </div>

                    <div className=" dark:text-white text-white flex flex-col justify-center items-center gap-y-1">
                        Dont have an account ? 
                        <span className=" ms-2">
                            <Link
                                href={route("register")}
                                className="py-4 underline text-sm text-blue-600 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-700 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                            >
                                Sign Up
                            </Link>
                        </span>
                    </div>
            </form>
            
        </GuestLayout>
        
        
       </>
    );
}
