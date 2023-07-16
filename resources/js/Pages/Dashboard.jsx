import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

import { useState } from "react";

import { Head } from "@inertiajs/react";
import { Link } from "@inertiajs/react";

import {
    FaQuestionCircle,
    FaGoogle,
    FaExclamationCircle,
} from "react-icons/fa";

import QuestionsModal from "@/Components/QuestionsModal";
import ContributionModal from "@/Components/ContributionModal";
import AboutXolace from "@/Components/AboutXolace";
import Modal from "@/Components/Modal";
import {
    GithubIcon,
    TwitterIcon,
    LinkedInIcon,
} from "@/Components/SocialIcons";

export default function Dashboard({ auth }) {
    const [openQuestionModal, setOpenQuestionModal] = useState(false);
    const [openContributionModal, setOpenContributionModal] = useState(false);
    const [openAboutModal, setAboutModal] = useState(false);

    const openingModel = (e) => {
        e.preventDefault();
        setOpenQuestionModal(true);
    };

    //close Question modal
    const closeQuestionModel = () => {
        setOpenQuestionModal(false);
    };

    //open contribution modal
    const handleContributionModal = (e) => {
        e.preventDefault();
        setOpenContributionModal(true);
    };

    //close contribution modal
    const closeContributionModal = () => {
        setOpenContributionModal(false);
    };

    //open About Xolace modal
    const handleAboutModal = (e) => {
        e.preventDefault();
        setAboutModal(true);
    };

    //close About Xolace modal
    const closeAboutModal = () => {
        setAboutModal(false);
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            // header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Dashboard</h2>}
        >
            <Head title="Channel" />
            <div className=" pt-20 sm:pt-28">
                <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-10 ">
                    <Link href={route("policy")}>
                        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm rounded-lg flex gap-5 p-5 items-center h-[10px] min-h-[100px] max-h-[120px] sm:h-auto">
                            <div>
                                <FaQuestionCircle
                                    size={30}
                                    className="text-red-400"
                                />
                            </div>
                            <div className=" text-gray-900 dark:text-gray-100">
                                <h1 className="text-lg font-bold uppercase">
                                    Policies
                                </h1>
                                <p className="text-gray-500">
                                    Security, Terms & Conditions{" "}
                                </p>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 mb-10 ">
                    <Link href="#" onClick={openingModel}>
                        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm rounded-lg flex gap-5 p-5 items-center h-[10px] min-h-[100px] max-h-[120px] sm:h-auto">
                            <div>
                                <FaQuestionCircle
                                    size={30}
                                    className="text-red-400"
                                />
                            </div>
                            <div className=" text-gray-900 dark:text-gray-100">
                                <h1 className="text-lg font-bold uppercase">
                                    Questions
                                </h1>
                                <p className="text-gray-500">Ask</p>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 mb-10">
                    <Link href="#" onClick={handleContributionModal}>
                        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm rounded-lg flex gap-5 p-5 items-center h-[10px] min-h-[100px] max-h-[120px] sm:h-auto">
                            <div>
                                <FaQuestionCircle
                                    size={30}
                                    className="text-red-400"
                                />
                            </div>
                            <div className=" text-gray-900 dark:text-gray-100">
                                <h1 className="text-lg font-bold uppercase">
                                    Contribution
                                </h1>
                                <p className="text-gray-500">
                                    Want to sponser? , Want to Donate?
                                </p>
                            </div>
                        </div>
                    </Link>
                </div>

                {/* about card  */}
                <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 mb-16 pb-5">
                    <Link href="#" onClick={handleAboutModal}>
                        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm rounded-lg flex gap-5 p-5 items-center h-[10px] min-h-[100px] max-h-[120px] sm:h-auto">
                            <div>
                                <FaExclamationCircle
                                    size={30}
                                    className="text-red-500"
                                />
                            </div>
                            <div className=" text-gray-900 dark:text-gray-100">
                                <h1 className="text-lg font-bold uppercase">
                                    About Xolace | Beta
                                </h1>
                                <p className="text-gray-500">
                                    Find out more about xolace
                                </p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>

            {/* Question modal */}
            <QuestionsModal
                show={openQuestionModal}
                onClose={closeQuestionModel}
            >
                <div className="p-6">
                    <div className=" flex flex-col items-center justify-center">
                        <h2 className=" text-2xl font-bold dark:text-gray-200 pb-2">
                            <span>&#128220; </span>About us
                        </h2>
                        <p className=" text-lg text-gray-500 p-2 pb-3">
                            Visit our social pages for more info on our
                            development team
                        </p>
                        <div className=" flex justify-center items-center gap-5  py-3 px-2">
                            <Link href="https://github.com/PyCode-Camp">
                                <GithubIcon />
                            </Link>
                            <Link href="https://twitter.com/py_camp1">
                                <TwitterIcon />
                            </Link>
                            <Link href="https://www.linkedin.com/company/pycode-camp/">
                                <LinkedInIcon />
                            </Link>
                        </div>
                    </div>
                </div>
            </QuestionsModal>
            <ContributionModal
                show={openContributionModal}
                onClose={closeContributionModal}
            >
                <div className="p-6">
                    <div className=" flex flex-col items-center justify-center">
                        <div>
                            <h2 className=" text-2xl font-bold dark:text-gray-200 pb-2 text-center uppercase">
                                <span>&#128220; </span>Contribution
                            </h2>
                            <p className=" text-lg text-gray-500 p-2">
                                <span class="emoji">&#x1F4B0;</span> To sponser
                                or donate to the Pycode team{" "}
                            </p>
                            <p className="p-2 dark:text-gray-300">
                                <span class="emoji">&#x1F4F2;</span>Send to :{" "}
                                <span>0558218741</span>
                            </p>
                        </div>
                        <div className="py-2">
                            <h2 className="font-bold uppercase text-lg dark:text-gray-200 py-2">
                                <span>&#x1F468;&#x200D;&#x1F4BB; </span>
                                Technical Support
                            </h2>
                            <div className="px-2 mb-4">
                                <p className="dark:text-gray-400 mb-2">
                                    <span class="emoji">&#x1F9A0;</span>Found a
                                    bug ?
                                </p>
                                <p className=" dark:text-gray-400">
                                    <span>&#x1F680;</span>Want to contribute to
                                    adding a new feature ?
                                </p>
                            </div>
                            <div className=" flex justify-center items-center ">
                                <a
                                    href="mailto:lead@xolace.online?subject=Regarding%20your%20app"
                                    target={"_blank"}
                                >
                                    <FaGoogle
                                        size={30}
                                        className="text-red-500"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </ContributionModal>

            {/* about modal */}
            <AboutXolace show={openAboutModal} onClose={closeAboutModal}>
                <div className="p-6">
                    <h2 className=" text-2xl font-semibold capitalize text-white">
                        Xolace | Beta
                    </h2>
                    <div>
                        <p>Coming soon</p>
                    </div>
                </div>
            </AboutXolace>
        </AuthenticatedLayout>
    );
}
