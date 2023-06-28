//layouts
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

//
import { Head } from "@inertiajs/react";
import { Link } from "@inertiajs/react";

//
import { FaQuestionCircle } from "react-icons/fa";

export default function Policies({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            // header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Dashboard</h2>}
        >
            <Head title="Policies" />

            <div className=" pt-20 sm:pt-28">
                <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-10 dark:text-gray-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Molestias architecto ex officiis quia. Quaerat ea labore
                    tempore eum nisi maiores autem, eveniet molestiae, fugit
                    expedita, tenetur consequuntur quidem necessitatibus!
                    Recusandae. Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. Quas ut iusto dolores non commodi omnis
                    dignissimos, repellendus sed corrupti, porro veniam natus
                    consectetur, perferendis nulla vitae! Eaque molestias sunt
                    asperiores. Lorem ipsum dolor sit, amet consectetur
                    adipisicing elit. Vero fugiat, dignissimos labore, optio
                    facere totam dicta, recusandae omnis assumenda similique ex
                    iure commodi nobis magni quidem itaque? Est, repellat iusto.
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
