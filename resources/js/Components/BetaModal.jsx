import { Fragment, useEffect, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { useForm, usePage } from '@inertiajs/react';

import TextInput from '@/Components/TextInput';
import DangerButton from '@/Components/DangerButton';


export default function Modal({  show = false, maxWidth = '2xl', closeable = false }) {
    const [ OpenBetaModal , setOpenBetaModal ] = useState(true);
    const user = usePage().props.auth.user;
    const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
        is_new : 0,
    });



    const onClose = () => {
        setOpenBetaModal(false);
    }

    useEffect(() => {
        setData('is_new', 0);
      }, []);


    const onSubmit = (e) => {
        e.preventDefault();
        patch(route('profile.update'));
    }

    const close = () => {
        if (closeable) {
            onClose();
        }
    };


    const maxWidthClass = {
        sm: 'sm:max-w-sm',
        md: 'sm:max-w-md',
        lg: 'sm:max-w-lg',
        xl: 'sm:max-w-xl',
        '2xl': 'sm:max-w-2xl',
    }[maxWidth];

    return (
        <Transition show={OpenBetaModal} as={Fragment} leave="duration-200">
            <Dialog
                as="div"
                id="modal"
                className="fixed inset-0 flex overflow-y-auto px-4 py-6 sm:px-0 items-center z-50 transform transition-all"
                onClose={close}
            >
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="absolute inset-0 bg-gray-500/75 dark:bg-gray-900/75" />
                </Transition.Child>

                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    enterTo="opacity-100 translate-y-0 sm:scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                    leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                    <Dialog.Panel
                        className={`mb-6 bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto ${maxWidthClass}`}
                    >


                <form onSubmit={onSubmit} className="p-6">

                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    <span className='text-lg'>Welcome</span> to our Beta version of Xolace! Express yourself freely while staying anonymous. 
                    Enjoy your private and secure digital experience.
                    </p>

                    <TextInput
                        id="is_new"
                        type="hidden"
                        className="mt-1 block w-full"
                        value={data.is_new}  
                    />
                
                    <div className="mt-6 flex justify-end">
                        <DangerButton disabled={processing} onClick={onClose}>Dismiss</DangerButton>
                    </div>
                </form>
          
                        
                    </Dialog.Panel>
                </Transition.Child>
            </Dialog>
        </Transition>
    );
}
