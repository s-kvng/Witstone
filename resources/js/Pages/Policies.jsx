//layouts
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

//
import { Head } from "@inertiajs/react";


//
import { FaQuestionCircle, FaCheck } from "react-icons/fa";

export default function Policies({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            // header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Dashboard</h2>}
        >
            <Head title="Policies" />

            <div className=" py-20 sm:pt-28">
                <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-10 dark:text-gray-300">
                <h2 className="text-2xl font-bold pb-2">User Anonymity</h2>

                <p>This website allows users to participate anonymously and that their identities will not be disclosed without their consent, except as required by law.

                    Emphasize that users are responsible for maintaining their own anonymity and should exercise caution while interacting with others on the platform.</p>


                <h3 className="text-lg font-semibold py-2">Prohibited Activities</h3>

               <p> Explicitly state the activities that are strictly prohibited on the website, such as:</p>

               <ol className=" my-2">

              <li> <span><FaCheck className="inline mr-2 text-red-500"/></span> Harassment, bullying, or threats towards other users.</li>
                    <li><FaCheck className="inline mr-2 text-red-500"/>  Illegal activities, including but not limited to hacking, fraud, or sharing copyrighted material without permission.</li>
                    <li><FaCheck className="inline mr-2 text-red-500"/> Hate speech, discrimination, or promoting violence.</li>
                    <li><FaCheck  className="inline mr-2 text-red-500"/>  Sharing personal information or engaging in doxing (revealing others' private information).</li>
                    <li><FaCheck className="inline mr-2 text-red-500"/> Spreading misinformation or engaging in malicious activities that could harm individuals or society.</li>

               </ol>

                <h2 className="text-lg font-semibold">User Contents</h2>

                Users are solely responsible for the content they post or share on the website.

                This website reserves the right to moderate and remove any content that violates the policy.

                This website may retain and provide user information to legal authorities if required by law or to protect the safety and rights of others.

                <h2 className="text-lg font-semibold py-2">Data Privacy</h2>

                Personal information will be handled securely and in accordance with applicable data protection laws.

                Detailed privacy policy that explains what data is collected, how it is used, and any third parties with whom it may be shared.

                <h2 className="text-lg font-semibold py-2" >Reporting Mechanism</h2>

                There is a clear process for users to report abusive or inappropriate content or behavior.

                Commit to promptly investigating and taking appropriate action on reported incidents.


                <h2 className="text-lg font-semibold py-2">Disclaimer </h2>

                <p>This website is not responsible for the actions or behavior of its users.</p>

                This website does not endorse or verify the accuracy of user-generated content.

                
                <h2 className="text-lg font-semibold py-2">Modifications to the Policy</h2>

                This website reserves the right to modify the policy at any time and inform users of significant changes.

                <h2 className="text-lg font-semibold py-2">Contact Information</h2>

                <p>Contact details are provided for users to reach out with inquiries, concerns, or requests related to the policy.</p>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
