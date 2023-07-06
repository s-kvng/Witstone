import { useEffect, useState } from 'react';

import GuestLayout from '@/Layouts/GuestLayout';
//components
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import Checkbox from '@/Components/Checkbox';
import Policy from '@/Components/Policy';


//
import { Head, Link, useForm } from '@inertiajs/react';

import { FaArrowRight } from 'react-icons/fa';



export default function Register() {

    const [ disabledBtn , setDisableBtn ] = useState(true);
    const [ userTextVisible , setUserTextVisible] = useState(false);
    const [ openModal , setOpenModal ] = useState(false); 


    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        policy : false,
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    useEffect(()=>{
        data.policy ? setDisableBtn(false) : setDisableBtn(true)
    },[data.policy])

    useEffect(()=>{
        data.name.length > 3 && data.name.length < 10 ? setUserTextVisible(true) : setUserTextVisible(false) 
    }, [data.name]);


    //
    const handleClick = (e) =>{
        e.preventDefault();

        setOpenModal(true);

    }

    const closePolicyModal = (e) =>{
        setOpenModal(false);
    }

    return (
        <GuestLayout>
            <Head title="Register" />

            <form onSubmit={submit}>
                <div>
                   

                    <TextInput
                        id="name"
                        name="name"
                        value={data.name}
                        placeholder="userName"
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                    />
                    <p className={`text-gray-300 text-[14px] mt-2 ${userTextVisible ? "block" : "hidden"}`}>Enter anonymous Username eg: user@5$#</p>
                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div className="sm:mt-6 mt-8">
                    
                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        placeholder="Email"
                        className="mt-1 block w-full"
                        autoComplete="username"
                        onChange={(e) => setData('email', e.target.value)}
                        required
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="sm:mt-6 mt-8 ">
                   

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        placeholder="Password"
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData('password', e.target.value)}
                        required
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="sm:mt-6 mt-8">
                   
                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        placeholder="Confirm Password"
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData('password_confirmation', e.target.value)}
                        required
                    />

                    <InputError message={errors.password_confirmation} className="mt-2" />
                </div>

                <Link href='#' onClick={handleClick} className=' flex items-center gap-x-3'> <FaArrowRight className='text-blue-600'/> <div className=' text-sky-500 my-2 capitalize'>View terms and policies</div></Link>

                <div className="block mt-2 mb-3 sm:mb-0">
                    <label className="flex items-center">
                        <Checkbox
                            name="policy"
                            checked={data.policy}
                            className=' peer'
                            onChange={(e) =>
                                setData("policy", e.target.checked)
                            }
                        />
                        <span className="ml-2 text-sm text-gray-100 dark:text-gray-400">
                            Accept all terms and policies
                        </span>
                        <br/>
                       
                    </label>
                </div>

                <div className="flex flex-col-reverse mt-4 items-center justify-center gap-y-4">
                    <Link
                        href={route('login')}
                        className="underline text-sm text-blue-600 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-700 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                    >
                        Already registered?
                    </Link>

                    <PrimaryButton className="mt-3 transition-all duration-300 ease-in-out disabled:bg-slate-100 disabled:text-gray-900 bg-sky-500 hover:bg-sky-300" disabled={processing || disabledBtn}>
                        Register
                    </PrimaryButton>
                </div>
            </form>

           <Policy  show={openModal} onClose={closePolicyModal} />

        </GuestLayout>
    );
}
