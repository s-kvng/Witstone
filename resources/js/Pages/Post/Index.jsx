import React from "react";

//layouts
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

//components
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import Chirp from "@/Components/Chirp";

//
import { useForm, Head } from "@inertiajs/react";

const Index = ({ auth, chirps }) => {
    const { data, setData, post, processing, reset, errors } = useForm({
        message: "",
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("chirps.store"), { onSuccess: () => reset() });
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Chirps" />

         <div>List post</div>
        </AuthenticatedLayout>
    );
};

export default Index;
