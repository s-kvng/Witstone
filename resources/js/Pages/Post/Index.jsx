import React from "react";

//layouts
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

//components
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";


//
import { Head } from '@inertiajs/react';

const Index = ({ auth }) => {


    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Feed" />

         <div>List post</div>
        </AuthenticatedLayout>
    );
};

export default Index;
